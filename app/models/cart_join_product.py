from .db import db, environment, SCHEMA, add_prefix_for_prod

class CartProduct(db.Model):
    __tablename__ = 'cart_products'
    id = db.Column(db.Integer, primary_key=True)
    cart_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('carts.id')))
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')))

    # relationship
    cart = db.relationship('Cart', back_populates='cart_product')
    product = db.relationship('Product', back_populates='cart_product')

    def to_dict(self):
        return {
            'id': self.id,
            'cart_id': self.cart_id,
            'product_id': self.product_id,
        }




#     cart_product = Table(
#     "cart_product",
#     Base.metadata,
#     db.Column("cart_id", db.ForeignKey('carts.id'),primary_key=True),
#     db.Column("product_id", db.ForeignKey('products.id'),primary_key=True)
# )
