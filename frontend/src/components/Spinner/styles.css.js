export default theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1
  },
  content: {
    margin: 'auto'
  },
  spinner: {
    textAlign: 'center',
    padding: '15px',
    color: theme.palette.primary.main
  }
});
