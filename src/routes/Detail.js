import React from 'react';
import {useLocation} from 'react-router-dom';//useLocation(주소창 해당) - 주소창을 통해서 전달해주는 역할
import './Detail.css'

function Detail() {
    const location = useLocation();
    console.log(location);

    const {genres,poster,title,summary,year} = location.state;
  return (
    <div className='detail'>

        <img src={poster} alt={title} title={title} />g
            <div className='detail_data'>
                <h3 className='detail_title'>{title}</h3>
                <h4 className='detail_year'>{year}</h4>
                <ul className='detail_genres'>
                    {genres.map((genre, index) => {
                        return (
                        <li className='detail_genre' key={index}>{genre}</li>
                    )
                    })}
                </ul>
                <p className='detail_summary'>{summary.slice(0,180)} ...</p>
            </div>

    </div>
  )
}

export default Detail