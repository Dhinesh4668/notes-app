import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color} from '../../theme/theme';
import {NotesIcon} from '../../../assets';

const Splash = () => {
  return (
    <View style={Styles.container}>
      <NotesIcon height={100} width={100} />
      <Text style={Styles.Text}>Notes</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    color: color.white,
    fontFamily: 'MPLUSCodeLatin-Medium',
    fontSize: 50,
    fontWeight: '600',
  },
});
export default Splash;
