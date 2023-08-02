import Image from "next/image"
import Link from 'next/link'

export const Post = (props: any) => {
    return (
        <div className="lg:w-2/6 lg:p-10 md:w-1/2 md:p-5 sm:w-full sm:py-10 sm:px-0  cursor-pointer">
            <Image src={props.image} alt={props.title} width="420" height="420" className="rounded-md" />
            <p className="font-semibold uppercase text-blue-500 dark:text-blue-600 text-2x1 my-2 text-sm mt-5 w-full">{props.tag}</p>
            <h1 className="font-bold uppercase text-lg w-full">{props.title}</h1>
            <div className="flex flex-row inline-block absolute justify-around content-between py-3">
                <Image src="/../public/logo.png" alt="Author pfp" height={23} width={23} className="rounded-full" />
                <p className="text-gray-400 dark:text-gray-400 text-xs mx-2.5 tracking-wider mt-1">Sergio Holgado   ·   {props.date}</p>
                <p className="my-2 ml-2"></p>
            </div>
        </div>
    )
}