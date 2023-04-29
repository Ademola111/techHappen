import React from 'react'
import {BsEye,BsFillPlayFill} from 'react-icons/bs'
import {BiComment} from 'react-icons/bi'

const NewsBanner = () => {
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
        "type" : "Video",
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
        "type" : "Video",
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
            "Tech"
          
        ]
    },
    {
        "id" : "003",
        "image" : require('../../images/post 3.jfif'),
        "title" : "Financial impropriety against Flutterwave",
        "type" : "Image",
        "tags" : [
            "Tech"
          
        ]
    },
    {
        "id" : "003",
        "image" : require('../../images/post 3.jfif'),
        "title" : "Financial impropriety against Flutterwave",
        "type" : "Video",
        "tags" : [
            "Tech"
          
        ]
    },

  ]
  return (
    <div className='flex gap-2'>
        <div className='th-newsleft p-6 min-h-[100px]'>
            <h3 className='font-bold text-[#ffa500] text-2xl mb-4'>#What's happening ?</h3>

            <div className='p-3 text-[#fff] flex gap-3 mb-3  opacity-2 rounded-md'>
                <div className='w-[70px] h-[60px] rounded-md'>
                    <img src="/static/media/post.e3df943a91f9b5f0cd01.jfif" alt="" className='w-full h-full rounded-md'/>
                </div>

                <div>
                    <p className='text-sm font-medium'>#chatgpt-4 <span> · 3 mins Ago</span></p>
                    <h5 className='font-semibold text-lg'>How to use chatGPT 4</h5>
                </div>
            </div>

            <div className='p-3 text-[#fff] flex gap-3  mb-3  opacity-6 rounded-md'>
                <div className='w-[80px]  rounded-md'>
                    <img src="/static/media/post.e3df943a91f9b5f0cd01.jfif" alt="" className='w-full h-full rounded-md'/>
                </div>

                <div>
                    <p className='text-sm font-medium'>#chatgpt-4 <span> · 3 mins Ago</span></p>
                    <h5 className='font-semibold text-lg'>How to use chatGPT 4</h5>
                    <div className='flex gap-2 items-center'>
                        <div className='th-post-img'>
                            <img src="http://localhost:3000/static/media/post.e3df943a91f9b5f0cd01.jfif" alt="" className='rounded-full w-full h-full'/>
                        </div>
                            <h3 className='text-[12px] text-[#ffa500] font-bold'>Tech admin</h3>
                    </div>
                </div>
            </div>

            <div className='p-3 text-[#fff] flex gap-3  mb-3 opacity-6 rounded-md'>
                <div className='w-[70px] h-[60px] rounded-md'>
                    <img src="/static/media/post.e3df943a91f9b5f0cd01.jfif" alt="" className='w-full h-full rounded-md'/>
                </div>

                <div>
                    <p className='text-sm font-medium'>#chatgpt-4 <span> · 3 mins Ago</span></p>
                    <h5 className='font-semibold text-lg'>How to use chatGPT 4</h5>
                </div>
            </div>


            <h3 className='font-bold text-[#ffa500] text-2xl my-4'>#Trending for you</h3>

            <div className='flex flex-wrap gap-4 text-sm text-white px-4 py-2'>
                <span>
                · Chatgpt
                </span>

                <span>
                · Chatgpt
                </span>

                <span>
                · Flutternews
                </span>

                <span>
                · New Application
                </span>

                <span>
                · Paystack Loitering
                </span>

                <span>
                · Palmpay Issue
                </span>

                <span>
                · Kuda Job
                </span>

                <span>
                · Flutternews
                </span>

                <span>
                · New Application
                </span>

                <span>
                · Paystack Loitering
                </span>

                <span>
                · Palmpay Issue
                </span>

                <span>
                · Kuda Job
                </span>


                <span>
                · Flutternews
                </span>

                <span>
                · New Application
                </span>

                <span>
                · Paystack Loitering
                </span>

                <span>
                · Palmpay Issue
                </span>

                <span>
                · Kuda Job
                </span>
            </div>


            <h3 className='font-bold text-[#ffa500] text-2xl my-4'>#Upcoming Events</h3>

            <div className='flex justify-between'>
                <div className='relative bg-white rounded-md'>
                    <div className='w-[170px] h-[150px] rounded-md'>
                        <img src="/static/media/post.e3df943a91f9b5f0cd01.jfif" alt="" className='w-full h-full rounded-md'/>
                    </div>

                    <div className='label-live absolute bottom-0  p-2 text-white w-full'>
                        hello
                    </div>
                </div>
                <div className='bg-white rounded-md'>
                    <div className='w-[170px] h-[150px] rounded-md'>
                        <img src="/static/media/post.e3df943a91f9b5f0cd01.jfif" alt="" className='w-full h-full rounded-md'/>
                    </div>
                </div>
            </div>
        </div>

        <div  className='th-newsright p-2 flex flex-wrap justify-between'>
            {data.map((item) => {
                return (
                    <div className='relative pb-6 w-[30%] text-white'>
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

export default NewsBanner