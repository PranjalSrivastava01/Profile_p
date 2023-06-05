import { StyleSheet, Text, View,SafeAreaView} from 'react-native'
import React from 'react'
import { Avatar,PaperProvider,Title,Caption, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.userInfoSection}>
      <View style={{flexDirection:'row',marginTop:16}}>
     <Avatar.Image
     source={{
      uri:"https://images.unsplash.com/photo-1627087820883-7a102b79179a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRhcml0JTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
     }}
     size={80}
     />
     <View style={{marginLeft:20}}>
      <Title style={[styles.title,{
        marginTop:16,
        marginBottom:5
        }]}>Pranjal Srivastava</Title>
      <Caption style={styles.caption}>@pranjals01052gmail.com</Caption>
     </View>
      </View>
    </View>
    <View style={styles.userInfoSection}>
<View style={styles.row}>
  <Text><Icon name="location-pin" size={20} color="#E52B50" /></Text>
  <Text style={{marginLeft:20}} >Palri,Sonipat</Text>
    </View>
    <View style={styles.row}>
  <Text><Icon name="phone" size={20} color="#E52B50" /></Text>
  <Text style={{marginLeft:20}} >+91 9984733790</Text>
    </View>
    <View style={styles.row}>
  <Text><Icon name="mail" size={20} color="#E52B50" /></Text>
  <Text style={{marginLeft:20}} >@iiits.sonepat.ac.in</Text>
    </View>
    </View>
    <View style={styles.infoBoxWrapper}>
<View style={[styles.infoBox,{
  borderRightColor:'#dddddd',
  borderRightWidth:1
}]}>
<Title>₹ 568</Title>
<Caption>Wallet</Caption>
</View>
<View style={styles.infoBox}>
<Title>10</Title>
<Caption>Orders</Caption>
</View>
    </View>
    <View style={styles.menuWrapper}>
     <TouchableRipple rippleColor={'#ccc'} onPress={()=>{}}>
      <View style={styles.menuItem}>
      <Text><Icon name="shopping-bag" size={20} color="#E52B50" /></Text>
      <Text style={styles.menuItemText}>Your Favourite</Text>
      </View>
     </TouchableRipple>
     <TouchableRipple rippleColor={'#ccc'} onPress={()=>{}}>
      <View style={styles.menuItem}>
      <Text><Icon name="share" size={20} color="#E52B50" /></Text>
      <Text style={styles.menuItemText}>Share Your Profile</Text>
      </View>
     </TouchableRipple>
     <TouchableRipple rippleColor={'#ccc'} onPress={()=>{}}>
      <View style={styles.menuItem}>
      <Text><Icon name="settings" size={20} color="#E52B50" /></Text>
      <Text style={styles.menuItemText}>Settings</Text>
      </View>
     </TouchableRipple>
     <TouchableRipple rippleColor={'#ccc'} onPress={()=>{}}>
      <View style={styles.menuItem}>
      <Text><Icon name="help" size={20} color="#E52B50" /></Text>
      <Text style={styles.menuItemText}>help</Text>
      </View>
     </TouchableRipple>
    </View>
    </SafeAreaView>
   
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
})