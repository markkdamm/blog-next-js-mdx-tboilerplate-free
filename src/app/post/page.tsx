import Image from "next/image";
import { Post } from "@/Components/post";


export default function PostPage() {

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col w-8/12 my-52">
                <div className="w-full h-20">
                    <h1 className="text-4xl font-extrabold text-center uppercase">Architectural Engineering Wonders of the modern era for your Inspiration</h1>
                </div>
                <div className="flex w-full h-24 justify-center items-center -mt-2">
                    <div className="flex flex-row absolute justify-around content-between w-80 my-8">
                        <Image src="/../public/logo.png" alt="Author pfp" height="23" width="23" className="rounded-full" />
                        <p className="text-gray-400 dark:text-gray-400 text-xs mx-2.5 tracking-wider mt-1 w-72">Sergio Holgado   ·   22 Jul. 2023</p>
                    </div>
                </div>
                <div className="w-full h-200 justify-center align-middle px-24">
                    <div className="absolute w-6/12 h-4/6">
                        <Image fill src="/../public/rix.jpg" alt="picture of the article" className="object-cover overflow-hidden" />
                    </div>
                </div>
                <div className="w-9/12 justify-center items-center ml-24 text-base">
                    <div className="flex w-full h-24 leading-8 my-8 -mt-1">
                        <ul className="text-black-200 dark:text-black-200 text-opacity-90 font-medium">
                            <li>&#8226; First bullet point here goes a summary of the first topic in this article</li>
                            <li>&#8226; Second bullet point here goes a summary of the second topic in this article</li>
                            <li>&#8226; Third bullet point here goes a summary of the third topic in this article</li>
                        </ul>
                    </div>
                    <div className="flex w-full h-full text-justify">
                        <p className="first-letter:float-left first-letter:text-7xl first-letter:pr-3 first-letter:-pb-6 first-letter:font-semibold leading-grt">
                            Maecenas fringilla velit a felis dapibus suscipit. Mauris non elementum ante, eget ultricies est. Praesent vestibulum consectetur interdum. Ut mollis auctor arcu, vitae porta felis pharetra in. Vivamus et dictum neque. Sed non sem in mauris congue semper. Duis sed ultrices neque, ut dapibus leo. Morbi at cursus eros. Nam a lorem nec justo pulvinar ornare a a velit. Quisque quis mauris dui.
                            Mauris feugiat eu dui vitae ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin condimentum justo non velit convallis ornare. Etiam ut nunc felis. Nunc rutrum non quam a egestas. Ut in varius magna. Donec laoreet aliquam imperdiet. Fusce lobortis scelerisque feugiat. Cras accumsan bibendum nunc, eget commodo nisi volutpat sed.
                            Donec vel nunc sagittis, bibendum nisi tempor, commodo nisi. Quisque odio elit, interdum consequat orci vel, laoreet interdum urna. Donec maximus bibendum ipsum, vitae ornare nisl. Aliquam sed congue odio, ac egestas lacus. Proin eget odio vitae libero suscipit gravida quis sit amet nibh. Aliquam erat volutpat. In et sodales tellus, non volutpat velit. Sed rhoncus, purus ac mattis commodo, augue diam hendrerit lorem, id feugiat nisi ante vitae mauris. Aliquam in rhoncus enim. Fusce ultrices justo at metus finibus, id porta neque feugiat. Suspendisse varius cursus euismod. Donec elit nulla, lacinia eget ipsum ullamcorper, luctus ullamcorper nisl. Suspendisse id dolor ex. Fusce nec justo et risus pharetra porttitor. Mauris lorem tortor, aliquet in porta ac, laoreet sed erat. Sed et mollis dui, suscipit rhoncus metus.
                            <br></br><br></br>
                            Phasellus gravida vestibulum turpis eu blandit. Phasellus tincidunt, nunc in aliquam eleifend, sapien sapien hendrerit leo, in rhoncus ipsum nisl eu velit. Suspendisse potenti. Sed hendrerit at nulla nec pellentesque. Mauris malesuada magna in tellus suscipit, id finibus libero suscipit. Phasellus fringilla pellentesque tincidunt. Sed ornare viverra magna, ut accumsan libero dignissim in. In ut enim at quam egestas maximus. Morbi ut pretium justo, fringilla ultrices felis. Morbi id ornare mauris. Cras quam odio, iaculis non posuere elementum, sagittis vitae lectus. Nulla mollis mattis dolor, at tempus velit faucibus eu. Etiam ut velit neque. Duis mi mi, suscipit sit amet sagittis id, suscipit at urna. Fusce dignissim sapien odio, at consequat nulla euismod vel. Sed pharetra, ex non varius mollis, sapien ipsum eleifend quam, at condimentum lacus velit sed orci.
                            Suspendisse potenti.
                            <br></br><br></br>
                            Ut ac dapibus tortor. Nunc sed tortor in urna convallis placerat quis ut nulla. Nullam venenatis purus sed vestibulum faucibus. Cras id consectetur dui. Aliquam erat volutpat. Praesent dapibus volutpat egestas.Nunc sed accumsan felis. In non urna massa. Vivamus nisl velit, suscipit ut bibendum a, consequat in leo. Phasellus dignissim, lacus quis mattis imperdiet, neque dui convallis erat, vitae dictum tellus felis vitae massa. Quisque sagittis tincidunt purus ut ultricies. Mauris semper, ante feugiat congue mattis, neque metus malesuada elit, nec porta lacus metus id diam. Pellentesque lorem lacus, congue non varius non, interdum quis lacus. Donec lobortis pretium lacus a ullamcorper.
                        </p>
                    </div>
                    <br></br><br></br>
                    <h2 className="uppercase text-black-200 dark:text-black-200 text-opacity-90 font-extrabold text-lg">Suggested posts</h2>
                </div>
                <div className="flex flex-row h-52 md:w-10/12 md:ml-14 md:mb-2 flex-wrap sm:w-8/12 sm:ml-24">
                    <Post tag='programming' title='TITLE OF THE ARTICLE WHOSE TEMPLATE I AM GONNA SELL' image="/../public/iglu.jpg" date="22 Jul. 2023" />
                    <Post tag='programming' title='TITLE OF THE ARTICLE WHOSE TEMPLATE I AM GONNA SELL' image="/../public/iglu.jpg" date="22 Jul. 2023" />
                    <Post tag='programming' title='TITLE OF THE ARTICLE WHOSE TEMPLATE I AM GONNA SELL' image="/../public/iglu.jpg" date="22 Jul. 2023" />
                </div>
            </div>
        </div>
    )
}