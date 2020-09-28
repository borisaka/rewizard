import React, { FunctionComponent } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link } from '@reach/router';

const { SubMenu } = Menu;
// const { Header, Content, Footer, Sider } = Layout;

const { Header, Footer, Sider, Content } = Layout;

const Empty: FunctionComponent = (props) => (
<Layout style={{ height: "100vh", overflow: "auto" }}>
  <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><Link to="/">Sign in</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/sign-up">Sign up</Link></Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">{props.children}</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
</Layout>
);

export default Empty;