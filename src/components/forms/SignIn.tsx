import { Checkbox, Form, Input } from 'antd';
import React from 'react';
import AbstractForm, { nonInputFormItem } from '$components/abstract/Form';


const SignIn = () => (
    <AbstractForm onFinish={console.log} onFinishFailed={console.log} title="Sign in">
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
        <Form.Item name="remember" valuePropName="checked" {...nonInputFormItem}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
    </AbstractForm>
)

export default SignIn