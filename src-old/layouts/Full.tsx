import React from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from '@reach/router';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

  export default () => (
<Layout>
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><Link to="/recently-viewed">Recently viewed</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/categories">Categories</Link></Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            <Menu.Item key="1"><Link to="/recently-viewed">Recently viewed</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/example2">Example page #2</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
            <Menu.Item key="1"><Link to="/example1">Example page #1</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/example2">Example page #2</Link></Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          ></Content>
      </Layout>
    </Layout>
  </Layout>
  )
  