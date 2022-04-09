import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Modal,
  Pressable,
} from 'react-native';
import {Icon} from 'react-native-elements';
const {height, width} = Dimensions.get('window');
import styles from './styles';

const DetailScreen = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const fillIcon = () => {
    setShow(!show);
  };
  return (
    <View style={styles.mainContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                height: '10%',
                width: '95%',
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Icon
                name="circle-with-cross"
                type="entypo"
                size={35}
                color="#B02C2B"
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
            <View
              style={{
                height: '70%',
                width: '90%',
                backgroundColor: 'red',
                marginBottom: 20,
                borderRadius: 20,
              }}>
              <Image
                source={require('../../Assets/download.jpg')}
                style={{width: '100%', height: '100%', borderRadius: 20}}
              />
            </View>
            <View
              style={{
                height: '20%',
                width: '90%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Pressable
                style={{
                  height: 50,
                  width: '45%',
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 5,
                }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate('HomeScreen');
                }}>
                <Text style={[styles.textStyle, {color: '#B02C2B'}]}>
                  Cancel
                </Text>
              </Pressable>
              <Pressable
                style={{
                  height: 50,
                  width: '45%',
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#B02C2B',
                }}
                onPress={() => {}}>
                <Text style={styles.textStyle}>Apply Now</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.header}>
        <TouchableOpacity
          style={{marginLeft: '2.5%'}}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrowleft" type="antdesign" size={28} color="black" />
        </TouchableOpacity>
        <View style={styles.headerImage2}>
          <Image
            source={require('../../Assets/logo.png')}
            style={styles.headerImage}
          />
          <Image
            source={require('../../Assets/text.png')}
            style={styles.headerText}
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={require('../../Assets/detailimage.png')} />
        <View style={styles.headContainer}>
          <Text style={styles.headingText}>UX Designer</Text>
          <Text style={styles.headerText2}>Techndevs Ltd.</Text>
          <Text style={styles.headerText3}>Lahore</Text>
        </View>

        <View style={styles.endTextContainer}>
          <Text style={styles.endHeadingText}>Job Full Description</Text>
          <Text style={styles.endText}>
            Softiva Creatives is hiring a Creative Graphic Designer. The ideal
            candidates should be experienced in Adobe. Photoshop and
            Illustrator. You should have good design sense. You should have
            strong skills in Adobe Photoshop and Adobe Illustrator. You should
            have good Logo and Image designing skills. You have experience in
            Designing Social Media Banners and Website graphics. You should be a
            Quick Learner and Efficient. You must be creative and have attention
            to detail. You should be self-motivated to learn new things and have
            some basic knowledge of Adobe premiere pro or After Effects. Ability
            to work independently and complete assigned tasks within identified
            time frames.
          </Text>

          <Text style={styles.endBottomText}>Job Type: Full-time</Text>
          <Text style={styles.endText}>
            Salary: Rs20,000.00 - Rs30,000.00 per month..
          </Text>
          <Text style={styles.endBottomText}>Application Question(s):</Text>
          <Text style={styles.endText}>
            Please provide a portfolio, if any. A candidate with a good
            portfolio will be preferred.
          </Text>
          <View style={styles.adContainer}>
            <TouchableOpacity style={styles.adBookMarkContainer}>
              <Icon
                name={show ? 'bookmark' : 'bookmark-outline'}
                type="ionicons"
                size={25}
                color="black"
                onPress={() => {
                  fillIcon();
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.viewAdContainer}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.viewAdText}>View Ad</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height: 200}}></View>
      </ScrollView>
    </View>
  );
};
export default DetailScreen;
