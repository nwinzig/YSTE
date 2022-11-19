from flask.cli import AppGroup
from .users import seed_users, undo_users
from .products import seed_products, undo_products
from .shops import seed_shops, undo_shops
from .cart import seed_carts, undo_carts
from .cart_product import seed_cart_product, undo_cart_product
from .product_review import seed_product_review, undo_product_review
from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_users()
        undo_shops()
        undo_carts()
        undo_products()
        undo_product_review()
        undo_cart_product()
    seed_users()
    seed_shops()
    seed_carts()
    seed_products()
    seed_product_review()
    seed_cart_product()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_shops()
    undo_carts()
    undo_products()
    undo_product_review()
    undo_cart_product()
    # Add other undo functions here
