import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import phonebookSelectors from './redux/phonebook/phonebook-selectors';
import { Switch, Route } from 'react-router-dom';
import routes from './components/views/routes';
import AppBar from './components/AppBar/AppBar';
import { lazy, Suspense } from 'react';
import authOperation from './redux/auth/auth-operations';
import PrivateRoute from './components/UserMenu/PrivateRoute';
import PublicRoute from './components/UserMenu/PublicRoute';

const HomeView = lazy(() => import('./components/views/HomeView'));
const RegisterView = lazy(() => import('./components/views/RegisterView'));
const LoginView = lazy(() => import('./components/views/LoginView'));
const ContactView = lazy(() => import('./components/views/ContactsView'));

export default function App() {
  const isLoadingContact = useSelector(phonebookSelectors.getLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperation.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<h2>Load...</h2>}>
        <Switch>
          <Route exact path={routes.home} component={HomeView} />
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/"
            component={RegisterView}
          />
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts"
            component={LoginView}
          />
          <PrivateRoute
            path="/contacts"
            component={ContactView}
            redirectTo="/login"
          />
        </Switch>
      </Suspense>
    </>
  );
}
