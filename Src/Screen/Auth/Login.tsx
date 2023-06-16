import { Formik } from 'formik'
import React, { FC } from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import Button from '../../CommonComponent/Button'
import Cross from '../../CommonComponent/Cross'
import { AppStyles, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../../Style/Appstyle'
import ButtonComp from './Component/ButtonComp'
import CustomTextinput from './Component/CustomTextinput'
import { LoginvalidationSchema } from './ValidationSchema/Validation'

interface props {
  show: boolean,
  closeModal: () => void
  openLogin: () => void
  opensignup: () => void
}

const Login: FC<props> = ({ show, closeModal, opensignup, openLogin }) => {
  const handleLogin = (values: { email: string; password: string }) => {
    // Handle login logic
    console.log(values);
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
          <ButtonComp login={true} onPressLogin={openLogin} onPressSignUp={opensignup} />
          <View style={styles.inputbody}>
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={LoginvalidationSchema}
              onSubmit={handleLogin}
            >
              {({ handleSubmit }) => (
                <View>
                  <CustomTextinput
                    name="email"
                    icon="envelope-o"
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                  <View style={{marginVertical:pixelSizeVertical(25)}}>
                    <CustomTextinput
                      name="password"
                      icon="lock"
                      placeholder="Password"
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
    paddingHorizontal: pixelSizeHorizontal(10),
    borderRadius: heightPixel(5)
  },
  bodycontainer: {
    backgroundColor: AppStyles.color.light,
    borderRadius: pixelSizeHorizontal(2),
    paddingHorizontal: pixelSizeHorizontal(30),
    paddingVertical: pixelSizeVertical(5)
  },
  absolute: {
    position: 'absolute',
    top: heightPixel(10),
    right: widthPixel(10)
  },
  inputbody: {
    marginTop: pixelSizeVertical(40)

  }

})
export default Login