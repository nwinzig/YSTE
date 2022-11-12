from .db import db, environment,SCHEMA, add_prefix_for_prod


class Purchase(db.Model):
    __tablename__ = "purchases"
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"))
    productsId = db.Column(db.Integer, db.ForeignKey("products.id"))
    purchase_date = db.Column(db.Date)
    price = db.Column(db.Float)

    # relationship
    # user = db.relationship("User", back_populates="purchases")
