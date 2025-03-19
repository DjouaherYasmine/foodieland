import React from 'react';
import './blog.css';
import albert from '../assets/albert.svg';
import chef2 from '../assets/chef2.svg';
import courtney from '../assets/courtney.svg';
import dianne from '../assets/dianne.svg';
import dumplings from '../assets/dumplings.svg';
import graines from '../assets/graines.svg';
import lasagne from '../assets/lasagne.svg';
import hiring from '../assets/hiring.svg';
import noodles from '../assets/noodles.svg';
import robert from '../assets/robert.svg';
import wade from '../assets/wade.svg';
import fruit from '../assets/pic1.svg';
import leslie from '../assets/leslie.svg';
import viande from '../assets/viande.svg';
import pate from '../assets/pate.svg';
import adImage from '../assets/ads.svg';
const blogPosts = [
    {
      image: noodles,
      title: "Crochet Projects for Noodle Lovers",
      description: "Lorem ipsum dolor sit amet, consectetur...",
      author: "Wade Warren",
      date: "12 November 2021",
      avatar: wade,
    },
    {
      image: fruit,
      title: "10 Vegetarian Recipes To Eat This Month",
      description: "Lorem ipsum dolor sit amet, consectetur...",
      author: "Robert Fox",
      date: "12 November 2021",
      avatar: robert,
    },
    {
      image: chef2,
      title: "Full Guide to Becoming a Professional Chef",
      description: "Lorem ipsum dolor sit amet, consectetur...",
      author: "Dianne Russell",
      date: "12 November 2021",
      avatar: dianne,
    },
    {
      image: lasagne,
      title: "Simple & Delicious Vegetarian Lasagna",
      description: "Lorem ipsum dolor sit amet, consectetur...",
      author: "Leslie Alexander",
      date: "12 November 2021",
      avatar: leslie,
    },
    {
      image: graines,
      title: "Plantain and Pinto Stew with Aji Verde",
      description: "Lorem ipsum dolor sit amet, consectetur...",
      author: "Courtney Henry",
      date: "12 November 2021",
      avatar: courtney,
    },
    {
      image: hiring,
      title: "We’re Hiring a Communications Assistant!",
      description: "Lorem ipsum dolor sit amet, consectetur...",
      author: "Albert Flores",
      date: "12 November 2021",
      avatar: albert,
    },
  ];

function Blog() {
  return (
    <>
    <div className='blog-header'>

    <h1 className='title7'>Blog & Article</h1>
        <p className='paragraph7'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </p>
    </div>
        <div className="wrapper7">
  <div className='input7'>
    <input type='text' placeholder='Search article, news or recipe...' className='text-input7' />
    <button className='button7'>Search</button>
  </div>
</div>

<div className="container7">
      <div className="blog-section">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
              <div className="blog-author">
                <img src={post.avatar} alt={post.author} className="author-avatar" />
                <span>{post.author}</span>
                <span className="date">{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <aside className="sidebar">
        <h3 className="sidebar-title">Tasty Recipes</h3>
        <div className="recipes7">
          <div className="recipe7-card">
            <img src={ viande } alt="Meatballs" />
            <div>
              <p className="recipe7-title">Chicken Meatballs with Cream Cheese</p>
              <p className="recipe7-author">By Andreas Paula</p>
            </div>
          </div>
          <div className="recipe7-card">
            <img src={ pate } alt="Bolognese Ragu" />
            <div>
              <p className="recipe7-title">Traditional Bolognese Ragu</p>
              <p className="recipe7-author">By Andreas Paula</p>
            </div>
          </div>
          <div className="recipe7-card">
            <img src={ dumplings} alt="Dumplings" />
            <div>
              <p className="recipe7-title">Pork and Chive Chinese Dumplings</p>
              <p className="recipe7-author">By Andreas Paula</p>
            </div>
          </div>
        </div>
        <img src={ adImage } alt="Ad" className="ad-banner" />
      </aside>
    </div>

   
    </>
  );
}

export default Blog;
