from flask import Blueprint, jsonify, session, request
from app.models import db

search_routes = Blueprint('search', __name__)
