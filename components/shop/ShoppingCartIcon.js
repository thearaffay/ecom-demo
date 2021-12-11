import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

function ShoppingCartIcon() {
    const cartProducts = useSelector(state => state.cart.items);
    // console.log("data", cartProducts);
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
        <View style={{ padding: 5 }}>
            <View style={{
                position: 'absolute', height: 25,
                width: 25, borderRadius: 15, backgroundColor: "rgba(95,197,123,0.8)",
                right: 24, alignItems: 'center', justifyContent: 'center', zIndex: 2000
            }}>
                <Text style={{ color: "white", fontWeight: "bold" }}
                >{cartProducts.length}</Text>
            </View>
            <Ionicons name="cart" size={35} color="black"  />
        </View>
        </TouchableOpacity>
    )
}

export default ShoppingCartIcon;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})