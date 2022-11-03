
// Display the record of 10 students in a list.

import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create(
    {
        container : {
            flex: 1, 
            paddingTop: 22
        },
        item : {
            padding : 10,
            fontSize : 18, 
            height: 44,
        },
    }
);
    const FlatListBasics = () => {
        return (
            <View style= {styles.conatiner}>
                <FlatList
                data={[
                    {key: 'Ayesha'},
                    {key: 'Sara'},
                    {key: 'Hira'},
                    {key: 'Urooj'},
                    {key: 'John'},
                    {key: 'Alice'},
                    {key: 'Bob'},
                    {key: 'Ben'},
                    {key: 'Sana'},
                    {key: 'Gull'},
                ]}
                renderItem = {({item}) => 
            <Text style={styles.item}> {item.key} </Text>}
            />
            </View>
        );
    }

    export default FlatListBasics;