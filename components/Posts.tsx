import React from 'react'
import { getPostsMeta } from '@/lib/posts'
import ListItem from "./ListItem"

const Posts = async () => {
    const posts = await getPostsMeta()

    // checks if they are no posts
    if (!posts) {
        return <p className="mt-10 text-center"> Sorry, no posts available.</p>
    }

    return (
        <section id="blog" className="mt-6 mx-auto max-w-2xl">
            <h1 className="text-center font-bold text-4xl">
                Blog
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <ul className="w-full list-none p-0">
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </ul>
        </section>
    )
}

export default Posts