import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const accountsetup = () => {
  const router = useRouter();

  return (
    <SafeAreaView style ={styles.container}>
      <View style = {styles.card}> 
        <Text style = {styles.Header}> Profile Setup  </Text>
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
    fontSize: 24,
    color: "#273342",
  },

  card: {
    backgroundColor: "#E9ECF2",
    borderRadius: 10,
    padding: 8,
    alignContent: "center",
    margin: 20,
    fontSize: 24,
    shadowColor: "#333F6F",
    shadowRadius: 100,
    elevation: 10,
  }
});