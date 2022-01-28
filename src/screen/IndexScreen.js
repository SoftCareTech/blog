import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
    const { data, addBlogPost } = useContext(BlogContext)
    console.log('data')
    console.log(data)

    return <>
        <Text>Index Screen</Text>
        <Button title='Add Post' onPress={addBlogPost} />
        <FlatList
            data={data}
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






