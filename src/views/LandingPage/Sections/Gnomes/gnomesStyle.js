import { container } from 'assets/commonStyles';
import tooltip from 'assets/tooltipStyle';

const tabsStyle = {
  section: {
    padding: '10px 0',
    background: '#EEEEEE',
    borderRadius: '6px',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
  container,
  textCenter: {
    textAlign: 'center',
  },
  socialIcons: {
    position: 'relative',
    fontSize: '25px !important',
    marginRight: '4px',
  },
  ...tooltip,
};

export default tabsStyle;
