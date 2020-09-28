import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import TermsOfService from '$components/TermsOfService';
import Layout from '$layouts/Empty';


const TermsOfServicePage: FunctionComponent<RouteComponentProps> = (props) => {
  return (
    <Layout>
      <TermsOfService />
    </Layout>
  )
} 

export default TermsOfServicePage