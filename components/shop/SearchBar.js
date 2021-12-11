import React,{useState} from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


function SearchBar(props) {
    

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.inputtext}>
                <AntDesign name="search1" size={30} style={styles.icon} />
                <TextInput placeholder="Search" value = {props.search} 
                onChangeText = {text =>props.setSearch(text)} />
            </TouchableOpacity>

        </View>

    )
}

export default SearchBar;

const styles = StyleSheet.create({
    inputtext: {
        margin: 5,
        width: 320,
        height: 40,
        borderWidth: 2,
        borderColor: "grey",
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    container: {
        flexDirection: "row",
    },
    icon: {
        paddingLeft: 5,
        color: "black"
    }
})