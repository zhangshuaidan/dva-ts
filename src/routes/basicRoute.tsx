import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'dva/router';
import page5 from '@/routes/pages/page5';
import page6 from '@/routes/pages/page6';
import TabComponent from '@/components/TabComponent';
interface Props{};
interface State{};

class BasicRoute extends Component<Props,State> {

    render() {
        return (
            <Switch>
                <Route path="/basic/tab" component={TabComponent}/> 
                <Route path="/basic/page5" component={page5}/> 
                <Route path="/basic/page6" component={page6}/> 
                {/* <Redirect to="/basic/tab"/> */}
                {/* <Route path ="/basic/route" compoent={}/>  */}

            </Switch>
        )
    }
}
export default BasicRoute;