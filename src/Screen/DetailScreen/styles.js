import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../Theme/Dimensions';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    height: height,
    width: width,
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: '20%',
    backgroundColor: '#e6e6e6',
  },
  modalView: {
    // margin: 20,
    width: '90%',
    height: '60%',
    backgroundColor: 'white',
    borderRadius: 10,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'OpenSans-Semibold',
  },

  header: {
    width: width,
    height: (height / 100) * 8,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flexDirection: 'row',
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
    width: '80%',
    height: '100%',
    // backgroundColor: 'green',
    alignItems: 'center',
    marginLeft: '5%',
  },
  headContainer: {
    width: width,
    height: moderateScale(120),
    // backgroundColor: 'red',

    borderBottomColor: '#B02C2B',
    borderBottomWidth: 1,
  },

  headingText: {
    color: '#B02C2B',
    fontSize: 22,
    fontFamily: 'OpenSans-Semibold',
    marginHorizontal: '5%',
    marginTop: 10,
  },
  headerText2: {
    color: 'black',
    fontSize: 16,
    paddingHorizontal: '5%',
    marginTop: 10,
  },
  headerText3: {
    color: 'black',
    fontSize: 16,
    paddingHorizontal: '5%',
    marginTop: 5,
  },
  midTextContainer: {
    // backgroundColor: 'red',
    height: moderateScale(200),
    width: width,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  endTextContainer: {
    // backgroundColor: 'red',
    height: moderateScale(380),
    width: width,
  },
  endHeadingText: {
    color: '#B02C2B',
    fontSize: 22,
    marginHorizontal: '5%',
    marginTop: 5,
  },
  endText: {
    color: 'black',
    marginTop: 5,
    marginHorizontal: '5%',
  },
  endBottomText: {
    // color: 'black',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: '5%',
  },
  adContainer: {
    height: 100,
    width: width,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
  },
  adBookMarkContainer: {
    height: 50,
    width: '20%',
    marginHorizontal: '5%',
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewAdContainer: {
    height: 50,
    width: '65%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B02C2B',
  },
  viewAdText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
