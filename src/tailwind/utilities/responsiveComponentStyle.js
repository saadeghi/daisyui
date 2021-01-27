module.exports = {
  '.card-side': {
    alignItems: 'stretch',
    flexDirection: 'row',
    '> figure': {
      height: '100%',
      maxWidth: 'none',
      width: 'auto',
      '> *':{
        width: 'auto',
        maxWidth: 'none',
      }
    }
  },
}
