import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import * as cartActions from '../store/actions/cart';
import { useSelector } from 'react-redux';

import Colors from '../constants/Colors';



const ProductDetailScreen = ({ route, navigation }) => {
    const { ProductId, ProductTitle } = route.params;

    const dispatch = useDispatch();
    const selectedProduct = useSelector(state =>
        state.products.availableProducts.find(prod => prod.id === ProductId));

    useEffect(() => {
        navigation.setParams({
            productTitle: route.params.ProductId === ProductId ? ProductTitle : ["Not Working"]
        })
    }, [])

    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <Image style={styles.image}
                source={{ uri: selectedProduct.Image}} />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={styles.Touch}
                    onPress={() => {
                        dispatch(cartActions.addToCart(selectedProduct));
                    }}>
                    <Text style={styles.btnText}>Add To Cart</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>
                {selectedProduct.Title}
            </Text>
            <Text style={styles.price}>
                {'\u20A8'}:{selectedProduct.Price}
            </Text>
            <Text style={styles.description}>
                {selectedProduct.Description}
            </Text>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 400,
        resizeMode: "contain"
    },
    title: {
        fontSize: 20,
        color: "black",
        fontFamily: 'OpenSans-Bold',
        marginVertical: 10,
        marginHorizontal: 5,
    },
    price: {
        fontSize: 20,
        color: "black",
        marginHorizontal: 5,
        fontFamily: "OpenSans-Bold"
    },
    Touch: {
        width: "50%",
        height: 50,
        borderRadius: 15,
        backgroundColor: Colors.primary,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 5
    },
    btnText: {
        fontSize: 19,
        fontFamily: 'OpenSans-Bold',
        color: "black",
    },
    description: {
        fontSize: 18,
        fontFamily: "OpenSans-Regular",
        color: "black",
        marginHorizontal: 5,
        marginVertical: 5
    }
});

export default ProductDetailScreen;