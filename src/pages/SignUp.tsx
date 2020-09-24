import React, { FunctionComponent } from 'react';
import Layout from '@@layouts/FormPage';
import { RouteComponentProps } from '@reach/router';
import { Button, Checkbox, Divider, Form, Input, Typography } from 'antd';
import { Row, Col } from 'antd';

const layout = {
  labelCol: { span: 15 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const SignUp: FunctionComponent<RouteComponentProps> = (props) => {
  // const onFinish = values => {
  //   console.log('Success:', values);
  // };

  // const onFinishFailed = errorInfo => {
  //   console.log('Failed:', errorInfo);
  // };

  return (
    <Layout onFinish={console.log} onFinishFailed={console.log} title="Sign up">
        <Form.Item
          label="Email"
          name="login"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone number"
          name="phone"
          rules={[{ required: true, message: 'Please input your phone!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm password"
          name="password_confirmation"
          rules={[{ required: true, message: 'Please confirm your password!' }]}
        > 
          <Input.Password />
        </Form.Item>
  </Layout>
  )
  } 

  export default SignUp