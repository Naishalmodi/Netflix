import React, { useEffect, useState } from 'react'

import './Player.css'
import backarrow from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const[apiData,setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmEwY2RmZGM2YmYyYTA1OWQyMTI4ZDIyZTFkMDg0YSIsIm5iZiI6MTcyOTU5MTEwNi4zMTE3MjQsInN1YiI6IjY3MTc3NTk3MWU5MGM3NzAzZjQ5NDI3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k3bnTpx15mjaZuGPsfvWXPWG17wLR6M0EUK78iXfWXk'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])
  
  
  return (
    <div className='player'>
      <img  src={backarrow} alt='' onClick={()=>{navigate(-2)}}/>
    <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='Trailer' frameBorder='0' allowFullScreen></iframe>

      <div className='player-info'>
          <p>{apiData.published_at.slice(0,10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player