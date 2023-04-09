import React from 'react'
import bg0 from '../images/bg0.jpg'
import Countdown from 'react-countdown';


const Launching = () => {
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ days,hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown

      return <div className='flex gap-3 items-center text-white'>
      <span className='bg-[#ffa500] w-[100px] h-[100px] text-[40px] rounded-sm text-white flex justify-center items-center shadow-md'>{days} d</span>
      :
      <span className='bg-[#ffa500] w-[100px] h-[100px] text-[40px] rounded-sm text-white flex justify-center items-center shadow-md'>{hours} h</span>
      :
      <span className='bg-[#ffa500] w-[100px] h-[100px] text-[40px] rounded-sm text-white flex justify-center items-center shadow-md'>{minutes} m</span>
      :
      <span className='bg-[#ffa500] w-[100px] h-[100px] text-[40px] rounded-sm text-white flex justify-center items-center shadow-md'>{seconds} s</span>

      </div>
    }
  };
  return (
    <div className='fixed z-10 flex'>
      <img src={bg0} alt="" srcset=""  className='h-screen z-20 opacity-100'/>
      <div className='bg-[#000775] flex flex-col justify-center items-center h-screen w-screen'>
        <h3 className='text-[40px] w-[600px] pb-6 uppercase font-bold text-white'>It's no longer news that the techappen website will be live</h3>
        <Countdown
          date={Date.now("April 21, 1983 01:15:00") + 172800000}
          renderer={renderer}
        />,
      </div>
    </div>
  )
}

export default Launching