from .db import db, environment, SCHEMA, add_prefix_for_prod

class Product(db.Model):
    __tablename__ = "products"

    id = db.Column(db.Integer, primary_key=True)
    shopId = db.Column(db.Integer, db.ForeignKey("shops.id"))
    product_name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(250), nullable=False)
    price = db.Column(db.Float, nullable=False)
    category = db.Column(db.String(100), nullable=False)
    stock = db.Column(db.Integer, nullable=False)

    # relationship
    cart = db.relationship("Cart", back_populates="products", cascade="all, delete-orphan")
    shop = db.relationship("Shop", back_populates="products")
    product_image = db.relationship("ProductImage", back_populates="products", cascade="all, delete-orphan")
    product_review = db.relationship("ProductReview", back_populates="products", cascade="all, delete-orphan")


class ProductImage(db.Model):
    __tablename__ = "product_images"

    id = db.Column(db.Integer, primary_key=True)
    productId = db.Column(db.Integer, db.ForeignKey("products.id"))
    product_image = db.Column(db.String(50))

    # relationship
    products = db.relationship("Product", back_populates="product_image")



class ProductReview(db.Model):
    __tablename__ = "product_reviews"

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"))
    productId = db.Column(db.Integer, db.ForeignKey("products.id"))
    review = db.Column(db.String(100), nullable=False)
    stars = db.Column(db.Integer, nullable=False)
    review_image = db.Column(db.String)


    # relationship
    products = db.relationship("Product", back_populates="product_review")
