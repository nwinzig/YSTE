from flask import Blueprint, jsonify, session, request
from app.models import Product, db

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
def singularProduct(id):
    """get one product, to be used for product detail page """

    product = Product.query.get(id)

    newProduct = product.to_dict()
    return {'Product': newProduct}
