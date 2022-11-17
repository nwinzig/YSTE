from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', first_name="Elon", last_name="Musk", email='demo@aa.io', password='password')
    marnie = User(
        username='Marnie', first_name="Jeff", last_name="Bezos", email='marnie@aa.io', password='password')
    bobbie = User(
        username='Bobbie',first_name="Bill", last_name="Gates", email='bobbie@aa.io', password='password')
    mathew = User(
        username='Mathew',first_name="Mathew", last_name="Gmoney", email='mathew@aa.io', password='password')
    remington = User(
        username='Remington',first_name="Remington", last_name="Barrett", email='remington@aa.io', password='password')
    kratos = User(
        username='God_of_war',first_name="Kratos", last_name="God", email='god_of_war@aa.io', password='password')
    naruto = User(
        username='Jinchuriki',first_name="Naruto", last_name="Uzumaki", email='jinchuriki@aa.io', password='password')
    kakashi = User(
        username='Copy_ninja',first_name="Kakashi", last_name="Hatake", email='copy_ninja@aa.io', password='password')
    peter = User(
        username='Family_guy',first_name="Peter", last_name="Griffin", email='family_guy@aa.io', password='password')
    batman = User(
        username='Dark_knight',first_name="Bruce", last_name="Wayne", email='dark_knight@aa.io', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(mathew)
    db.session.add(kratos)
    db.session.add(naruto)
    db.session.add(kakashi)
    db.session.add(peter)
    db.session.add(batman)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
