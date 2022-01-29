import React, { useContext, useState } from 'react'
import { Button, View, Text, TextInput, StyleSheet } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'

const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(BlogContext)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    return (<View>
        <Text style={styles.label}>Enter Title   </Text>
        <TextInput style={styles.input} value={title} onChangeText={
            text => setTitle(text)} />
        <Text style={styles.label}>Enter Content   </Text>
        <TextInput style={styles.input} value={content} onChangeText={
            text => setContent(text)} />
        <Button title='Add Post'
            onPress={() => addBlogPost({ title, content }, () => {
                navigation.navigate('Index')
            })} />
    </View>)
}


const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        paddingHorizontal: 5
    },
    label: {
        fontSize: 22,
        marginBottom: 5,
        paddingHorizontal: 5
    }
})

export default CreateScreen


