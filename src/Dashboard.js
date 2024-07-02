import React from 'react';
import './App.css'; // Import Dashboard-specific CSS
import { Link } from 'react-router-dom';

function Tweet({ username, content }) {
  return (
    <div className="tweet">
      <div className="tweet-header">
        <span className="username">{username}</span>
      </div>
      <div className="tweet-content">{content}</div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile">
        <img
          className="profile-image"
          src="https://pbs.twimg.com/profile_images/1308010958862905344/5IJ_CuBi_400x400.jpg"
          alt="Profile"
        />
        <div className="profile-info">
          <span className="profile-name">Your Name</span>
          <span className="profile-handle">@yourhandle</span>
        </div>
      </div>
      <div className="sidebar-links">
        <Link to="/dashboard" className="sidebar-link">Home</Link>
        <Link to="/dashboard/profile" className="sidebar-link">Profile</Link>
        <Link to="/dashboard/settings" className="sidebar-link">Settings</Link>
      </div>
    </div>
  );
}

function Feed() {
  // Mock data for tweets
  const tweets = [
    { id: 1, username: 'user1', content: 'First tweet content' },
    { id: 2, username: 'user2', content: 'Second tweet content' },
    { id: 3, username: 'user3', content: 'Third tweet content' },
  ];

  return (
    <div className="feed">
      {tweets.map(tweet => (
        <Tweet key={tweet.id} username={tweet.username} content={tweet.content} />
      ))}
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default Dashboard;