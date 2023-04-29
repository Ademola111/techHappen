import React from 'react'
import subscribe from '../../images/subscribe.svg'
import {GrFacebookOption,GrTwitter,GrLinkedinOption,GrInstagram,GrReddit,GrMedium} from 'react-icons/gr'

const Subscribe = () => {
  return (
    <div className='flex gap-1'>
        <div className='th-subscribe relative flex flex-col w-[30%] justify-center items-center'>
            <h2 className='th-subscribe-text absolute bottom-[-100px] left-0 ml-[-27px] text-white opacity-20  font-extrabold'>FOLLOWUS</h2>
            <div className='flex gap-4 flex-wrap w-[200px]'>
                <span className='flex justify-center items-center bg-[#ffa500] rounded-full p-2 text-white'><GrFacebookOption /></span>
                <span className='flex justify-center items-center bg-[#ffa500] rounded-full p-2 text-white'><GrTwitter /></span>
                <span className='flex justify-center items-center bg-[#ffa500] rounded-full p-2 text-white'><GrLinkedinOption /></span>
                <span className='flex justify-center items-center bg-[#ffa500] rounded-full p-2 text-white'><GrReddit /></span>
                <span className='flex justify-center items-center bg-[#ffa500] rounded-full p-2 text-white'><GrInstagram /></span>
                <span className='flex justify-center items-center bg-[#ffa500] rounded-full p-2 text-white'><GrReddit /></span>
                <span className='flex justify-center items-center bg-[#ffa500] rounded-full p-2 text-white'><GrInstagram /></span>
                <span className='flex justify-center items-center bg-[#ffa500] rounded-full p-2 text-white'><GrMedium /></span>
            </div>

            <p className='w-[250px] text-white my-4 italic'>"Your Tech Space to gather more information"</p>
        </div>

        <div className='th-subscribe relative  w-[70%] flex justify-start items-center pl-24'>
            <h2 className='th-subscribe-text absolute bottom-[-100px] left-0 ml-[-27px] text-white opacity-20  font-extrabold'>SUBSCRIBE</h2>
            <div className='absolute w-[500px] right-0 opacity-5'>
                <img src={subscribe} alt="" srcset="" />
            </div>

            <form className='flex flex-col gap-4'>
                <input type="text" placeholder='Subscribe to Us' className='w-[500px] h-[50px] pl-4 border-0 outline-none rounded-full'/>
                <button className='bg-[#ffa500] rounded-full w-[200px] text-white h-[50px]'>Send</button>
            </form>
        </div>
    </div>
   
  )
}

export default Subscribe