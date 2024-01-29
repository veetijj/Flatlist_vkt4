import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import Row from './components/Row';
import Search from './components/Search';
import Data from './components/Data';

export default function App() {
  const [items, setItems  ] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    setItems(Data);
    console.log(Data);
  }, []);

  const select = (id) => {
    setSelectedId(id);
  }

  const executeSearch = (search) => {
    
    const searchArray = Data.filter(person => person.lastname.startsWith(search));
    setItems(searchArray);
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        renderItem={({ item }) => (
          <Row person={item} selectedId={selectedId} select={select} />
        )}
        style={styles.FlatList}
        ></FlatList>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  FlatList: {
    flex: 1,
    marginTop: 20,
    width: '100%',
  },
});
