import React from 'react';
import { useParams } from 'react-router-dom';
import PromotionForm from 'components/Promotion/Form/Form';
import UIContainer from 'components/UI/Container/Container';

const PagesPromotionForm = () => {
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams();

  return (
    <UIContainer>
      <PromotionForm id={id ? Number.parseInt(id, 10) : null} />
    </UIContainer>
  );
};

export default PagesPromotionForm;
