import React, { Children } from 'react';
import { Link, RouteComponentProps, Router, useLocation } from '@reach/router';
import Show from './RecentlyViewed/[id]'
import { List } from 'antd';

const Home = (props: RouteComponentProps) => <div>HOME....</div>
// const ShowSingle = () => <Show />


const examples = ['1', 'Two', 'My']

export default (props: RouteComponentProps & { children?: any }) => { 
  return(
    <>
      <div style={{marginBottom: 100}}>Example page #1</div>
      <List
           size="small"
          header={<div>With parent content</div>}
          bordered
          dataSource={examples}
          renderItem={item => (<List.Item><Link to={`${item}`}>{item}</Link></List.Item>)}
      />
      <Router>
        <Show path=":id"/>
      </Router>
      {props.children}
    </>
  )
}