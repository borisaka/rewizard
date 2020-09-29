import { Checkbox, Form, Input, message } from 'antd';
import React from 'react';
import AbstractForm, { nonInputFormItem } from '$components/abstract/Form';
import shallow from 'zustand/shallow'
import useSession, { SessionState } from '$stores/session';

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwicm9sZXMiOlsiYWRtaW4vYWxsIl19.57lK17-Udha6WjCaQUb7HxNwOHeov3DOXJLdbn6RnqY';

type SignInData = {
  login: string
  password: string
}

const SignIn = () => {
  const { initSession } = useSession()
  const signIn = ({ login, password }: SignInData) => {
    console.log(`Signing in as ${login} ${password}`)
    if(login === 'admin@example.com' && password === 'password') {
      initSession(token)
      message.success('Signed in')
    } else  {
      message.error('Incorrect login or password')
    }
  }

  return(
    <AbstractForm onFinish={(form) => signIn(form as SignInData)} onFinishFailed={console.log} title="Sign in">
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
}

export default SignIn