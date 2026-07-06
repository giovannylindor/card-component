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
            <div className="m-auto w-[500px]">

                <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-[0.5rem]">
                    <img src={info.pfp} alt={info.username} className="w-[50px] rounded-full"/>
                    <h1 className="font-semibold">{info.username}</h1>
                    <p className="text-sm">&bull; 1d</p>
                </div>

                <div className="flex justify-center items-center">
                    <button>Follow</button>
                    {/* Ellipis coming soon*/}
                </div>
               </div>

            </div>
        </>
    )
}