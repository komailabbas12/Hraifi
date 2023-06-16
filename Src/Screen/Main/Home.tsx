import React, { FC, useState } from 'react'
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import Header from '../../CommonComponent/Header'
import Line from '../../CommonComponent/Line'
import Search from '../../CommonComponent/Search'
import { AppStyles, IconImages, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../../Style/Appstyle'
import Login from '../Auth/Login'
import SignUp from '../Auth/SignUp'
import CardAnimation from '../../CommonComponent/Animation.js/CardAnimation'
import Button from '../../CommonComponent/Button'

const data = [
    {
        id: 0,
        title: 'Plumber',
        listing: 124,
        image: require('../../Assets/Images/services/6.jpg')
    },
    {
        id: 0,
        title: 'Electrician',
        listing: 100,
        image: require('../../Assets/Images/services/9.jpg')
    },
]

const Home: FC = () => {
    const [login, setlogin] = useState(false)
    const [signup, setsignup] = useState(false)
    return (
        <View style={styles.mainContainer}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Header onPress={() => setlogin(true)} />
                <View style={styles.bodyContainer}>
                    <Text style={styles.headingFirstline}>Hire <Text style={{ color: AppStyles.color.secondarycolor }}>Experts</Text> &</Text>
                    <Text style={[styles.headingFirstline, { fontFamily: AppStyles.fontname.bold, paddingBottom: pixelSizeVertical(40) }]}>Gets your job Done</Text>
                    <Line color={AppStyles.color.secondarycolor} />
                    <View style={{ marginTop: pixelSizeVertical(35) }}>
                        <Search />
                    </View>
                    <View style={styles.staticBanner}>
                        <View style={{ position: "absolute", top: 0, right: 0, left: 0, bottom: 0 }}>
                            <CardAnimation bgColor={AppStyles.color.secondarycolor} angle1='0deg' angle2='10deg' />
                        </View>
                        <View style={{ position: "absolute", top: 0, right: 0, left: 0, bottom: 0 }}>
                            <CardAnimation bgColor={AppStyles.color.primarycolor} angle1='10deg' angle2='0deg' />
                        </View>
                        <View style={{ position: "absolute", top: 0, zIndex: 999999, left: 0, right: 0, bottom: 0, }}>
                            <Image resizeMode='contain' source={IconImages.staticbanner} style={{ width: "100%", height: heightPixel(400), }} />
                        </View>
                    </View>
                    <View style={styles.categorysection}>
                        <Text style={styles.categorytitle}>Categories</Text>
                        <View>
                            {data?.map((item, index) => {
                                return (
                                    <View key={index} style={styles.categoryCard}>
                                        <View style={{ flexDirection: "row" }} >
                                            <Image source={item.image} style={{ borderRadius: 100, width: widthPixel(70), height: widthPixel(70) }} />
                                            <View style={{ marginLeft: pixelSizeHorizontal(25), justifyContent: "space-between", marginVertical: heightPixel(10) }}>
                                                <Text style={{ color: AppStyles.color.primarycolor, fontFamily: AppStyles.fontname.bold, fontSize: AppStyles.fontSize.contentSeconday }}>{item.title}</Text>
                                                <Text style={{ color: AppStyles.color.dark, fontFamily: AppStyles.fontname.main, fontSize: AppStyles.fontSize.subtitle }}>{item.title}</Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            })}
                        </View>
                        <View style={{ alignSelf: "center", width: '35%' , marginVertical: pixelSizeVertical(50) }}>
                            <Button title="View All" onPress={()=> console.log('View more homepage')} />
                        </View>
                    </View>

                    <Login show={login} closeModal={() => setlogin(false)} openLogin={() => { setlogin(true), setsignup(false) }} opensignup={() => { setsignup(true), setlogin(false) }} />
                    <SignUp show={signup} closeModal={() => setsignup(false)} openLogin={() => { setlogin(true), setsignup(false) }} opensignup={() => { setsignup(true), setlogin(false) }} />
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: AppStyles.color.light
    },
    bodyContainer: {
        flex: 1,
        paddingTop: pixelSizeVertical(30),
        paddingHorizontal: pixelSizeHorizontal(22)
    },
    headingFirstline: {
        color: AppStyles.color.primarycolor,
        fontSize: AppStyles.fontSize.content,
        fontFamily: AppStyles.fontname.main
    },
    staticBanner: {
        width: "100%",
        height: heightPixel(400),
        marginTop: pixelSizeVertical(30)
    },
    categorysection: {
        marginVertical: pixelSizeVertical(20)
    },
    categorytitle: {
        fontFamily: AppStyles.fontname.bold,
        fontSize: AppStyles.fontSize.content,
        color: AppStyles.color.primarycolor
    },
    categoryCard: {
        backgroundColor: AppStyles.color.light,
        borderRadius: heightPixel(20),
        paddingHorizontal: pixelSizeHorizontal(25),
        paddingVertical: pixelSizeVertical(30),
        elevation: 5,
        marginTop: pixelSizeVertical(20)
    }

})

export default Home