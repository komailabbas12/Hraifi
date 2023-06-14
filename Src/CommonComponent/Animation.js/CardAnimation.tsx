import React, { useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { Easing } from 'react-native-reanimated';
import { heightPixel } from '../../Style/Appstyle';

interface Props {
  bgColor: string;
  angle1:string,
  angle2:string
}

const CardAnimation: React.FC<Props> = ({ bgColor , angle1 , angle2 }) => {
  const rotate = new Animated.Value(0);

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(rotate, {
        toValue: 1, // Rotate the view by approximately 45 degrees
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, []);

  const rotateInterpolation = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: [angle1, angle2], // Change the output range to rotate by approximately 45 degrees
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            backgroundColor: bgColor,
            transform: [
              { rotate: rotateInterpolation },
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '100%',
    height:  heightPixel(300),
  },
});

export default CardAnimation;
