import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';
import {Switch} from 'react-native-paper';
import HeaderBar from '../components/Header';

export default MenuScreen = () => {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const theme = useSelector((state) => {
    return state.DarkMode;
  });
  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <HeaderBar />
      <View style={{backgroundColor: colors.card}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{...styles.text, color: colors.text}}>Dark mode</Text>
          <Switch
            color={'#3edced'}
            value={theme}
            style={{marginEnd: 10}}
            onValueChange={() =>
              dispatch({type: 'changeTheme', payload: !theme})
            }
          />
        </View>
        <Text style={{...styles.text, color: colors.text}}>Rate this app</Text>
        <Text style={{...styles.text, color: colors.text}}>Feedback</Text>
        <Text style={{...styles.text, color: colors.text}}>Privacy policy</Text>
        <Text style={{...styles.text, color: colors.text}}>
          Terms and conditon
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    padding: 20,
    marginStart: 5,
  },
});
