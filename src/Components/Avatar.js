import React from 'react';
import styles from './Avatar.module.css';

const Avatar = () => {
  return (
    <div className={styles.avatar}>
      <img
        src="https://gateway.fxhash2.xyz/ipfs/QmZv1Bh5GUNeR2pQeovrmX9tEaj5bLqD1YKZDy7KJY7DCt"
        alt="A eduxdux head made in 3D rotating around itself"
      />
      <h1>Eduxdux</h1>
      <span>
        <h4>Multidisciplinary artist</h4>
      </span>
    </div>
  );
};

export default Avatar;
