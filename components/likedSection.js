import React from "react"
import { Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const style = require("../styles")
const LikedSection = ({ likedSongs, name }) => {

    return (
        <View style={style.container}>
            <Image style={style.likeImage} source={require('../Assets/highklassified.jpeg')} />

            <View style={{ width: "80%", paddingHorizontal: 20 }}>
                <Text style={[ style.lightText,{  paddingTop: 5 }]}>Izingoma Ezihandiwe</Text>
                <Text style={style.darkText}>{likedSongs} Izingoma . {name}</Text>
            </View>

            <Icon name="chevron-forward" size={30} color="#7b7b7a" marginTop={5} />

            <View style={style.heartIcon}>
                <Icon name="heart-circle" size={30} color="#17bb5a" />
            </View>

        </View>
    )

}

export default LikedSection