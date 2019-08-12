import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {
    padding: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  category: {},

  title: {
    fontSize: 24
  }
})

const LessonCard = ({ lesson, onPress }) => (
  <TouchableOpacity activeOpacity={0.8} style={styles.root} onPress={onPress}>
    <Text style={styles.category}>{lesson.category.toUpperCase()}</Text>
    <Text style={styles.title}>{lesson.title}</Text>
  </TouchableOpacity>
)

export default LessonCard
