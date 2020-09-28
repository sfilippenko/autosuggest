import createStyles from '@material-ui/core/styles/createStyles';

export default createStyles({
  root: {
    maxWidth: 992,
    padding: 15,
    background: 'white',
    margin: '0 auto',
    minHeight: '100vh',
  },
  '@global': {
    body: {
      padding: 0,
      margin: 0,
      background: '#f2f2f2',
    },
    '*': {
      boxSizing: 'border-box',
    },
  },
});
