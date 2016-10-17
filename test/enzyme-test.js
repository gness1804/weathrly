const assert = require('chai').assert;
var expect = require('chai').expect;
const React = require('react');
const App   = require('../lib/components/App');
const WeatherButton = require('../lib/components/WeatherButton');
require('locus');
import {shallow, mount, render} from 'enzyme';

describe('App.jsx rendering', function() {
  it('should render the weather for the given location', function() {
    const wrapper = mount(<App />)
    var input = wrapper.find('#current-location-input').simulate('change', {target: {value: 'Denver'}})
    expect(wrapper.state('location')).to.equal('Denver');
  });
});
