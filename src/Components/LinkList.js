import React from 'react';
import styles from './LinkList.module.css';

const LinkList = () => {
  return (
    <div className={styles.links}>
      <a target="_blank" href="https://www.fxhash.xyz/u/Eduxdux">
        <b> FxHash </b>| Generative art on Tezos
      </a>
      <a
        target="_blank"
        href="https://polyblocks.io/creations/0x22D02786f813A70c5699621810D0ea85efA07332"
      >
        <b> PolyBlocks </b>| Generative art on Matic
      </a>
      <a
        target="_blank"
        href="https://objkt.com/collection/KT1Nkru8MMxpTnHTGc4rH2D3bRmgG1ZvCfU9"
      >
        <b> Objkt </b>| Generative collection
      </a>
      <a target="_blank" href="https://teia.art/Duxdux">
        <b> Teia </b>| Duxdux gen series
      </a>
    </div>
  );
};

export default LinkList;
