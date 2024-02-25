import React, { useEffect, useState } from 'react';
import logo from '../Assets/networking.jpg';
import { Link } from 'react-router-dom';
const Home = (props) => {
    return (
        <div>
            <h1 className='text-2xl ml-5 font-bold mt-5'>Interesting...</h1>
            <div className='grid grid-cols-3 rounded-lg mt-2 bg-orange-300'>
                <div className='mt-3 mb-2 ml-5'>
                    <img src={props.news[0]?.urlToImage} alt={props.news[0]?.title} />
                    <h1 className='text-sm font-semibold mt-3 p-2 ml-2'>{props.news[0]?.title}</h1>
                    <h4>{props.news[0]?.content}</h4>
                </div>
                <div>
                    <div className='mt-3 mb-2 ml-5'>
                    <img src={props.news[1]?.urlToImage} alt={props.news[1]?.title} />
                    <h1 className='text-sm font-semibold mt-3 p-2 ml-2'>{props.news[1]?.title}</h1>
                    <h4>{props.news[1]?.content}</h4>
                    </div>
                </div>
                <div>
                    <div className='mt-3 mb-2 ml-5'>
                    <img src={props.news[2]?.urlToImage} alt={props.news[2]?.title} />
                    <h1 className='text-sm font-semibold mt-3 p-2 ml-2'>{props.news[2]?.title}</h1>
                    <h4>{props.news[2]?.content}</h4>
                    </div>
                </div>
            </div>

            {/* <div>
                <h1 className='text-2xl border-l-2 font-bold ml-3 mt-5'>Top Stories...</h1>
            <div className='grid grid-cols-4 p-3 bg-gray-500 '>
            {Array.isArray(props.news) && props.news.map((article) => (
                <Link to="/Open" state={{article:article}}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg p-3 ml-3 mt-3 bg-red-200" key={article?.title}>
                    <img className="w-full" src={article?.urlToImage} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{article?.title}</div>
                    </div>
                </div>
                </Link>  
            ))}
        </div>
            </div> */}
        </div>

        
    );
};

export default Home;
