import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BlogPostForm from '../compnents/BlogPostForm'
import { Context as BlogContext } from '../context/BlogContext'
const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    const { state, editBlogPost } = useContext(BlogContext)
    const blogPost = state.find((blogPost) => blogPost.id = id)


    return <BlogPostForm initData={{
        title: blogPost.title, content: blogPost.content
    }}
        onSubmit={data => {
            editBlogPost({ id, ...data },
                () => {
                    /// navigation.navigate('Show', { id: id })
                    navigation.pop()
                })
        }} />
}

const styles = StyleSheet.create({

})

export default EditScreen




