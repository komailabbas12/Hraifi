import { Formik } from 'formik'
import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import CustomTextinput from '../Screen/Auth/Component/CustomTextinput'
import { Searchinitialstate, SearchvalidationSchema } from '../Screen/Auth/ValidationSchema/Validation'
import { AppStyles, heightPixel, pixelSizeVertical } from '../Style/Appstyle'
import Button from './Button'
import DropDown from './DropDown'

interface props {

}

const Search: FC<props> = () => {
    const handleSearch = (values: object) => {
        console.log(values);
    };
    return (
        <View style={styles.container}>
            <Formik
                initialValues={Searchinitialstate}
                validationSchema={SearchvalidationSchema}
                onSubmit={handleSearch}
            >
                {({ handleSubmit }) => (
                    <View>
                        <CustomTextinput
                            name="keyword"
                            icon="tag"
                            placeholder="Search keyword"
                            autoCapitalize="none"
                        />
                        <View
                            style={{ marginVertical: pixelSizeVertical(5), zIndex: 999999 }}
                        >
                            <DropDown
                                name='city'
                                items={[
                                    { label: 'Islamabad', value: 'Islamabad' },
                                    { label: 'Lahore', value: 'Lahore' },
                                    { label: 'Peshawar', value: 'Peshawar' },
                                ]}
                                placeholder='Select the city'
                            />
                        </View>
                        <View
                            style={{ marginBottom: pixelSizeVertical(20), zIndex: 99999 }}
                        >
                            <DropDown
                                name='category'
                                items={[
                                    { label: 'Electrician', value: 'Electrician' },
                                    { label: 'labour', value: 'labour' },
                                    { label: 'Enginner', value: 'Enginner' },
                                ]}
                                placeholder='Select the category'
                            />
                        </View>

                        <View style={{ marginBottom: pixelSizeVertical(10) }}>
                            <Button title="Search" onPress={handleSubmit} />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: heightPixel(8),
        backgroundColor: AppStyles.color.bglight,
        borderRadius: heightPixel(5)

    }

})

export default Search