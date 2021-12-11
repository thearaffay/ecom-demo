import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useSelector, useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ordersActions from '../store/actions/orders';

const PaymentGatewayScreen = ({ navigation }) => {
    const [isSelected, setSelected] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            transformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                productImage: state.cart.items[key].productImage,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum,
            })
        }
        return transformedCartItems.sort((a, b) =>
            a.productId > b.productId ? 1 : -1
        );
    })
    const dispatch = useDispatch();

    const sendOrderHandler = async () => {
        setIsLoading(true);
        await dispatch(ordersActions.addOrder(cartItems, cartTotalAmount));
        setIsLoading(false);
        navigation.navigate("ProductsOverviewScreen")
    };

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Payments",
            headerStyle: {
                backgroundColor: "#073763",
            },
            headerTintColor: "white",
            headerTitleStyle: {
                fontFamily: "OpenSans-Bold"
            },
            headerBackTitleStyle: {
                fontFamily: "OpenSans-Regular"
            },
        })
    })

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.Ftext}>
                    Payment Methods:
                </Text>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelected}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>Cash on Delivery</Text>
                <Ionicons name="md-cash-outline" size={25} />
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    style={styles.checkbox}
                />
                <Text style={styles.label}>Credit/Debit Card</Text>
                <Ionicons name="card" size={25} />
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    style={styles.checkbox}
                />
                <Text style={styles.label}>PhonePe / GooglePay / UPI</Text>
                <Ionicons name="logo-google" size={24} />
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    style={styles.checkbox}
                />
                <Text style={styles.label}>Net Banking</Text>
                <MaterialCommunityIcons name="bank-outline" size={24} />
            </View>
            <View style={{ paddingVertical: 20 }}>
                <Button
                    title="Proceed To Checkout"
                    color="#073763"
                    disabled={isSelected == 0}
                    onPress={sendOrderHandler} />

            </View>
        </View>
    )
}

export default PaymentGatewayScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 10
    },
    checkboxContainer: {
        flexDirection: "row",
        borderWidth: 2,
        marginTop: 20,
        alignItems: "center",
        borderRadius: 8
    },
    checkbox: {
        alignSelf: "center",
        position: 'absolute',
        right: 0,
        width: 50,
        height: 50,
        margin: 10,
        zIndex: 100,
    },
    label: {
        margin: 8,
        fontSize: 20,
        fontFamily: "Open-Sans-Bold",
        color: "black"
    },
    Ftext: {
        fontSize: 25,
        fontFamily: "Open-Sans-Bold",
        color: "black"
    }
});