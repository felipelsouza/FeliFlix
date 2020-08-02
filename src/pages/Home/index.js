import React, { useEffect, useState } from 'react'

import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import cartegoriesRepository from '../../repositories/categories'
import DefaultPage from '../../components/DefaultPage'

function Home() {
  const [initialData, setInitialData] = useState([])

  useEffect(() => {
    cartegoriesRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setInitialData(categoriesWithVideos)
      })
      .catch((err) => {
        alert(`${err.Message}`)
      })
  }, [])

  return (
    <DefaultPage paddingAll={0}>
      {initialData.length === 0 && (<div>Loading...</div>)}

      {initialData.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={initialData[0].videos[0].titulo}
                url={initialData[0].videos[0].url}
                videoDescription={initialData[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={initialData[0]}
              />
            </div>
          )
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        )
      })}

    </DefaultPage>
  )
}

export default Home
