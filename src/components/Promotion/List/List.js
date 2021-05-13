import React, { useState } from 'react';
import PromotionCard from 'components/Promotion/Card/Card';
import UIModal from 'components/UI/Modal/Modal';

import './List.css';

const PromotionList = ({ loading, error, proms }) => {
  const [promotionId, setPromotionId] = useState(null);

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
        <PromotionCard
          key={prom.id}
          prom={prom}
          onClickComments={() => setPromotionId(prom.id)}
        />
      ))}
      <UIModal
        isOpen={Boolean(promotionId)}
        onClickClose={() => setPromotionId(null)}
      >
        <h1>Comentários</h1>
      </UIModal>
    </div>
  );
};

export default PromotionList;
