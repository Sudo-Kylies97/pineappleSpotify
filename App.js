import React from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';


const App = () => {

    return (
        <>
                <ImageBackground style={{ flex: 2 }}  source={require('./highklassified.jpeg')}>
                    <Text style={{ alignSelf:"center", position:"absolute", bottom:0, fontSize:40, fontWeight:"bold", color:"white", fontFamily:"Circular"}}>high klassified</Text>
                </ImageBackground>
                <View style={{ flex: 3, backgroundColor:"#1d1d1d" }}>
                        <LinearGradient colors={['#434343','#282929' ,'#1d1d1d', '#1d1d1d']}>
                            <View style={{flexDirection:"row", justifyContent:"space-between", padding:10}}>
                                <View> 
                                    <Text style={{color:"#a0a0a1", marginTop:10, fontFamily:"Circular"}}>Abalaleli Benyanga Abangu-166.307</Text> 
                                    <View style={{flexDirection:"row", marginTop:10, justifyContent:"space-between", marginRight:"10%"}}>
                                        <TouchableOpacity style={{borderColor:"#eeefef", borderWidth:1, borderRadius:5}}>
                                            <Text style={{color:"#eeefef", paddingHorizontal:15, paddingVertical:5, fontFamily:"Circular"}}>OBALANDELAYO</Text>
                                        </TouchableOpacity>
                                        <Text style={{color:"#a0a0a1", fontSize:15, fontWeight:"900", fontFamily:"Circular", textAlign:"right"}}> . . .</Text>
                                    </View>
                                </View>
                                <Image source={require('./playIcon.png')} style={{width:80, height:80, resizeMode:"contain"}}/>
                            </View>
                        </LinearGradient>

                        <View style={{flexDirection:"row", margin:15, justifyContent:"space-between"}}>
                            <Image style={{ flex: 2, height:40, borderRadius : 30, maxWidth:40 }}  source={require('./highklassified.jpeg')} />
                            
                            <View style={{width:"80%", paddingHorizontal:20}}>
                                <Text style={{color:"#ebebea", paddingTop:5, fontFamily:"Circular"}}>Izingoma Ezihandiwe</Text>
                                <Text style={{color:"#8d8c8d", fontFamily:"Circular"}}>5 Izingoma . high klassified</Text>
                            </View>

                            <Icon name="chevron-forward" size={30} color="#7b7b7a" marginTop={5}/>

                            <View style={{position:"absolute", backgroundColor: "#1d1d1d", margin:20, borderRadius : 40}}>
                                <Icon name="heart-circle" size={30} color="#17bb5a" />
                            </View>
                        
                        </View>
                        
                        <Text style={{color:"#ebebea", padding:10, fontFamily:"Circular", fontSize:20, fontWeight:"bold"}}>Okudumile</Text>

                        <View style={{justifyContent:"space-between", flexDirection:"row", margin:15}}>
                            <Text style={{color:"#ebebea", fontFamily:"Circular", alignSelf:"center", fontSize:20}}>1</Text>
                            <Image style={{ flex: 2, height:40, maxWidth:40 }}  source={require('./highklassified.jpeg')} />
                            <View style={{width:"70%"}}>
                                <Text style={{color:"#ebebea", fontFamily:"Circular"}}>I'm Fine - IMANU Remix</Text>
                                <Text style={{color:"#8d8c8d", fontFamily:"Circular"}}>823,428</Text>
                            </View>
                            <Text style={{color:"#a0a0a1", fontSize:15, fontWeight:"900", fontFamily:"Circular"}}> . . .</Text>
                        </View>
                        <View style={{justifyContent:"space-between", flexDirection:"row", margin:15}}>
                            <Text style={{color:"#ebebea", fontFamily:"Circular", alignSelf:"center", fontSize:20}}>2</Text>
                            <Image style={{ flex: 2, height:40, maxWidth:40 }}  source={require('./highklassified.jpeg')} />
                            <View style={{width:"70%"}}>
                                <Text style={{color:"#ebebea", fontFamily:"Circular"}}>I'm Fine - IMANU Remix</Text>
                                <Text style={{color:"#8d8c8d", fontFamily:"Circular"}}>823,428</Text>
                            </View>
                            <Text style={{color:"#a0a0a1", fontSize:15, fontWeight:"900", fontFamily:"Circular"}}> . . .</Text>
                        </View>
                        <View style={{justifyContent:"space-between", flexDirection:"row", margin:15}}>
                            <Text style={{color:"#ebebea", fontFamily:"Circular", alignSelf:"center", fontSize:20}}>3</Text>
                            <Image style={{ flex: 2, height:40, maxWidth:40 }}  source={require('./highklassified.jpeg')} />
                            <View style={{width:"70%"}}>
                                <Text style={{color:"#ebebea", fontFamily:"Circular"}}>I'm Fine - IMANU Remix</Text>
                                <Text style={{color:"#8d8c8d", fontFamily:"Circular"}}>823,428</Text>
                            </View>
                            <Text style={{color:"#a0a0a1", fontSize:15, fontWeight:"900", fontFamily:"Circular"}}> . . .</Text>
                        </View>

                        <View style={{justifyContent:"space-between", flexDirection:"row", position:"absolute",bottom:0, height:"15%", width:"100%", backgroundColor:"#282929", paddingHorizontal:"10%", alignItems:"center"}}>
                            <View tyle={{alignItems:"center"}}>
                                <Icon name="home-outline" size={30} color="#858585" />
                                <Text style={{color:"#8d8c8d", fontFamily:"Circular"}}>IKhaya</Text>
                            </View>
                            <View tyle={{alignItems:"center"}}>
                                <Icon name="search-outline" size={30} color="#ebebea" />
                                <Text style={{color:"#ebebea", fontFamily:"Circular"}}>Sesha</Text>
                            </View>
                            <View style={{alignItems:"center"}}>
                                <Icon name="menu-outline" size={30} color="#858585" />
                                <Text style={{color:"#8d8c8d", fontFamily:"Circular"}}>Umtapo</Text>
                            </View>
                        </View>

                </View>
        </>
    )
}
const styles = StyleSheet.create({
   HeadlineText : {
    alignSelf:"center", 
    position:"absolute", 
    bottom:0, 
    fontSize:40, 
    fontWeight:"bold", 
    color:"white", 
    fontFamily:"Circular"
   }
  });

export default App;