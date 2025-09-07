import { prisma } from "@/lib/prisma"; //Had to add this to import a singleton instance of prisma client. This required me to install prisma and the @prisma/client package.

export default async function PostPage({ params }) {

    const post = await prisma.post.findUnique({
        where: {

            slug: params.slug,

        },
    });

    return (

        <main className="flex flex-col items-center gap-y4 pt-24 text-center">

            <h1 className="text-3xl font-semibold">{post?.title}</h1>

            <p>{post?.content}</p>

        </main>

    );

}