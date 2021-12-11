import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductOverviewScreen from '../screens/ProductOverviewScreen';
import PaymentGatewayScreen from '../screens/PaymentGatewayScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ShoppingCartIcon from '../components/shop/ShoppingCartIcon';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import AddressScreen from '../screens/AddressScreen';
import HeaderButton from '../components/UI/HeaderButton'
import CartScreen from '../screens/CartScreen';
import OrderScreen from '../screens/OrdersScreen';
import Colors from '../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';





const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const EditStackNavigator = ({navigation}) => {
    return(
    <Stack.Navigator>
        <Stack.Screen
            name="userProduct"
            component={UserProductsScreen}
            options={{
                title: "Your Products", headerStyle: {
                    backgroundColor: Colors.primary,
                },
                headerTintColor: "black",
                headerTitleStyle: {
                    fontFamily: "OpenSans-Bold"
                },
                headerBackTitleStyle: {
                    fontFamily: "OpenSans-Regular"
                },
                headerRight: () =>( <HeaderButton />)
            }}
        />
            <Stack.Screen
                name="EditProduct"
                component={EditProductScreen}
                options={{
                    title: "Your Products", 
                    // title: route.params.headerTitle,
                    headerStyle: {
                        backgroundColor: Colors.primary,
                    },
                    headerTintColor: "black",
                    headerTitleStyle: {
                        fontFamily: "OpenSans-Bold"
                    },
                    headerBackTitleStyle: {
                        fontFamily: "OpenSans-Regular"
                    }
    
                }}
            />

    </Stack.Navigator>
)
}
function ShopNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="ProductsScreen" component={ProductOverviewScreen}
                    options={{
                        title: "Home", headerStyle: {
                            backgroundColor: Colors.primary,
                        },
                        headerTintColor: "black",
                        headerTitleStyle: {
                            fontFamily: "OpenSans-Bold",
                        },
                        headerBackTitleStyle: {
                            fontFamily: "OpenSans-Regular"
                        },
                        drawerIcon: drawerConfig => (
                            <Ionicons name="md-home"
                                size={23}
                                color={drawerConfig.tintColor} />
                        ),
                        headerRight: () => <ShoppingCartIcon />
                    }} />
                <Drawer.Screen name="ProductDetail" component={ProductDetailScreen}
                    options={({ route }) => ({
                        title: "product Details",
                        drawerItemStyle: { height: 0 },
                        // title: route.params.productTitle,
                        headerStyle: {
                            backgroundColor: Colors.primary,
                        },
                        headerTintColor: "black",
                        headerTitleStyle: {
                            fontFamily: "OpenSans-Bold",
                        },
                        headerRight: () => <ShoppingCartIcon />
                    })} />

                <Drawer.Screen name="Cart" component={CartScreen}
                    options={{
                        title: "Your Cart", headerStyle: {
                            backgroundColor: Colors.primary,
                        },
                        headerTintColor: "black",
                        headerTitleStyle: {
                            fontFamily: "OpenSans-Bold"
                        },
                        headerBackTitleStyle: {
                            fontFamily: "OpenSans-Regular"
                        },
                        drawerIcon: drawerConfig => (
                            <Ionicons name="md-cart"
                                size={23}
                                color={drawerConfig.tintColor} />
                        ),
                    }} />
                <Drawer.Screen name="Orders" component={OrderScreen}
                    options={{
                        title: "Your Orders", headerStyle: {
                            backgroundColor: Colors.primary,
                        },
                        headerTintColor: "black",
                        headerTitleStyle: {
                            fontFamily: "OpenSans-Bold"
                        },
                        headerBackTitleStyle: {
                            fontFamily: "OpenSans-Regular"
                        },
                        drawerIcon: drawerConfig => (
                            <Ionicons name="md-list"
                                size={23}
                                color={drawerConfig.tintColor} />
                        ),
                    }} />
                <Drawer.Screen name="userProducts" component={EditStackNavigator}
                    options={{
                        title: "Your Products", headerStyle: {
                            backgroundColor: Colors.primary,
                        },
                        headerTintColor: "black",
                        headerTitleStyle: {
                            fontFamily: "OpenSans-Bold"
                        },
                        headerBackTitleStyle: {
                            fontFamily: "OpenSans-Regular"
                        },
                        drawerIcon: drawerConfig => (
                            <Ionicons name="md-create"
                                size={23}
                                color={drawerConfig.tintColor} />
                        ),
                        // headerRight: () => <HeaderButton />


                    }} />
                <Drawer.Screen name="paymentGateway" component={PaymentGatewayScreen}
                    options={{ drawerItemStyle: { height: 0 } }} 
                    />
                <Drawer.Screen name="addAddress" component={AddressScreen}
                    options={{ drawerItemStyle: { height: 0 } }} 
                    />
                    
            </Drawer.Navigator>
        </NavigationContainer>


    )
};

export default  ShopNavigator;