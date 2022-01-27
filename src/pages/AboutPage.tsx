import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  function informationClick() {
    navigate('/');
  }

  return (
    <>
      <h1>Страница информации</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam expedita aut repellendus
        voluptatum. Necessitatibus, in.
      </p>
      <button className="btn" onClick={informationClick}>
        Обратно к списку дел
      </button>
    </>
  );
};
