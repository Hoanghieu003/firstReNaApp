import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

const item_image_1 = require('../assets/yellowCar.png');
const item_image_2 = require('../assets/calculator.png');
const item_image_3 = require('../assets/vocabulary.png');
const item_image_4 = require('../assets/pokemon.png');
const item_image_5 = require('../assets/car.png');
const item_image_6 = require('../assets/queen.png');
const ProductItem = ({image, name, rate}) => (
  <View style={styles.itemContainer}>
    <Image source={image} style={styles.itemImage} />
    <Text style={styles.itemName} numberOfLines={2}>
      {name}
    </Text>
    <Text style={styles.itemRate}>{rate}</Text>
  </View>
);
const HomeSectionComponent = () => {
  return (
    <View style={styles.sectionContainer}>
      {/*  */}
      <Text style={styles.sectionTitle}>
        Dựa trên hoạt động gần đây của bạn
      </Text>
      {/*  */}
      <ScrollView horizontal={true}>
        <View style={styles.listItemContainer}>
          {/*  */}
          {[
            {image1: item_image_1, name1: 'Build a bridge'},
            {image1: item_image_2, name1: 'Máy tính570 fx'},
            {image1: item_image_3, name1: 'Học từ vựng'},
            {image1: item_image_4, name1: 'Pokemon Go'},
          ].map((e, index) => (
            <View key={index.toString()}>
              <ProductItem name={e.name1} image={e.image1} rate="4.6" />
            </View>
          ))}
        </View>
      </ScrollView>
      {/*  */}
      <Text style={styles.sectionTitle}>Trò chơi đã cài đặt trước</Text>
      {/*  */}
      <ScrollView horizontal={true}>
        <View style={styles.listItemContainer}>
          {/*  */}
          {[
            {image2: item_image_4, name2: 'Pokemon Go'},
            {image2: item_image_5, name2: 'Need for Speed'},
            {image2: item_image_6, name2: 'Hidden City'},
            {image2: item_image_1, name2: 'Build a bridge'},
          ].map((e, index) => (
            <View key={index.toString()}>
              <ProductItem name={e.name2} image={e.image2} rate="4.1" />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#2f2f2f',
    marginVertical: 12,
  },
  sectionImage: {
    width: width - 24,
    height: 130,
    borderRadius: 4,
  },
  listItemContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  itemContainer: {
    width: 100,
    marginRight: 12,
  },
  itemImage: {
    width: 100,
    height: 120,
  },
  itemName: {
    fontSize: 14,
    color: '#484848',
    marginVertical: 4,
  },
  itemRate: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2a2a2a',
  },
});
export default HomeSectionComponent;
