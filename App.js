import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from 'react-native';
import axios from "axios";

const API_KEY = "6ee770953ea44ffedf8cf74c360c2b88";
export default class extends React.Component {
  state = {
    isLoading : true
  };
  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
    console.log(data);
  };
  getLocation = async() => {
    try {
      await Location.requestBackgroundPermissionsAsync();
      const {
         coords: { latitude, longitude } 
    } = await Location.getCurrentPositionAsync();
    this.getWeather(latitude, longitude);
    this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}


