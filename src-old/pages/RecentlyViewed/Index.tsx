import { Link, RouteComponentProps } from '@reach/router';
import React, { FunctionComponent } from 'react';

const data = ['1', '2', '3', '4'];

export default (props: RouteComponentProps) => (
  <>
  <p>This don't</p>
  { data.map(id => <Link to={id}>Category {id}</Link>) }
  </>
)