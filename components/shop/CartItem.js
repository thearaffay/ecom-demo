import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Colors from '../../constants/Colors';

const CartItem = props => {
    return (
        <View style={styles.cartItem}>
            <Image
                style={{ width: 100, height: 100, resizeMode: "contain" }}
                source={{ uri: props.image }}
            />
            <View style={styles.itemData}>
                <Text>
                    <Text style={styles.mainText}>{props.title}</Text>
                    {"\n"}
                    <Text style={styles.amount}> ₹ {props.amount}</Text>
                    {"\n"}
                    {props.showing && (<Text style={styles.quantity}>QTY: {props.quantity} </Text>)}
                </Text>
            </View>
            {props.deletable && (
                <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between" }}>
                    <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton}>
                        <AntDesign name="minus"
                            size={23}
                            color="black" />
                    </TouchableOpacity>
                    <Text style={styles.quantity}> {props.quantity} </Text>
                    <TouchableOpacity onPress={props.onAddToCart} style={styles.deleteButton}>
                        <AntDesign name="plus"
                            size={23}
                            color="black" />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    cartItem: {
        padding: 10,
        backgroundColor: "white",
        flexDirection: 'row',
        justifyContent: "space-between",
        borderRadius: 15,
        marginBottom: 8,
    },
    itemData: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },
    quantity: {
        fontFamily: "OpenSans-Regular",
        color: "black",
        fontSize: 16,
    },
    title: {
        fontFamily: "OpenSans-Bold",
        fontSize: 16,
    },
    amount: {
        fontFamily: "OpenSans-Regular",
        color: "black",
        fontSize: 16,
    },
    mainText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 16,
        color: "black",
        marginHorizontal: 5,
    },
    deleteButton: {
        backgroundColor: Colors.primary,
        borderRadius: 10
    },
});

export default CartItem;