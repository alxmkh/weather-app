import React from 'react';
import App from './App';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import Enzyme, { shallow, render, mount } from 'enzyme';


Enzyme.configure({adapter: new Adapter()});

describe(`Test '<App/> component.`, () => {
    it('Renders <App/> component and equal with snapshot.', () => {
        const tree = shallow(<App/>);
        expect(toJson(tree)).toMatchSnapshot();
    })
})


