from .db import db, environment,SCHEMA, add_prefix_for_prod


class Purchase(db.Model):
    __tablename__ = "purchases"
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")))
    purchase_date = db.Column(db.Date)
    price = db.Column(db.Float)

    # relationship
    user = db.relationship("User", back_populates="purchases")
