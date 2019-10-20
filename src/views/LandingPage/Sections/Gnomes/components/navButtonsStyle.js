import { container } from 'assets/commonStyles';
import tooltip from 'assets/tooltipStyle';

const navButtonsStyle = {
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container,
  socialIcons: {
    position: 'relative',
    fontSize: '25px !important',
    marginRight: '4px',
  },
  ...tooltip,
  pageNumber: {
    marginLeft: '15px',
    marginRight: '15px',
  },
};

export default navButtonsStyle;
