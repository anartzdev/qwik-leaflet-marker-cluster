import { component$, useStore, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LeafletMap } from "~/components/starter/leaflet";
import styles from './index.css?inline';
export default component$(() => {
  useStyles$(styles);
  const SORALUZE = {
    name: "Soraluze",
    location: [43.17478, -2.41172],
    boundaryBox:
      "43.14658914559456,-2.4765586853027344,43.202923523094725,-2.3467826843261723",
    zoom: 13,
  };
  const location = useStore({
    data: SORALUZE,
    pois: [],
    select: SORALUZE.name,
  });

  return (
    <>
      <div class="section">
        <LeafletMap location={location} />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Leaflet Qwik - MarkerCluster Demo",
  meta: [
    {
      name: "description",
      content: "Proyecto para validar la idea de trabajar con una cantidad alta de marcadores con el uso de MarkerCluster de Leaflet en Qwik",
    },
    {
      name: "og:title",
      content: "Leaflet Qwik - MarkerCluster Demo",
    },
    {
      name: "og:description",
      content: "Proyecto para validar la idea de trabajar con una cantidad alta de marcadores con el uso de MarkerCluster de Leaflet en Qwik",
    },
    {
      name: "og:image",
      content:
        "https://jgengle.github.io/Leaflet/examples/quick-start/thumbnail.png",
    },
    {
      name: "og:url",
      content: "https://qwik-leaflet-marker-cluster-neklizw2b-anartzdev.vercel.app/",
    },
    {
      name: "keywords",
      content: "Leaflet Map, marker Cluster, Qwik, Qwik Framework",
    },
    {
      name: "author",
      content: "Anartz Mugika Ledo",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Leaflet Qwik - MarkerCluster Demo",
    },
    {
      name: "twitter:description",
      content: "Proyecto para validar la idea de trabajar con una cantidad alta de marcadores con el uso de MarkerCluster de Leaflet en Qwik",
    },
    {
      name: "twitter:image",
      content:
      "https://jgengle.github.io/Leaflet/examples/quick-start/thumbnail.png",
    },
  ],
};
