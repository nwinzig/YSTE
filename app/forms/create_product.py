from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, FloatField, SelectField, DecimalField
from wtforms.validators import DataRequired

class CreateProductForm(FlaskForm):
    product_name = StringField('Name', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])
    price = DecimalField('Price', validators=[DataRequired()])
    category = SelectField('Category', choices=['Cars', 'Clothing', 'Electronics', 'Home Goods', 'miscellaneous'], validators=[DataRequired()])
    stock = IntegerField('Stock', validators=[DataRequired()])
    image1 = StringField('Image Url', validators=[DataRequired()])
    image2 = StringField('Image Url')
    image3 = StringField('Image Url')
    image4 = StringField('Image Url')

class EditProductForm(FlaskForm):
    product_name = StringField('Name', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])
    price = DecimalField('Price', validators=[DataRequired()])
    category = SelectField('Category', choices=['Cars', 'Clothing', 'Electronics', 'Home Goods', 'miscellaneous'], validators=[DataRequired()])
    stock = IntegerField('Stock', validators=[DataRequired()])
    image1 = StringField('Image Url', validators=[DataRequired()])
    image2 = StringField('Image Url')
    image3 = StringField('Image Url')
    image4 = StringField('Image Url')



class AddProductImageForm(FlaskForm):
    product_image = StringField('Image Url')
