import React from "react"
import { Image, ImageBackground, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const style = require("../styles")
const Navbar = () => {

    return (
        <View style={style.navbarContainer}>
            <View style={style.alignFooter}>
                <Icon name="home-outline" size={30} color="#858585" />
                <Text style={style.darkText}>IKhaya</Text>
            </View>
            <View style={style.alignFooter}>
                <Icon name="search-outline" size={30} color="#ebebea" />
                <Text style={style.lightText}>Sesha</Text>
            </View>
            <View style={style.alignFooter}>
                <Icon name="menu-outline" size={30} color="#858585" />
                <Text style={style.darkText}>Umtapo</Text>
            </View>
        </View>

    )

}

export default Navbar