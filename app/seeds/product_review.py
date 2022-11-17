from app.models import db, ProductReview, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_product_review():
    demo_product_review = ProductReview(
        user_id=1, product_id=2, review="Love this! Well made, sturdy, and very comfortable.I love it!", stars=4
    )
    marnie_product_review = ProductReview(
        user_id=2,  product_id=3, review="love it, a great upgrade from the original. I've had mine for a couple of years", stars=5
    )
    bobbie_product_review = ProductReview(
        user_id=3,  product_id=4, review="Missing information on how to use it, but it is a great product for the price!", stars=4
    )
    mathew_product_review = ProductReview(
        user_id=4,  product_id=5, review="They are the perfect touch for me and the only thing I wish they had a little more space.", stars=5
    )
    remington_product_review = ProductReview(
        user_id=5,  product_id=6, review=" I would highly recommend this item.", stars=4
    )
    kratos_product_review = ProductReview(
        user_id=6,  product_id=7, review="As advertised. Easy to use. Love the colors. Also, the dimensions are great", stars=5
    )
    naruto_product_review = ProductReview(
        user_id=7,  product_id=8, review="Not what I am accustomed to. The only reason I gave it 4 stars is because I just can", stars=4
    )
    kakashi_product_review = ProductReview(
        user_id=8,  product_id=9, review="So good we bought the second set and they look just like the first one.", stars=5
    )
    peter_product_review = ProductReview(
        user_id=9,  product_id=10, review="Such a great purchase can't beat it for the price", stars=4
    )
    batman_product_review = ProductReview(
        user_id=10,  product_id=1, review="What can you say, cheap and it works as intended.", stars=5
    )
    demo2_product_review = ProductReview(
        user_id=1,  product_id=3, review="Does the job, but nothing special.", stars=3
    )
    marnie2_product_review = ProductReview(
        user_id=2,  product_id=4, review="Item as described and arrived in a timely manner.", stars=5
    )
    bobbie2_product_review = ProductReview(
        user_id=3,  product_id=5, review="Bought 2 and sent one back because it didn't work", stars=2
    )
    mathew2_product_review = ProductReview(
        user_id=4,  product_id=6, review="Perfect. Love everything about it", stars=5
    )
    remington2_product_review = ProductReview(
        user_id=5,  product_id=7, review="Nice and contemporary. Great for the price.", stars=4
    )
    kratos2_product_review = ProductReview(
        user_id=6,  product_id=8, review="Bought this as a Father's Day gift and it's just what I needed!", stars=5
    )
    naruto2_product_review = ProductReview(
        user_id=7,  product_id=9, review="This is a beautifully made and sturdy,", stars=5
    )
    kakashi2_product_review = ProductReview(
        user_id=8,  product_id=10, review="Good quality and good price. I love the look.", stars=4
    )
    peter2_product_review = ProductReview(
        user_id=9,  product_id=1, review="Happy with my purchase.", stars=5
    )
    batman2_product_review = ProductReview(
        user_id=10,  product_id=2, review="Just what I expected!!!", stars=4
    )
    demo3_product_review = ProductReview(
        user_id=1,  product_id=4, review="Terrible, complete waste of money. Not a whole lot to say.", stars=1
    )
    marnie3_product_review = ProductReview(
        user_id=2,  product_id=5, review="Very quick shipping and excellent customer service. Great value for the money!", stars=4
    )
    bobbie3_product_review = ProductReview(
        user_id=3,  product_id=6, review="I gave this as a gift and my daughter loves hers.", stars=5
    )
    mathew3_product_review = ProductReview(
        user_id=4,  product_id=7, review="These are great!", stars=4
    )
    remington3_product_review = ProductReview(
        user_id=5,  product_id=8, review="Exactly as pictured! Sturdy and perfect.", stars=5
    )
    kratos3_product_review = ProductReview(
        user_id=6,  product_id=9, review="Great product. Arrived on time.", stars=4
    )
    naruto3_product_review = ProductReview(
        user_id=7,  product_id=10, review="Somewhat hard to clean, not as convenient as I had hoped", stars=2
    )
    kakashi3_product_review = ProductReview(
        user_id=8,  product_id=1, review="These were great. I just had to order a longer size.", stars=4
    )
    peter3_product_review = ProductReview(
        user_id=9,  product_id=2, review="Love this item. I smile every time I I use it", stars=5
    )
    batman3_product_review = ProductReview(
        user_id=10,  product_id=3, review="Do not waste your money. It broke after one month.", stars=2
    )
    demo4_product_review = ProductReview(
        user_id=1,  product_id=5, review="This is perfect. I wish I would have ordered it earlier.", stars=5
    )
    marnie4_product_review = ProductReview(
        user_id=2,  product_id=6, review="Excellent packaging, Fast shipping , super quality for the right price.", stars=4
    )
    bobbie4_product_review = ProductReview(
        user_id=3,  product_id=7, review="Just what the bride wanted came out nice", stars=5
    )
    mathew4_product_review = ProductReview(
        user_id=4,  product_id=8, review="Looks high end and feels nice.", stars=4
    )
    remington4_product_review = ProductReview(
        user_id=5,  product_id=9, review="It works really well it looks great and the materials are good.", stars=5
    )
    kratos4_product_review = ProductReview(
        user_id=6,  product_id=10, review="It's nice, and the quality is good.", stars=4
    )
    naruto4_product_review = ProductReview(
        user_id=7,  product_id=1, review="Easy to assemble. Arrived on time and as described.", stars=5
    )
    kakashi4_product_review = ProductReview(
        user_id=8,  product_id=2, review="Great for the price! I have had this for a few months now and have used it often", stars=4
    )
    peter4_product_review = ProductReview(
        user_id=9,  product_id=3, review="Was a gift, so don't know how it is. It is beautiful.", stars=5
    )
    batman4_product_review = ProductReview(
        user_id=10,  product_id=4, review="This product actually works. Tried before and after use, definitely a difference.", stars=4
    )
    demo5_product_review = ProductReview(
        user_id=1,  product_id=6, review="I can't believe the low price for such quality! Love it!", stars=5
    )
    marnie5_product_review = ProductReview(
        user_id=2,  product_id=7, review="This is a reorder. Rated before when originally purchased.", stars=5
    )
    bobbie5_product_review = ProductReview(
        user_id=3,  product_id=8, review="Exactly what I was looking for.", stars=4
    )
    mathew5_product_review = ProductReview(
        user_id=4,  product_id=9, review="Wonderful product. Shipped promptly. Ordered about ten", stars=5
    )
    remington5_product_review = ProductReview(
        user_id=5,  product_id=10, review="This one came to me broken!! The handle was a broken piece!", stars=2
    )
    kratos5_product_review = ProductReview(
        user_id=6,  product_id=1, review="Looks fantastic in my guest room.", stars=5
    )
    naruto5_product_review = ProductReview(
        user_id=7,  product_id=2, review="Excellent product, my second purchase.", stars=4
    )
    kakashi5_product_review = ProductReview(
        user_id=8,  product_id=3, review="This are exactly what I needed.", stars=5
    )
    peter5_product_review = ProductReview(
        user_id=9,  product_id=4, review="Love the color. Love that it is lightweight.", stars=4
    )
    batman5_product_review = ProductReview(
        user_id=10,  product_id=5, review="You rarely have to use the AC if you live somewhere with no humidity.", stars=5
    )


    db.session.add(demo_product_review)
    db.session.add(marnie_product_review)
    db.session.add(bobbie_product_review)
    db.session.add(mathew_product_review)
    db.session.add(remington_product_review)
    db.session.add(kratos_product_review)
    db.session.add(naruto_product_review)
    db.session.add(kakashi_product_review)
    db.session.add(peter_product_review)
    db.session.add(batman_product_review)
    db.session.add(demo2_product_review)
    db.session.add(marnie2_product_review)
    db.session.add(bobbie2_product_review)
    db.session.add(mathew2_product_review)
    db.session.add(remington2_product_review)
    db.session.add(kratos2_product_review)
    db.session.add(naruto2_product_review)
    db.session.add(kakashi2_product_review)
    db.session.add(peter2_product_review)
    db.session.add(batman2_product_review)
    db.session.add(demo3_product_review)
    db.session.add(marnie3_product_review)
    db.session.add(bobbie3_product_review)
    db.session.add(mathew3_product_review)
    db.session.add(remington3_product_review)
    db.session.add(kratos3_product_review)
    db.session.add(naruto3_product_review)
    db.session.add(kakashi3_product_review)
    db.session.add(peter3_product_review)
    db.session.add(batman3_product_review)
    db.session.add(demo4_product_review)
    db.session.add(marnie4_product_review)
    db.session.add(bobbie4_product_review)
    db.session.add(mathew4_product_review)
    db.session.add(remington4_product_review)
    db.session.add(kratos4_product_review)
    db.session.add(naruto4_product_review)
    db.session.add(kakashi4_product_review)
    db.session.add(peter4_product_review)
    db.session.add(batman4_product_review)
    db.session.add(demo5_product_review)
    db.session.add(marnie5_product_review)
    db.session.add(bobbie5_product_review)
    db.session.add(mathew5_product_review)
    db.session.add(remington5_product_review)
    db.session.add(kratos5_product_review)
    db.session.add(naruto5_product_review)
    db.session.add(kakashi5_product_review)
    db.session.add(peter5_product_review)
    db.session.add(batman5_product_review)
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
