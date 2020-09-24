import React from 'react';

// import "antd/dist/antd.css";
import './styles/customize.less';

import { Router, RouteComponentProps, Link, useLocation, createHistory, LocationProvider } from "@reach/router";
import { Breadcrumb } from 'antd';

import { HomeOutlined } from '@ant-design/icons';

import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';


const history = createHistory(window as any)

const BreadCrumbs = () => {
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item><HomeOutlined/></Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default () => {
  return (
  <LocationProvider history={history}>
          <Router>
            <SignInPage path="/"/>
            <SignUpPage path="/sign-up"/>
          </Router>
  </LocationProvider>
       
)
        }