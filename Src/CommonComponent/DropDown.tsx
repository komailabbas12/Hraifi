import { useField } from 'formik';
import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

interface props {
    name: string;
    placeholder: string;
    items: { label: string; value: string }[];
}

const DropDown: FC<props> = ({ items, name, placeholder }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [field, meta, helpers] = useField(name);

    useEffect(() => {
        helpers.setValue(value)
    }, [value])
    return (
        <View>
            <DropDownPicker
                placeholder={placeholder}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                style={{borderColor: '#ccc',}}
            />
            {meta.touched && meta.error && <Text style={styles.error}>{meta.error}</Text>}
        </View>

    )
}

const styles = StyleSheet.create({
    error: {
        color: 'red',

    },
});

export default DropDown