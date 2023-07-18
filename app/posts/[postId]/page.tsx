import getFormattedDate from "@/lib/getFormattedDate"
import { getPostsMeta, getPostByName } from "@/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"

// setting route segment fig for revalidate
// automatically make the pages server side rendered
// because it will no cache anything
export const revalidate = 0

type Props = {
    params: {
        postId: string
    }
}

// export const generateStaticParams = async () => {
//     // all of the fectches from server side will be dediplicated during build
//     const posts = await getPostsMeta();

//     // if there are no posts
//     if (!posts) return []

//     return posts.map(post => ({
//         postId: post.id
//     }));
// };

export const generateMetadata = async ({ params: { postId }}: Props ) => {
   
    const post = await getPostByName(`${postId}.mdx`); // deduplicated

    if (!post) {
        return {
            title: 'Post Not Found'
        };
    }

    return {
        title: post.meta.title,
    };
};

const Post = async ({ params: { postId }}: Props) => {
   
    const post = await getPostByName(`${postId}.mdx`); // deduplicated

    if (!post) notFound()

    // destructing metadata and content from post
    const { meta, content } = post

    const pubDate = getFormattedDate(meta.date);

    const tag = meta.tags.map((tag, i) => (
        <Link key={i} href={`/tags/${tag}`}>{tag}</Link>
    ))

    return (
        <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl pt-20">
            <h1 className="font-bold text-4xl pt-5  text-center">
                {meta.title}
            </h1>
            <h2 className="mt-0 text-center font-bold text-2xl">
                {pubDate}
            </h2>
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            <article>
                <section className="text-center" dangerouslySetInnerHTML={content} />
                <p>
                    <Link href="/">← Back to home</Link>
                </p>
            </article>
        </main>
    );
};

export default Post;