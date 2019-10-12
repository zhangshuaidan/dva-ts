import React, { Component } from 'react'
import { Tabs, Icon } from 'antd';
import { connect } from 'dva';
import { Dispatch } from 'redux';
import { TabModelState } from '@/models/tab'
const { TabPane } = Tabs;

interface Props {
    dispatch: Dispatch<any>;
    tab:TabModelState
};

interface State{};
@connect(state => ({
    tab: state.tab
}))
class Tab extends Component<Props,State> {

    changeTab = (key)=>{
        this.props.dispatch({
            type:'tab/changeSelect',
            payload:{
                name:key
            }
        })
    }

    deleteTab = (name,e) =>{
        this.props.dispatch({
            type:'tab/removeTab',
            payload:{
                name
            }
        })
        e.stopPropagation()
    }

    render() {
        const { tab } = this.props;
        return (
            <div>
                <Tabs activeKey={tab.selectKey} animated={false} onChange={this.changeTab}>
                    {tab.tabList.map(v => (
                        <TabPane
                            tab={
                                <span>
                                    {v.name}
                                    <Icon type="close" onClick={(e)=>this.deleteTab(v.name,e)}/>
                             </span>
                            }
                            key={v.name}>
                            <v.component />
                        </TabPane>
                    ))}

                </Tabs>
            </div>
        )
    }
}
export default Tab;
