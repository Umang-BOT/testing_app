import React, { useEffect, useState } from 'react'
import Home from './Home'
import Navbar from './Navbar';

const Main = () => {
    const [news, setNews] = useState([]);
    const [menu,setMenu]=useState("general")

    const getNews = async () => {
        try {
            const response = await fetch(`https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=c6dc13eb6a5e1a6c804928edbb2e8140`);
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
