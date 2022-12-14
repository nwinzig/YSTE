from flask import Blueprint, jsonify, session, request, redirect
from app.models import Product, ProductReview, db, Shop, Cart, CartProduct
from app.forms import CreateProductForm, EditProductForm, AddProductImageForm, CreateReviewForm
from flask_login import current_user, login_user, logout_user, login_required

import random


products_routes = Blueprint('product', __name__)

#get all products
@products_routes.route('/')
# @login_required
def index():
    """get all products, to be used on splash page """
    products = Product.query.all()

    newProducts = []
    newProducts.extend([i.to_dict() for i in products])


    return {'Products':newProducts}


#get spotlight products
@products_routes.route('/spotlight')
def findSpotlight():
    products = Product.query.all()
    newProducts = []
    newProducts.extend([i.to_dict() for i in products])
    # print('this should be  all products', newProducts)
    testNum = random.randrange(0, len(newProducts))
    # print('random number!!!!!!!', testNum)
    newSpotlight = []
    i = 1
    while i <= 8:
        randomNum = random.randrange(0, len(newProducts))
        newSpotlight.append(newProducts[randomNum])
        i += 1
    # print('looking for an array with 8 objects', newSpotlight, 'length', len(newSpotlight))
    return {'Products': newSpotlight}



#get one product
@products_routes.route('/<int:id>', methods=['GET'])
def singular_Product(id):
    """get one product, to be used for product detail page """

    product = Product.query.get(id)

    newProduct = product.to_dict()

    #to get shop name query shopId from product dict
    shop = Shop.query.get(product.shop_id)
    # print('should be the shop', shop)
    # print(shop.shop_name)
    return {'Product':newProduct}


#create a product
@products_routes.route('/createProduct', methods=['POST'])
@login_required
def create_Product():

    """ creates and adds a new product to the database """

    # shop_id = 1
    shop_id = current_user.id

    form = CreateProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        params = {
            'product_name': form.data['product_name'],
            'description': form.data['description'],
            'price': form.data['price'],
            'category': form.data['category'],
            'stock': form.data['stock'],
            'shop_id': shop_id,
            'image1': form.data['image1'],
            'image2': form.data['image2'],
            'image3': form.data['image3'],
            'image4': form.data['image4'],
        }
        print('params', params)
        newProduct = Product(**params)
        print('newproduct', newProduct)
        db.session.add(newProduct)
        db.session.commit()
        return newProduct.to_dict()
    return {'Error': 'bad request'}


#edit a product
@products_routes.route('/<int:id>', methods=['PUT'])
@login_required
def updateProduct(id):
    # product = Product.query.get(id)
    form = EditProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        product = Product.query.get(id)

        product.product_name = form.data['product_name']
        product.description = form.data['description']
        product.price = form.data['price']
        product.category = form.data['category']
        product.stock = form.data['stock']
        product.image1 = form.data['image1']
        product.image2 = form.data['image2']
        product.image3 = form.data['image3']
        product.image4 = form.data['image4']


        db.session.commit()
        return  product.to_dict()
    return {'Error': 'bad request'}


#delete a product
@products_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_product(id):
    product = Product.query.get(id)
    print('pyhton',product)
    if product is not None:
        db.session.delete(product)
        db.session.commit()
        return {'message': "Successfully Deleted"}
    return "Product not found"



#get reviews of product
@products_routes.route('/<int:id>/reviews', methods=["GET"])
def get_reviews(id):
    reviews = ProductReview.query.filter(ProductReview.product_id==id).all()

    # print('reviews--------', reviews)
    new_reviews = []
    new_reviews.extend([i.to_dict() for i in reviews])
    # print("my reviews", new_reviews)
    return {"Reviews": new_reviews}



# create reviews for product
@products_routes.route('/<int:id>/reviews', methods=["POST"])
@login_required
def create_reviews(id):
    form = CreateReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        params = {
            'review': form.data['review'],
            'stars': form.data['stars'],
            'review_image': form.data['review_image'],
            'product_id': id,
            'user_id': current_user.id,
        }

        new_review = ProductReview(**params)
        # print('$$$$$$$$$$$$$$$$ BACKEND NEW REVIEW $$$$$$$$$$', new_review)
        db.session.add(new_review)
        db.session.commit()
        # return redirect(f'/api/products/{id}')
        return {'review': new_review.to_dict()}
    return "Not working"





# add to cart
@products_routes.route('/<int:id>/cart/cartProduct',  methods=['GET', 'POST'])
@login_required
def add_cart(id):

    user_id = current_user.id
    current_product = Product.query.get(int(id))
    current_cart = Cart.query.filter(user_id == Cart.user_id).first()

    new_cart_product = {
        'cart_id': current_cart.id,
        'product_id': current_product.id

    }
    cart_product = CartProduct(**new_cart_product)
    db.session.add(cart_product)
    db.session.commit()

    return {cart_product.to_dict()}

#filter products by category

@products_routes.route('/categories/<category>', methods=["GET"])
def load_products_by_category(category):
    print('########## Category Name passed to the backend', category)
    if category:
        products = Product.query.filter(Product.category == category).all()
        cat_products = []
        cat_products.extend([i.to_dict() for i in products])
        return {"products_by_category": cat_products}
    return "Base exceptions"


# get all products by User

@products_routes.route('/user-products')
@login_required
def user_products():
    shop = Shop.query.filter(Shop.user_id == current_user.id).first()
    print('this is shop-=============', shop)
    print('this is shopID-=============', shop.id)
    products = Product.query.filter(Product.shop_id == shop.id).all()
    owner_products = []
    owner_products.extend([i.to_dict() for i in products])
    print('owner_prod=================', owner_products)
    return {'products': owner_products}


#get product images
@products_routes.route('/product-images')
@login_required
def product_images(id):
    product_image = ProductImage.query.filter(id == ProductImage.product_id).one()
    newImage = product_image.to_dict()
    return {'product_image': newImage}


#add product images
@products_routes.route('/product-images/<int:id>', methods=['POST'])
@login_required
def add_images(id):
    newImages = AddProductImageForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        params = {
            'product_image': form.data['product_image'],
            'product_id': id
        }
        new_image = ProductImage(**params)
        db.session.add(new_image)
        db.session.commit()
        return redirect(f'/api/products/{id}')
    return "Not working"
