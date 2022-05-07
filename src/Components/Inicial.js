import React from 'react';
import Avatar from './Avatar';
import LinkList from './LinkList';
import Head from './Head';
import styles from './Inicial.module.css';
import Projetos from './Projetos';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const Inicial = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://api.fxhash.xyz/graphql',
  });

  return (
    <div className={`${styles.grouped} animeTop`}>
      <Head title="Eduxdux " description="Eduxdux link list" />
      <Avatar />
      <LinkList />
      <ApolloProvider client={client}>
        <Projetos />
      </ApolloProvider>
    </div>
  );
};

export default Inicial;
