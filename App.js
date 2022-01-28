import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import IndexScreen from './src/screen/IndexScreen'
import { Provider as BlogProvider } from './src/context/BlogContext'
import React from 'react'
const navigator = createStackNavigator({
    Index: IndexScreen
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
