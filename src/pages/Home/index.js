import React from 'react'

import Header from '../../components/Header'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'

import initialData from '../../data/initial_data.json'

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Header />

      <BannerMain
        videoTitle={initialData.categories[0].videos[0].title}
        url={initialData.categories[0].videos[0].url}
        videoDescription={"Gojira's video for 'Silvera' from the album Magma"}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categories[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categories[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categories[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categories[3]}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categories[4]}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categories[5]}
      />

      <Footer />

    </div>
  )
}

export default App;
