import { View, Text, Button, StyleSheet} from 'react-native'
import React from 'react'
import { increment } from './slices/counterSlice';
import Second from './Second';
import { useDispatch } from 'react-redux';

const First = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>First</Text>
      <Button title='Increment' onPress={() => dispatch(increment())} />
      <Second />
    </View>
  )
}

export default First

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold'
  }
})