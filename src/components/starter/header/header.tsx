import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.module.css';

export default component$(() => {
  useStylesScoped$(`
  img.profile {
    margin-top: -15px;
    width: 30%;
    border-radius: 50%;
  }

  ul {
    margin-top: -15px;
  }
  `)
  return (
    <header class={styles.header}>
      <div class={styles.logo}>
        <a href="/" title="qwik">
          <img class="profile" src="https://img-c.udemycdn.com/user/200_H/3194958_0f69_6.jpg" alt="Anartz Mugika Profile photo" />
        </a>
      </div>
      <ul>
      <li>
          <a href="https://anartz-mugika.com/#/" target="_blank">
            Anartz Mugika Ledo
          </a>
        </li>
        <li>
          <a href="https://twitter.com/mugan86" target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a href="http://udemy.com/user/anartzmugika" target="_blank">
            Udemy
          </a>
        </li>
        <li>
          <a href="https://github.com/mugan86" target="_blank">
            Github
          </a>
        </li>
      </ul>
    </header>
  );
});