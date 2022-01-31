import React, { useState } from 'react'
import { View, Button, TextInput, Text, StyleSheet } from 'react-native'


const BlogPostForm = ({ initData , onSubmit }) => {
    const [title, setTitle] = useState(initData.title)
    const [content, setContent] = useState(initData.content)

    return (<View>
        <Text style={styles.label}>Enter Title   </Text>
        <TextInput style={styles.input} value={title} onChangeText={
            text => setTitle(text)} />
        <Text style={styles.label}>Enter Content   </Text>
        <TextInput style={styles.input} value={content} onChangeText={
            text => setContent(text)} />
        <Button title='Save Post'
            onPress={() => {
                onSubmit({ title, content })
            }}

        />
    </View>)
}
BlogPostForm.defaultProps={
    initData:{
        title:'',
        content:''
    }
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

export default BlogPostForm


