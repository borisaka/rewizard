import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Button, Divider, Form, Typography } from 'antd';
import { Row, Col } from 'antd';

const layout = {
  labelCol: { span: 15 },
  wrapperCol: { span: 20 },
};
export const nonInputFormItem = {
  className: 'non-input-formitem',
  style: { marginBottom: 0, marginTop: 0 },
  wrapperCol: { offset: 7 },
};

type FormHandler = {
  onFinish: (values: object) => void
  onFinishFailed: (ErrorInfo: any) => void
  title:  string
}

const AbstractForm: FunctionComponent<FormHandler> = (props) => {
  return (
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
        <Form.Item wrapperCol={{ offset: 7 }} style={{marginTop: 10}}>
          <Button type="primary" htmlType="submit">
            { props.title }            
          </Button>
        </Form.Item>
      </Form>
    </div>
    </Col>
    <Col span={8}></Col>
    </Row>
  )
  } 

  export default AbstractForm