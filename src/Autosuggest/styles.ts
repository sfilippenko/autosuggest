import createStyles from '@material-ui/core/styles/createStyles';

export default createStyles({
  inputWrapper: {
    position: 'relative',
  },
  progress: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 5,
    top: '50%',
    transform: 'translate(0, -50%)',
  },
});
