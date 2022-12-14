import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import AllProducts from './components/SplashPage';
import ProductDetail from './components/ProductDetail';

import CartComponent from './components/ShoppingCart/cart';

import ProductForm from './components/ProductForm';
import OwnerProducts from './components/ProductByOwner';
import OwnerItemCard from './components/OwnerItemCard';
import EditProductForm from './components/EditProductForm';
import SearchResult from './components/nav/SearchResult';
import OwnerReviews from './components/ReviewsByOwner';
import EditReviewForm from './components/EditReviewForm';
import ReviewForm from './components/CreateReview/reviewForm';
import CategoryPage from './components/CategoryPage';
import Footer from './components/footer/footer';



function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/searchProducts' exact={true}>
          <SearchResult />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        {/* <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute> */}
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <AllProducts />
          < Footer />
        </Route>
        <ProtectedRoute path='/newProduct' exact={true}>
          <ProductForm />
        </ProtectedRoute>
        <ProtectedRoute path='/your-products' exact={true} style={{ width: '100%' }}>
          <OwnerProducts />
        </ProtectedRoute>
        <ProtectedRoute exact path='/create-review/:productId'>
          <ReviewForm />
        </ProtectedRoute>
        <ProtectedRoute path='/your-reviews' exact={true}>
          <OwnerReviews />
        </ProtectedRoute>
        <Route path='/product/:productId' exact={true}>
          <ProductDetail />
        </Route>
        <ProtectedRoute exact path='/cart'>
          <CartComponent />
        </ProtectedRoute>
        <ProtectedRoute exact path='/editProduct/:productId' >
          <EditProductForm />
        </ProtectedRoute>
        <ProtectedRoute exact path='/editReview/:reviewId'>
          <EditReviewForm />
        </ProtectedRoute>
        <Route exact path='/category/:categoryName'>
          <CategoryPage />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
