export default theme => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    padding: '15px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  body: {
    padding: '15px',
    backgroundColor: theme.palette.primary[50],
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  footer: {
    padding: '15px',
    textAlign: 'right'
  }
});
