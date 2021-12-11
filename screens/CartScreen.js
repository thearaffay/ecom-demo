import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/shop/CartItem';
import Colors from '../constants/Colors';
import * as cartActions from '../store/actions/cart';
import Card from '../components/UI/Card';



const CartScreen = props => {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    
    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            transformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                productImage: state.cart.items[key].productImage,
                sum: state.cart.items[key].sum,
            })
        }
        return transformedCartItems.sort((a, b) =>
            a.productId > b.productId ? 1 : -1
        );
    })
    const dispatch = useDispatch();

    return (

        <View style={styles.screen}>
            <View style={{ marginBottom: 15 }}>
                <TouchableOpacity style={styles.actions} onPress={() => { props.navigation.navigate('addAddress')}} >
                    <Text style={styles.btext}>Add Address</Text>
                </TouchableOpacity>
            </View>

            <Card style={styles.summary} >
                <Text style={styles.summaryText}>
                    Total:{' '}
                    <Text style={styles.amount}>₹ {Math.round(cartTotalAmount * 100) / 100}</Text>
                </Text>
                {/* <Button
                    title="Order Now"
                    color={Colors.primary}
                    disabled={cartItems.length === 0}
                    onPress={() => {
                        dispatch(ordersActions.addOrder(cartItems, cartTotalAmount))
                        // props.navigation.goBack();
                    }} /> */}
                <Button
                    title="Checkout"
                    color={Colors.primary}
                    disabled={cartItems.length === 0}
                    onPress={() => {
                        props.navigation.navigate('paymentGateway');
                    }} />
            </Card>
            <View>
                <FlatList data={cartItems}
                    keyExtractor={item => item.productId}
                    showsVerticalScrollIndicator={false}
                    renderItem={itemData => (
                        <CartItem
                            quantity={itemData.item.quantity}
                            title={itemData.item.productTitle}
                            amount={itemData.item.productPrice}
                            image={itemData.item.productImage}
                            deletable
                            onAddToCart={() => {
                                dispatch(cartActions.addQuantity(itemData.item.productId));
                            }}
                            onRemove={() => {
                                dispatch(cartActions.removeFromCart(itemData.item.productId));
                            }}
                        />
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        margin: 20
    },
    summary: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
    },
    summaryText: {
        fontFamily: "OpenSans-Bold",
        fontSize: 18
    },
    amount: {
        color: "black"
    }, 
    actions: {
        justifyContent: 'center',
        alignItems: "center",
        height: 40,
        backgroundColor: Colors.primary,
        borderRadius: 10
    },
    btext: {
        fontSize: 16,
        fontFamily: 'OpenSans-Bold',
        color: "black"
    }
});

export default CartScreen;
