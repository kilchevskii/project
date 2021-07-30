import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated, getUserRole } from '..//..//helpers/helpers';
import { AdminLayout } from '..//..//components/Admin/index';

import { ClientLayout } from '..//..//components/Client/index';
import SignIn from '..//..//signIn';
// import Footer from '../../components/Client/components/Footer'

const AllRoutes = ({ history }) => {
   return (
      <>
         <Route
            path='/login'
            component={() => <SignIn history={history} />}
            key='1'
         />
         <Route exact path='/'>
            {isAuthenticated && getUserRole() === 'admin' ? (
               <Redirect to={'/admin'} />
            ) : isAuthenticated && getUserRole() === 'user' ? (
               <Redirect to={'/user'} />
            ) : (
               <Redirect to={'/login'} />
            )}
         </Route>
         <PrivateAdminRoute path={'/admin'}>
            <AdminLayout history={history} />
         </PrivateAdminRoute>
         <PrivateClientRoute path={'/user'}>
            <ClientLayout history={history} />
            {/* <Footer /> */}
         </PrivateClientRoute>
      </>
   );
};

const PrivateAdminRoute = ({ children, ...props }) => (
   <Route {...props}>
      {isAuthenticated && getUserRole() === 'admin' ? (
         children
      ) : (
         <h1>BANNER</h1>
      )}
   </Route>
);

const PrivateClientRoute = ({ children, ...props }) => (
   <Route {...props}>
      {isAuthenticated && getUserRole() === 'user' ? children : <h1>BANNER</h1>}
   </Route>
);
export default AllRoutes;
