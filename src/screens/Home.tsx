import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const Home: React.FC = () => {
  const [data, setData] = useState([
    {
      id: 1,
      value: 'sfsgg',
    },
    {
      id: 2,
      value: 'sfsgg',
    },
    {
      id: 3,
      value: 'sfsgg',
    },
    {
      id: 5,
      value: 'sfsgg',
    },
  ]);
  return (
    <View style={{flex: 1, backgroundColor: '#ff'}}>
      <Text>{'8988'}</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.value}</Text>
            </View>
          );
        }}
        extraData={data}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
