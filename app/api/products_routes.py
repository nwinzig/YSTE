from flask import Blueprint, jsonify, session, request
from app.models import Product, db

products_routes = Blueprint('product', __name__)


@products_routes.route('/')
def index():
    products = Product.query.all()
    print('before dict',products)
    newProducts = []
    newProducts.extend([i.to_dict() for i in products])

    print('after dict', newProducts)
    return {'Products':newProducts}
