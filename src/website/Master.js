import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'

const Master = ({Rcf}) => {
  return (
    <div>
        <Header/>
        <Rcf></Rcf>
        <Footer/>
    </div>
  )
}

export default Master