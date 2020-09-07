import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles,setArticles] = useState([])
    useEffect(()=>{
      fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=6571931580844b0a86c0f012347a191a')
      .then(res=> res.json())
      .then(data => setArticles(data.articles))
    },[])
    return (
        <div>
            <h1>Top Heading :{articles.length}</h1>
            {
             
             articles.map(article =><News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;