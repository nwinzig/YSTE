from app.models import db, Product, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_products():
    demo_product = Product(
        shop_id = 1, product_name="Model-S", description="great car not cheaply made I swear", price=5, category="Cars", stock=2000, image1='https://i.etsystatic.com/8955825/r/il/f3b5b6/2331496867/il_680x540.2331496867_fgw5.jpg'
    )
    marnie_product = Product(
        shop_id = 2, product_name="Grey Sweatshirt", description="great shirt not cheaply made I swear", price=15, category="Clothing", stock=3000, image1='https://i.etsystatic.com/8955825/r/il/f3b5b6/2331496867/il_680x540.2331496867_fgw5.jpg'
    )
    bobbie_product = Product(
        shop_id = 3, product_name="K68 Corsair Keyboard", description="great keyboard not cheaply made I swear", price=135, category="Electronics", stock=2, image1='https://i.etsystatic.com/8955825/r/il/f3b5b6/2331496867/il_680x540.2331496867_fgw5.jpg'
    )
    db.session.add(demo_product)
    db.session.add(marnie_product)
    db.session.add(bobbie_product)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
