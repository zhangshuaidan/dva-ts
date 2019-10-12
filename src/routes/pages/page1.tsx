import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'dva';

@connect()
 class Page1 extends Component<any,any>{

    fetch = ()=>{
        this.props.dispatch({
            type:'test/fetch'
        })
    }

    render() {
        return (
            <div>
                hi this is Page1 
                <Button onClick={this.fetch} type="primary">Fetch Data</Button>
            </div>
        )
    }
}

export default Page1;