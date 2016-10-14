var expect = require('chai').expect;
const React = require('react');
const App   = require('../lib/components/App');
const GetWeather = require('../lib/components/GetWeather');
const WeatherButton = require('../lib/components/WeatherButton');
require('locus');
import {shallow, mount, render} from 'enzyme';

describe('app.jsx should render GetWeather', function() {
  it('should render the application', function () {
    const wrapper = shallow(<App/>);
    expect(wrapper.contains(<GetWeather />)).to.be.true;
  });
});
