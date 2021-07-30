import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
// import { Users, Tasks, Modules, CheckLists, Alerts, Theory, Dynamics } from '../../components/Admin';

import PrivateRoute from '../PrivateRoute';

const AdminRoutes = ({ history }) => {
  //сделать админские роуты
  return (
    <>
      {/* <PrivateRoute path='/admin/users' exact component={() => <Users />} key='1' /> */}
      {/* <PrivateRoute path='/admin/tasks' component={() => <Tasks />} key='2' />
      <PrivateRoute path='/admin/modules' component={() => <Modules />} key='3' />
      <PrivateRoute path='/admin/checklists' component={() => <CheckLists />} key='4' />
      <PrivateRoute path='/admin/alerts' component={() => <Alerts />} key='5' />
      <PrivateRoute path='/admin/theory' component={() => <Theory />} key='6' />
      <PrivateRoute path='/admin/users/dynamics' exact component={() => <Dynamics />} key='7' /> */}
    </>
  );
};

export default AdminRoutes;