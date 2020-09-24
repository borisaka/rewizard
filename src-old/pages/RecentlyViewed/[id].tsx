import React from 'react';
import { RouteComponentProps, useParams } from "@reach/router"


export default (props: RouteComponentProps) => {
  const { id } = useParams()
  console.log(`ID: ${id}`)
  return (<div> Children with id: {id}</div>)
}