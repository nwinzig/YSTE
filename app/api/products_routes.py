from flask import Blueprint, jsonify, session, request, redirect
from app.models import Product, db, Shop
from app.forms import CreateProductForm, EditProductForm, AddProductImageForm
from flask_login import current_user, login_user, logout_user, login_required

products_routes = Blueprint('product', __name__)

#get all products
@products_routes.route('/')
def index():
    """get all products, to be used on splash page """
    products = Product.query.all()

    newProducts = []
    newProducts.extend([i.to_dict() for i in products])


    return {'Products':newProducts}


#get one product
@products_routes.route('/<int:id>')
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
            'shop_id': shop_id
        }
        print('params', params)
        newProduct = Product(**params)
        print('newproduct', newProduct)
        db.session.add(newProduct)
        db.session.commit()
        return redirect('/api/products/')
    return {'Error': 'bad request'}
