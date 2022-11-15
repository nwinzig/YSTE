from flask import Blueprint, jsonify, session, request, redirect
from app.models import Cart, db, CartProduct
from flask_login import current_user, login_user, logout_user, login_required

# url_prefix='/api/cart'
cart_routes = Blueprint('cart', __name__)


# get current users cart
@cart_routes.route('/')
# @login_required
def index():
    """ get current users cart """

    # user_id = current_user.id
    user_id = 1
    print('current user', current_user)
    print('test')
    # print('user id------',current_user)
    cart = Cart.query.filter(Cart.user_id == user_id).one()
    # new_cart = cart.to_dict()
    products = CartProduct.query.filter(cart.id == CartProduct.cart_id).all()
    newProducts = []
    newProducts.extend([i.to_dict() for i in products])
    return {'cart': newProducts}

#/api/cartproduct/id
#/api/cart/product/productid
# delete from cart
@cart_routes.route('/product/<int:id>', methods=['Delete'])
# @login_required
def delete_from_cart(id):
    # userId = current_user.id



    product_to_delete = CartProduct.query.get(4)
    db.session.delete(product_to_delete)
    db.session.commit()

    return redirect('/api/cart')
