import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../components/theme';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Entypo';

const Home = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <View
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(8),
          backgroundColor: COLORS.secondary,
          shadowColor: '#000',
          elevation: 10,
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Icon name="chevron-left" size={30} color="white" />
        <Text
          style={{
            fontSize: responsiveFontSize(2.8),
            color: 'white',
            fontWeight: '700',
            paddingLeft: responsiveWidth(35),
          }}>
          Home
        </Text>
      </View>
      <Image
        source={require('../../assets/iffcoLogo.png')}
        style={{
          width: responsiveWidth(50),
          height: responsiveHeight(15),
          marginTop: responsiveHeight(3),
          borderRadius: responsiveWidth(2),
          alignSelf: 'center',
        }}
      />

      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          marginHorizontal: responsiveWidth(2.5),
          marginTop: responsiveHeight(5),
        }}>
        {/* parent container */}

        <TouchableOpacity
          style={{
            width: responsiveWidth(45),
            height: responsiveHeight(30),
            backgroundColor: COLORS.boxes,
            borderRadius: responsiveWidth(8),
            alignItems: 'center',
          }}>
          <View
            style={{
              width: responsiveWidth(24),
              height: responsiveWidth(24),
              borderRadius: responsiveWidth(12),
              borderWidth: responsiveWidth(0.6),
              borderColor: COLORS.secondary,
              alignSelf: 'centers',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: responsiveHeight(3),
              backgroundColor: '#fff',
            }}>
            <Image
              source={require('../../assets/01.png')}
              style={{
                width: responsiveWidth(16),
                height: responsiveHeight(8),
                alignSelf: 'center',
              }}
            />
          </View>
          <View style={{marginTop: responsiveHeight(3)}}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.3),
                fontWeight: '600',
                color: COLORS.textColorBlue,
              }}>
              Add Policy
            </Text>
          </View>

          <View
            style={{
              width: responsiveWidth(8),
              height: responsiveWidth(8),
              borderRadius: responsiveWidth(4),
              backgroundColor: '#fff',
              alignSelf: 'flex-end',
              margin: responsiveWidth(3),
            }}>
            <Icon name="chevron-right" size={32} color={COLORS.textColorBlue} />
          </View>
        </TouchableOpacity>
        {/* first box ui  */}
        <TouchableOpacity
          style={{
            width: responsiveWidth(45),
            height: responsiveHeight(30),
            backgroundColor: COLORS.boxes,
            borderRadius: responsiveWidth(8),
            alignItems: 'center',
          }}>
          <View
            style={{
              width: responsiveWidth(24),
              height: responsiveWidth(24),
              borderRadius: responsiveWidth(12),
              borderWidth: responsiveWidth(0.6),
              borderColor: COLORS.secondary,
              alignSelf: 'centers',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: responsiveHeight(3),
              backgroundColor: '#fff',
            }}>
            <Image
              source={require('../../assets/02.png')}
              style={{
                width: responsiveWidth(16),
                height: responsiveHeight(8),
                alignSelf: 'center',
              }}
            />
          </View>
          <View style={{marginTop: responsiveHeight(3)}}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.3),
                fontWeight: '600',
                color: COLORS.textColorBlue,
              }}>
              My Policy
            </Text>
          </View>

          <View
            style={{
              width: responsiveWidth(8),
              height: responsiveWidth(8),
              borderRadius: responsiveWidth(4),
              backgroundColor: '#fff',
              alignSelf: 'flex-end',
              margin: responsiveWidth(3),
            }}>
            <Icon name="chevron-right" size={32} color={COLORS.textColorBlue} />
          </View>
        </TouchableOpacity>
        {/* second box ui */}
      </View>

      {/* Second Parent container start here */}

      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          marginHorizontal: responsiveWidth(2.5),
          marginTop: responsiveHeight(5),
        }}>
        {/* parent container */}

        <TouchableOpacity
          style={{
            width: responsiveWidth(45),
            height: responsiveHeight(30),
            backgroundColor: COLORS.boxes,
            borderRadius: responsiveWidth(8),
            alignItems: 'center',
          }}>
          <View
            style={{
              width: responsiveWidth(24),
              height: responsiveWidth(24),
              borderRadius: responsiveWidth(12),
              borderWidth: responsiveWidth(0.6),
              borderColor: COLORS.secondary,
              alignSelf: 'centers',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: responsiveHeight(3),
              backgroundColor: '#fff',
            }}>
            <Image
              source={require('../../assets/05.png')}
              style={{
                width: responsiveWidth(16),
                height: responsiveHeight(8),
                alignSelf: 'center',
              }}
            />
          </View>
          <View style={{marginTop: responsiveHeight(3)}}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.3),
                fontWeight: '600',
                color: COLORS.textColorBlue,
              }}>
              Active Policy
            </Text>
          </View>

          <View
            style={{
              width: responsiveWidth(8),
              height: responsiveWidth(8),
              borderRadius: responsiveWidth(4),
              backgroundColor: '#fff',
              alignSelf: 'flex-end',
              margin: responsiveWidth(3),
            }}>
            <Icon name="chevron-right" size={32} color={COLORS.textColorBlue} />
          </View>
        </TouchableOpacity>
        {/* first box ui  */}
        <TouchableOpacity
          style={{
            width: responsiveWidth(45),
            height: responsiveHeight(30),
            backgroundColor: COLORS.boxes,
            borderRadius: responsiveWidth(8),
            alignItems: 'center',
          }}>
          <View
            style={{
              width: responsiveWidth(24),
              height: responsiveWidth(24),
              borderRadius: responsiveWidth(12),
              borderWidth: responsiveWidth(0.6),
              borderColor: COLORS.secondary,
              alignSelf: 'centers',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: responsiveHeight(3),
              backgroundColor: '#fff',
            }}>
            <Image
              source={require('../../assets/06.png')}
              style={{
                width: responsiveWidth(16),
                height: responsiveHeight(8),
                alignSelf: 'center',
              }}
            />
          </View>
          <View style={{marginTop: responsiveHeight(3)}}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.3),
                fontWeight: '600',
                color: COLORS.textColorBlue,
              }}>
              Expire Policy
            </Text>
          </View>

          <View
            style={{
              width: responsiveWidth(8),
              height: responsiveWidth(8),
              borderRadius: responsiveWidth(4),
              backgroundColor: '#fff',
              alignSelf: 'flex-end',
              margin: responsiveWidth(3),
            }}>
            <Icon name="chevron-right" size={32} color={COLORS.textColorBlue} />
          </View>
        </TouchableOpacity>
        {/* second box ui */}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
