import React, { Children, FunctionComponent } from 'react';
import { Link, RouteComponentProps, Router, useMatch, useParams } from '@reach/router';
import { List } from 'antd';

import CategoryIndex from './Index';
import ShowItem from './[categoryId]/[itemId]';

const data = {
  '1': ['1', '2', '3'],
  '2': ['4', '5', '6'],
  '3': ['7', '8', '9', '10', '11'],
  '4': ['12'],
}

const CategoryPage: FunctionComponent<RouteComponentProps> = (props) => {
  const match = useMatch("/categories/:categoryId/*");
  console.log(`MATCH`)
  console.log(match)
  return (
    <>
    <div>Show category {match?.categoryId}</div>
    <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data[match?.categoryId || '0']}
        renderItem={item => (<List.Item><Link to={`${item as string}`}>Show item: {item}</Link></List.Item>)}
    />
    {props.children}
    <Router>
      <CategoryIndex path="/"/>
      <ShowItem path=":itemId"/>
    </Router>
    </>
  )
}

export default CategoryPage