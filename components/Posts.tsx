import React from 'react'
import { getSortedPostsData } from '@/lib/posts'
import ListItem from "./ListItem"

const Posts = () => {
    const posts = getSortedPostsData()

    return (
        <section id="blog" className="mt-6 mx-auto max-w-2xl">
            <h1 className="text-center font-bold text-4xl">
                Blog
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <ul className="w-full">
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </ul>
        </section>
    )
}

export default Posts