import React, { useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const Home = () => {
    const navigate = useNavigate(); // 用于导航
    const location = useLocation(); // 获取当前路由路径

    // 当组件加载时，自动导航到用户管理
    useEffect(() => {
        if (location.pathname === '/home') { // 检查当前路径
            navigate('/home/user-management'); // 重定向到用户管理
        }
    }, [location.pathname, navigate]);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider width={200}>
                <Menu mode="inline" selectedKeys={[location.pathname]} defaultSelectedKeys={['/user-management']}>
                    <Menu.Item key="/home/user-management">
                        <Link to="/home/user-management">用户管理</Link>
                    </Menu.Item>
                    <Menu.Item key="/home/mail-management">
                        <Link to="/home/mail-management">邮件管理</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ padding: 0 }}>Header</Header>
                <Content style={{ margin: '0 16px' }}>
                    <Outlet /> {/* 在此渲染子路由的内容 */}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Footer</Footer>
            </Layout>
        </Layout>
    );
};

export default Home;
