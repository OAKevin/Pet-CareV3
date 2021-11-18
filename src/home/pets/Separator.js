import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Theme } from '../../components'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  separatorOffset: {
    flex: 2,
    flexDirection: 'row',
  },
  separator: {
    borderColor: Theme.palette.lightGray,
    borderWidth: 0.8,
    flex: 8,
    flexDirection: 'row',
  },
})

const Separator = () => (
  <View style={styles.container}>
    <View style={styles.separator} />
  </View>
)

export default Separator
