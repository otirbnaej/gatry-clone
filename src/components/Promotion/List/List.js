import React from 'react';
import PromotionCard from 'components/Promotion/Card/Card';

import './List.css';

const PromotionList = ({ loading, proms }) => {
  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="prom-list">
      {proms.map((prom) => (
        <PromotionCard prom={prom} />
      ))}
    </div>
  );
};

export default PromotionList;
