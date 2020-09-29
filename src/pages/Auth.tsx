import React, { FunctionComponent } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link, Redirect, RouteComponentProps, Router } from '@reach/router';
// import SignIn from './auth/SignIn';
// import SignUp from './auth/SignUp';
import SignIn from '$components/forms/SignIn';
import SignUp from '$components/forms/SignUp';

const SignInPage: FunctionComponent<RouteComponentProps> = (props) =>  <SignIn />
const SignUpPage: FunctionComponent<RouteComponentProps> = (props) =>  <SignUp />

import useSession from '$stores/session';

const { SubMenu } = Menu;

const { Header, Footer, Sider, Content } = Layout;

// const DrawRoutes = () => (
  
// )

const Auth: FunctionComponent<RouteComponentProps> = (props) => {
  const  { session } = useSession()
  if (session) {
    return <Redirect to="/"/>
  }

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1"><Link to="./sign-in">Sign in</Link></Menu.Item>
            <Menu.Item key="2"><Link to="./sign-up">Sign up</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
          <Router>
            <Redirect from="/" to="sign-in" noThrow/>
            <SignInPage path="sign-in"/>
            <SignUpPage path="sign-up"/>
          </Router>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
};

export default Auth;