import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import LessonCard from '../components/LessonCard'

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
  }
})

class LessonScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const lesson = navigation.getParam('lesson')

    return {
      title: lesson.title
    }
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.root}>
        <LessonCard lesson={navigation.getParam('lesson')} />
      </View>
    )
  }
}

export default LessonScreen
