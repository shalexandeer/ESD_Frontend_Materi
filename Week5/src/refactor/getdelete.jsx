import React, { useState, useEffect } from 'react';

const App = () => {
  const [competitions, setCompetitions] = useState([]);
  const API_URL = `https://concrete-pika-noticeably.ngrok-free.app/`;

  useEffect(() => {
    fetchCompetitions();
  }, []);

  const fetchCompetitions = async () => {
    try {
      const response = await fetch(API_URL + 'competitions');
      if (!response.ok) {
        throw new Error('Failed to fetch competitions');
      }
      const data = await response.json();
      setCompetitions(data);
    } catch (error) {
      console.error('Error fetching competitions:', error);
    }
  };

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lomba</title>
        <link rel="stylesheet" href="../css/style.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" />
      </head>

      <body>
        <header>
          <nav className="navbarnya">
            <h1 className="nav">Lomba</h1>
          </nav>
        </header>

        <div className="container">
          {competitions.map((competition) => (
            <div className="card" key={competition.id}>
              <div className="card-content">
                <h4>{competition.title}</h4>
                <p>{competition.description}</p>
                <div className="text-right mt-4">
                  <button className="delete-button">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <script>{`const API_URL = "${API_URL}";`}</script>
      </body>
    </>
  );
};

export default App;
