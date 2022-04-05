import React from 'react';
import Article from '../components/Article';

const articles = [
  {
    id: 1,
    title: 'Czym jest teoria strun',
    author: 'Jan Nowak',
    text: '111111111111111111Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nihil doloribus explicabo cupiditate ipsum unde eveniet quas. Corporis, ex laborum vel maiores cupiditate, voluptatem repudiandae neque, illum nesciunt alias facilis.',
  },
  {
    id: 2,
    title: 'Czym jest teoria strun',
    author: 'Kamil Nowak',
    text: '222222222222222Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nihil doloribus explicabo cupiditate ipsum unde eveniet quas. Corporis, ex laborum vel maiores cupiditate, voluptatem repudiandae neque, illum nesciunt alias facilis.',
  },
  {
    id: 3,
    title: 'Czym jest teoria strun',
    author: 'Jan Kowalski',
    text: '3333333333333Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nihil doloribus explicabo cupiditate ipsum unde eveniet quas. Corporis, ex laborum vel maiores cupiditate, voluptatem repudiandae neque, illum nesciunt alias facilis.',
  },
];

const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList} </div>;
};

export default HomePage;
