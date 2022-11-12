from .db import db, environment, SCHEMA, add_prefix_for_prod

class Product(db.Model):
    __tablename__ = "products"
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

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

    def to_dict(self):
        return {
            'id': self.id,
            'shopId': self.shopId,
            'product_name': self.product_name,
            'description': self.description,
            'price': self.price,
            'category': self.category,
            'stock': self.stock
        }


class ProductImage(db.Model):
    __tablename__ = "product_images"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    productId = db.Column(db.Integer, db.ForeignKey("products.id"))
    product_image = db.Column(db.String(50))

    # relationship
    products = db.relationship("Product", back_populates="product_image")

    def to_dict(self):
        return {
            'id': self.id,
            'productId': self.productId,
            'product_image': self.product_image
        }



class ProductReview(db.Model):
    __tablename__ = "product_reviews"
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    productId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")))
    review = db.Column(db.String(100), nullable=False)
    stars = db.Column(db.Integer, nullable=False)
    review_image = db.Column(db.String)


    # relationship
    products = db.relationship("Product", back_populates="product_review")

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'productId': self.productId,
            'review': self.review,
            'stars': self.stars,
            'review_image': self.review_image
        }
