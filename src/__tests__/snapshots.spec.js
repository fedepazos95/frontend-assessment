/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import renderer from 'react-test-renderer';

// Components
import Avatar from 'components/Avatar';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import Footer from 'components/Footer';
import GnomeCard from 'components/GnomeCard';
import GnomeFieldList from 'components/GnomeFieldList';
import GridContainer from 'components/GridContainer';
import GridItem from 'components/GridItem';
import Header from 'components/Header';
import Parallax from 'components/Parallax';
import Stats from 'components/Stats';

describe('Avatar', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Avatar />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Card', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Card />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('CardHeader', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<CardHeader />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('CardBody', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<CardBody />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Footer', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Footer />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('GnomeCard', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<GnomeCard data={
      {
        content: (
          <div />
        ),
      }
    }
    />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('GnomeFieldList', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<GnomeFieldList list={[]} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('GridContainer', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<GridContainer />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('GridItem', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<GridItem />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Header', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Header />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Parallax', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Parallax />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Stats', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Stats />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
