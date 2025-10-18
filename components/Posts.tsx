import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React, {useState} from 'react'
import { Button } from '@react-navigation/elements'

const Posts = () => {

    const handleHomePress = () => {
        Alert.alert("Home Button", "You tapped the Home icon!");
    };

    const handleSearchPress = () => {
        Alert.alert("Search Button", "You tapped the Search icon!");
    };

    const handleGrokPress = () => {
        Alert.alert("Grok Button", "You tapped the Grok icon!");
    };

    const handleNotificationsPress = () => {
        Alert.alert("Notifications Button", "You tapped the Notifications icon!");
    };

    const handleInboxPress = () => {
        Alert.alert("Inbox Button", "You tapped the Inbox icon!");
    };

    const handleAlertPress = () => {
        Alert.alert("Alert Button", "Alert button pressed.")
    }


    return (
        <View style={styles.container}>
            <View style={styles.bottomBar}>
                
                
                <TouchableOpacity onPress={handleHomePress}>
                    <Image source={require("../assets/images/home.png")} style={styles.bottomButton} />
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSearchPress}>
                    <Image source={require("../assets/images/search.png")} style={styles.bottomButton} />
                </TouchableOpacity>

                <TouchableOpacity onPress={handleGrokPress}>
                    <Image source={require("../assets/images/grok.png")} style={styles.bottomButton} />
                </TouchableOpacity>

                <TouchableOpacity onPress={handleNotificationsPress}>
                    <Image source={require("../assets/images/notifications.png")} style={styles.bottomButton} />
                </TouchableOpacity>

                <TouchableOpacity onPress={handleInboxPress}>
                    <Image source={require("../assets/images/inbox.png")} style={styles.bottomButton} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.alertButton} onPress={handleAlertPress}>
                    <Text style={styles.alertText}>Alert</Text>
                </TouchableOpacity>
            </View>
        </View>
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const Posts = () => {
  const[pageSelected, setPageSelected] = useState(false)
  return (
    <View>
      <View>
        <View style={styles.heading}>
          <Image source={{uri: "https://randomuser.me/api/portraits/men/52.jpg",
          }}
          style={styles.profileImage}
          />
          <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/0/09/X_%28formerly_Twitter%29_logo_late_2025.svg",}}
          style={styles.logo}/>
          <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/8/80/Codicons_%E2%80%93_settings-gear.svg",}}
          style={styles.settings}/>
        </View>
        <View style={styles.navigationBar}>
          <TouchableOpacity onPress={() => setPageSelected(false)} style={pageSelected === false&& {borderBottomColor: 'rgba(90, 143, 249, 1)', borderBottomWidth: 3, borderBottomLeftRadius: 2, borderBottomRightRadius: 2, borderTopLeftRadius:3}}> 
            <Text style={[styles.tab,pageSelected === true&& {color:'rgba(100, 100, 101, 1)'}]}>For you</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setPageSelected(true)} style={pageSelected === true&& {borderBottomColor: 'rgba(90, 143, 249, 1)', borderBottomWidth: 3, borderBottomLeftRadius: 2, borderBottomRightRadius: 2, borderTopLeftRadius:3}}> 
            <Text style={[styles.tab,pageSelected === false&& {color:'rgba(100, 100, 101, 1)'}]}>Following</Text>
          </TouchableOpacity>
        </View>
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
  
  
  profileImage:{
    width:30,
    height: 30,
    borderRadius: 20,
  },
  logo:{
    width: 30,
    height: 30
  },
  settings:{
    width: 30,
    height: 30
  },
  heading:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    padding: 15,
    paddingBottom: 30
  },
  navigationBar:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(196, 196, 198, 1)',
  },
  tab:{
    paddingBottom: 5.5,
    paddingLeft:57,
    paddingRight:57
  }
})
