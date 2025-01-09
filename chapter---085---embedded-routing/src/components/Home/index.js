// /src/components/Home/index.js

import React from 'react';
import { Layout, Menu } from 'antd';
import { Outlet, Link, useLocation } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const Home = () => {
    const location = useLocation(); // 获取当前路由路径
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider width={200}>
                <Menu mode="inline" selectedKeys={[location.pathname]} defaultSelectedKeys={['/user-management']}>
                    <Menu.Item key="/user-management">
                        <Link to="/user-management">用户管理</Link>
                    </Menu.Item>
                    <Menu.Item key="/mail-management">
                        <Link to="/mail-management">邮件管理</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ padding: 0 }}>Header</Header>
                <Content style={{ margin: '0 16px' }}>
                    <Outlet /> {/* 这里是嵌套路由的内容将呈现的地方 */}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Footer</Footer>
            </Layout>
        </Layout>
    );
};

export default Home;