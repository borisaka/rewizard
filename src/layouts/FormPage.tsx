import React, { Component, ErrorInfo, FunctionComponent } from 'react';
import EmptyLayout from '@@layouts/Empty';
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

type FormHandler = {
  onFinish: (values: object) => void,
  onFinishFailed: (ErrorInfo: any) => void
  title:  string
}

const FormPage: FunctionComponent<RouteComponentProps & FormHandler> = (props) => {
  return (
    <EmptyLayout>
    <Row>
    <Col span={8}></Col>
    <Col span={8}>
      <div className="form-wrap">
      <Typography.Title level={2} style={{textAlign: 'center'}}>{props.title}</Typography.Title>
      <Divider/>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 15 }}
        layout="horizontal"
        size="large"
        onFinish={props.onFinish}
        onFinishFailed={props.onFinishFailed}
      >
        {props.children}
      </Form>
    </div>
    </Col>
    <Col span={8}></Col>
    </Row>
  </EmptyLayout>
  )
  } 

  export default FormPage