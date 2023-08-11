import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns';
import { allArticles, Article } from '.contentlayer/generated'

export const Post = (post:Article) => {
  return(
    <div className="lg:w-1/4 mx-2 lg:py-10 sm:w-1/2 sm:py-8 cursor-pointer">
    <Link href={`/posts/${post._raw.flattenedPath}`}>
    <div className="flex w-full md:h-56 sm:h-130">
    <div className="absolute rounded-md md:w-1/5 md:h-27pc sm:w-2/3 sm:h-1/2" >
      <Image fill src={post.img} alt={post.title} className="object-cover overflow-hidden rounded-md" />
    </div>
    </div>
    <p className={`font-semibold uppercase text-${post.color}-500 text-2x1 my-2 text-sm mt-5 w-full`}>{post.tag}</p>
    <h1 className="font-bold uppercase text-lg w-64">{post.title}</h1>
    <div className="flex flex-row inline-block absolute justify-around content-between py-3">
        <Image src={post.pfp} alt="Author pfp" height={23} width={23} className="rounded-full" />
        <p className="text-gray-400 dark:text-gray-400 text-xs mx-2.5 tracking-wider mt-1">{post.author}   ·   {format(parseISO(post.date), 'LLLL d, yyyy')}</p>
        <p className="my-2 ml-2"></p>
    </div>
    </Link>
</div>
  )
}


export default function Home() {
  const posts = allArticles.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  return (
    <div>
    <Head>
        <title>Next Blog Template</title>
    </Head>
    <Head>
        <meta property="og:title" content="Next Blog Template" key="title" />
    </Head>
    <div className='w-full h-full flex flex-row justify-center place-content-center'>
    <div className='flex flex-wrap w-11/12 h-full place-content-evenly py-10 ml-16'>
    {posts.map((post, idx) => (
        <Post key={idx} {...post} />
      ))}
    </div>
    </div>
    <footer className="bg-gray-50 py-8 mt-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-base font-semibold mb-4 text-gray-600">Terms of Use</h3>
            <ul className="text-gray-400 text-sm leading-6 underline">
              <li><Link href="/terms">Terms and conditions 1</Link></li>
              <li><Link href="/terms">Terms and conditions 2</Link></li>
              <li><Link href="/terms">Terms and conditions 3</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-4 text-gray-600">Data Privacy</h3>
            <ul className="text-gray-400 text-sm leading-6 underline">
              <li><Link href="/datapolicy">Data privacy policy 1</Link></li>
              <li><Link href="/datapolicy">Data privacy policy 2</Link></li>
              <li><Link href="/datapolicy">Data privacy policy 3</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-4 text-gray-600">Social Media</h3>
            <ul className="text-gray-400 text-sm leading-6">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-4 text-gray-600">Contact Information</h3>
            <ul className="text-gray-400 text-sm leading-6">
              <li>Email: info@example.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 1234 Street, City, Country</li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-300" />
        <p className="text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Your Blog Name. All rights reserved.
        </p>
      </div>
    </footer>
    </div>

  )
}

/*   <div className='flex flex-wrap w-10/12 h-12 flex-row mr-12 place-content-between mb-8'>
<Image src="/../public/iglu.jpg" alt="Blog Template Logo" height={75} width={100}/>
<div className='flex flex-row w-40 h-5 place-content-between mt-8'>
<button className='flex flex-column justify-center pr-2 text-slate-800 text-sm w-24 align-middle hover:text-purple-700 font-semibold'><Image className="mr-3" src="/../public/filter.png" alt="filter" width={16} height={16}/>  Sort</button>
<button className='flex flex-column justify-center pl-8 text-slate-800 text-sm w-24 align-middle hover:text-purple-700 font-semibold'><Image className="mr-3" src="/../public/sort.png" alt="filter" width={16} height={16}/>  Filter</button>
</div>
</div>*/