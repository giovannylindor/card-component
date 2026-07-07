//social media card component 
interface UserInfo {
    username: string;
    pfp: string;
    post: string;
    caption: string;

} 
const info: UserInfo = {
    username: 'gi3vnny',
    pfp: 'src/assets/pfp.jpg',
    post: 'src/assets/post.jpeg',
    caption: 'my first post'
}

export default function Card(){

    return(
        <>
            <div className="m-auto w-125">


                {/* Top Section*/}
                <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center gap-2">
                        <img src={info.pfp} alt={info.username} className="w-12.5 rounded-full"/>
                        <h1 className="font-semibold">{info.username}</h1>
                        <p className="text-sm">&bull; 1d</p>
                    </div>

                    <div>
                        <button className="p-[0.3rem] font-semibold bg-neutral-300 rounded-md text-sm w-17.5 cursor-pointer">Follow</button>
                        {/* Ellipis coming soon*/}
                    </div>
               </div>



               {/* Post Section*/}
               <div>

                {/* Image of Post*/}
                <div>
                    <img src={info.post} alt={info.username + "'s post"} 
                    className="w-125 my-2"
                    />
                </div>

                {/* Icons */}
                <div className="flex justify-between w-125">
                    <div className="flex items-center gap-3">
                        <img src="src/assets/heart.png" alt="like" 
                        className="w-6.25 cursor-pointer"
                        />

                        <img src="/src/assets/chat.png" alt="comment" 
                        className="w-5.5 cursor-pointer"
                        />

                        <img src="src/assets/send.png" alt="share" 
                        className="w-6 cursor-pointer"
                        />
                    </div>

                    <div>
                        <img src="src/assets/save-instagram.png" alt="save" 
                        className="w-6 cursor-pointer"
                        />
                    </div>
                </div>

                {/* Username & Caption */}
                <div className="flex gap-2 mt-1">
                    <h1 className="font-semibold">{info.username}</h1>
                    <p>{info.caption}</p>
                </div>
               </div>

            </div>
        </>
    )
}