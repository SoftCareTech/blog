import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    console.log()
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { id: Math.floor(Math.random() * 99999), ...action.payload }]
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id != action.payload)

        default: state
    }
}
const addBlogPost = (dispatch) => {
    return (data, callback) => {
        dispatch({ type: 'add_blogpost', payload: data })
        callback()
    }
}
const deletePost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id })

    }
}
export const { Context, Provider }
    = createDataContext(blogReducer,
        { addBlogPost, deletePost },
        []
    ) 
