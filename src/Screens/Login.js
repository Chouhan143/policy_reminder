import React, {useEffect} from 'react';
import {View, Text, Touchable, TouchableOpacity, Image} from 'react-native';
// import Background from '../../constants/Background';
import Btn from '../components/Btn';
import Field from '../components/Field';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

import {COLORS} from '../components/theme';
const Login = () => {
  const navigation = useNavigation();

  return (
    // <Background>
    <View style={[{alignItems: 'center'}]}>
      <Image
        source={require('../../assets/iffcoLogo.png')}
        style={{
          width: responsiveWidth(50),
          height: responsiveHeight(15),
          marginTop: responsiveHeight(3),
          borderRadius: responsiveWidth(2),
        }}
      />

      <View
        style={{
          backgroundColor: 'white',
          height: responsiveHeight(100),
          width: responsiveWidth(100),
          borderTopLeftRadius: responsiveWidth(30),
          paddingTop: responsiveHeight(5),
          marginTop: responsiveHeight(3),
          alignItems: 'center',
          shadowColor: 'blue',
          elevation: 20,
        }}>
        <Text
          style={{
            color: COLORS.secondary,
            // color: 'orange',
            fontSize: responsiveFontSize(7.3),
            fontWeight: 'bold',
            marginVertical: responsiveHeight(2),
          }}>
          Login
        </Text>
        <Text
          style={{
            fontSize: responsiveFontSize(5),
            color: COLORS.secondary,
            fontWeight: 'bold',
          }}>
          Welcome Back
        </Text>
        <Text
          style={{
            color: 'grey',
            fontSize: responsiveFontSize(2.5),
            fontWeight: 'bold',
            marginBottom: responsiveHeight(1.5),
          }}>
          Login to your account
        </Text>
        <Field placeholder="Email / Username" keyboardType={'email-address'} />
        <Field placeholder="Password" secureTextEntry={true} />
        <View
          style={{
            alignItems: 'flex-end',
            width: responsiveWidth(78),
            paddingRight: responsiveWidth(2.5),
            marginBottom: responsiveHeight(18),
          }}>
          <Text
            style={{
              color: COLORS.secondary,
              fontWeight: 'bold',
              fontSize: responsiveFontSize(2),
            }}>
            Forgot Password ?
          </Text>
        </View>
        <Btn
          textColor="white"
          bgColor={COLORS.secondary}
          btnLabel="Login"
          Press={() => navigation.navigate('Home')}
        />
      </View>
    </View>
    // </Background>
  );
};

export default Login;
