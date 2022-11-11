from .db import db, environment, SCHEMA, add_prefix_for_prod

class Shop(db.Model):
    __tablename__ = "shops"

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"))
    shop_name = db.Column(db.String(50))
    products = db.Column(db.Integer, nullable=False)
    shop_image = db.Column(db.String)

    # relationship
    products = db.relationship("Product", back_populates="shop")
    user = db.relationship("User", back_populates="shop")
    # shop_reviews = db.relationship("ShopReview", back_populates="shop")

# class ShopReview(db.Model):
#     __tablename__ = "shop_reviews"

#     id = db.Column(db.Integer, primary_key=True)
#     shopId = db.Column(db.Integer, db.ForeignKey("shops.id"))
#     userId = db.Column(db.Integer, db.ForeignKey("users.id"))
#     review = db.Column(db.String(255), nullable=False)
#     shop_review_image = db.Column(db.String)

#     # relationship
#     shop = db.relationship("Shop", back_populates="shop_reviews")
#     user = db.relationship("User", back_populates="user_shop_reviews")
