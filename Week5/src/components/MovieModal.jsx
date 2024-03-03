import React from 'react';

function MovieModal() {
  return (
    <div id="movieModal" className="modal">
      <div className="modal__header">
        <span className="modal__close">&times;</span>
        <h2 id="modalTitle">Add Movie</h2>
      </div>
      <div className="modal__body">
        <form className="add__form">
          <button id="form__add" className="btn form__add" type="submit"></button>
        </form>
      </div>
    </div>
  );
}

export default MovieModal;

