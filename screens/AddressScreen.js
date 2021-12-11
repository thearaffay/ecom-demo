import React, { useState,useCallback,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'
import * as addressActions from '../store/actions/address';


const AddressScreen = (props) => {

    const addressState = useSelector(state => state.address.address);
    console.log('+++++++++++++++++++++++++++++++++++++++',addressState)
    const dispatch = useDispatch();


    const loadaddress = useCallback(async () => {
        console.log('LOAD')
        await dispatch(addressActions.fetchAddress())
    },[dispatch])

    useEffect(() => {
        loadaddress()
    }, [dispatch])

    const [name, setName] = useState('')
    const [emailId, setEmailId] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [address, setAddress] = useState('')
    const [landmark, setLandmark] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [pincode, setPincode] = useState('')

    

    const addresses = {
        name: name,
        emailId: emailId,
        phoneNo: phoneNo,
        address: address,
        landmark: landmark,
        city: city,
        state: state,
        pincode: pincode
    }

    const checkTextInput = () => {
        //Check for the Name TextInput
        if (!name.trim()) {
            alert('Please Enter Name');
            return;
        }
        //Check for the Email TextInput
        else if (!emailId.trim()) {
            alert('Please Enter Email');
            return;
        }
        else if (!phoneNo.trim()) {
            alert('Please Enter Phnone NO.');
            return;
        }
        else if (!address.trim()) {
            alert('Please Enter Complete Address');
            return;
        }
        else if (!landmark.trim()) {
            alert('Please Enter Landmark');
            return;
        }
        else if (!city.trim()) {
            alert('Please Enter City');
            return;
        }
        else if (!state.trim()) {
            alert('Please Enter State');
            return;
        }
        else if (!pincode.trim()) {
            alert('Please Enter Pincode');
            return;
        }
    };
    // const submitHandler = () => {
    //   if (checkTextInput) {
    //     const user = firestore().collection('address')
    //     user.add({
    //       name: name,
    //       emailId: emailId,
    //       phoneNo: phoneNo,
    //       address: address,
    //       landmark: landmark,
    //       city: city,
    //       state: state,
    //       pincode: pincode
    //     })
    //     props.navigation.navigate('paymentGateway')
    //   } 
    // }



    return (
        <ScrollView >
            
            <View style={styles.form}>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={text => setName(text)}
                        autoCapitalize='none'
                    />
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Email Id</Text>
                    <TextInput
                        style={styles.input}
                        value={emailId}
                        onChangeText={text => setEmailId(text)}
                        autoCapitalize='none' />
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Phone NO.</Text>
                    <TextInput
                        style={styles.input}
                        value={phoneNo}
                        onChangeText={text => setPhoneNo(text)}
                        keyboardType={'number-pad'}
                        maxLength={10} />
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Address</Text>
                    <TextInput
                        style={styles.input}
                        value={address}
                        onChangeText={text => setAddress(text)}
                        autoCapitalize='none' />
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Landmark</Text>
                    <TextInput
                        style={styles.input}
                        value={landmark}
                        onChangeText={text => setLandmark(text)}
                        keyboardType={'default'}
                        autoCapitalize='none'
                    />
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>City</Text>
                    <TextInput
                        style={styles.input}
                        value={city}
                        onChangeText={text => setCity(text)}
                        keyboardType={'default'}
                        autoCapitalize='none'
                    />
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>State</Text>
                    <TextInput
                        style={styles.input}
                        value={state}
                        onChangeText={text => setState(text)}
                        keyboardType={'default'}
                        autoCapitalize='none'
                    />
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Pincode</Text>
                    <TextInput
                        style={styles.input}
                        value={pincode}
                        onChangeText={text => setPincode(text)}
                        keyboardType={'number-pad'}
                        maxLength={6} />
                </View>
            </View>
            <View>
                <View style={{ marginBottom: 15 }}>
                    <TouchableOpacity style={styles.actions} onPress={() => {
                        dispatch(addressActions.addAddress(addresses))
                        props.navigation.navigate('paymentGateway')
                    }} >
                        <Text style={styles.btext}>Submit</Text>
                    </TouchableOpacity>
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

})


export default AddressScreen
