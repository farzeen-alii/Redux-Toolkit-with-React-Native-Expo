import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Third from './Third'

const Second = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Second</Text>
      <Third />
    </View>
  )
}

export default Second

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})