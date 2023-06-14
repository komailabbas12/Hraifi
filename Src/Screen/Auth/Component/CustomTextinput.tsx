import { useField } from 'formik';
import React from 'react';
import { StyleProp, StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AppStyles, heightPixel, pixelSizeVertical } from '../../../Style/Appstyle';

interface TextInputWithIconProps extends TextInputProps {
    name: string;
    icon: string;
    containerStyle?: StyleProp<ViewStyle>;
}

const CustomTextinput: React.FC<TextInputWithIconProps> = ({ name, icon, containerStyle, ...props }) => {
    const [field, meta] = useField(name);
    return (
        <View>
            <View style={[styles.container, containerStyle]}>
                <FontAwesome name={icon} style={styles.icon} color={AppStyles.color.dark} size={heightPixel(20)} />
                <TextInput
                    placeholderTextColor={AppStyles.color.dark}
                    style={styles.input}
                    onChangeText={field.onChange(name)}
                    onBlur={field.onBlur(name)}
                    value={field.value}
                    {...props}

                />
            </View>
            {meta.touched && meta.error && <Text style={styles.error}>{meta.error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor:AppStyles.color.light
      
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        color: AppStyles.color.dark,
        borderRadius:8
    },
    error: {
        color: 'red',
      
    },
});

export default CustomTextinput;
