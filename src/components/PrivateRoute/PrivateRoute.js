import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { userContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    let [loggedInUser]=useContext(userContext)
    return (
        <Route
        {...rest}
        render={({ location }) =>
          loggedInUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
        
    );
};

export default PrivateRoute;