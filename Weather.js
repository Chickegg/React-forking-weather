import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Weather({temp, condition}) {
    return (
        <View style={styles.container}>
            <View style={styles.harfcontainer}>
                <MaterialCommunityIcons size={96} name ="weather-rainy"></MaterialCommunityIcons>
                <Text style={styles.temp}>{temp}℃</Text> 
            </View>   
            <View style={styles.harfcontainer}>
                
            </View> 
        </View>
    );
};

Weather.propTyles = {
    temp: PropTypes.Number,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds"
    ])
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 42
    },
    harfcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})