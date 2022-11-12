from app.models import db, Shop, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_shops():
    demo_shop = Shop(
        user_id = 1, shop_name="Tesla",  shop_image=""
    )
    marnie_shop = Shop(
        user_id = 2, shop_name="Amazon", shop_image=""
    )
    bobbie_shop = Shop(
        user_id = 3, shop_name="Microsoft", shop_image=""
    )
    db.session.add(demo_shop)
    db.session.add(marnie_shop)
    db.session.add(bobbie_shop)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_shops():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
