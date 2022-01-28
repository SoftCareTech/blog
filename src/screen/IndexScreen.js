import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Context as BlogContext } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'
const IndexScreen = () => {
    const { state, addBlogPost } = useContext(BlogContext)


    return <>
        <Button title='Add Post' onPress={addBlogPost} />
        <FlatList
            data={state}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => {
                return <View style={styles.row}>
                    <Text style={styles.title}>{item.title}
                    </Text>
                    <Feather name='trash' style={styles.icon} />
                </View>

            }}
        />

    </>
}


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        paddingHorizontal: 10,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }

})

export default IndexScreen






