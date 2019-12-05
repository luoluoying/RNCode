import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

// export default class HelloComponents extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>hello testfwf!</Text>
//       </View>
//     );
//   }
// }
const HelloComponents = () => {
  return (
    <View style={styles.container}>
      <Text>hello test2311!!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HelloComponents;
