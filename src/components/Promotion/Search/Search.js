/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import useApi from 'components/Utils/useApi';
import PromotionList from 'components/Promotion/List/List';
import './Search.css';

const PromotionSearch = () => {
  const mountRef = useRef(null);
  const [search, setSearch] = useState('');
  const [load, loadInfo] = useApi({
    debounceDelay: 300,
    url: '/promotions',
    methos: 'get',
    params: {
      _embed: 'comments',
      _order: 'desc',
      _sort: 'id',
      title_like: search || undefined, // Em caso de não haver search, o retorno é undefined.
    },
  });

  useEffect(() => {
    load({
      debounced: mountRef.current,
    });

    if (!mountRef.current) mountRef.current = true;
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

      <PromotionList
        proms={loadInfo.data}
        loading={loadInfo.loading}
        error={loadInfo.error}
      />
    </div>
  );
};

export default PromotionSearch;
