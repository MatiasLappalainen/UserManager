import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Wrapper from './components/wrappers/Wrapper';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Wrapper />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
