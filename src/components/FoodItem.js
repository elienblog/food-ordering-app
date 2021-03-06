import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import { colors } from '../theme';
import CircleButton from './CircleButton';
import CardOverlay from './CardOverlay'

export default ({
  onPress: { add, substract},
  image,
  imagePath,
  description,
  name,
  price,
  quantity = 1
}) => (
  <View style={styles.infoContainer}>
    <CardOverlay
      disabled={true}
      imageStyle={styles.image}
      source={image !== '' ? {uri: image} : require('../assets/placeholder.png')}
    />
    <View style={styles.info}>
      <Text style={styles.nameText}>{name}</Text>
      <Text>{description}</Text>
      <Text style={styles.priceText}>AOA {price}</Text>
    </View>
    <Text style={[styles.price, {marginTop: 10}]}>Quantidade</Text>
    <View style={styles.quantity}>
      <CircleButton onPress={substract} iconName='minus' buttonStyle={{backgroundColor: colors.red}}/>
      <Text style={[styles.price, {marginBottom: 0}]}>{quantity}</Text>
      <CircleButton onPress={add} iconName='plus' buttonStyle={{backgroundColor: colors.green}}/>
    </View>
  </View>
);


const styles = StyleSheet.create({
  info: {
    paddingTop: 5,
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 0.5
  },
  infoContainer: {
    flex: 1,
    padding: 10,
    paddingTop: 0,
    flexDirection: 'column',
    margin: 0,
    alignItems: 'center'
  },
  image: {
    padding: 5,
    paddingTop: 0,
    marginTop: 0,
    paddingLeft: 3,
    height: 300,
    width: 400
  },
  nameText: {
    fontSize: 25,
    color: '#0c0e11',
    textAlign: 'left',
    fontWeight: 'bold'
  },
  price: {
    fontSize: 17,
    marginBottom: 10,
    color: '#0c0e11',
    textAlign: 'left',
    fontWeight: 'bold'
  },
  priceText: {
      color: colors.green,
      fontSize: 17,
      marginTop: 10,
      marginBottom: 10,
      textAlign: 'left',
      fontWeight: 'bold'
  },
  quantity: {
    padding: 10,
    paddingTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 0,
    alignItems: 'center'
  }
});
