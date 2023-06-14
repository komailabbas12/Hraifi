import React, { FC } from 'react'
import { View } from 'react-native'
import { heightPixel } from '../Style/Appstyle'

interface props {
    color: string
}
const Line: FC<props> = ({ color }) => {
    return (
        <View style={{ backgroundColor: color, width: "100%", height: heightPixel(2) }} />
    )
}

export default Line