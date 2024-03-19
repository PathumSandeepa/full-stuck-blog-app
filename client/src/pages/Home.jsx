import React from 'react'
import {Link} from "react-router-dom";

function Home() {

    const posts = [
        {
            id: 1,
            title: "What is Lorem Ipsum What is Lorem Ipsum?",
            desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up",
            img: "https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg"
        },
        {
            id: 2,
            title: "What is Lorem Ipsum ",
            desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up",
            img: "https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 3,
            title: "What is Lorem Ipsum What is Lorem ",
            desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up",
            img: "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 4,
            title: "popular belief, Lorem Ipsum What is Lorem Ipsum?",
            desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up",
            img: "https://images.pexels.com/photos/574177/pexels-photo-574177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    ]

    return (
        <div className='home'>
            <div className='posts'>
                {posts.map(post => (
                    <div className='post' key={post.id}>
                        <div className='img'>
                            <img src={post.img} alt={post.title}/>
                        </div>
                        <div className='content'>
                            <Link className='link' to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                                <p>{post.desc}</p>
                                <button>Read More</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home