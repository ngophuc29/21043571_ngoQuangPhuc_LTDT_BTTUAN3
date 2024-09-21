import React from 'react'
import { Image, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'

const Screen01 = ({ navigation }) => {
    return (
        <View>

            <View>
                <Text style={{ color: 'green', fontSize: 39, fontWeight: 'bold', marginTop: 20, marginLeft: 30 }}>
                    Order your Favorite
                </Text>
            </View>

            <View>
                <Image source={require('../assets/Data/Image_96.png')}
                    style={{ width: 150, height: 150, marginLeft: 215 }}
                />
                <Image source={require('../assets/Data/Image 95.png')}
                    style={{ width: 150, height: 150, marginLeft: 20 }}

                />
                <Image source={require('../assets/Data/Image 97.png')}
                    style={{ width: 150, height: 150, marginLeft: 215 }}

                />

            </View>

            <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 60 }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: 'green',
                        borderRadius: 40,
                        width: 240,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center'

                    }}
                    onPress={() => navigation.navigate("Screen02")}
                >
                    <Text
                        style={{ color: 'white', fontSize: 20 }}
                    >Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Screen01
