from .db import db, environment, SCHEMA, add_prefix_for_prod


class Cart(db.Model):
    __tablename__ = "carts"
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"))
    productId = db.Column(db.Integer, db.ForeignKey("products.id"))
    total_price = db.Column(db.Float)

    # relationship
    # user = db.relationship("User", back_populates="cart")
    products = db.relationship("Product", back_populates="cart")
