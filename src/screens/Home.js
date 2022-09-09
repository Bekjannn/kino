import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import Menu from '../components/Menu';
import "./Home.css"
import { swiffyslider } from 'swiffy-slider'
import { AiTwotoneStar } from 'react-icons/ai';
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
        <div className="containelr">
          <div className="row container">
            <div className="col-10 left">
              <div>
                <Menu />
                <div className="bigImgCard">
                  <div className="birinchi">
                    <h3>The Queen's Gambit</h3>
                    <button className='btn btn-danger'>Watch</button>
                  </div>
                  <div className="ikkinchi">
                    <div class="swiffy-slider slider-item-show2 slider-item-ratio">
                      <ul class="slider-container">
                        {
                          (data.length > 0) ? (
                            data.map((value, index) => {
                              return <li onClick={() => GoToPage(value)} key={index}>
                                <div id={`slide${index + 1}`}>
                                  <div className="two">
                                    <img src={`https://image.tmdb.org/t/p/original${value.backdrop_path}`} alt="" />
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
                                  <p><span id="star"><AiTwotoneStar /> </span>{value.id} 4 seasons</p>
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
            <div className="col-2 right">
              <div className="minSwifer">
                <div className="row">
                  <div className="col-3">
                    <div className="rasm">
                      <img src="https://m.media-amazon.com/images/S/amzn-author-media-prod/e8dn6of0ttsc12uptprh0cobf.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-6 text">
                    <h5>Kathryn Murphy</h5>
                    <p>katrynmurphy@yahoo</p>
                  </div>
                  <div className="col-3">
                    icon
                  </div>
                </div>
                <div className="ikkinchi">
                  <div class="swiffy-slider slider-item-show2 slider-item-ratio">
                    <ul class="slider-container">
                      {
                        (data.length > 0) ? (
                          data.map((value, index) => {
                            return <li onClick={() => GoToPage(value)} key={index}>
                              <div id={`slide${index + 1}`}>
                                <div className="two">
                                  <img src={`https://image.tmdb.org/t/p/original${value.backdrop_path}`} alt="" />
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
                <div className="slayd">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home