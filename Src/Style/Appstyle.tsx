import { Dimensions, PixelRatio } from 'react-native';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
} = Dimensions.get('window');

const widthBaseScale = SCREEN_WIDTH / 414;
const heightBaseScale = SCREEN_HEIGHT / 896;

export const AppStyles = {
    color: {
        primarycolor: "#022278",
        secondarycolor: "#FFB600",
        light: "#fff",
        bglight: "#f2f5fb",
        dark: "#000",
        darkTransparent: 'rgba(0,0,0,0.7)'
    },
    fontSize: {
        content: normalize(30, 'height'),
        title: normalize(19, 'height'),
        subtitle: normalize(16, 'height'),
        normal: normalize(14, 'height'),
        small: normalize(12, 'height'),
        extraSmall: normalize(12, 'height'),
        contentSeconday: normalize(24, 'height')
    },
    fontname: {
        main: 'Mulish-Regular',
        semibold: "Mulish-SemiBold",
        bold: "Mulish-Bold"
    },
    fontWeight: {
        hairline: '100',
        thin: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
    },
};

export const IconImages = {
    dark: require('../Assets/Images/Logo/logo-dark.png'),
    light: require('../Assets/Images/Logo/logo-light.png'),
    staticbanner: require('../Assets/Images/Logo/repl.png'),
}

//for width  pixel
const widthPixel = (size: number) => {
    return normalize(size, 'width');
};
//for height  pixel
const heightPixel = (size: number) => {
    return normalize(size, 'height');
};

//for Margin and Padding vertical pixel
const pixelSizeVertical = (size: number) => {
    return heightPixel(size);
};

//for Margin and Padding horizontal pixel
const pixelSizeHorizontal = (size: number) => {
    return widthPixel(size);
};

export {
    heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel
};

function normalize(size: number, based = 'width') {
    const newSize = (based === 'height') ?
        size * heightBaseScale : size * widthBaseScale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
