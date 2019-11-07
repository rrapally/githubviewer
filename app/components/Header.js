import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return ( 
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFCE00',
    marginLeft: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
    title: {
        color: 'red',
        fontSize: 18,
        marginTop: 10,
        marginLeft: 0,
        fontWeight: '600',
        textTransform: 'capitalize'
    }
});

export default Header;