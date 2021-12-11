import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import OrderItem from '../components/shop/OrderItems';

const OrderScreen = props => {
    const orders = useSelector(state => state.orders.orders);
   

    return (
        <FlatList
            data={orders}
            keyExtractor={item => item.id}
            renderItem={itemData => <OrderItem
                amount={itemData.item.totalAmount}
                date={itemData.item.readableDate}
                items={itemData.item.items}
            />
            }
        />
    );
}

export default OrderScreen;