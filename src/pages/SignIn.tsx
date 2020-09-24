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

const SignIn: FunctionComponent<RouteComponentProps> = (props) => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout onFinish={console.log} onFinishFailed={console.log} title={"Sign in"}>
        <Form.Item
          label="Email/Phone"
          name="login"
          rules={[{ required: true, message: 'Please input your username!' }]}
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
        <Row>
          <Col span={10}>
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        </Col>
        <Col span={2}>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
         </Col>
        </Row>
  </Layout>
  )
  } 

  export default SignIn