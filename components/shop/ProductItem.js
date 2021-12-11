import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import Card from '../UI/Card';

import Colors from '../../constants/Colors';

const ProductItem = props => {
    return (
        <Card style={styles.container}>
            <View style={styles.imageContainer}>
                <TouchableNativeFeedback onPress={props.onSelect} useForeground>
                    <Image style={styles.image} source={{ uri: props.Image }} />
                </TouchableNativeFeedback>
            </View>
            <Text style={styles.title}>
                {props.Title}
            </Text>
            <Text style={styles.price}>
                {'\u20A8'} : {props.Price}
            </Text>
            <View style={styles.buttonarea}>
                {props.children}
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 340,
        margin: 10,
        overflow: 'hidden'
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: 'contain'
    },
    imageContainer: {
        width: "100%",
        height: "60%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: "hidden"
    },
    title: {
        fontSize: 20,
        marginVertical: 4,
        fontFamily: 'OpenSans-Bold',
        color: "black",
        paddingLeft: 5
    },
    price: {
        fontSize: 18,
        color: "#888",
        fontFamily: 'OpenSans-Bold',
        color: "black",
        paddingLeft: 5
    },
    actions: {
        justifyContent: 'center',
        alignItems: "center",
        width: 100,
        height: 40,
        backgroundColor: Colors.primary,
        borderRadius: 10
    },
    btext: {
        fontSize: 14,
        fontFamily: 'OpenSans-Bold',
        color: "black"
    },
    buttonarea: {
        justifyContent: "center",
        alignItems: "center"
    }
});

export default ProductItem;