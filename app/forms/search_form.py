from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, FloatField, SelectField, SubmitField
from wtforms.validators import DataRequired


class SearchForm(FlaskForm):
    search = StringField('Search', validators=[DataRequired()])
    submit = SubmitField('Submit')
