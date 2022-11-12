from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, FloatField, SelectField
from wtforms.validators import DataRequired


class CreateShopForm(FlaskForm):
    shop_name = StringField('Name', validators=[DataRequired()])
    shop_image = StringField('Image Url')
