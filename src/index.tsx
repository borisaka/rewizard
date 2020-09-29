import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createHistory, LocationProvider } from '@reach/router';

const history = createHistory(window as any)



import App from './App'

ReactDOM.render(
  <LocationProvider history={history}><App/></LocationProvider>, document.getElementById('root')
)