import { RouteComponentProps } from '@reach/router';
import React, { FunctionComponent } from 'react';

// export default (props: RouteComponentProps & {children?: any}) => <div>
//   Home Page
//   {props.children}
// </div>

const Home: FunctionComponent<RouteComponentProps> = (props) => (
  <>
    <div>Home page</div>
    { props.children }
  </>
)
export default Home