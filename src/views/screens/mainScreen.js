import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';
import {PrimaryButton} from '../components/Button';

const mainScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{height: 500}}>
        <Image
          source={require('../../assets/food.png')}
        />
      </View>
      <View style={style.textContainer}>
        <View>
          <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>
            Nepali Food
          </Text>
          <Text
            style={{
              marginTop: 25,
              fontSize: 20,
              textAlign: 'center',
              color: COLORS.grey,
            }}>
           Best Nepali Food in Darwin.
          </Text>
        </View>
        <View style={style.indicatorContainer}>
          <View style={style.indicator} />
          <View style={style.indicator} />
          <View style={style.indicator} />
        </View>
        <PrimaryButton
          onPress={() => navigation.navigate('Home')}
          title="Visit Now"
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  indicator: {
    height: 15,
    width: 15,
    borderRadius: 7,
    backgroundColor: COLORS.cyan,
    marginHorizontal: 5,
  },
});

export default mainScreen;
