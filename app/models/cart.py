from .db import db, environment, SCHEMA, add_prefix_for_prod


class Cart(db.Model):
    __tablename__ = "carts"
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    productId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")))
    total_price = db.Column(db.Float)

    # relationship
    user = db.relationship("User", back_populates="cart")
    products = db.relationship("Product", back_populates="cart")
