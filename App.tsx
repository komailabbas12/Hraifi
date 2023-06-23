import React, { FC, useEffect } from 'react'
import RNBootSplash from "react-native-bootsplash";
import { View, StatusBar } from 'react-native'
import Navigation from './Src/Navigation.js'

const App: FC = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true, duration: 500 });
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <StatusBar  hidden />   
      <Navigation />
    </View>
  )
}
export default App