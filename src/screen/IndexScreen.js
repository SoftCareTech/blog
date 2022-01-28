import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import {Context as BlogContext} from '../context/BlogContext'

const IndexScreen = () => {
    const { state, addBlogPost } = useContext(BlogContext)
    

    return <>
        <Text>Index Screen</Text>
        <Button title='Add Post' onPress={addBlogPost} />
        <FlatList
            data={state}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => {
                return <Text>{item.title} </Text>
            }}
        />

    </>
}


const styles = StyleSheet.create({

})

export default IndexScreen






