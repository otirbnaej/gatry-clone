import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PromotionList from 'components/Promotion/List/List';
import './Search.css';

const PromotionSearch = () => {
  const [proms, setProms] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    const params = {};
    if (search) {
      params.title_like = search;
    }
    axios.get('http://localhost:5000/promotions?_embed=comments', { params })
      .then((response) => {
        setProms(response.data);
      });
  }, [search]);

  return (
    <div className="prom-search">
      <header className="prom-search__header">
        <h1>Promo Show</h1>
        <Link to="/create">Nova Promoção</Link>
      </header>

      <input
        type="search"
        className="prom-search__input"
        placeholder="Buscar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <PromotionList proms={proms} loading={!proms.length} />
    </div>
  );
};

export default PromotionSearch;
