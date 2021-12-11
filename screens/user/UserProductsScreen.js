import React from 'react'
import { View, FlatList, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useSelector,useDispatch } from 'react-redux'

import ProductItem from '../../components/shop/ProductItem'
import Colors from '../../constants/Colors';
import * as productsActions from '../../store/actions/products'


const UserProductsScreen = ({navigation}) => {

    const userProducts = useSelector(state => state.products.userProducts)
    const dispatch = useDispatch()

    const editProductHandler = (id) => {
        navigation.navigate('EditProduct', {productId: id})
    }


    return (
        <FlatList
            data={userProducts}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <ProductItem
                    Image={itemData.item.Image}
                    Title={itemData.item.Title}
                    Price={itemData.item.Price}
                    onSelect={() => {
                        editProductHandler(itemData.item.id)
                    } }

                >
                    <View >
                    <TouchableOpacity style={styles.actions} onPress={() => {
                       editProductHandler(itemData.item.id)
                    }}>
                        <Text style={styles.btext}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actions} onPress={() => {
                        dispatch(productsActions.deleteProduct(itemData.item.id))
                    }}>
                        <Text style={styles.btext}>Delete</Text>
                    </TouchableOpacity>
                    </View>
                </ProductItem>
            )}
        />
    )
}

const styles = StyleSheet.create({
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
    }
})

export default UserProductsScreen

{/* <FlatList
            data={userProducts}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <ProductItem
                    Image={itemData.item.Image}
                    Title={itemData.item.Title}
                    Price={itemData.item.Price}
                    onViewDetail={() =>{}}
                    onAddToCart={() => {}}
                />
            )}
        /> */}