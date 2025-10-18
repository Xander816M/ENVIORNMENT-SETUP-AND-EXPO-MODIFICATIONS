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