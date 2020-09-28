import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import SignInForm from '$components/forms/SignIn';
import Layout from '$layouts/Empty';


const SignIn: FunctionComponent<RouteComponentProps> = (props) => {
  return (
    <Layout>
      <SignInForm />
    </Layout>
  )
} 

export default SignIn