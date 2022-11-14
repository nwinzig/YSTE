from flask import Blueprint, jsonify, session, request
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
    cart = Cart.query.filter(Cart.user_id == user_id).one()
    # new_cart = cart.to_dict()
    products = CartProduct.query.filter(cart.id == CartProduct.cart_id).all()
    newProducts = []
    newProducts.extend([i.to_dict() for i in products])
    return {'cart': newProducts}
