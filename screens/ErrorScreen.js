import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function ErrorScreen(props) {
  return (
    <View style={styles.container}>
      <Text  style={styles.text}>Error Screen</Text>
      <Button
        title='Go Back'
        onPress={() => {
          props.navigation.goBack()
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightpink",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});