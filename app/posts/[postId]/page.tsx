
import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/postsHandlers";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    const posts = getSortedPostsData()

    return posts.map((post) => ({
        postId: post.id
    }))
}

export async function generateMetadata({ params }: { params: { postId: string } }) {

    const posts = getSortedPostsData();
    const { postId } = params;

    const post = posts.find((post) => post.id === postId)

    return post ? { title: post.title } : { title: "Post Not Found" }

    // if (post) {
    //     return {
    //         title: post.title,
    //     }
    // }

}

export default async function Post({ params }: { params: { postId: string } }) {

    const posts = getSortedPostsData();
    const { postId } = params;

    if (!posts.find((post) => post.id === postId)) {
        notFound();
    }

    const { title, date, contentHtml } = await getPostData(postId);
    const formattedDate = getFormattedDate(date);

    return (
        <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
            <h1 className="text-3xl mt-4 mb-0">{title}</h1>
            <p className="mt-0">
                {formattedDate}
            </p>
            <article>
                <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <p>
                    <Link href="/">← Back to home</Link>
                </p>
            </article>
        </main>
    )
}
