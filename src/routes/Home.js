import React, { Component } from 'react';
import axios from 'axios'; 
import Movie from '../components/Movie';
import './Home.css';

//비동기 함수로 네트워크 사용함으로 느려서 별도의 함수로 
//async(시간이 필요하다고 알려줌), await(기다려달라함) 두 함수 만들어서 같이 사용해야함

class Home extends Component {

  state = {
    isLoading: true,
    movies: [],
  }

  getMovies = async () => {
    const {
      data: {
        data: {movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
    // get : 주소창에 나타나며 ? 뒤에 원하는 데이터를 불러 올 수 있음
    console.log(movies);
    this.setState({isLoading:false,movies})// movies:movies 키:키값 이름이 동일하면 하나만 사용해도 됨
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({isLoading : false});
    // },6000);
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state; //구조 분해 할당
    return (
        <section className='container'>
          {isLoading ?
            (<div className='loader'>
              <span className='loader_text'>'Loading...'</span>
            </div>)
            :
            (<div className='movies'>
              {movies.map( (movie,index) => (<Movie
                                  key={index}
                                  id={movie.id}
                                  year={movie.year}
                                  title={movie.title}
                                  summary={movie.summary} 
                                  poster={movie.medium_cover_image}
                                  genres={movie.genres}
                                />))}
            </div>)
          }
        </section>
      )
  }
}

export default Home