import React, { FC } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { AppStyles, IconImages, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../Style/Appstyle'


interface props {
    onPress: () => void
}
const Header: FC<props> = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={IconImages.dark}
                    resizeMode='contain'
                    style={styles.imagestyle}
                />
            </View>
            <View style={styles.leftcontainer}>
                <TouchableOpacity onPress={onPress} style={styles.iconRoundBackground}>
                    <FontAwesome name='user' color={AppStyles.color.dark} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("menu")}>
                    <Entypo name='menu' color={AppStyles.color.dark} size={widthPixel(30)} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppStyles.color.light,
        paddingHorizontal: pixelSizeHorizontal(5),
        paddingVertical: pixelSizeVertical(15),
        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 3
    },
    imagestyle: {
        width: widthPixel(130),
        height: heightPixel(47)
    },
    leftcontainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    iconRoundBackground: {
        width: widthPixel(35),
        height: widthPixel(35),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: AppStyles.color.secondarycolor,
        borderRadius: 100,
        marginRight: pixelSizeHorizontal(8)
    }
})

export default Header