import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Third = () => {
  const count = useSelector((state) => state.counter.value)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Third</Text>
      <Text style={styles.countText}>Count: {count}</Text>
    </View>
  )
}

export default Third

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  countText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 10
  }
})