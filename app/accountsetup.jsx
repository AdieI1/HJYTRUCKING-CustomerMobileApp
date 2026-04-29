import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Image, TextInput } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, {UseState} from 'react'

const { width, height } = Dimensions.get("window");
const Defaultprofile = require('../assets/images/defaultavatar.png')
const PersonInfoIcon = require('../assets/images/personediticon.png')



const accountsetup = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Header */}
      <View style={styles.card}> 
        <Text style={styles.Header}>Profile Setup</Text>
      </View>

      {/* forda profile pic and text  */}
      <View style={styles.avatarCard}> 
        
        {/* profayl */}
        <View style={styles.profileWrapper}>
          <Image source={Defaultprofile} style={styles.profileImage} />

          <TouchableOpacity style={styles.addPhotoBtn}> 
            <Ionicons name="add" size={32} color="#CDD1E0" />
          </TouchableOpacity>
        </View>

        {/* text */}
        <View style={styles.InfoContainer}> 
          <Text style={styles.title}>
            Lets finish setting up your profile!
          </Text>
          <Text style={styles.subtitle}>
            Tell us more about yourself!
          </Text>
        </View>

      </View>

      {/* forda personal Information */}
      <View style={styles.InfoHeader}> 
        
        <View style={styles.TextHeading}> 
          <Image source={PersonInfoIcon} style={styles.InfoIcon} /> 
          <Text style={styles.headerText}>Personal Information</Text>
        </View>

        <View style={styles.divider} />
        {/* forda personal information inputs */}
        <TextInput placeholder="Contact Number" placeholderTextColor="#aaa"
                    style={[styles.input, {
                      padding: height * 0.018,
                      borderRadius: width * 0.03
                    }]} />
      </View>

    </SafeAreaView>
  )
}

export default accountsetup

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#D6DAE8",
  },

  Header: {
    textAlign: "center",
    fontSize: width * 0.06,
    color: "#273342",
  },

  card: {
    backgroundColor: "#E9ECF2",
    borderRadius: width * 0.03,
    padding: width * 0.04,
    alignItems: "center",
    margin: width * 0.05,
    shadowColor: "#333F6F",
    shadowRadius: width * 0.02,
    elevation: 10,
  },

  avatarCard: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: width * 0.05,
    marginTop: height * 0.01,
  },

  profileWrapper: {
    position: "relative",
  },

  profileImage: {
    width: width * 0.32,
    height: width * 0.32,
    borderRadius: (width * 0.32) / 2,
    borderWidth: 2,
    borderColor: "#8E94A3",
  },

  addPhotoBtn: {
    position: "absolute",
    bottom: -4,
    right: -4,
    width: width * 0.12,
    height: width * 0.12,
    backgroundColor: "#8E94A3",
    borderRadius: (width * 0.12) / 2,
    borderColor: "#CDD1E0",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  InfoContainer: {
    flex: 1,
    marginLeft: width * 0.04,
    justifyContent: "center",
  },

  title: {
    fontSize: width * 0.055,
    fontWeight: "bold",
    color: "#273342",
  },

  subtitle: {
    fontSize: width * 0.035,
    color: "#6E7384",
    marginTop: 4,
  },

  InfoHeader: {
    backgroundColor: "#E9ECF2",
    borderRadius: width * 0.03,
    padding: width * 0.04,
    margin: width * 0.05,
    shadowColor: "#333F6F",
    shadowRadius: width * 0.02,
    elevation: 10,
  },

  TextHeading: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerText: {
    fontSize: width * 0.045,
    fontWeight: "600",
    marginLeft: width * 0.02,
    color: "#2C2C2C",
  },

  InfoIcon: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: "contain",
  },

  divider: {
    marginTop: width * 0.03,
    height: 1,
    backgroundColor: "#D1D1D1",
    width: "100%",
  },

});