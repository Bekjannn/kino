import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import "./About.css"
import { BsPlayCircle } from 'react-icons/bs';

const About = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  console.log(location.state);


  useEffect(() => {
    setData(location.state)
  }, [])



  return (
    <div className='orqa'>
      <div className="releative">
        <div className="oddiy">
          <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt="" className='bi' />

        </div>
        <div className="absolute">
          <div className="row">
            <div className="col-5 d-flex">
              <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt="" className='w-100' />
            </div>
            <div className="col-4">
              <h1>{data.title}</h1>
              <p>{data.overview}</p>
              <div className="buton">
                <button className='tugma'> <span className='icon'><BsPlayCircle /></span> Play movie for $6</button>
                <button className='tugma'>Trailer</button>
              </div>
            </div>
            <div className="col-3">
              <h1>Marvel</h1>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About