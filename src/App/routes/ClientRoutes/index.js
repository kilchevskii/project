import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
// import TasksLayout from '../../components/Client/components/TasksLayout';
// import RoadMap from '../../components/Client/components/Statistics/RoadMap';
// import Statistics from '../../components/Client/components/Statistics';
// import ClientAlert from '../../components/Client/components/ClientAlerts';
// import CheckListLayout from '../../components/Client/components/CheckList';
import Main from '../../components/Client/components/Main/Main';

const UserRoutes = ({ history }) => {
   return (
      <>
         <PrivateRoute
            exact
            path='/user'
            component={() => <Main />}
            key='7'
         />
      </>
   );
};

export default UserRoutes;
