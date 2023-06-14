import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import { AppStyles, heightPixel } from '../Style/Appstyle'

interface props {
    close: () => void
}

const Cross: FC<props> = ({ close }) => {
    return (
        <TouchableOpacity onPress={close} style={{zIndex:999999}} >
            <Entypo name='cross' color={AppStyles.color.dark} size={heightPixel(22)} />
        </TouchableOpacity>
    )
}

export default Cross