import React from 'react'
import {BsEye,BsFillPlayFill} from 'react-icons/bs'
import {BiComment} from 'react-icons/bi'

const News = (props) => {
    const data = [
        {
            "id" : "001",
            "image" : require('../../images/post.jfif'),
            "title" : "Financial impropriety against Flutterwave",
            "type" : "Image",
            "tags" : [
                "Tech",
                "blog",
                "Web"
            ]
        },
        {
            "id" : "002",
            "image" : require('../../images/post 2.jfif'),
            "title" : "Financial impropriety against Flutterwave",
            "type" : "Image",
            "tags" : [
                "Tech",
                "blog",
                "Web"
            ]
        },
        {
            "id" : "003",
            "image" : require('../../images/post 3.jfif'),
            "title" : "Financial impropriety against Flutterwave",
            "type" : "Image",
            "tags" : [
                "Tech",
                "blog",
                "Web"
            ]
        },
        {
            "id" : "003",
            "image" : require('../../images/post 3.jfif'),
            "title" : "Financial impropriety against Flutterwave",
            "type" : "Video",
            "tags" : [
                "Tech",
                "blog",
                "Web"
            ]
        },
      ]
  return (
    <div className='my-6'>
        <div className="th-header my-12">
            {props.title}
        </div>

        <div  className='p-2 flex flex-wrap justify-between'>
            {data.map((item) => {
                return (
                    <div className='relative pb-6 w-[22%] text-white'>
                        {item.type === 'Video' && <span className='th-play absolute top-[25%] left-1/2'><BsFillPlayFill size={40}/></span>}
                        <img src={item.image} alt=""  className='rounded-md w-full'/>
                        <div className='flex gap-3 mt-2 flex-wrap'>
                            {item.tags.map((tag) => {
                             return <span className='bg-[#ffa500] px-4 text-xs  rounded-full flex items-start justify-center text-[#fff]'>{tag.toUpperCase()}</span>
                            })}
                        </div>
                        <div className='flex gap-2 my-2 items-center'>
                            <div className='th-post-img'>
                            <img src="http://localhost:3000/static/media/post.e3df943a91f9b5f0cd01.jfif" alt="" className='rounded-full w-full h-full'/>
                            </div>
                            <h3 className='text-[12px] text-[#ffa500] font-bold'>Tech admin</h3>
                        </div>
                        <h5 className='mt-2'>{item.title}</h5>
                        <div className='flex text-[#eee] justify-between mt-4'>
                            <span className='flex items-center text-sm gap-1'>
                                <BsEye />
                                {/* Change this to name */}
                                <p>400 views</p>
                            </span>

                            <span className='flex items-center text-sm gap-1'>
                                <BiComment />
                                <p>400 Comments</p>
                            </span>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default News