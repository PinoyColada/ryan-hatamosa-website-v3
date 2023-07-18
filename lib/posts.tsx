import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import Video from '@/components/Video.'
import CustomImage from '@/components/CustomImage'

type FileTree = {
    "tree": [
        {
            "path": string,
        }
    ]
}

export async function getPostByName(fileName: string):
    Promise<BlogPost | undefined> {
    const res = await fetch(`https://raw.githubusercontent.com/pinoycolada/blogposts/main/${fileName}`, {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        }
    })

    if (!res.ok) return undefined

    // getting the actually text from MDX file
    const rawMDX = await res.text()

    if (rawMDX === '404: Not Found') return undefined

    // using the compiled mdx, getting the frontmatter & content and telling th
    const { frontmatter, content } = await compileMDX<{
        title:
        string, date: string, tags: string[]
    }>({
        source: rawMDX,
        components: {
            Video,
            CustomImage,
        },
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [
                    rehypeHighlight,
                    rehypeSlug,
                    [rehypeAutolinkHeadings, {
                        behavior: 'wrap'
                    }]
                ]

            }
        }
    })

    // getting id without mdx extension using regex
    const id = fileName.replace(/\.mdx$/, '')

    const blogPostObj: BlogPost = {
        meta: {
            id, title: frontmatter.title, date: frontmatter.date,
            tags: frontmatter.tags
        }, content
    }

    return blogPostObj;
}



export async function getPostsMeta(): Promise<Meta[] | undefined> {
    const res = await fetch(`https://api.github.com/repos/pinoycolada/blogposts/git/trees/main?recursive=1`, {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        }
    })

    if (!res.ok) return undefined

    // Getting from the github repo
    const repoFiletree: FileTree = await res.json()

    // goes through each file from the github repo and only selects the files ending with '.mdx'
    const filesArray = repoFiletree.tree.map(obj => obj.path).filter(path => path.endsWith('.mdx'))

    // creating empty array for metadata
    const posts: Meta[] = []

    for (const file of filesArray) {
        const post = await getPostByName(file)
        if (post) {
            const { meta } = post
            posts.push(meta)
        }
    }

    // sorts the posts based the their date
    return posts.sort((a, b) => a.date < b.date ? 1 : -1)
}