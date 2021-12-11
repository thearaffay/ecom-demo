import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

const EditProductScreen = ({ route, navigation }) => {
    const { productId } = route.params;
    const editedProduct = useSelector(state => state.products.userProducts.find(prod => prod.id === productId))

    const [title, setTitle] = useState(editedProduct ? editedProduct.Title : '')
    const [image, setImage] = useState(editedProduct ? editedProduct.Image : '')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState(editedProduct ? editedProduct.Description : '')

    // useEffect(() => {
    //     navigation.setParams({
    //         headerTitle: route.params.productId === productId ? 'Edit Product' : 'Add Product'
            
    //     })
    // }, [])



    // const submitHandler = useCallback(() => {
    //     console.log('submitting')
    // }
    // )

    // useEffect(() => {
    //     props.navigation.setparams({submit : submitHandler})
    // },[submitHandler])



    return (
        <ScrollView >
            <View style={styles.form}>
                <View stylw={styles.formControl}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput
                        style={styles.input}
                        value={title}
                        onChangeText={text => setTitle(text)} />
                </View>
                <View stylw={styles.formControl}>
                    <Text style={styles.label}>image</Text>
                    <TextInput
                        style={styles.input}
                        value={image}
                        onChangeText={text => setImage(text)} />
                </View>
                {editedProduct ? null : (
                 <View stylw={styles.formControl}>
                    <Text style={styles.label}>price</Text>
                    <TextInput
                        style={styles.input}
                        value={price}
                        onChangeText={text => setPrice(text)} />
                </View>)}
                <View stylw={styles.formControl}>
                    <Text style={styles.label}>description</Text>
                    <TextInput
                        style={styles.input}
                        value={description}
                        onChangeText={text => setDescription(text)} />
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    form: {
        margin: 20,

    },
    formControl: {
        width: '100%'
    },
    label: {
        fontFamily: 'open-sans-bold',
        marginVertical: 8
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1
    },

})

export default EditProductScreen