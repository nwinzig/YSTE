from app.models import db, ProductReview, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_product_review():
    demo_product_review = ProductReview(
        user_id=1, product_id=2, review="not a bad product", stars=4
    )
    marnie_product_review = ProductReview(
        user_id=2,  product_id=3, review="great product", stars=5
    )
    bobbie_product_review = ProductReview(
        user_id=3,  product_id=1, review="amazing product", stars=3
    )
    db.session.add(demo_product_review)
    db.session.add(marnie_product_review)
    db.session.add(bobbie_product_review)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_product_review():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
