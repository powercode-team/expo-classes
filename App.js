// In App.js in a new project

import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import LessonsScreen from './src/screens/LessonsScreen'
import LessonScreen from './src/screens/LessonScreen'
import { Provider } from 'react-redux'
import store from './src/redux/store'

const AppNavigator = createStackNavigator({
    Lessons: {
      screen: LessonsScreen
    },
    Lesson: {
      screen: LessonScreen
    }
  },
  {
    initialRouteName: 'Lessons'
  })

const Container = createAppContainer(AppNavigator)

export default () =>
  <Provider store={store}>
    <Container />
  </Provider>

