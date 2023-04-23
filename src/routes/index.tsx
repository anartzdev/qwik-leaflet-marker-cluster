import { component$, useStore, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LeafletMap } from "~/components/starter/leaflet";
export default component$(() => {
  useStyles$(`
    #map {
      margin-top: 1rem;
      height: 750px;
      border: 5px solid var(--custom-blue);
    }

    .leaflet-popup-content h1 {
      color: black;
    }

    .leaflet-control-layers-list {
      text-align: left;
    }

    .select {
      background-color: grey !important;
      color: whitesmoke !important;
    }
  `);
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
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
