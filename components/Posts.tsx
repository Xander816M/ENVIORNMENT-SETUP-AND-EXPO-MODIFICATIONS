import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React, {useState} from 'react'
import { Button } from '@react-navigation/elements'

const Posts = () => {

    const handleHomePress = () => {
        Alert.alert("Home Button", "You tapped the Home icon!");
    };

    const handleAlertPress = () => {
        Alert.alert("Alert button pressed.")
    }
    return (
        <View style={styles.container}>
            <View style={styles.bottomBar}>
                
                
                <TouchableOpacity onPress={handleHomePress}>
                    <Image source={require("../assets/images/home.png")} style={styles.bottomButton} />
                </TouchableOpacity>

                <Image
                    source={require("../assets/images/search.png")}
                    style={styles.bottomButton}
                />
                <Image
                    source={require("../assets/images/grok.png")}
                    style={styles.bottomButton}
                />
                <Image
                    source={require("../assets/images/notifications.png")}
                    style={styles.bottomButton}
                />
                <Image
                    source={require("../assets/images/inbox.png")}
                    style={styles.bottomButton}
                />
                <TouchableOpacity style={styles.alertButton} onPress={handleAlertPress}>
                    <Text style={styles.alertText}>Alert</Text>
                </TouchableOpacity>
            </View>
        </View>
  )
}

export default Posts

const styles = StyleSheet.create({
    container: {
        flex:1
    },

    bottomBar: {
        position: "absolute",
        bottom:-1000,
        left: 0,
        right: 0,
        height:70,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopWidth: 2.5,
        borderTopColor: "#ccc",
        backgroundColor: "#fff",
        paddingBottom:75,
        paddingTop:40,
        paddingLeft:20,
        paddingRight:20

    },

    bottomButton:{
        width:40,
        height:40,
        aspectRatio:"1/1"
    },

    alertButton:{
        height:40,
        borderWidth:2,
        justifyContent:"space-around",
        borderRadius:10,
        padding:8,
        width:60
    },

    alertText:{
        fontWeight:"bold",
        fontSize:18,
    }
})
  
  