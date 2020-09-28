import { RouteComponentProps } from '@reach/router';
import React, { FunctionComponent } from 'react';
import SignUpForm from '$components/forms/SignUp';
import Layout from '$layouts/Empty';


const SignUp: FunctionComponent<RouteComponentProps> = (props) => {
  return (
    <Layout>
      <SignUpForm />
    </Layout>
  )
}

export default SignUp