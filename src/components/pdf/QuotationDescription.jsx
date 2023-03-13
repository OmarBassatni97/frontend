import React from 'react'
import { View, Text, StyleSheet, Font } from '@react-pdf/renderer'
import NuetraTextBook from '../../fonts/NeutraTextBook.ttf'
import NuetraTextBold from '../../fonts/Neutra Text Bold.ttf'

Font.register({ family: 'NeutraTextBook', format: 'truetype', src: NuetraTextBook })
Font.register({ family: 'NeutraTextBold', format: 'truetype', src: NuetraTextBold })
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
    fontFamily: 'NeutraTextBold'

  },
  desc: {
    fontSize: '10px',
    fontWeight: 200,
    opacity: '0.8',
    fontFamily: 'NeutraTextBook'

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