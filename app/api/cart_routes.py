from flask import Blueprint, jsonify, session, request, redirect
from app.models import Cart, db, CartProduct
from flask_login import current_user, login_user, logout_user, login_required

# url_prefix='/api/cart'
cart_routes = Blueprint('cart', __name__)


# get current users cart
@cart_routes.route('/')
@login_required
def index():

    user_id = current_user.id

    cart = Cart.query.filter(Cart.user_id == user_id).first()
    products = CartProduct.query.filter(cart.id == CartProduct.cart_id).all()
    newProducts = []
    newProducts.extend([i.to_dict() for i in products])
    print('this is current users cart', newProducts)
    return {'cart': newProducts}

#delete from cart
@cart_routes.route('/cartProduct/<int:id>', methods=["DELETE"])
@login_required
def delete_from_cart(id):

    product_to_delete = CartProduct.query.get(id)

    if product_to_delete is not None:
        db.session.delete(product_to_delete)
        db.session.commit()
        return {'message': 'Successfully Deleted'}

    return 'Cart Product not found'
