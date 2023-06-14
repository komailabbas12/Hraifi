import { Formik } from 'formik'
import React, { FC } from 'react'
import { Modal, ScrollView, StyleSheet, View } from 'react-native'
import Button from '../../CommonComponent/Button'
import Cross from '../../CommonComponent/Cross'
import DropDown from '../../CommonComponent/DropDown'
import FilerPicker from '../../CommonComponent/FileField'
import { AppStyles, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../../Style/Appstyle'
import ButtonComp from './Component/ButtonComp'
import CustomTextinput from './Component/CustomTextinput'
import { SIgnUpinitialstate, SignupvalidationSchema } from './ValidationSchema/Validation'

interface props {
    show: boolean,
    closeModal: () => void,
    openLogin: () => void
    opensignup: () => void
}


const SignUp: FC<props> = ({ show, closeModal, opensignup, openLogin }) => {
    const handlesignUp = (values: object) => {
        console.log("Sign Up Values", values);
    };
    return (
        <Modal
            visible={show}
            transparent={false}
            statusBarTranslucent
            animationType='slide'
        >
            <View style={styles.Maincontainer}>
                <View style={styles.bodycontainer}>
                    <View style={styles.absolute}>
                        <Cross close={closeModal} />
                    </View>
                    <ButtonComp login={false} onPressLogin={openLogin} onPressSignUp={opensignup} />
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} >
                        <View style={styles.inputbody}>
                            <Formik
                                initialValues={SIgnUpinitialstate}
                                validationSchema={SignupvalidationSchema}
                                onSubmit={handlesignUp}
                            >
                                {({ handleSubmit, values, setFieldValue }) => (
                                    <View>
                                        <CustomTextinput
                                            name="Provider"
                                            icon="user"
                                            placeholder="Provider"
                                            autoCapitalize="none"
                                        />
                                        <View style={{ marginVertical: pixelSizeVertical(25) }}>
                                            <CustomTextinput
                                                name="UserName"
                                                icon="user"
                                                placeholder="UserName"
                                                autoCapitalize="none"
                                            />
                                        </View>
                                        <CustomTextinput
                                            name="FirstName"
                                            icon="user"
                                            placeholder="First Name"
                                            autoCapitalize="none"
                                        />
                                        <View style={{ marginVertical: pixelSizeVertical(25) }}>
                                            <CustomTextinput
                                                name="LastName"
                                                icon="user"
                                                placeholder="Last Name"
                                                autoCapitalize="none"
                                            />
                                        </View>
                                        <CustomTextinput
                                            name="PhoneNumber"
                                            icon="phone"
                                            placeholder="Phone Number"
                                            keyboardType="phone-pad"
                                        />
                                        <View style={{ marginVertical: pixelSizeVertical(25) }}>
                                            <CustomTextinput
                                                name="email"
                                                icon="envelope-o"
                                                placeholder="Email"
                                                keyboardType="email-address"
                                                autoCapitalize="none"
                                            />
                                        </View>
                                        {/* select the city */}
                                        <View style={{ zIndex: 999999 }}>
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
                                        <View style={{ marginVertical: pixelSizeVertical(25) }}>
                                            <CustomTextinput
                                                name="Address"
                                                icon="location-arrow"
                                                placeholder="Address"
                                                keyboardType="email-address"
                                                autoCapitalize="none"
                                            />
                                        </View>
                                        <View style={{ marginBottom: pixelSizeVertical(30), zIndex: 99999 }}>
                                            <DropDown
                                                name='gender'
                                                items={[
                                                    { label: 'Male', value: 'male' },
                                                    { label: 'Female', value: 'female' },
                                                    { label: 'Other', value: 'other' },
                                                ]}
                                                placeholder='Select the gender'
                                            />
                                        </View>
                                        <FilerPicker
                                            name="file"
                                            icon="file"
                                            placeholder='Upload the file'

                                        />
                                        <CustomTextinput
                                            name="password"
                                            icon="lock"
                                            placeholder="Password"
                                            secureTextEntry
                                        />
                                        <View style={{ marginVertical: pixelSizeVertical(25) }}>
                                            <CustomTextinput
                                                name="confirmpassword"
                                                icon="lock"
                                                placeholder="Confirm Password"
                                                secureTextEntry
                                            />
                                        </View>
                                        <View style={{ marginBottom: pixelSizeVertical(40) }}>
                                            <Button title="Submit" onPress={handleSubmit} />
                                        </View>
                                    </View>
                                )}
                            </Formik>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    Maincontainer: {
        flex: 1,
        backgroundColor: AppStyles.color.darkTransparent,
        justifyContent: "center",
        paddingHorizontal: pixelSizeHorizontal(10)
    },
    bodycontainer: {
        height: '90%',
        backgroundColor: AppStyles.color.light,
        borderRadius: pixelSizeHorizontal(6),
        paddingHorizontal: pixelSizeHorizontal(30),
        paddingVertical: pixelSizeVertical(5),


    },
    absolute: {
        position: 'absolute',
        top: heightPixel(10),
        right: widthPixel(10)
    },
    inputbody: {
        marginTop: pixelSizeVertical(20)

    }

})
export default SignUp