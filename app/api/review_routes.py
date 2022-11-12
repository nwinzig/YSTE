from flask import Blueprint, jsonify, session, request
from app.models import ProductReview, db

review_routes = Blueprint('review', __name__)
