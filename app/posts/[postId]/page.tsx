import getFormattedDate from "@/lib/getFormattedDate"
import { getSortedPostsData, getPostData } from "@/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"

export const generateStaticParams = () => {
    const posts = getSortedPostsData();

    return posts.map(post => ({
        postId: post.id
    }));
};

export const generateMetadata = ({ params }: { params: { postId: string } }) => {
    const posts = getSortedPostsData();
    console.log(params)
    // const { postId } = params;

    const post = posts.find(post => post.id);

    if (!post) {
        return {
            title: 'Post Not Found'
        };
    }

    return {
        title: post.title,
    };
};

const Post = async ({ params }: { params: { postId: string } }) => {
    const posts = getSortedPostsData();
    const { postId } = params;

    if (!posts.find(post => post.id === postId)) notFound();

    const { title, date, contentHtml } = await getPostData(postId);

    const pubDate = getFormattedDate(date);

    return (
        <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl pt-20">
            <h1 className="font-bold text-4xl pt-5  text-center">
                {title}
            </h1>
            <h2 className="mt-0 text-center font-bold text-2xl">
                {pubDate}
            </h2>
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            <article>
                <section className="text-center" dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <p>
                    <Link href="/">← Back to home</Link>
                </p>
            </article>
        </main>
    );
};

export default Post;