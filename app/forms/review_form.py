from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, FloatField, SelectField
from wtforms.validators import DataRequired()

class CreateReviewForm(FlaskForm):
    review = StringField('Review', validators=[DataRequired()])
    stars = IntegerField('Stars', validators=[DataRequired()])
    review_image = StringField('Image Url')


class EditReviewForm(FlaskForm):
    review = StringField('Review', validators=[DataRequired()])
    stars = IntegerField('Stars', validators=DataRequired())
    review_image = StringField('Image Url')
