import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const App = () => {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">About</Menu.Item>
                    <Menu.Item key="3">Contact</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content" style={{ padding: 24, minHeight: 280 }}>
                    Content goes here
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2024 Created by You</Footer>
        </Layout>
    );
};

export default App;
