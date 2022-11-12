from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, FloatField, SelectField
from wtforms.validators import DataRequired()

class CreateProductForm(FlaskForm):
    product_name = StringField('Name', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])
    price = IntegerField('Price', validators=[DataRequired()])
    category = SelectField('Category', choices=['Cars', 'Clothing', 'Electronics', 'Home Goods', 'miscellaneous'], validators=[DataRequired()])
    stock = IntegerField('Stock', validators=[DataRequired()])

class EditProductForm(FlaskForm):
    product_name = StringField('Name', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])
    price = IntegerField('Price', validators=[DataRequired()])
    category = SelectField('Category', choices=['Cars', 'Clothing', 'Electronics', 'Home Goods', 'miscellaneous'], validators=[DataRequired()])
    stock = IntegerField('Stock', validators=[DataRequired()])



class AddProductImageForm(FlaskForm):
    product_image = StringField('Image Url')
