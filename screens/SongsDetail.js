import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
const SongsDetail = ({route, navigation}) => {

  const {detail} = route.params
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={{marginTop:10}}>
      <Image source={{uri:detail["artworkUrl60"]}} 
      resizeMode="cover"
      style={{width: windowWidth, height: 150, borderRadius: 10}}
      />
      <View style={{marginTop: 20, marginLeft: 8, marginRight: 8}}>
      <Text>{"Artist Name: " + detail["artistName"]}</Text>
      </View>
      <View style={{marginTop: 20, marginLeft: 8, marginRight: 8}}>
        <Text>{"Censore Name: " + detail["collectionCensoredName"]}</Text>
      </View>
      <View style={{marginTop: 20, marginLeft: 8, marginRight: 8}}>
        <Text>{"Collections Name: " + detail["collectionName"]}</Text>
      </View>
      <View style={{marginTop: 20, marginLeft: 8, marginRight: 8}}>
        <Text>{"Description: " + detail["description"]}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SongsDetail;
