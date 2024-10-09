import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { FlatList, TextInput } from 'react-native-web'



const Screen02 = ({ navigation }) => {
    const [data, setData] = useState([
        {
            key: 1,
            type: 'Vegetable',
            name: 'Apple',
            price: '28.00',
            image: require('../assets/Data/Image101.png')
        },
        {
            key: 1,
            type: 'Vegetable',
            name: 'Pear',
            price: '28.00',
            image: require('../assets/Data/Image107.png')
        },
        ,
        {
            key: 1,
            type: 'Vegetable',
            name: 'Coconut',
            price: '28.00',
            image: require('../assets/Data/Image105.png')
        },
        ,
        {
            key: 1,
            type: 'Vegetable',
            name: 'Orange',
            price: '28.00',
            image: require('../assets/Data/Image106.png')
        },
        {
            key: 1,
            type: 'Vegetable',
            name: 'Coconut',
            price: '28.00',
            image: require('../assets/Data/Image105.png')
        },
        ,
        {
            key: 1,
            type: 'Vegetable',
            name: 'Orange',
            price: '28.00',
            image: require('../assets/Data/Image106.png')
        },
        {
            key: 1,
            type: 'Vegetable',
            name: 'Coconut',
            price: '28.00',
            image: require('../assets/Data/Image105.png')
        },
        ,
        {
            key: 1,
            type: 'Vegetable',
            name: 'Orange',
            price: '28.00',
            image: require('../assets/Data/Image106.png')
        },
        {
            key: 1,
            type: 'SeaFood',
            name: 'SeaFood_1',
            price: '28.00',
            image: require('../assets/Data/Image95.png')
        },
        ,
        {
            key: 1,
            type: 'SeaFood',
            name: 'SeaFood_2',
            price: '28.00',
            image: require('../assets/Data/Image95.png')
        },
        {
            key: 1,
            type: 'SeaFood',
            name: 'SeaFood_3',
            price: '28.00',
            image: require('../assets/Data/Image95.png')
        },
        {
            key: 1,
            type: 'SeaFood',
            name: 'SeaFood_4',
            price: '28.00',
            image: require('../assets/Data/Image95.png')
        },
        {
            key: 1,
            type: 'SeaFood',
            name: 'SeaFood_5',
            price: '28.00',
            image: require('../assets/Data/Image95.png')
        }

        ,
        {
            key: 1,
            type: 'Drink',
            name: 'Drink_1',
            price: '28.00',
            image: require('../assets/Data/Image_96.png')
        },
        {
            key: 1,
            type: 'Drink',
            name: 'Drink_2',
            price: '28.00',
            image: require('../assets/Data/Image_96.png')
        },
        {
            key: 1,
            type: 'Drink',
            name: 'Drink_3',
            price: '28.00',
            image: require('../assets/Data/Image_96.png')
        },
        {
            key: 1,
            type: 'Drink',
            name: 'Drink_4',
            price: '28.00',
            image: require('../assets/Data/Image_96.png')
        },
        {
            key: 1,
            type: 'Drink',
            name: 'Drink_5',
            price: '28.00',
            image: require('../assets/Data/Image_96.png')
        }
    ])

    const [type, setType] = useState("Vegetable")
    const [selectedBtn, setSelectedBtn] = useState("Vegetable")
    const [initItemCount, setInitItemCount] = useState(6)
    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <View
                style={{
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    backgroundColor: '#fff'
                }}
            >


                <View>

                    <TouchableOpacity>
                        <Image source={require('../assets/Data/Image183.png')} />
                    </TouchableOpacity>
                </View>
                <View>

                    <TouchableOpacity>
                        <Image source={require('../assets/Data/Image182.png')} />
                    </TouchableOpacity>

                </View>

            </View>

            <View>
                <TextInput

                    style={{
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 10,
                        width: "90%",
                        height: 50,
                        alignSelf: 'center',
                        marginTop: 20,
                        paddingLeft: 20,
                        fontSize: 28
                    }}
                    placeholder='Search'
                >

                </TextInput>
            </View>

            <View
                style={{
                    width: "100%",
                    flexDirection: 'row',
                    justifyContent: "space-around",
                    paddingHorizontal: '20',
                    marginHorizontal: '20',
                    marginVertical: 20

                }}
            >
                <TouchableOpacity

                    style={{
                        borderWidth: 1,
                        padding: 10,
                        borderRadius: 40,
                        backgroundColor: type == "Vegetable" ? "green" : '#fff',
                        color: type == "Vegetable" ? "#fff" : 'blue',
                    }}
                    onPress={() => { setType("Vegetable"), setInitItemCount(6) }}
                >
                    <Text style={{ color: type == "Vegetable" ? "#fff" : 'blue', }}>Vegetable</Text>
                </TouchableOpacity>

                <TouchableOpacity

                    style={{
                        borderWidth: 1,
                        padding: 10,
                        borderRadius: 40,
                        backgroundColor: type == "SeaFood" ? "green" : '#fff',

                    }}
                    onPress={() => { setType("SeaFood"), setInitItemCount(6) }}
                >
                    <Text style={{ color: type == "SeaFood" ? "#fff" : 'blue', }}>SeaFood</Text>
                </TouchableOpacity>

                <TouchableOpacity

                    style={{
                        borderWidth: 1,
                        padding: 10,
                        borderRadius: 40,
                        backgroundColor: type == "Drink" ? "green" : '#fff',
                        color: type == "Drink" ? "#fff" : 'blue',
                    }}
                    onPress={() => { setType("Drink"), setInitItemCount(6) }}
                >
                    <Text style={{ color: type == "Drink" ? "#fff" : 'blue', }}>Drink</Text>
                </TouchableOpacity>
            </View>


            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    padding: 20,
                    marginVertical: '20', alignItems: 'center'


                }}
            >
                <Text style={{ color: 'green', fontSize: 25 }}>
                    Order your favorite
                </Text>

                <TouchableOpacity>
                    <Text style={{ fontSize: 25, color: 'orange' }}>See All</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={data.filter((item) => item.type == type).slice(0, initItemCount)}

                renderItem={({ item }) => (
                    <View
                        style={{
                            width: '45%',
                            justifyContent: 'space-between',
                            alignItems: 'center',


                            marginVertical: 10,

                        }}
                    >
                        <TouchableOpacity onPress={() => navigation.navigate("Screen03")}>
                            <Image source={item.image} width={150} height={150} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>{item.name}</Text>
                    </View>
                )}
                numColumns={2}
            >



            </FlatList>
        </ScrollView>
    )
}

export default Screen02
