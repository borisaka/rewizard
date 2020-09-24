import React from 'react';

import "antd/dist/antd.css";


import Index from './pages/Index';
import RecentlyViewed from './pages/RecentlyViewed';
import Categories from './pages/Categories';

import { Router, RouteComponentProps, Link, useLocation, createHistory, LocationProvider } from "@reach/router";
import { Breadcrumb } from 'antd';

import { HomeOutlined } from '@ant-design/icons';

import SignInPage from '@@modules/auth/pages/SignIn';

const history = createHistory(window as any)

const BreadCrumbs = () => {
  const location = useLocation();
  console.log(location)
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
            <Index path="/"/>
            <RecentlyViewed path="/recently-viewed/*"/>
            <Categories path="/categories/*"/>
            <SignInPage path="/auth/sign-in"/>
          </Router>
  </LocationProvider>
       
)
        }