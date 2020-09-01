import React from 'react';
import {StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeSectionComponent from './src/components/HomeSectionComponents';
const App = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          <FontAwesome name="bars" size={30} color="#6F6F6F" />
          <Text style={styles.inputText}>Google Play</Text>
          <FontAwesome name="microphone" size={30} color="#6F6F6F" />
        </View>
        <ScrollView horizontal={true}>
          <View style={styles.filterContainer}>
            {[' TRANG CHỦ ', ' TRÒ CHƠI ', ' PHIM ', ' SÁCH '].map(
              (e, index) => (
                <View
                  key={index.toString()}
                  style={
                    index === 0
                      ? styles.filterActiveButtonContainer
                      : styles.filterInactiveButtonContainer
                  }>
                  <Text
                    style={
                      index === 0
                        ? styles.filterActiveText
                        : styles.filterInactiveText
                    }>
                    {e}
                  </Text>
                </View>
              ),
            )}
          </View>
        </ScrollView>

        <ScrollView horizontal={true}>
          <View style={styles.filterContainer}>
            {[
              ' Dành cho bạn ',
              ' Bảng xếp hạng ',
              ' Loại ',
              ' Lựa chọn của biên tập viên ',
              ' Gia đình ',
            ].map((e, index) => (
              <View
                key={index.toString()}
                style={
                  index === 0
                    ? styles.filterActiveButtonContainer
                    : styles.filterInactiveButtonContainer
                }>
                <Text
                  style={
                    index === 0
                      ? styles.filterActiveText
                      : styles.filterInactiveText
                  }>
                  {e}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.bodyContainer}>
        <ScrollView>
          <HomeSectionComponent />
          <HomeSectionComponent />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //header
  headerContainer: {
    paddingTop: 30,
    paddingBottom: 5,
    backgroundColor: '#0F9D58',
  },
  inputContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 2,
  },
  inputText: {
    color: '#9E9E9E',
    fontSize: 25,
    marginLeft: 30,
    fontWeight: '500',
    paddingRight: 120,
  },
  filterContainer: {
    flexDirection: 'row',
    backgroundColor: '#0F9D58',
    paddingTop: 10,
    paddingRight: 150,
    paddingLeft: 3,
  },
  filterActiveButtonContainer: {
    paddingHorizontal: 4,
  },
  filterInactiveButtonContainer: {
    paddingHorizontal: 4,
  },
  filterActiveText: {
    color: '#fff',
    fontSize: 23,
  },
  filterInactiveText: {
    color: '#9E9E9E',
    fontSize: 23,
  },
  //body
  bodyContainer: {
    backgroundColor: '#fff',
  },
});
export default App;
