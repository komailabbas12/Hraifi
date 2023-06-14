import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AppStyles, heightPixel, pixelSizeVertical } from '../../../Style/Appstyle'

interface props {
    login: boolean,
    onPressLogin: () => void,
    onPressSignUp: () => void,

}

const ButtonComp: FC<props> = ({ onPressSignUp, onPressLogin, login }) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onPressLogin} style={[styles.buttonbodycontainer, { borderColor: login ? AppStyles.color.primarycolor : AppStyles.color.bglight }]}>
                <Text style={[styles.buttonText, { color: login ? AppStyles.color.primarycolor : AppStyles.color.dark }]}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onPressSignUp}
                style={[styles.buttonbodycontainer, { borderColor: login ? AppStyles.color.bglight : AppStyles.color.primarycolor }]}>
                <Text style={[styles.buttonText, { color: login ? AppStyles.color.dark : AppStyles.color.primarycolor }]}>Sign Up</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({

    buttonContainer: {
        flexDirection: "row",
        marginTop: pixelSizeVertical(30)
    },
    buttonText: {
        fontSize: AppStyles.fontSize.contentSeconday,
        fontFamily: AppStyles.fontname.semibold
    },
    buttonbodycontainer: {
        width: "50%",
        alignItems: "center",
        paddingBottom: pixelSizeVertical(18),
        borderBottomWidth: heightPixel(2),
    },
})

export default ButtonComp