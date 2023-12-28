import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <ul className="space-y-4">
            {data.map((post) => (
              <li key={post.id} className="bg-white p-4 rounded shadow-md">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-gray-700">{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;