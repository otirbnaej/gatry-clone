import React from 'react';
import './Card.css';

const PromotionCard = ({ prom }) => (
  <div className="prom-card">
    <img src={prom.imageUrl} alt="promotion" className="prom-card__img" />
    <div className="prom-card__info">
      <div className="prom-card__title">{prom.title}</div>
      <span className="prom-card__price">
        R$
        {' '}
        {prom.price}
      </span>
      <footer className="prom-card__footer">
        {prom.comments.length > 0 && (
          <div className="prom-card__last-comment">
            &ldquo;
            {prom.comments[0].comment}
            &rdquo;
          </div>
        )}
        <div className="prom-card__comments-count">
          {prom.comments.length}
          {' '}
          {prom.comments.length > 1 ? 'Comentários' : 'Comentário'}
        </div>
        <a href={prom.url} target="_blank" className="prom-card__link" rel="noreferrer">Ir para o site</a>
      </footer>
    </div>
  </div>
);

export default PromotionCard;
