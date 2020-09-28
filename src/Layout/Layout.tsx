import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import styles from './styles';
import Autosuggest from '../Autosuggest';

type IProps = WithStyles<typeof styles>;

const Layout: React.FC<IProps> = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Autosuggest/>
      <Autosuggest/>
    </div>
  );
};

export default withStyles(styles)(Layout);
