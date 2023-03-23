import React from 'react'
import Body from '../Body/Body'
import Layout from '../Layouts/Layout'
import Advert from './Advert/Advert'
import Search from './Search'


const Home = () => {
  return (
    <div>
        <>
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