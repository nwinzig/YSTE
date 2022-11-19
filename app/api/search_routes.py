from flask import Blueprint, jsonify, session, request
from app.models import db, Product
from app.forms import SearchForm
import json
# from functools import itemgetter
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
            print("this is our form ============", form.data['search'])
            filtered = form.data['search']
            print('filtered items============', filtered)
            filtered = filtered.lower()
            print('filterlower==========', filtered)
            products = Product.query.all()
            print('query with products============', products)
            new_prod = []
            for x in products:
                print('prod================', filtered in x.product_name.lower())
                if filtered in x.product_name.lower():
                    new_prod.append(
                        {
            'id':x.id,
            'shop_id':x.shop_id,
            'product_name':x.product_name,
            'description':x.description,
            'price':x.price,
            'category':x.category,
            'stock':x.stock,
            'image1':x.image1,
            'image2':x.image2,
            'image3':x.image3,
            'image4':x.image4,
        }

                    )
            print('new_prod================', new_prod)
            return  {"products": new_prod}
            # filter_and_map = [x.product_name.lower() for x in list(products) if filtered in x.product_name.lower() == True]
            # print('filter_and_map============', filter_and_map)
            # lower_products = map(lambda x: x.product_name.lower(), products)
            # print('lower_products==========', list(lower_products))
            # filter_products = filter(lambda x: filtered in x, list(lower_products))
            # print('filter_products', list(filter_products))
            # for i in list(lower_products):
            #     if filtered in i:
            #         filter_products = filtered
            #         list(filter_products)
            #     print('filteredporducts==================', filter_products)
            # lower_products = list(lower_products)
            # filter_products = []
            # filter_products.extend([i for i in lower_products if filtered in lower_products])



            # name = map(itemgetter("product_name"), products)
            # print('name getter', name)
            # new_products = []
            # new_products.extend([i.product_name.lower() for i in products ])
            # new_products.to_dict()
            # new_products.filter(new_products.product_name.like(f"%{filtered}%"))
            # print("testing search ===============", new_products )
            # return {'products': new_products}
            # return 'Success'
    return 'Bad search request'


            # products = Product.query.filter(Product.product_name.like(f"%{form.data['search']}%")).all()
