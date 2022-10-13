import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import {Link} from 'react-router-dom'

function Movie({genres,id,poster,title,summary,year}) {
    //console.log(props);
    //const {genres,id,poster,title,summary,year} = props;
  return (
    //props로 받았으면 detail의 state에도 props로 전달해주고 
    //구조분해할당으로 전달했으면 detail의 state도 구조분해할당로 전달해야 됨
    <div className='movie'>
      <Link to={'/detail'} state={{genres,id,poster,title,summary,year}}>
        <img src={poster} alt={title} title={title} />
          <div className='movie_data'>
              <h3 className='movie_title'>{title}</h3>
              <h4 className='movie_year'>{year}</h4>
              <ul className='movie_genres'>
                  {genres.map((genre, index) => {
                      return (
                      <li className='movie_genre' key={index}>{genre}</li>
                    )
                  })}
              </ul>
              <p className='movie_summary'>{summary.slice(0,180)} ...</p>
          </div>
      </Link>
    </div>
    
  )
}// {slice (0,180)}... 0번 부터 180번 문자까지만 나오고 뒤에는 ...이 붙음

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,//arrayOf()는 문자열을 원소로 같는 배열
};

export default Movie