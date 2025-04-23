import Container from '@/components/Global/Container'
import Header from '@/components/Global/Header'
import BannerFeatured from '@/components/Home/BannerFeatured'
import MainPost from '@/components/Home/MainPost'
import SearchBox from '@/components/Home/SearchBox'
import React from 'react'

function Home() {
  return (
    <>
      <Header/>
      
      <Container>
          <div className="text-center py-10">
              <h1 className="headingPrimary">DekhoCampus News</h1>
              <p className="mt-2 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                Updates on the Latest Career Opportunities, Online Education, Online Universities, & more.
              </p>
          </div>
          <BannerFeatured />
          <SearchBox />
          <MainPost />
      </Container>
      
    </>
  )
}

export default Home