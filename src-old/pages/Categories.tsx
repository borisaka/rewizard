import { Link, RouteComponentProps, Router } from '@reach/router';
import React, { FunctionComponent } from 'react';
import ShowCategory from './Categories/[categoryId]';
import Index from './Categories/Index';
import CategoryIndex from './Categories/Index';
import ShowItem from './Categories/[categoryId]/[itemId]';
import { List } from 'antd';

const categories = ['1','2','3','4']

const Categories: FunctionComponent<RouteComponentProps> = (props) => (
  <>
    <p>This going stay with children:</p>
    <div>Categories:</div>
    <List header={<div>With parent content</div>}
          bordered
          dataSource={categories}
          renderItem={item => (<List.Item><Link to={`${item}`}>{item}</Link></List.Item>)}/>
      
    <Router>
      <Index path="/"/>
      <ShowCategory path=":categoryId/*"/>
    </Router>
    { props.children }
  </>
)

export default Categories