from .db import db, environment, SCHEMA, add_prefix_for_prod


class Product(db.Model):
    __tablename__ = "products"
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    shop_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("shops.id")))
    product_name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(250), nullable=False)
    price = db.Column(db.Float, nullable=False)
    category = db.Column(db.String(100), nullable=False)
    stock = db.Column(db.Integer, nullable=False)
    image1 = db.Column(db.String, nullable=False)
    image2 = db.Column(db.String)
    image3 = db.Column(db.String)
    image4 = db.Column(db.String)

    # cart = db.relationship("Cart", back_populates="products", cascade="all, delete-orphan")
    shop = db.relationship("Shop", back_populates="products")
    product_image = db.relationship("ProductImage", back_populates="products", cascade="all, delete-orphan")
    product_review = db.relationship("ProductReview", back_populates="products", cascade="all, delete-orphan")

    # testing join table relationship
    # carts = db.relationship("Cart", secondary=cart_product, back_populates='products')

    cart_product = db.relationship('CartProduct', back_populates='product', cascade='all, delete-orphan')

    def to_dict(self):
        return {
            'id': self.id,
            'shop_id': self.shop_id,
            'product_name': self.product_name,
            'description': self.description,
            'price': self.price,
            'category': self.category,
            'stock': self.stock,
            'image1': self.image1,
            'image2': self.image2,
            'image3': self.image3,
            'image4': self.image4,
        }


class ProductImage(db.Model):
    __tablename__ = "product_images"
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}



    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")))
    product_image = db.Column(db.String(50))

    # relationship
    products = db.relationship("Product", back_populates="product_image")

    def to_dict(self):
        return {
            'id': self.id,
            'product_id': self.product_id,
            'product_image': self.product_image
        }



class ProductReview(db.Model):
    __tablename__ = "product_reviews"
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")))
    review = db.Column(db.String(100), nullable=False)
    stars = db.Column(db.Integer, nullable=False)
    review_image = db.Column(db.String)


    # relationship
    products = db.relationship("Product", back_populates="product_review")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'product_id': self.product_id,
            'review': self.review,
            'stars': self.stars,
            'review_image': self.review_image
        }
