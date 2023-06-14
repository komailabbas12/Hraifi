import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { AppStyles, heightPixel, pixelSizeVertical } from '../Style/Appstyle'

interface props {
    title: string,
    onPress: () => void
}

const Button: FC<props> = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.textstyle}>{title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: pixelSizeVertical(15),
        borderRadius: heightPixel(10),
        backgroundColor: AppStyles.color.secondarycolor
    },
    textstyle: {
        textAlign: 'center',
        color: AppStyles.color.light

    }
})

export default Button