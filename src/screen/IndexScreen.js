import React, { useContext, useEffect } from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Button } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Context as BlogContext } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'
const IndexScreen = ({ navigation }) => {
    const { state, getBlogPost, deletePost } = useContext(BlogContext)
    useEffect(() => {
        getBlogPost()
    }, [])
    return <>
        <FlatList
            data={state}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                return (<TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                    <View style={styles.row}>
                        <Text style={styles.title}>{item.title} -- {item.id}
                        </Text>
                        <TouchableOpacity onPress={() => { deletePost(item.id) }}>
                            <Feather name='trash' style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                )

            }}
        />

    </>
}
IndexScreen.navigationOptions = ({ navigation }) => {

    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name='plus' size={30} />
            </TouchableOpacity>
        ),
    };
    /* return {
         headerRight: () => (
             <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
                 <EvilIcons name="pencil" size={35} />
             </TouchableOpacity>
         ),
     };  
      
     return {
         headerRight: (
             <TouchableOpacity onPress={() => navigation.navigate('Create')} >
                 <Feather name='plus' size={30} />
             </TouchableOpacity>
 
         )
     }
     */
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






