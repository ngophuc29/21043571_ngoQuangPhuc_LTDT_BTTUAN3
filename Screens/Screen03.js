import React, { useState } from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native'
import { FlatList, ScrollView } from 'react-native-web'

const Screen03 = ({ navigation }) => {

    const [data, setData] = useState([
        {
            key: 1,
            type: 'Vegetable',
            name: 'Apple',
            price: '28.00',
            image: require('../assets/Data/Image101.png'),
            sl: 5
        },
        {
            key: 1,
            type: 'Vegetable',
            name: 'Pear',
            price: '28.00',
            image: require('../assets/Data/Image107.png'),
            sl: 5
        },
        ,
        {
            key: 1,
            type: 'Vegetable',
            name: 'Coconut',
            price: '28.00',
            image: require('../assets/Data/Image105.png'),
            sl: 5
        },
        ,
        {
            key: 1,
            type: 'Vegetable',
            name: 'Orange',
            price: '28.00',
            image: require('../assets/Data/Image106.png'),
            sl: 5
        },
        {
            key: 1,
            type: 'Vegetable',
            name: 'Coconut',
            price: '28.00',
            image: require('../assets/Data/Image105.png'),
            sl: 5
        },
        ,
        {
            key: 1,
            type: 'Vegetable',
            name: 'Orange',
            price: '28.00',
            image: require('../assets/Data/Image106.png'),
            sl: 5
        },
        {
            key: 1,
            type: 'Vegetable',
            name: 'Coconut',
            price: '28.00',
            image: require('../assets/Data/Image105.png'),
            sl: 5
        },
        ,
        {
            key: 1,
            type: 'Vegetable',
            name: 'Orange',
            price: '28.00',
            image: require('../assets/Data/Image106.png'),
            sl: 5
        },
        {
            key: 1,
            type: 'SeaFood',
            name: 'SeaFood_1',
            price: '28.00',
            image: require('../assets/Data/Image95.png'),
            sl: 5
        },
        ,
        {
            key: 1,
            type: 'SeaFood',
            name: 'SeaFood_2',
            price: '28.00',
            image: require('../assets/Data/Image95.png'),
            sl: 5
        },
        {
            key: 1,
            type: 'SeaFood',
            name: 'SeaFood_3',
            price: '28.00',
            image: require('../assets/Data/Image95.png'),
            sl: 5
        },
        {
            key: 1,
            type: 'SeaFood',
            name: 'SeaFood_4',
            price: '28.00',
            image: require('../assets/Data/Image95.png'),
            sl: 5
        },
        {
            key: 1,
            type: 'SeaFood',
            name: 'SeaFood_5',
            price: '28.00',
            image: require('../assets/Data/Image95.png'),
            sl: 5
        }

        ,
        {
            key: 1,
            type: 'Drink',
            name: 'Drink_1',
            price: '28.00',
            image: require('../assets/Data/Image_96.png'),
            sl: 5
        },
        {
            key: 1,
            type: 'Drink',
            name: 'Drink_2',
            price: '28.00',
            image: require('../assets/Data/Image_96.png'),
            sl: 5
        },
        {
            key: 1,
            type: 'Drink',
            name: 'Drink_3',
            price: '28.00',
            image: require('../assets/Data/Image_96.png'),
            sl: 5
        },
        {
            key: 1,
            type: 'Drink',
            name: 'Drink_4',
            price: '28.00',
            image: require('../assets/Data/Image_96.png'),
            sl: 5
        },
        {
            key: 1,
            type: 'Drink',
            name: 'Drink_5',
            price: '28.00',
            image: require('../assets/Data/Image_96.png'),
            sl: 5
        }
    ])

    const [type, setType] = useState("Vegetable")
    const [selectedBtn, setSelectedBtn] = useState("Vegetable")
    const [soluong, setSoluong] = useState(1)
    return (
        <ScrollView
            stickyHeaderIndices={[0, -1]}

        >

            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Screen02")}
                >
                    <Image source={require('../assets/Data/Image183.png')}></Image>
                </TouchableOpacity>
                <Text style={{ fontSize: 25, color: 'green', fontWeight: 'bold', marginVertical: 10 }}>
                    My Basket
                </Text>
            </View>




            <FlatList
                data={data.filter((item) => item.type === type)}
                renderItem={({ item }) => (

                    <View style={{ width: '100%', marginHorizontal: '2.5%', marginVertical: 5, padding: 15, borderWidth: 1, flexDirection: 'row', alignItems: 'center' }}>

                        <Image source={item.image} style={{ width: 70, height: 70, marginRight: 10 }} />
                        <View>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'green' }}>{item.price}</Text>
                            <Text style={{ fontSize: 18, color: 'silver' }}>{item.name}</Text>
                            <View style={{ flexDirection: 'row' }}>

                                <Image source={require('../assets/Data/Image180.png')} style={{
                                    width: 15, height: 15, marginRight: 10
                                }} />
                                <Image source={require('../assets/Data/Image180.png')} style={{
                                    width: 15, height: 15, marginRight: 10
                                }} />
                                <Image source={require('../assets/Data/Image180.png')} style={{
                                    width: 15, height: 15, marginRight: 10
                                }} />
                                <Image source={require('../assets/Data/Image180.png')} style={{
                                    width: 15, height: 15, marginRight: 10
                                }} />
                                <Image source={require('../assets/Data/Image180.png')} style={{
                                    width: 15, height: 15, marginRight: 10
                                }} />
                            </View>

                        </View>
                        <View style={{ marginLeft: 64, flexDirection: 'row', alignItems: 'center' }}>

                            <Image source={require('../assets/Data/Image176.png')}
                                style={{ height: 26, width: 26, marginVertical: 5 }}

                            />
                            <Text style={{ fontSize: 20, marginHorizontal: 10 }}>{item.sl}</Text>
                            <Image source={require('../assets/Data/Image175.png')}
                                style={{ height: 26, width: 26, marginVertical: 5 }}
                            />

                        </View>
                    </View>
                )}
            >

            </FlatList>

            <View style={{ justifyContent: 'center', width: '100%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 18 }}>
                    <Text style={{ fontSize: 30 }}> Total</Text>
                    <Text style={{ fontSize: 30 }}> $320</Text>

                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >

                    <TouchableOpacity
                        style={{
                            backgroundColor: 'green',

                            borderRadius: 40,
                            width: 240,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: '90',
                            marginVertical: 20
                        }}
                        onPress={() => navigation.navigate("Screen01")}
                    >
                        <Text style={{ fontSize: 20, color: 'white' }}>Payment</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView >
    )
}

export default Screen03
