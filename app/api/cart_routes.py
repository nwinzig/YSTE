from flask import Blueprint, jsonify, session, request, redirect
from app.models import Cart, db, CartProduct
from flask_login import current_user, login_user, logout_user, login_required

# url_prefix='/api/cart'
cart_routes = Blueprint('cart', __name__)


# get current users cart
@cart_routes.route('/')
@login_required
def index():
    """ get current users cart """
    # user_id = 1
    user_id = current_user.id
    print('current user', current_user.id)
    print('user=======', user_id)
    print('user id------',current_user)
    cart = Cart.query.filter(Cart.user_id == current_user.id).one()
    products = CartProduct.query.filter(cart.id == CartProduct.cart_id).all()
    newProducts = []
    newProducts.extend([i.to_dict() for i in products])
    return {'cart': newProducts}

#/api/cartproduct/id
#/api/cart/product/productid
# delete from cart
@cart_routes.route('/product/<int:id>', methods=['DELETE'])
@login_required
def delete_from_cart(id):
    # userId = current_user.id

    # get user id, get cart based on user id,
    # find prod to delete on condition of
    # matching cart id and product id

    print('checking backend', id)
    product_to_delete = CartProduct.query.filter(id == CartProduct.product_id).one()
    print('product to delete---------', product_to_delete)
    db.session.delete(product_to_delete)
    db.session.commit()

    return redirect('/api/cart')
