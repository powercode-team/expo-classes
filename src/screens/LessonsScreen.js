import React, { Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import LessonCard from '../components/LessonCard'
import firebase from 'firebase'

const styles = StyleSheet.create({
  root: {
    marginTop: 20
  }
})

const firebaseConfig = {
  apiKey: 'AIzaSyAfe2h5y8mZMLOB_h1UPwcTwn1O4SRer8w',
  authDomain: 'test-29923.firebaseapp.com',
  databaseURL: 'https://test-29923.firebaseio.com',
  projectId: 'test-29923',
  storageBucket: '',
  messagingSenderId: '418051159130',
  appId: '1:418051159130:web:10b9d6fc51a0d24b'
}

console.ignoredYellowBox = ['Setting a timer']

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

class LessonsScreen extends Component {

  state = {
    lessons: []
  }

  componentDidMount() {
    firebase.database().ref('lessons').on('value', (snapshot) => {
      this.setState({ lessons: snapshot.val() })
    })
  }

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
    const { lessons } = this.state
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
