import React, { useState, useEffect } from 'react';
import styles from './Projetos.module.css';

import { useLazyQuery } from '@apollo/client';
import { GET_PROJECTS } from '../graphql/Queries';

function Projetos() {
  const [projects, setProject] = useState([]);
  const [getProjetos, { data, loading, error }] = useLazyQuery(GET_PROJECTS, {
    variables: { name: 'Eduxdux' },
  });
  useEffect(() => {
    if (data) {
      const { generativeTokens } = data?.user;
      console.log(data);
      setProject(generativeTokens);
    }
    getProjetos();
  }, [!loading]);

  return (
    <div className={styles.projetos}>
      {error && <h1>Error on graphql</h1>}
      {projects.length > 0 &&
        projects.map((token) => (
          <>
            <div className={styles.card}>
              <img
                src={token.displayUri.replace(
                  'ipfs://',
                  'https://gateway.fxhash2.xyz/ipfs/',
                )}
                alt={token.id}
                onClick={() =>
                  window.open(
                    `https://www.fxhash.xyz/generative/${token.id}`,
                    '_blank',
                  )
                }
              />

              <div key={token.id} className={styles.postText}>
                {token.name}
                <div
                  className={styles.floor}
                  onClick={() =>
                    window.open(
                      `https://fxcollectors.stroep.nl/?project=${token.id}#page=marketplace`,
                      '_blank',
                    )
                  }
                >
                  Buy the floor
                </div>
              </div>
            </div>
          </>
        ))}
    </div>
  );
}

export default Projetos;
