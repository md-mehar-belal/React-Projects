import React from 'react';
import { useLoaderData } from 'react-router-dom';
import '../../App.css'; // Make sure App.css is imported

function Github() {
  const data = useLoaderData();

  return (
    <div className="github-container">
      
      <img src={data.avatar_url} alt="Git picture" className="github-avatar" />
      Github followers: {data.followers}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/md-mehar-belal');
  return response.json();
};
