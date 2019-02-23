export default theme => ({
  card: {
    '&:hover': {
      boxShadow: `0px 5px 5px -3px ${theme.palette.primary[400]}, 0px 8px 10px 1px ${
        theme.palette.primary[300]
      }, 0px 3px 14px 2px ${theme.palette.primary[200]}`
    }
  },
  header: {
    userSelect: 'none'
  },
  media: {
    height: 150,
    paddingTop: '56.25%'
  },
  content: {
    height: 150,
    overflowX: 'auto'
  },
  learMore: {
    textAlign: 'right'
  }
});
