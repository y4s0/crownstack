import React, { useEffect } from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getSongs } from '../redux/actions';
import {Card} from 'react-native-shadow-cards';


const SongsList = ({navigation}) => {

    const {songsList} = useSelector(state => state.songsReducer);
    const dispatch = useDispatch()
    const fetchSongs = () => dispatch(getSongs());
    

    useEffect(() => {
        fetchSongs()
    }, [])

  return (
    <View style={{flex:1, paddingHorizontal: 20 }}>
      <View style={{flex:1}}>
          <FlatList
          data={songsList.results}
          renderItem={({item}) => {
              return (
                <TouchableOpacity 
                onPress={ () => navigation.push('Detail', {detail: item})}
                >
                  <View style={{marginTop:10}}>
                  <Card>
                    <View style={{flexDirection:'row', marginTop: 8, marginLeft:8, marginBottom:8, marginRight:8 }}>
                      <Image source={{uri: item["artworkUrl60"]}} 
                      resizeMode="cover"
                      style={{width: 100, height: 100, borderRadius: 10}}
                      />
                      <View style={{flexDirection: 'column', marginLeft: 20}}>
                        <View>
                          <Text>{item["collectionCensoredName"]}</Text>
                        </View>
                        <View style={{marginTop:8}}>
                          <Text>{item["artistName"]}</Text>
                        </View>
                      </View>
                    </View>
                  </Card>
                  </View>
                </TouchableOpacity>
              );
          }}
          >
          </FlatList>

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
export default SongsList;
