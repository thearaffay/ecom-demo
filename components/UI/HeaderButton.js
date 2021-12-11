import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


function HeaderButton() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("EditProduct")}>
        <View style={{ padding: 5 }}>
            <Ionicons name="md-create" size={35} color="black"  />
        </View>
        </TouchableOpacity>
    )
}

export default HeaderButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})
























// import React from 'react';
// import { TouchableOpacity } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';

// // import Colors from '../../constants/Colors';


// const CustomHeaderButton = () => {

//     const navigation = useNavigation();
//     return (
//         <TouchableOpacity onPress={() => navigation.navigate("EditProduct")}>
//             <Ionicons name="md-create" size={35} color="black"  />
//         </TouchableOpacity>

//     );
// }

// export default CustomHeaderButton;