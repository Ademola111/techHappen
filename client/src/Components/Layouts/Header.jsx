import React from 'react'
import { Link } from 'react-router-dom'
import {HiBars3BottomRight} from 'react-icons/hi2'

const Header = () => {
  return (
    <div className='h-[70px] bg-white p-3 flex justify-around items-center'>
      <div>
        Logo
      </div>

      <div className="th-navigation text-[#ffa500]">
        <Link>Home</Link>
        <Link>Interviews</Link>
        <Link>News</Link>
        <Link>Features</Link>
        <Link>FinTechs</Link>
      </div>


      <div>
        <HiBars3BottomRight  size={30}/>
      </div>
    </div>
  )
}

export default Header