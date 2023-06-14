import { useField } from 'formik';
import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import DocumentPicker, {
    types
} from 'react-native-document-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AppStyles, heightPixel, pixelSizeHorizontal, pixelSizeVertical } from '../Style/Appstyle';
interface props {
    name: string;
    icon: string;
    placeholder: string;
    containerStyle?: StyleProp<ViewStyle>;
}

const FilerPicker: React.FC<props> = ({ name, icon, placeholder, containerStyle }) => {
    const [field, meta, helpers] = useField(name);
    return (
        <TouchableOpacity onPress={() => {
            DocumentPicker.pick({
                type: types.pdf,
            })
                .then((res) => {
                    helpers.setValue(res[0])
                })
                .catch(e => console.log("something happen when picking files"))
        }} style={{ marginBottom: pixelSizeVertical(30) }}>
            <View style={[styles.container, containerStyle]}>
                <FontAwesome name={icon} style={styles.icon} color={AppStyles.color.dark} size={heightPixel(20)} />
                <Text style={styles.textstyle}>{field?.value?.name ? field?.value?.name : placeholder}</Text>
            </View>
            {meta.touched && meta.error && <Text style={styles.error}>{meta.error}</Text>}
        </TouchableOpacity>
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
        paddingVertical: pixelSizeVertical(20)

    },
    icon: {
        marginRight: 10,
    },
    textstyle: {
        color: AppStyles.color.dark,
        fontFamily: AppStyles.fontname.main,
        fontSize: AppStyles.fontSize.subtitle,
        marginRight:pixelSizeHorizontal(20)

    },

    error: {
        color: 'red',

    },
});

export default FilerPicker;
