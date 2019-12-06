import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { WhiteSpace, WingBlank, Drawer, Button } from '@ant-design/react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import OnlineScreen from './page/Online'

const MainScreen = (prop) => {
  const { navigate } = prop.navigation
  console.log(prop)
  return (
    <View style={styles.container}>
      <Text>测试</Text>
      <WhiteSpace size="xl"/>
      <WingBlank>
        <Button
          onPress={() => {navigate('Online', { test: 'testData' })}}
        >线上</Button>
        <WhiteSpace size="xl"/>
        <Button>线下</Button>
        <WhiteSpace size="xl"/>
        <Button>娱乐</Button>
        <WhiteSpace size="xl"/>
        <Button>宠物</Button>
        <WhiteSpace size="xl"/>
        <Button>生活</Button>
        <WhiteSpace size="xl"/>
        <Button>其他</Button>
      </WingBlank>
    </View>
  );
}

MainScreen.navigationOptions = {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

const MainNavigator = createStackNavigator({
  Main: {
    screen: MainScreen,
  },
  Online: {
    screen: OnlineScreen,
  },
})

const App = createAppContainer(MainNavigator)

export default App