import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import Menu from '../components/Menu';
import "./Home.css"
import { swiffyslider } from 'swiffy-slider'
import "swiffy-slider/css"


window.swiffyslider = swiffyslider;

window.addEventListener("load", () => {
  window.swiffyslider.init();
});


const Home = () => {
  const [data, setData] = useState([])
  const axios = require('axios').default;
  const kalit = "51cc7f5f459038d8f6fd27150449d6a1"

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${kalit}&language=en-US&page=1`)
      .then((v) => {
        setData(v.data.results)
      })
      .catch((err) => {
        console.log(err);
      })
  })

  const navigate = useNavigate()

  const GoToPage = (v) => {
    navigate(
      "/about",
      {
        state: v
      }
    )
  }

  return (
    <div>
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-8 left">
              <div>
                <Menu />
                <div className="bigImgCard">
                  <div className="birinchi">
                    <h3>The Queen's Gambit</h3>
                    <button className='btn btn-danger'>Watch</button>
                  </div>
                  <div className="ikkinchi">
                    <h1>Swiper</h1>
                  </div>
                </div>
                <div className="swiperCard">
                  <div class="swiffy-slider slider-item-show4">
                    <ul class="slider-container">


                      {
                        (data.length > 0) ? (


                          data.map((value, index) => {
                            return <li onClick={() => GoToPage(value)} key={index}>
                              <div id={`slide${index + 1}`}>
                                <div className="miniSwiper">
                                  <img src={`https://image.tmdb.org/t/p/original${value.backdrop_path}`} alt="" />
                                  <h5>{value.title}</h5>
                                </div>
                              </div>
                            </li>
                          })


                        ) : (<h1>Error</h1>)
                      }
                    </ul>

                    <button type="button" class="slider-nav"></button>
                    <button type="button" class="slider-nav slider-nav-next"></button>



                  </div>
                </div>

              </div>
            </div>
            <div className="col-4">
              <h1>kichik swiperlar</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home