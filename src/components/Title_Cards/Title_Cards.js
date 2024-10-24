import React, { useEffect, useRef, useState } from 'react'
import './Title_Cards.css';
import cards_data from '../../assets/cards/Cards_data';
import { Link } from 'react-router-dom';

const Title_cards = ({title,cateory}) => {
  const[apiData,setApiData] = useState([]);
  const cardsRef = useRef();


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmEwY2RmZGM2YmYyYTA1OWQyMTI4ZDIyZTFkMDg0YSIsIm5iZiI6MTcyOTU5MTEwNi4zMTE3MjQsInN1YiI6IjY3MTc3NTk3MWU5MGM3NzAzZjQ5NDI3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k3bnTpx15mjaZuGPsfvWXPWG17wLR6M0EUK78iXfWXk'
    }
  };
  
  
  const handlewheel = (event) =>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${cateory?cateory:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));


    cardsRef.current.addEventListener('wheel',handlewheel);
  },[]);


  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className='card-list' ref={cardsRef}>
        {apiData.map((card,index)=>{
          return(
            <Link to={`/player/${card.id}`} className='card' key={index}>
                <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt=''/>
                <p>{card.original_title}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Title_cards