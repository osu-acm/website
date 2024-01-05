import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = await getCollection("posts");
    return rss({
        title: 'Oregon State\'s ACM Chapter Blog',
        description: 'The Oregon State University Association for Computing Machinery (ACM) is a student organization that provides a community for students interested in computer science.',
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/posts/${post.slug}/`,
        })),
        customData: `<language>en-us</language>`,
    })
}