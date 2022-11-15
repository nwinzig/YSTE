from .db import db, environment, SCHEMA, add_prefix_for_prod


class Cart(db.Model):
    __tablename__ = "carts"
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    total_price = db.Column(db.Float)
    # product_id = db.Column(db.Integer, db.ForeignKey("products.id"))

    # relationship
    user = db.relationship("User", back_populates="cart")
    # products = db.relationship("Product", back_populates="cart")

    # testing join table relationship
    # products = db.relationship("Product", secondary=cart_product, back_populates='carts')
    cart_product = db.relationship('CartProduct', back_populates='cart')

    def to_dict(self):
        return {
            'id': self.id,
            'product_id': self.product_id,
            'user_id': self.user_id,
            'total_price': self.total_price
        }
