import React from 'react'
import NewsBanner from './NewsBanner'
import News from './News'
import Advert from '../Home/Advert/Advert'
import Subscribe from './Subscribe'

const Body = () => {
  return (
    <div className='p-6'>
        <NewsBanner />
        <News title="Most Popolar"/>
        <News title="Hot Stories"/>
        <Advert />
        <Subscribe />

    </div>
  )
}

export default Body