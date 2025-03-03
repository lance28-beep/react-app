import React from 'react';

function Cards({ title, name, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Cards;