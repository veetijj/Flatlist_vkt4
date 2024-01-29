import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Button, TextInput , TouchableOpacity} from 'react-native';

export default function Search({ executeSearch }) {
    const [search, setSearch] = useState('');

    return (
        <View style={styles.searchBox}>
        <TextInput
            value={search}
            onChangeText={text => setSearch(text)}
            placeholder='Search...'
            returnKeyType='search'
            onSubmitEditing={() => executeSearch(search)}
        />
        <TouchableOpacity 
            onPress={() => executeSearch(search)}>
            <Text style={styles.button}>Search</Text>
        </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    searchBox: {
        padding: 20,
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: 'white',
        borderColor: '#333',
        borderWidth: 5,
        borderRadius: 30,
        width: '90%',
        height: 100,
    },
    button: {
        padding: 20,
        marginTop: 1,
        marginLeft: 125,
        fontSize: 20,
    }
});