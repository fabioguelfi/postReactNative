//import liraries
import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

import Post from './components/Post'

// create a component
class Posts extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default Posts;
