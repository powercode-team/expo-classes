// In App.js in a new project

import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import LessonsScreen from './src/screens/LessonsScreen'
import LessonScreen from './src/screens/LessonScreen'

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

export default createAppContainer(AppNavigator)
