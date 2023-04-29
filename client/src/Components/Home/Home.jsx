import React from 'react'
import Body from '../Body/Body'
import Layout from '../Layouts/Layout'
import Advert from './Advert/Advert'
import Search from './Search'
import Launching from '../Launching'


const Home = () => {
  return (
    <div>
        <>
            <Launching />
            <Layout>
              <Advert />
              <Search />
              <Body />
            </Layout>
        </>
    </div>
  )
}

export default Home