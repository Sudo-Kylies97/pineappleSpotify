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
    color:secondaryTextColour, 
    fontFamily:"Circular"
   }, 
   lightText:{
    color:primaryTextColour, 
    fontFamily:"Circular"
   },
   likeIconContainer:{
    position:"absolute", 
    backgroundColor: backgroundColor, 
    margin:20, 
    borderRadius : 40
   }, 
   container: {
    justifyContent:"space-between", 
    flexDirection:"row", 
    margin:15
   },
   playlistImage: {
    height:40, 
    maxWidth:40
   },
   followingContainer : {
    flexDirection: "row", 
    marginTop: 10, 
    justifyContent: "space-between", 
    marginRight: "10%" 
   },
   buttonContainer : { 
    borderColor: "#eeefef", 
    borderWidth: 1, 
    borderRadius: 5 
   }, 
   playShuffleImage : {
    width: 80, 
    height: 80, 
    resizeMode: "contain"
   },
   likeImage: {
    height: 40, 
    borderRadius: 30, 
    maxWidth: 40
   },
   heartIcon : {
    position: "absolute", 
    backgroundColor: backgroundColor, 
    margin: 20, 
    borderRadius: 40 
   },
   navbarContainer: {
    justifyContent:"space-between", 
    flexDirection:"row", 
    position:"absolute",
    bottom:0, 
    height:"15%", 
    width:"100%", 
    backgroundColor:"#282929", 
    paddingHorizontal:"10%", 
    alignItems:"center"
   },
   alignFooter: {
    alignItems:"center"
   }
});