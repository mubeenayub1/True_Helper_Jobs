import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../Theme/Dimensions';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    height: height,
    width: width,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  header: {
    width: width,
    height: (height / 100) * 8,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  headerImage: {
    width: 30,
    height: 30,
  },
  headerText: {
    height: 30,
    width: '80%',
    marginLeft: 10,
  },
  headerImage2: {
    flexDirection: 'row',
    width: '70%',
    height: '100%',
    // backgroundColor: 'green',
    alignItems: 'center',
    marginHorizontal: '15%',
  },
  searchContainer: {
    width: '90%',
    height: (height / 100) * 8,
    backgroundColor: '#F2F3FB',
    borderRadius: 5,
    marginVertical: (height / 100) * 2,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  iconContainer: {
    width: '15%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchText: {
    color: 'black',
    fontSize: 16,
  },
  cardContainer: {
    height: moderateScale(120),
    width: '95%',
    backgroundColor: 'white',
    marginVertical: '2%',
    marginHorizontal: '2.5%',
    borderRadius: 5,
    elevation: 5,
    overflow: 'hidden',
  },
  cardHeaderContainer: {
    height: '30%',
    width: '100%',
    // backgroundColor: 'blue',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardHeaderText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    // height: '100%',
    width: '80%',
    marginHorizontal: '5%',
  },
  cardBottomContainer: {
    height: '70%',
    width: '100%',
    // backgroundColor: 'black',
    flexDirection: 'row',
  },
  cardBottomFirstContainer: {
    // backgroundColor: 'red',
    height: '100%',
    width: '60%',
  },
  cardBottomSecondContainer: {
    // backgroundColor: 'green',
    height: '100%',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBottomText: {
    color: 'black',
    fontSize: 16,
    paddingHorizontal: '10%',
  },
  cardTimeText: {
    paddingTop: moderateScale(10),
    paddingHorizontal: '10%',
    // bottom: '10%',
  },
});

export default styles;
