import React, { useEffect, useState } from 'react'
import Home from './Home'
import Navbar from './Navbar';

const Main = () => {
    const [news, setNews] = useState([]);
    const [menu,setMenu]=useState("general")

    const getNews = async () => {
        try {
            const response = await fetch(`https://gnews.io/api/v4/everything?q=${menu}&sortBy=popularity&token=${process.env.REACT_APP_SECRET_KEY}&max=10`);
            console.log(response);
            const json = await response.json();
            setNews(json.articles); // Assuming the articles are stored in the 'articles' property of the JSON response
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getNews();
    }, [menu]);
  return (
    <div>
        <Home news={news}/>
    </div>
  )
}

export default Main
