import React from 'react';
import { RouteComponentProps, useParams } from "@reach/router";

export default (props: RouteComponentProps) => {
  const { itemId } = useParams();
  return (
    <div>This is item ${itemId}</div>
  );
}