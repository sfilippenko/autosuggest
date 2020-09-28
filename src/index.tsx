import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import configureStore from './configureStore';
import theme from './styles/theme';
import Layout from './Layout';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Layout/>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
