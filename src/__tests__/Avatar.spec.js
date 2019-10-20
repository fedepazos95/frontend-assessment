/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Avatar from 'components/Avatar';

configure({ adapter: new Adapter() });

describe('<Avatar /> with no props', () => {
  const container = shallow(<Avatar />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });
  it('should have an image field', () => {
    expect(container.find('img').length).toEqual(1);
  });
});

describe('<Avatar /> with props', () => {
  const initialProps = {
    image: 'imageUrl',
  };
  const container = shallow(<Avatar {...initialProps} />);

  it('should have proper props for image field', () => {
    expect(container.find('img').props()).toEqual({
      alt: '',
      className: 'makeStyles-rounded-2 makeStyles-fluid-1',
      src: 'imageUrl',
    });
  });
});
