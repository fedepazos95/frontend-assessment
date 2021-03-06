import { container } from 'assets/commonStyles';
import avatarStyle from 'components/Avatar/avatarStyle';

const gnomeProfileStyle = {
  container,
  brand: {
    color: '#FFFFFF',
    textAlign: 'left',
  },
  title: {
    fontSize: '3.6rem',
    fontWeight: '600',
    display: 'inline-block',
    position: 'relative',
  },
  subtitle: {
    fontSize: '1.313rem',
    maxWidth: '500px',
    margin: '10px 0 0',
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3',
    padding: '10px',
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  link: {
    textDecoration: 'none',
  },
  textCenter: {
    textAlign: 'center',
  },
  avatar: {
    maxWidth: '700px',
    width: '100%',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
  ...avatarStyle,
};

export default gnomeProfileStyle;
