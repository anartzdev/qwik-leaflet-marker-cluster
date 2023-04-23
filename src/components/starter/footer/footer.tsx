import { component$ } from '@builder.io/qwik';
import { useServerTimeLoader } from '~/routes/layout';
import styles from './footer.module.css';

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer>
      <a href="https://twitter.com/mugan86" target="_blank" class={styles.anchor}>
        Made with Anartz Mugika Ledo
        <span class={styles.spacer}>-</span>
        &#169; {serverTime.value.currentYear} Leaflet Map with Marker Cluster Demo in Qwik
      </a>
    </footer>
  );
});