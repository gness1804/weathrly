const assert = require('chai').assert;
var expect = require('chai').expect;
const React = require('react');
const App   = require('../lib/components/App');
const WeatherButton = require('../lib/components/WeatherButton');
require('locus');
var $ = require('jquery');
import {shallow, mount, render} from 'enzyme';

describe('App.jsx state changes', function() {
  it('should change the state of location based on user input', function() {
    const wrapper = mount(<App />);
    wrapper.find('#current-location-input').simulate('change', {target: {value: 'Denver'}});
    expect(wrapper.state('location')).to.equal('Denver');
  });

  it('should render the text "Your Current Location"', function () {
    const wrapper = render(<App />);
    expect(wrapper.text()).to.contain('Your Current Location');
  });

  it('should have an empty array on page load to which weather data will populate', function() {
  const wrapper = mount(<App />)
  expect(wrapper.state('weather')).deep.equal([]);
  });

  it('should not display weather on page load', function() {
  const wrapper = mount(<App />)
  expect(wrapper.state().weather.length).to.equal(0);
  });

  it('should render eight days of weather when the GetWeather button is clicked', function() {
  const wrapper = mount(<App />)
  wrapper.find('#current-location-input').simulate('change', {target: {value: 'Denver'}});
  wrapper.find('#get-weather-button').simulate('click');
  setTimeout(() => {
            expect(wrapper.update().state().weather.length).to.equal(8)
             done();
         }, 2000)
  });

  it('should accept user input but not render any weather if user enters a location besides Denver, San Diego, San Francisco, or Castle Rock', function(){
    const wrapper = mount(<App />)
    wrapper.find('#current-location-input').simulate('change', {target: {value: 'Houston'}});
    wrapper.find('#get-weather-button').simulate('click');
    expect(wrapper.state('location')).to.equal('Houston');
    expect(wrapper.update().state().weather.length).to.equal(0);
  });

it('should open a new browser window if user enters a location besides Denver, San Diego, San Francisco, or Castle Rock', {
  const wrapper = mount(<App />)
  wrapper.find('#current-location-input').simulate('change', {target: {value: 'Houston'}});
  wrapper.find('#get-weather-button').simulate('click');
  expect(window.open);
});
}); //end of App.jsx


describe('WeatherList rendering', function() {
  it.skip('should render the weather for the given location', function() {
    const wrapper = mount(<App />);
    wrapper.find('#current-location-input').simulate('change', {target: {value: 'Denver'}});
    wrapper.find('#get-weather-button').simulate('click');
    const wrapper2 = mount(<WeatherList />)
    var weather = data.weatherType.type
    wrapper.find('.weather-card')
    if (weather === 'sunny')
    expect(wrapper2.state().weather).to.equal('sunny');
  });
  });
