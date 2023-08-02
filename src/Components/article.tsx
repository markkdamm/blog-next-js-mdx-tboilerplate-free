import Image from "next/image";

export const Article = () => {
    return(
     <div>
        <h1>TITLE OF THE ARTICLE WHOSE TEMPLATE I AM GONNA SELL</h1>
        <div className="flex flex-row inline-block absolute justify-around content-between my-3 w-full">
        <Image src="/../public/logo.png" alt="Author pfp" height="23" width="23" className="rounded-full"/>
        <p className="text-gray-400 dark:text-gray-400 text-xs mx-2.5 tracking-wider mt-1 w-full">Sergio Holgado   ·   22 Jul. 2023</p>
        </div>
        <Image src="/../public/iglu.jpg" alt="iglu"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consequuntur laboriosam ut excepturi ducimus ullam accusamus suscipit, itaque molestias repellat consectetur. Soluta accusamus, qui veniam molestiae exercitationem similique molestias odio.</p>
     </div>
    );
}