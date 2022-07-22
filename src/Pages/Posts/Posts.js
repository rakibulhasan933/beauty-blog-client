import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Posts.css';
import Spinner from '../../components/Spinner/Spinner';
const data = [
    {
        _id: 0,
        name: "Learning Java",
        dec: " loremLorem ipsum dolor sit am loremLorem ipsum dolor sit amloremLorem ipsum dolor sit amloremLorem ipsum dolor sit amvv",
        time: "1 day ago",
        img: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
        _id: 1,
        name: "Learning Meshine ",
        dec: " loremLorem ipsum dolor sit am loremLorem ipsum dolor sit amloremLorem ipsum dolor sit amloremLorem ipsum dolor sit amvv",
        time: "6 hour ago",
        img: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
        _id: 2,
        name: "Learning React",
        dec: " loremLorem ipsum dolor sit am loremLorem ipsum dolor sit amloremLorem ipsum dolor sit amloremLorem ipsum dolor sit amvv",
        time: "4 hour ago",
        img: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
        _id: 3,
        name: "Learning CSS",
        dec: " loremLorem ipsum dolor sit am loremLorem ipsum dolor sit amloremLorem ipsum dolor sit amloremLorem ipsum dolor sit amvv",
        time: "3 hour ago",
        img: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
        _id: 4,
        name: "Learning React",
        dec: " loremLorem ipsum dolor sit am loremLorem ipsum dolor sit amloremLorem ipsum dolor sit amloremLorem ipsum dolor sit amvv",
        time: "2 hour ago",
        img: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
        _id: 5,
        name: "Learning C++",
        dec: " loremLorem ipsum dolor sit am loremLorem ipsum dolor sit amloremLorem ipsum dolor sit amloremLorem ipsum dolor sit amvv",
        time: "1 hour ago",
        img: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    }
];

const Posts = () => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, SetLoading] = useState(false);

    useEffect(() => {
        SetLoading(true);
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                SetLoading(false);
            })
    }, [])
    return isLoading ? <Spinner /> : (
        <div className='posts'>
            {
                blogs.map(item =>
                    <Post key={item._id} item={item} ></Post>
                )
            }
        </div>
    );
};

export default Posts;