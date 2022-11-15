from flask import Blueprint, jsonify, session, request, redirect
from app.models import ProductReview, db
from app.forms import CreateReviewForm, EditReviewForm
from flask_login import current_user, login_user, logout_user, login_required

review_routes = Blueprint('review', __name__)

@review_routes.route('/<int:id>', methods=["PUT"])
# @login_required
def edit_review(id):
    form = EditReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        review = ProductReview.query.get(id)

        review.review = form.data['review']
        review.stars = form.data['stars']
        review.review_image = form.data['review_image']

        db.session.commit()
        return redirect(f'/api/products/{review.product_id}')
    return {'Error': 'bad request'}


@review_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_review(id):
    review = ProductReview.query.get(id)
    if review is not None:
        db.session.delete(review)
        db.session.commit()
        return "Successfully Deleted"
    return "Not working bruv"

@review_routes.route('/user-reviews', methods=['GET'])
@login_required
def get_user_reviews():
    user_id = current_user.id
    reviews = ProductReview.query.filter(ProductReview.user_id == user_id).all()
    my_reviews=[]
    my_reviews.extend([i.to_dict() for i in reviews])
    return {'reviews':my_reviews}
