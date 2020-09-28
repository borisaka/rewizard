import { Button, Checkbox, Form, Input, Modal } from 'antd';
import React, { useState } from 'react';
import AbstractForm, { nonInputFormItem } from '$components/abstract/Form';
import { Link } from '@reach/router';
import TermsOfService from '$components/TermsOfService';

const SignUp = () => {
  const [showTerms, setShowTerms] = useState(false);

  const TermsModal = () => (
    <Modal
    title="Terms of service"
    centered
    visible={showTerms}
    onOk={() => setShowTerms(false)}
    onCancel={() => setShowTerms(false)}
    width="40%"
    footer={
      <Button key="submit" type="primary" onClick={() => setShowTerms(false)}>
         I have read
      </Button>
    }
   >
     <TermsOfService />
  </Modal>
  )
  return (
    <>
      <TermsModal/>
      <AbstractForm onFinish={console.log} onFinishFailed={console.log} title="Sign up">
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
          <Form.Item name="accept-terms" valuePropName="checked" {...nonInputFormItem}>
            <Checkbox>I have read <a href="#" onClick={() => setShowTerms(true) }>Terms of service</a></Checkbox>
          </Form.Item>
          <Form.Item name="subscribe" valuePropName="checked" {...nonInputFormItem}>
            <Checkbox>Receive news on email</Checkbox>
          </Form.Item>
    </AbstractForm>
    </>
  )
  }

  export default SignUp