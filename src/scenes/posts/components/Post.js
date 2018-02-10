//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Post extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.postTitle}>Post</Text>
                <Text style={styles.postDescripition}>lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit</Text>
            </View>
        )
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 10,
        marginTop: 10
    },
    postTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    postDescripition: {
        marginTop: 10,
    }

});

//make this component available to the app
export default Post;
