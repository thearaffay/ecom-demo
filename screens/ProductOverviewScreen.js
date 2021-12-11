import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, TouchableOpacity, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import ProductItem from '../components/shop/ProductItem';
import * as cartActions from '../store/actions/cart';
import * as productsActions from '../store/actions/products'
import Colors from '../constants/Colors';
import SearchBar from '../components/shop/SearchBar'





const ProductOverviewScreen = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false)
    const  [searchText, setSearchText] =useState('');
    const products = useSelector(state => state.products.availableProducts)
    const dispatch = useDispatch();


    const handleChange = (text) => {
        setSearchText(text)
    }
    const loadProducts = useCallback(async () => {
        // console.log('LOAD')
        setIsLoading(true);
        await dispatch(productsActions.fetchProducts())
        setIsLoading(false)
    },[dispatch, setIsLoading])

    useEffect(() => {
        loadProducts()
    }, [dispatch])



    const selectItemHandler = (id, Title) => {
        navigation.navigate("ProductDetail", {
            ProductId: id,
            ProductTitle: Title
        })
    }

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size='large' color={Colors.primary} />
            </View>
        )
    }
    
    if (!isLoading && products.length === 0) {
        return (
            <View style={styles.centered}>
                <Text>No Products Found. Maybe Start Adding Some!</Text>
            </View>
        )
    }

    return (
        <View>
            <View>
                <SearchBar search = {searchText} setSearch = {handleChange} />
            </View>
     

        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData => (

                <ProductItem
                    Image={itemData.item.Image}
                    Title={itemData.item.Title}
                    Price={itemData.item.Price}
                    onSelect={() => {
                        selectItemHandler(itemData.item.id, itemData.item.Title)
                    }}

                >
                    <TouchableOpacity style={styles.actions} onPress={() => {
                        dispatch(cartActions.addToCart(itemData.item));
                    }}>
                        <Text style={styles.btext}>Add To Cart</Text>
                    </TouchableOpacity>
                </ProductItem>
            )}
        />
           </View>
    )
};

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
    },
    centered:
        { flex: 1, justifyContent: 'center', alignItems: 'center' }
})

export default ProductOverviewScreen;