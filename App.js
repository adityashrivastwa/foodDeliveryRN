import React from 'react'
import { SafeAreaView } from 'react-native'
import { StackNavigator } from './Navigation/Navigation'
import { Provider } from 'react-redux';
import store from './store';
console.disableYellowBox = true;
const App = () => {
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
      <StackNavigator />
      </Provider>
    </SafeAreaView>
  )
}

export default App
