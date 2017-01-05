import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    // borderBottomWidth: 1,
    marginTop: 15,
    padding: 2,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    // borderColor: '#ddd',
    position: 'relative'
  }
});

export { CardSection };
