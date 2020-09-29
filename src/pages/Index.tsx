import React, { FunctionComponent } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Footer, Content } = Layout;
import useSession from '$stores/session';
import { Redirect, RouteComponentProps } from '@reach/router';

const Index: FunctionComponent<RouteComponentProps> = (props) => {
  const { session, destroySession } = useSession()
  if(!session) { return <Redirect to="/auth"/> }
  return (
  <Layout style={{ height: "100vh", overflow: "auto" }}>
    <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1"><a onClick={destroySession}>Sign out</a></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">Home, sweet index</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
)
}

export default Index;