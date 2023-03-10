import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'
const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    margin: 10,
    gap: '5px'
  },
  title: {
    fontSize: '12px',

  },
  desc: {
    fontSize: '10px',
    fontWeight: 200,
    opacity: '0.8'

  }

})
const QuotationDescription = ({ title, desc }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>{title.toUpperCase()}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  )
}

export default QuotationDescription