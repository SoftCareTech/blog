import React, { useState } from "react";

const BlogContext = React.createContext()

export const BlogProvider = ({ children }) => {
    const blogPost = [
        { title: 'Blog 1' },
        { title: 'Blog 2' },
        { title: 'Blog 3' }
    ]

    const [blogPosts, setBlogPosts] = useState(blogPost)
    const addBlogPost = () => {
        setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }])
    }
    // edit,delete and view fuction can created like the addBlogPost but will use useReducer 
    return <BlogContext.Provider value={
        {
            data: blogPosts,
            addBlogPost
        }
    } >
        {children}
    </BlogContext.Provider>
}

export default BlogContext







