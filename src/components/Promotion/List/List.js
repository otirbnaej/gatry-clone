import React from 'react';
import PromotionCard from 'components/Promotion/Card/Card';

import './List.css';

const PromotionList = ({ loading, error, proms }) => {
  if (error) {
    return <div>Erro interno do servidor.</div>;
  }

  if (loading || !proms) {
    return <div>Carregando...</div>;
  }

  if (!proms.length) {
    return <div>Nenhum resultado encontrado.</div>;
  }

  return (
    <div className="prom-list">
      {proms.map((prom) => (
        <PromotionCard key={prom.id} prom={prom} />
      ))}
    </div>
  );
};

export default PromotionList;
