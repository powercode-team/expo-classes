import React, { Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import LessonCard from '../components/LessonCard'

const styles = StyleSheet.create({
  root: {
    marginTop: 20
  }
})

const lessons = [
  {
    id: 1,
    category: 'boxing/kickboxing',
    title: 'Kickboxing Workshop',
    location: 'Stream boxing - 0.3km'
  },
  {
    id: 2,
    category: 'barre',
    title: 'Barre with Jessica',
    location: 'AERO Yoga - 0.3km'
  }
]

class LessonsScreen extends Component {

  static navigationOptions = {
    title: 'Classes',
  }

  showDetails = (lesson) => () => {
    const { navigation } = this.props
    navigation.navigate('Lesson', { lesson })
  }

  renderItem = ({ item }) =>
    <LessonCard
      key={item.id}
      lesson={item}
      onPress={this.showDetails(item)}
    />

  render() {
    return (
      <View style={styles.root}>
        <FlatList
          data={lessons}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    )
  }
}

export default LessonsScreen
