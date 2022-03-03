import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import axios, { AxiosRequestConfig } from 'axios';
import { useTranslation } from 'react-i18next';

import MyRow from './Card/Card';
import { mockData } from './mockData';
import Language from './translation/translation';
import './index.css';

const AccessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZvbW1qdWxsQGdtYWlsLmNvbSIsImlkIjoxMDkxLCJuYW1lIjpudWxsLCJzdXJuYW1lIjpudWxsLCJpYXQiOjE2NDUwMjk5NTcsImV4cCI6MTE2NDUwMjk5NTcsImlzcyI6ImdvbGVtaW8iLCJqdGkiOiIxMjhlODA3NS0zNmVjLTRlNGItOTcyNi0zZmEyZThjYjI5ZDgifQ.cRhNfdvINc-ntnOcWoyUeuj-TLJ_Bju-1ZlPJoyKxNc';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [GardensFromSource, setGardensFromSource] = useState([]);

  const [token, setToken] = useState('');

  const trigerInputToken = (event: any) => {
    setToken(event.target.value);
  };

  useEffect(() => {
    if (token !== AccessToken) return;

    const config: AxiosRequestConfig = {
      method: 'get',
      url: 'https://api.golemio.cz/v2/gardens',
      headers: {
        'x-access-token': AccessToken,
        'Content-Type': 'application/json',
      },
    };
    axios(config).then((response: any) => {
      setGardensFromSource(response.data.features);
    });
  }, [token]);

  console.log(mockData);

  return (
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-teal-100 rounded-3">
        <h1 className="header text-center">{t('header')}</h1>
      </Container>
      <div className="input-group input-group-sm mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Token:
          </span>
        </div>
        <input
          onInput={trigerInputToken}
          value={token}
          type="text"
          className="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
      {token === AccessToken && (
        <div>
          <p className="fst-italic text-info">{t('success')}</p>
          <MyRow gardensArr={GardensFromSource} />
        </div>
      )}
      {token !== AccessToken && (
        <div>
          <p className="fst-italic text-danger">{t('message')}</p>
          <MyRow gardensArr={mockData.features} />
        </div>
      )}
      <hr />
      <Language />
    </Container>
  );
};

export default App;
