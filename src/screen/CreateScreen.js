import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import BlogPostForm from '../compnents/BlogPostForm'
import { Context as BlogContext } from '../context/BlogContext'

const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(BlogContext)
    return <BlogPostForm onSubmit={(data) => {
        addBlogPost(
            data,
            () => navigation.navigate('Index')
        )
    }} />
}


const styles = StyleSheet.create({

})

export default CreateScreen



