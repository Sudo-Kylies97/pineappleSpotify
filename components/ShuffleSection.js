import React from "react"
import { Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const style = require("../styles")
const ShuffleSection = ({numbers}) => {

    return (
        <LinearGradient colors={['#434343', '#282929', '#1d1d1d', '#1d1d1d']}>
            <View style={style.ShuffleSectionContainer}>
                <View>
                    <Text style={[style.darkText,{ marginTop: 10}]}>Abalaleli Benyanga Abangu-{numbers}</Text>
                    <View style={style.followingContainer}>
                        <TouchableOpacity style={style.buttonContainer}>
                            <Text style={[style.lightText,{paddingHorizontal: 15, paddingVertical: 5}]}>OBALANDELAYO</Text>
                        </TouchableOpacity>
                        <Text style={[ style.darkText,{ fontSize: 15, fontWeight: "900", textAlign: "right" }]}> . . .</Text>
                    </View>
                </View>
                <Image source={require('../Assets/playIcon.png')} style={style.playShuffleImage} />
            </View>
        </LinearGradient>
    )

}

export default ShuffleSection