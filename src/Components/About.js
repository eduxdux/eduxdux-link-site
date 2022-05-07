import React from 'react';
import styles from './About.module.css';
import foto from '../img/hicpic.png';
import Head from './Head';

const About = () => {
  return (
    <section className={styles.about}>
      <Head title="Eduxdux | About" description="About Eduxdux" />
      <img src={foto} alt="Its me" />
      <div className={`${styles.escritas} animeLeft`}>
        <h4>
          <mark>What is a Eduxdux?</mark>
        </h4>
        <h1>Multidisciplinary artist | Curious mind</h1>
        <p>
          I am a multidisciplinary artist, a designer, a developer(in progess),
          a person who loves to travel, a person who loves to learn, a person
          who loves to create.
        </p>
        <p>
          Since I was a child, I have always been interested in the world of art
          and the world of technology. People normally says{' '}
          <mark>Curiosity killed the cat</mark>, maybe this is true, but, for me
          curiosity means fuel and I am always trying to find new things to
          learn and to create.
        </p>
        <p>
          I have started my journey in this world with my toys, lego and a
          cellphone camera were my best friends it came to creating things,
          making stop motion animation(ish) since kid, had made me think about
          all the things and how can I put life on it.
        </p>
        <h5>
          Currently I work with many areas, the main ones are creative coding,
          traditional frame-by-frame animation, illustration and motion design.
          However whenever possible I do flower and landscape photography and
          stop-motion animation.
        </h5>
      </div>
    </section>
  );
};

export default About;
