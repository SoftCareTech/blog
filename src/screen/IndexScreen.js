import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
    const value = useContext(BlogContext)

    console.log(value)
    return <>
        <Text> hello Index Screen</Text>
    </>
}


const styles = StyleSheet.create({

})

export default IndexScreen






