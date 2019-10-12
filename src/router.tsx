import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import BasicLayout from '@/layouts/basiclayouts';


function RouterConfig({ history }):JSX.Element {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/basic" component ={BasicLayout} />
        <Redirect to="/basic/tab" />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
