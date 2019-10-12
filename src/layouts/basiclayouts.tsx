import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { withRouter, Link } from 'dva/router';
import { connect } from 'dva'
import BasicRoute from '@/routes/basicRoute'
import styles from './basiclayouts.less';
import pageConfig from '@/routes/pages/config'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const themeColors = ['#f4222e', '#f5541d', '#f8ad16', '#40c2c2', '#52c419', '#3590ff', '#2f55eb', '#722ed1']

interface Props {

}

interface State {
    collapsed: boolean
}
@connect()
class BasicLayouts extends Component<any, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            collapsed: false,
        }
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    addItem = (item) => {
        if (!this.props.location.pathname.includes('tab')) {
            this.props.history.push('/basic/tab')
        }
        // if(this.props.location.pathname !=='/tab'){
        //     this.props.history.push('/tab')
        //   }
        this.props.dispatch({
            type: 'tab/addTab',
            payload: item
        })
    }

    changeTheme = (v)=>{
        this.props.dispatch({
            type:'settings/changeSetting',
            payload:{
                primaryColor:v
            }
        })
    }

    render() {
        return (
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <div className={styles.logo} />
                        <Menu theme="dark"
                            defaultSelectedKeys={['']}
                            mode="inline">
                            <SubMenu
                                key="page"
                                title={
                                    <span>
                                        <Icon type="page" />
                                        <span>page</span>
                                    </span>
                                }
                            >
                                {pageConfig.map(item => (
                                    <Menu.Item key={item.name} onClick={(e) => this.addItem(item)}>{item.name}</Menu.Item>
                                ))}


                            </SubMenu>

                            <Menu.Item key="1">
                                <Link to="/basic/page5">
                                    <Icon type="pie-chart" />
                                    <span>page5</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/basic/page6">
                                    <Icon type="desktop" />
                                    <span>page6</span>
                                </Link>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="user" />
                                        <span>User</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="3">Tom</Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                                <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <Icon type="team" />
                                        <span>Team</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="6">Team 1</Menu.Item>
                                <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="9">
                                <Icon type="file" />
                                <span>File</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0, display: 'flex' }} >
                            <Icon
                                className={styles.triger}
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                                  主题颜色
                                <div className={styles.colorWrapper}>

                                {themeColors.map(v => (
                                    <span key={v} className={styles.colorBlock}
                                     style={{ backgroundColor: v }} 
                                     onClick={()=>this.changeTheme(v)} />
                                ))}
                            </div>



                        </Header>
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                <BasicRoute />
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
const BasicLayoutsR = withRouter(BasicLayouts)
export default BasicLayoutsR;
