from app.models import db, Product, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_products():
    demo_product = Product(
        shop_id = 1, product_name="Model-S", description="Cant go wrong with a Tesla!", price=25000, category="Cars", stock=2000, image1='https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F04%2Fcompetition-carbon-tesla-model-s-plaid-release-info-001.jpg?q=75&w=800&cbr=1&fit=max'
    )
    marnie_product = Product(
        shop_id = 2, product_name="Grey Sweatshirt", description="Solid grey sweatshirt for those grey sweatshirt days", price=15, category="Clothing", stock=3000, image1='https://i.etsystatic.com/8955825/r/il/f3b5b6/2331496867/il_680x540.2331496867_fgw5.jpg'
    )
    bobbie_product = Product(
        shop_id = 3, product_name="K68 Corsair Keyboard", description="Another fantastic Corsair keyboard", price=135, category="Electronics", stock=2, image1='https://m.media-amazon.com/images/I/812tA63tajL.jpg'
    )
    mathew_product = Product(
        shop_id = 4, product_name="Bunny Astronaut Tray", description="Decorative tray for keys, watch, wallet or Jewelry, Modern Design Art Figure", price=160, category="miscellaneous", stock=2000, image1='https://i.etsystatic.com/15923966/r/il/b4a6cb/3195064568/il_794xN.3195064568_46ng.jpg'
    )
    remington_product = Product(
        shop_id = 5, product_name="Black T-Shirt", description="What a perfect Gift!!", price=15, category="Clothing", stock=3000, image1='https://i.etsystatic.com/8512710/r/il/bab732/4337768410/il_794xN.4337768410_34dq.jpg'
    )
    kratos_product = Product(
        shop_id = 6, product_name="God of War Controller Stand", description="God of War Kratos Controller/Phone Stand,High Quality Colored Resin Statue,Video Game Gift", price=85, category="Home Goods", stock=2, image1='https://i.etsystatic.com/30410894/r/il/87f303/4220416502/il_794xN.4220416502_fgia.jpg'
    )
    naruto_product = Product(
        shop_id = 7, product_name="Cloud Ugly Christmas Sweater", description="KEY FEATURES: for casual, travel, home, date, party, work, shopping.", price=54, category="Clothing", stock=2000, image1='https://i.etsystatic.com/8829146/r/il/5681cc/4337003652/il_794xN.4337003652_f5z8.jpg'
    )
    kakashi_product = Product(
        shop_id = 8, product_name="International Snack Box", description="The Best International Snack box with a big varieties of snacks from Japan, Korea, Philippine, Thailand and other parts", price=10, category="Home Goods", stock=3000, image1='https://i.etsystatic.com/35575805/r/il/c691a7/3961122076/il_794xN.3961122076_if6f.jpg'
    )
    peter_product = Product(
        shop_id = 9, product_name="Chicken Nugget Pet", description="In an effort to lower my environmental impact all packaging is either recycled and/or recyclable products.", price=13, category="miscellaneous", stock=2, image1='https://i.etsystatic.com/6685126/r/il/4a03ce/4181859796/il_794xN.4181859796_8z0j.jpg'
    )
    batman_product = Product(
        shop_id = 10, product_name="Batman Hydro Flask", description="Batman Gotham City Starbucks 20oz Hydro Flask", price=25, category="Home Goods", stock=2000, image1='https://i.etsystatic.com/34065787/r/il/75061d/4155646208/il_794xN.4155646208_is0g.jpg'
    )
    demo2_product = Product(
        shop_id = 1, product_name="Lancia Delta HF Integrale", description="The Delta HF Integrale dominated the Group A era of the World Rally Championship and is considered one of the greatest rally vehicles ever.", price=80000, category="Cars", stock=2, image1='https://cdn.carhp.com/images/content/46fb57fe187e989859aec2b69e311b21.webp?mode=crop&overlay=https://cdn.carhp.com/images/carhp_logo_white.png&overlay_width_pct=0.055555555555556&overlay_top=10&overlay_left=10'
    )
    marnie2_product = Product(
        shop_id = 2, product_name="Oak Leaf Crest", description="An oversized T-shirt containing organic cotton, embroidered with the oak leaf crest and logo, a reconstructed version of our archive emblem.", price=680, category="Clothing", stock=3000, image1='https://assets.burberry.com/is/image/Burberryltd/8AB43595-4D43-401B-9CDE-5EA54C3987F5?$BBY_V2_ML_1x1$&wid=2000&hei=2000'
    )
    bobbie2_product = Product(
        shop_id = 3, product_name="The Kajal", description="This is a hotswap keyboard with a detached arrow cluster, a prominent volume knob, and an RGB underglow ring", price=235, category="Electronics", stock=2, image1='https://media.cybernews.com/2021/03/The-Cajal-1024x576.jpeg'
    )
    mathew2_product = Product(
        shop_id = 4, product_name="Astronaut LED Neon Sign", description="Handcrafted Neon Sign Astronaut ", price=213, category="miscellaneous", stock=2000, image1='https://i.etsystatic.com/31926729/r/il/bdc6b2/3477386409/il_794xN.3477386409_kdf6.jpg'
    )
    remington2_product = Product(
        shop_id = 5, product_name="Ugly Christmas Sweater", description="Stay Lit this Holiday season with this ugly Christmas sweater with a retro 8-bit pixel christmas tree design.", price=35, category="Clothing", stock=3000, image1='https://i.etsystatic.com/5172478/r/il/8e3ff5/2078994738/il_794xN.2078994738_1rmf.jpg'
    )
    kratos2_product = Product(
        shop_id = 6, product_name="God of War Tshirt", description="High quality print onto a high quality t shirt", price=10, category="Clothing", stock=2, image1='https://i.etsystatic.com/19262868/r/il/5f2245/2121886921/il_794xN.2121886921_4pcz.jpg'
    )
    naruto2_product = Product(
        shop_id = 7, product_name="Naruto Hydro Flask", description="This anime inspired 20oz skinny tumbler makes the perfect any time gift for the anime lover in your life", price=24, category="Home Goods", stock=2000, image1='https://i.etsystatic.com/36399039/r/il/85b654/4345395903/il_794xN.4345395903_lrfw.jpg'
    )
    kakashi2_product = Product(
        shop_id = 8, product_name="Handmade Metal Necklace", description="We have made this product with love just for you. Please contact us for any information regarding this product.", price=15, category="miscellaneous", stock=3000, image1='https://i.etsystatic.com/34668082/r/il/16e99f/4105425939/il_794xN.4105425939_dxa0.jpg'
    )
    peter2_product = Product(
        shop_id = 9, product_name="Stewie Mug", description="great keyboard not cheaply made I swear", price=135, category="Home Goods", stock=2, image1='https://i.etsystatic.com/16443914/r/il/bd85de/3748132809/il_794xN.3748132809_2lae.jpg'
    )
    batman2_product = Product(
        shop_id = 10, product_name="Batman Poster", description="Our custom canvas and poster will make your home become more beautiful.", price=35, category="Home Goods", stock=2000, image1='https://i.etsystatic.com/17711328/r/il/12cc1b/3855451273/il_794xN.3855451273_bupo.jpg'
    )
    demo3_product = Product(
        shop_id = 1, product_name="McLaren 675LT", description="The LT stands for Long Tail, and it is a tribute to the endurance racing version of the 1997 McLaren F1.", price=350000, category="Cars", stock=2, image1='https://cdn1.mecum.com/auctions/fl0122/fl0122-487747/images/-1-1631626519941@2x.jpg?1641846829000'
    )
    marnie3_product = Product(
        shop_id = 2, product_name="Inflatable Dino Suit", description="Become a dinosaur and scare your dogs!", price=25, category="Clothing", stock=350, image1='https://m.media-amazon.com/images/I/91w-z3hEn9L._AC_UY1000_.jpg'
    )
    bobbie3_product = Product(
        shop_id = 3, product_name="Milk and Honey", description="Great 60 percent keyboard made with panda switches", price=335, category="Electronics", stock=2, image1='https://media.cybernews.com/2021/03/Milk-and-Honey-1024x576.jpg'
    )
    mathew3_product = Product(
        shop_id = 4, product_name="Planet LED Neon Sign", description="UFO Neon Sign", price=125, category="miscellaneous", stock=2000, image1='https://i.etsystatic.com/23379744/r/il/1e8189/4196394592/il_794xN.4196394592_9fk5.jpg'
    )
    remington3_product = Product(
        shop_id = 5, product_name="Funcle", description="Are you a funny uncle and like to joke around with your nephews? This is the perfect shirt for you to get some laughs at a family dinner.", price=19, category="Clothing", stock=3000, image1='https://i.etsystatic.com/15849759/r/il/45ab7e/1346270632/il_794xN.1346270632_6p3o.jpg'
    )
    kratos3_product = Product(
        shop_id = 6, product_name="Kratos Cat Shirt ", description="Cat Of War Shirt, God Of Cat Shirt, Cat Lover Shirt, God Of War Ragnarok Shirt", price=12, category="Clothing", stock=2, image1="https://i.etsystatic.com/37567719/r/il/eb672d/4291160294/il_794xN.4291160294_frdf.jpg"
    )
    naruto3_product = Product(
        shop_id = 7, product_name="Japanese Collectible Kunai", description="9 1/2 inch Metal Steel Japanese Kunai Throwing Knife Heavy Duty for Ninja Cosplay Costume", price=19, category="miscellaneous", stock=2000, image1='https://i.etsystatic.com/26344787/r/il/7b6051/3032304309/il_794xN.3032304309_dfbn.jpg'
    )
    kakashi3_product = Product(
        shop_id = 8, product_name="Cloud Hoodie", description="Stylish Anime Cloud Hoodie", price=31, category="Clothing", stock=3000, image1='https://i.etsystatic.com/34209911/r/il/442ce4/3977000908/il_794xN.3977000908_s65a.jpg'
    )
    peter3_product = Product(
        shop_id = 9, product_name="Scooby Sweater", description="great keyboard not cheaply made I swear", price=15, category="Clothing", stock=2, image1='https://i.etsystatic.com/31924463/r/il/4efb31/3632533465/il_794xN.3632533465_5x1k.jpg'
    )
    batman3_product = Product(
        shop_id = 10, product_name="Batman Christmas Shirt", description="great car not cheaply made I swear", price=9, category="Clothing", stock=2000, image1='https://i.etsystatic.com/30777030/r/il/465811/4349208247/il_794xN.4349208247_fd5s.jpg'
    )
    demo4_product = Product(
        shop_id = 1, product_name="Lucid Air", description="With no space taken up by a gasoline engine, the Air has a large cabin area with sample storage space in the trunk as well as under the hood.", price=120000, category="Cars", stock=4, image1='https://res.cloudinary.com/driveau/image/upload/v1616414707/cms/uploads/kkWk83fMTAKcBTKZv4e9.jpg'
    )
    marnie4_product = Product(
        shop_id = 2, product_name="Padded Bomber Jacket", description="Loewe padded bomber jacket featuring lambskin leather and an oversized puffer styling", price=7500, category="Clothing", stock=100, image1='https://media.bergdorfgoodman.com/f_auto,q_auto:good,ar_5:7,c_fill,dpr_1.0,w_720/01/bg_4380781_100324_m'
    )
    bobbie4_product = Product(
        shop_id = 3, product_name="Nemui", description="This keyboard is CAD designed and made with tactile switches", price=135, category="Electronics", stock=2, image1='https://media.cybernews.com/2021/03/Nemui-1024x576.jpg'
    )
    mathew4_product = Product(
        shop_id = 4, product_name="Glass Fireplace", description="UPDATE: Our Tabletop Fireplace design has been adapted to a much thicker wood.", price=17, category="miscellaneous", stock=2000, image1='https://i.etsystatic.com/9099792/r/il/257faa/612829473/il_794xN.612829473_9s7a.jpg'
    )
    remington4_product = Product(
        shop_id = 5, product_name="Disc Golf Tshirt", description="I love my wife, but you really do have to read between the lines, Great gift for the disc golf player in your life!", price=15, category="Clothing", stock=3000, image1='https://i.etsystatic.com/6378568/r/il/75b992/661272339/il_794xN.661272339_bq5y.jpg'
    )
    kratos4_product = Product(
        shop_id = 6, product_name="God of War Poster", description="Quality print of a hand drawn digital painting of Kratos from God of War!", price=55, category="Home Goods", stock=2, image1='https://i.etsystatic.com/16005953/r/il/88b8e6/4377982441/il_794xN.4377982441_ag0x.jpg'
    )
    naruto4_product = Product(
        shop_id = 7, product_name="Anime LED Lamp", description="We can customize your design or order what we have now. A creative gift idea!", price=8, category="Home Goods", stock=2000, image1='https://i.etsystatic.com/14947562/r/il/72da2f/3626409607/il_794xN.3626409607_cusq.jpg'
    )
    kakashi4_product = Product(
        shop_id = 8, product_name="I Saw That Sign", description="Our Jesus sign will add a bit of conversation to your room.", price=25, category="Home Goods", stock=3000, image1='https://i.etsystatic.com/23900505/r/il/8d343b/3620752014/il_794xN.3620752014_cq9n.jpg'
    )
    peter4_product = Product(
        shop_id = 9, product_name="Nike Socks", description="One Pair custom hand dyed Nike socks", price=23, category="Clothing", stock=2, image1='https://i.etsystatic.com/23943650/r/il/142753/4345390452/il_794xN.4345390452_llcg.jpg'
    )
    batman4_product = Product(
        shop_id = 10, product_name="Batman Stove Mitts", description="great car not cheaply made I swear", price=45, category="Home Goods", stock=2000, image1='https://i.etsystatic.com/10486300/r/il/28ee69/4291680626/il_794xN.4291680626_qox0.jpg'
    )
    demo5_product = Product(
        shop_id = 1, product_name="Genesis Coupe", description="The stunning two-door is an evolution of last years X Concept, and it sure seems like Genesis wants to put it into production.", price=150000, category="Cars", stock=10, image1='https://www.carbodydesign.com/archive/2007/11/16-hyundai-concept-genesis-coupe/_Hyundai-Concept-Genesis-Coupe-1-lg-720x540.jpg'
    )
    marnie5_product = Product(
        shop_id = 2, product_name="Prada Suit", description="This single-breasted suit made of light, stretch technical fabric has a sleek, elegant silhouette. ", price=4200, category="Clothing", stock=50, image1='https://www.prada.com/content/dam/pradanux_products/U/UAF/UAF420/1KJWF0002/UAF420_1KJW_F0002_S_152_SLF.png/jcr:content/renditions/cq5dam.web.hebebed.1000.1000.square.jpg'
    )
    bobbie5_product = Product(
        shop_id = 3, product_name="LZ Ergo", description="This is an ergonomic keyboard which is made in Korea with a GMK Cyrillic keycap set.", price=435, category="Electronics", stock=5, image1='https://media.cybernews.com/2020/12/lz-ergo1.jpg'
    )
    mathew5_product = Product(
        shop_id = 4, product_name="Whiskey Decanter", description="Personalized Whiskey Decanter Set with Gift Box.", price=35, category="miscellaneous", stock=2000, image1='https://i.etsystatic.com/13777471/r/il/d7938c/3901950262/il_794xN.3901950262_e5r7.jpg'
    )
    remington5_product = Product(
        shop_id = 5, product_name="Pink Floyd T-Shirt", description="Officially Licensed Merchandise. Music, Sports & Entertainment Merchandise.", price=25, category="Clothing", stock=3000, image1='https://i.etsystatic.com/13351673/r/il/a7afd8/1008135834/il_794xN.1008135834_k0rw.jpg'
    )
    kratos5_product = Product(
        shop_id = 6, product_name="God of War Scented Candle", description="great keyboard not cheaply made I swear.", price=35, category="Home Goods", stock=2, image1='https://i.etsystatic.com/26979231/r/il/60ef7d/3537241593/il_794xN.3537241593_kui7.jpg'
    )
    naruto5_product = Product(
        shop_id = 7, product_name="Leaf Engraved Lighter", description="Lighter fluid is required but not included since it can not be shipped together.", price=25, category="miscellaneous", stock=2000, image1='https://i.etsystatic.com/32808223/r/il/2fed7e/4326859985/il_794xN.4326859985_84xo.jpg'
    )
    kakashi5_product = Product(
        shop_id = 8, product_name="Outlet Mustache", description="Add some personality to your outlets. These 3/4 inch black vinyl mustaches are just the thing!", price=25, category="Home Goods", stock=3000, image1='https://i.etsystatic.com/6728085/r/il/c40ab3/419561176/il_794xN.419561176_qkem.jpg'
    )
    peter5_product = Product(
        shop_id = 9, product_name="Gray Statement Necklace", description="Gray Statement necklace, Black and White necklace, Handmade beaded necklace.", price=155, category="miscellaneous", stock=2, image1='https://i.etsystatic.com/13259937/r/il/f22702/1098941375/il_794xN.1098941375_abjw.jpg'
    )
    batman5_product = Product(
        shop_id = 10, product_name="Prop Replice Mystery Box", description="Decisions, decisions... they can be difficult to make. Have a little fun, get one of our Limited Edition Prop Replica Mystery Boxes, and save money at the same time! ", price=65, category="miscellaneous", stock=2000, image1='https://i.etsystatic.com/9106427/r/il/dbb350/1954187016/il_794xN.1954187016_n8ax.jpg'
    )
    db.session.add(demo_product)
    db.session.add(marnie_product)
    db.session.add(bobbie_product)
    db.session.add(mathew_product)
    db.session.add(remington_product)
    db.session.add(kratos_product)
    db.session.add(naruto_product)
    db.session.add(kakashi_product)
    db.session.add(peter_product)
    db.session.add(batman_product)
    db.session.add(demo2_product)
    db.session.add(marnie2_product)
    db.session.add(bobbie2_product)
    db.session.add(mathew2_product)
    db.session.add(remington2_product)
    db.session.add(kratos2_product)
    db.session.add(naruto2_product)
    db.session.add(kakashi2_product)
    db.session.add(peter2_product)
    db.session.add(batman2_product)
    db.session.add(demo3_product)
    db.session.add(marnie3_product)
    db.session.add(bobbie3_product)
    db.session.add(mathew3_product)
    db.session.add(remington3_product)
    db.session.add(kratos3_product)
    db.session.add(naruto3_product)
    db.session.add(kakashi3_product)
    db.session.add(peter3_product)
    db.session.add(batman3_product)
    db.session.add(demo4_product)
    db.session.add(marnie4_product)
    db.session.add(bobbie4_product)
    db.session.add(mathew4_product)
    db.session.add(remington4_product)
    db.session.add(kratos4_product)
    db.session.add(naruto4_product)
    db.session.add(kakashi4_product)
    db.session.add(peter4_product)
    db.session.add(batman4_product)
    db.session.add(demo5_product)
    db.session.add(marnie5_product)
    db.session.add(bobbie5_product)
    db.session.add(mathew5_product)
    db.session.add(remington5_product)
    db.session.add(kratos5_product)
    db.session.add(naruto5_product)
    db.session.add(kakashi5_product)
    db.session.add(peter5_product)
    db.session.add(batman5_product)

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
