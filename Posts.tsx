import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Posts() {
  return (

  <View style ={styles.post}>
   <View style= {styles.postAndText}>
    <Image
        source={require("../assets/images/Profile.jpg")}
        style={styles.profile}
    />
    <Text style={styles.text}>gi
      Hello
    </Text>            
   </View>  

       <Image
        source={require("../assets/images/Photo.jpg")}
        style={styles.image}
        />    
  </View>
    
  );
}

const styles = StyleSheet.create({
  post: {
    flex: 1,
    padding: 10,
    margin: 10,
    justifyContent: "flex-start",
  },
    postAndText: {
    flexDirection: "row",
    alignItems: "center", 
    },
    profile:{
      width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 40,
    
  },

  image: {  
    width: "100%", 
    height:500, 
    borderRadius: 20,
    marginTop : 60,
    
  },
  text: {
    fontSize: 18, 
    flexShrink: 1,
  }
});


