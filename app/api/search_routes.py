from flask import Blueprint, jsonify, session, request
from app.models import db, Product
from app.forms import SearchForm

# url_prefix='/api/search'
search_routes = Blueprint('search', __name__)


@search_routes.route('/', methods=['GET', 'POST'])
def index():

    form = SearchForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit:
        if len(form.data['search']) < 3:
            return 'Please Provide more context'

        else:
            products = Product.query.filter(Product.product_name.like(f"%{form.data['search']}%")).all()
            searched_products = []
            searched_products.extend([i.to_dict() for i in products])
            return {'products': searched_products}

    return 'Bad search request'
