import { StyleSheet } from 'react-native';

const primaryTextColour = "#ebebea";
const secondaryTextColour = "#a0a0a1";
const backgroundColor = "#1d1d1d";

module.exports = StyleSheet.create({
   ArtistNameText: {
    alignSelf:"center", 
    position:"absolute", 
    bottom:0, 
    fontSize:40, 
    fontWeight:"bold", 
    color:primaryTextColour, 
    fontFamily:"Circular"
   },
   ShuffleSectionContainer:{
    flexDirection:"row", 
    justifyContent:"space-between", 
    padding:10
   },
   darkText:{
    color:"#a0a0a1", 
    fontFamily:"Circular"
   }, 
   lightText:{
    color:"#ebebea", 
    fontFamily:"Circular"
   }

});