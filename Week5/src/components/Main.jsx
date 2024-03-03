import React from 'react';
import DataInfo from './DataInfo';
import MovieModal from './MovieModal';

function Main() {
  return (
    <main>
      <div className="container">
        <div className="section__wrapper">
          <DataInfo />
          <div className="data__wrapper">
            {/* Content for displaying movies will go here */}
          </div>
          <MovieModal />
        </div>
      </div>
    </main>
  );
}

export default Main;
