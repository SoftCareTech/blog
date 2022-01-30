import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import IndexScreen from './src/screen/IndexScreen'
import { Provider as BlogProvider } from './src/context/BlogContext'
import React from 'react'
import ShowScreen from './src/screen/ShowScreen'
import CreateScreen from './src/screen/CreateScreen'
import EditScreen from './src/screen/EditScreen'

const navigator = createStackNavigator({
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen
}, {

    initialRouterName: 'Index'
    , defaultNavigationOptions: {
        title: "Blog"
    }
}
)


const App = createAppContainer(navigator)
export default () => {
    return <BlogProvider>
        <App />
    </BlogProvider>
}
