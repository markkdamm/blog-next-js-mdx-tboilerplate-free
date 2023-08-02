import { allArticles } from ".contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { compareDesc, format, parseISO } from "date-fns";
import Image from "next/image";
import { Post } from "@/app/page";

export const generateStaticParams = async () =>
  allArticles.map((post:any) => ({ slug: post._raw.flattenedPath }));
export const generateMetadata = ({ params }: any) => {
  const post = allArticles.find(
    (post: any) => post._raw.flattenedPath === params.slug
  );
  return { title: post?.title};
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allArticles.find((post) => post._raw.flattenedPath === params.slug);

  let MDXContent;

  if (!post) {
    return <div>404</div>;
  } else {
    MDXContent = getMDXComponent(post!.body.code);
  }

  const posts = allArticles.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="flex items-center justify-center">
    <div className="flex flex-col w-8/12 my-52">
        <div className="w-full h-20">
            <h1 className="text-4xl font-extrabold text-center uppercase">{post.title}</h1>
        </div>
        <div className="flex w-full h-24 justify-center items-center -mt-2">
            <div className="flex flex-row absolute justify-around content-between w-80 my-8">
                <Image src={post.pfp} alt="Author pfp" height="23" width="23" className="rounded-full" />
                <p className="text-gray-400 dark:text-gray-400 text-xs mx-2.5 tracking-wider mt-1 w-72">{post.author}   ·   {format(parseISO(post.date), 'LLLL d, yyyy')}</p>
            </div>
        </div>
        <div className="w-full h-200 justify-center align-middle px-24">
            <div className="absolute w-6/12 h-4/6">
                <Image fill src={post.img} alt={post.title} className="object-cover overflow-hidden" />
            </div>
        </div>
        <div className="w-9/12 justify-center items-center ml-24 text-base">
            <div className="flex w-full h-full text-justify">
                <p className="first-letter:float-left first-letter:text-7xl first-letter:pr-3 first-letter:-pb-6 first-letter:font-semibold leading-grt">
                <MDXContent/>
                </p>
            </div>
            <br></br>
            <h2 className="uppercase text-black-200 dark:text-black-200 text-opacity-90 font-extrabold text-lg">Suggested posts</h2>
        </div>
        <div className="flex flex-row h-80 justify-center items-center w-full"> 
        <div className="flex flex-row h-full place-content-between w-7/12 mr-60">    
        <Post key={0} {...posts[0]}/>
        <Post key={1} {...posts[1]}/>
        </div>
        </div>
    </div>
</div>
  );
}; /*<Post tag='programming' title='TITLE OF THE ARTICLE WHOSE TEMPLATE I AM GONNA SELL' image="/../public/iglu.jpg" date="22 Jul. 2023" />
<Post tag='programming' title='TITLE OF THE ARTICLE WHOSE TEMPLATE I AM GONNA SELL' image="/../public/iglu.jpg" date="22 Jul. 2023" />
<Post tag='programming' title='TITLE OF THE ARTICLE WHOSE TEMPLATE I AM GONNA SELL' image="/../public/iglu.jpg" date="22 Jul. 2023" />*/

export default PostLayout;