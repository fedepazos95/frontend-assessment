import { container } from 'assets/commonStyles';

const footerStyle = {
  right: {
    padding: '15px 0',
    margin: '0',
    float: 'right!important',
  },
  footer: {
    padding: '0.9375rem 0',
    textAlign: 'center',
    display: 'flex',
    zIndex: '2',
    position: 'relative',
  },
  footerWhiteFont: {
    '&,&:hover,&:focus': {
      color: '#FFFFFF',
    },
  },
  container,
};
export default footerStyle;
