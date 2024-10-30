import React from 'react';
import '../styles/news_updates.css';

const posts = [
  {
    title: 'Changelog for 2024',
    description: 'Explore the latest updates and enhancements in our 2024 changelog. Discover new latest updates and enhancements in our 2024 changelog.',
    date: 'January 01, 2021',
  },
  {
    title: 'Understanding React Hooks',
    description: 'A comprehensive guide to understanding and using React Hooks in your projects.',
    date: 'February 15, 2021',
  },
  {
    title: 'CSS Grid Layout',
    description: 'Learn how to create complex layouts easily with CSS Grid.',
    date: 'March 10, 2021',
  },
];

const NewsAndUpdates = () => {
    return (
        <div className="news-container">
            <div className='news-content'>
                <h2 className="news-heading">News & Updates</h2>
                <p>The latest news and updates</p>
            </div>
          <div className="posts-container">
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <div key={index} className="post">
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-description">{post.description}</p>
                  <p className="post-date">{post.date}</p>
                </div>
              ))
            ) : (
              <p>No posts available</p>
            )}
          </div>
        </div>
      );
    };
    
    export default NewsAndUpdates;