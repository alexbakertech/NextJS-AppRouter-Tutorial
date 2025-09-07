import { prisma } from "@/lib/prisma"; //Had to add this to import a singleton instance of prisma client. This required me to install prisma and the @prisma/client package.

import Link from "next/link";

export default async function PostsPage() {

    const posts = await prisma.post.findMany();

    return (

        <main className="flex flex-col items-center gap-y4 pt-24 text-center">

            <h1 className="text-3xl font-semibold"> All Posts (0)</h1>

            <ul className="border-t border-b border-black/10 py-5 leading-8">
                {/* Map over the posts and display them. I still need to learn more about this */}
                {posts.map((post) => (
                    <li key={post.id} className="flex items-center justify-between px-5">
                        {/* For every post from the db, make a link that points to that post's id, which will procedurally generate the page.*/}
                        <Link href={`/posts/${post.slug}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>

        </main>

    );

}