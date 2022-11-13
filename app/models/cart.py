from .db import db, environment, SCHEMA, add_prefix_for_prod


class Cart(db.Model):
    __tablename__ = "carts"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    product_id = db.Column(db.Enum, db.ForeignKey("products.id"))
    total_price = db.Column(db.Float)

    # relationship
    user = db.relationship("User", back_populates="cart")
    products = db.relationship("Product", back_populates="cart")


    def to_dict(self):
        return {
            'id': self.id,
            'product_id': self.product_id,
            'user_id': self.user_id,
            'total_price': self.total_price
        }
