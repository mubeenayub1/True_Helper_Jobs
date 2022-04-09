import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';

import styles from './styles';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
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
      <View style={styles.searchContainer}>
        <View style={styles.iconContainer}>
          <Icon
            name="search1"
            type="antdesign"
            size={28}
            color="black"
            onPress={() => {}}
          />
        </View>
        <TextInput
          style={styles.searchText}
          placeholder="Job title, Keyword or Comapny"
          maxLength={80}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => {
            navigation.navigate('DetailScreen');
          }}>
          <View style={styles.cardHeaderContainer}>
            <Text style={styles.cardHeaderText}>Visual Designer</Text>
            <Icon
              name="bookmark"
              type="feather"
              size={24}
              color="black"
              onPress={() => {}}
            />
          </View>
          <View style={styles.cardBottomContainer}>
            <View style={styles.cardBottomFirstContainer}>
              <Text style={styles.cardBottomText}>Techndevs Ltd</Text>
              <Text style={styles.cardBottomText}>Sargodha</Text>

              <Text style={styles.cardTimeText}>4 hour ago</Text>
            </View>
            <View style={styles.cardBottomSecondContainer}>
              <Image
                source={require('../../Assets/visual.png')}
                style={{width: 60, height: 60}}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => {
            navigation.navigate('DetailScreen');
          }}>
          <View style={styles.cardHeaderContainer}>
            <Text style={styles.cardHeaderText}>UX Designer</Text>
            <Icon
              name="bookmark"
              type="feather"
              size={24}
              color="black"
              onPress={() => {}}
            />
          </View>
          <View style={styles.cardBottomContainer}>
            <View style={styles.cardBottomFirstContainer}>
              <Text style={styles.cardBottomText}>Techndevs Ltd</Text>
              <Text style={styles.cardBottomText}>Sargodha</Text>

              <Text style={styles.cardTimeText}>4 hour ago</Text>
            </View>
            <View style={styles.cardBottomSecondContainer}>
              <Image
                source={require('../../Assets/ux.png')}
                style={{width: 60, height: 60}}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => {
            navigation.navigate('DetailScreen');
          }}>
          <View style={styles.cardHeaderContainer}>
            <Text style={styles.cardHeaderText}>Sctech Designer</Text>
            <Icon
              name="bookmark"
              type="feather"
              size={24}
              color="black"
              onPress={() => {}}
            />
          </View>
          <View style={styles.cardBottomContainer}>
            <View style={styles.cardBottomFirstContainer}>
              <Text style={styles.cardBottomText}>Techndevs Ltd</Text>
              <Text style={styles.cardBottomText}>Sargodha</Text>

              <Text style={styles.cardTimeText}>4 hour ago</Text>
            </View>
            <View style={styles.cardBottomSecondContainer}>
              <Image
                source={require('../../Assets/sctech.png')}
                style={{width: 60, height: 60}}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => {
            navigation.navigate('DetailScreen');
          }}>
          <View style={styles.cardHeaderContainer}>
            <Text style={styles.cardHeaderText}>Vector Graphics</Text>
            <Icon
              name="bookmark"
              type="feather"
              size={24}
              color="black"
              onPress={() => {}}
            />
          </View>
          <View style={styles.cardBottomContainer}>
            <View style={styles.cardBottomFirstContainer}>
              <Text style={styles.cardBottomText}>Techndevs Ltd</Text>
              <Text style={styles.cardBottomText}>Sargodha</Text>

              <Text style={styles.cardTimeText}>4 hour ago</Text>
            </View>
            <View style={styles.cardBottomSecondContainer}>
              <Image
                source={require('../../Assets/vector.png')}
                style={{width: 60, height: 60}}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => {
            navigation.navigate('DetailScreen');
          }}>
          <View style={styles.cardHeaderContainer}>
            <Text style={styles.cardHeaderText}>Logo Designer</Text>
            <Icon
              name="bookmark"
              type="feather"
              size={24}
              color="black"
              onPress={() => {}}
            />
          </View>
          <View style={styles.cardBottomContainer}>
            <View style={styles.cardBottomFirstContainer}>
              <Text style={styles.cardBottomText}>Techndevs Ltd</Text>
              <Text style={styles.cardBottomText}>Sargodha</Text>

              <Text style={styles.cardTimeText}>4 hour ago</Text>
            </View>
            <View style={styles.cardBottomSecondContainer}>
              <Image
                source={require('../../Assets/logo1.png')}
                style={{width: 60, height: 60, borderRadius: 50}}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => {
            navigation.navigate('DetailScreen');
          }}>
          <View style={styles.cardHeaderContainer}>
            <Text style={styles.cardHeaderText}>Poster Designer</Text>
            <Icon
              name="bookmark"
              type="feather"
              size={24}
              color="black"
              onPress={() => {}}
            />
          </View>
          <View style={styles.cardBottomContainer}>
            <View style={styles.cardBottomFirstContainer}>
              <Text style={styles.cardBottomText}>Techndevs Ltd</Text>
              <Text style={styles.cardBottomText}>Sargodha</Text>

              <Text style={styles.cardTimeText}>4 hour ago</Text>
            </View>
            <View style={styles.cardBottomSecondContainer}>
              <Image
                source={require('../../Assets/poster.jpg')}
                style={{width: 60, height: 60, borderRadius: 50}}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => {
            navigation.navigate('DetailScreen');
          }}>
          <View style={styles.cardHeaderContainer}>
            <Text style={styles.cardHeaderText}>Visual Designer</Text>
            <Icon
              name="bookmark"
              type="feather"
              size={24}
              color="black"
              onPress={() => {}}
            />
          </View>
          <View style={styles.cardBottomContainer}>
            <View style={styles.cardBottomFirstContainer}>
              <Text style={styles.cardBottomText}>Techndevs Ltd</Text>
              <Text style={styles.cardBottomText}>Sargodha</Text>

              <Text style={styles.cardTimeText}>4 hour ago</Text>
            </View>
            <View style={styles.cardBottomSecondContainer}>
              <Image
                source={require('../../Assets/visual.png')}
                style={{width: 60, height: 60}}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={{height: 50}}></View>
      </ScrollView>
    </View>
  );
};
export default HomeScreen;
