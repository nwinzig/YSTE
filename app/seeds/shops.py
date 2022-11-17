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
    mathew_shop = Shop(
        user_id = 4, shop_name="Matts Go To", shop_image=""
    )
    remington_shop = Shop(
        user_id = 5, shop_name="Remies", shop_image=""
    )
    kratos_shop = Shop(
        user_id = 6, shop_name="God of Products", shop_image=""
    )
    naruto_shop = Shop(
        user_id = 7, shop_name="Leaf Village Shop", shop_image=""
    )
    kakashi_shop = Shop(
        user_id = 8, shop_name="Kakashi's Book Store", shop_image=""
    )
    peter_shop = Shop(
        user_id = 9, shop_name="Family Merch", shop_image=""
    )
    batman_shop = Shop(
        user_id = 10, shop_name="Alfreds", shop_image=""
    )

    db.session.add(demo_shop)
    db.session.add(marnie_shop)
    db.session.add(bobbie_shop)
    db.session.add(mathew_shop)
    db.session.add(remington_shop)
    db.session.add(kratos_shop)
    db.session.add(naruto_shop)
    db.session.add(kakashi_shop)
    db.session.add(peter_shop)
    db.session.add(batman_shop)
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
