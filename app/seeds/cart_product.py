from app.models import db, CartProduct, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_cart_product():
    demo_cart_product = CartProduct(
        cart_id = 1, product_id=2
    )
    marnie_cart_product = CartProduct(
        cart_id = 2,  product_id=3
    )
    bobbie_cart_product = CartProduct(
        cart_id = 3,  product_id=1
    )

    db.session.add(demo_cart_product)
    db.session.add(marnie_cart_product)
    db.session.add(bobbie_cart_product)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_cart_product():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
