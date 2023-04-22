import {
  $,
  component$,
  useVisibleTask$,
  useStyles$,
  useSignal,
  noSerialize,
} from "@builder.io/qwik";
import * as L from 'leaflet';

// TODO https://www.leighhalliday.com/leaflet-clustering
//
import leafletCSS from "./../../../../node_modules/leaflet/dist/leaflet.css?inline";
import { defaultIcon, otherIcon } from "~/utils/icons/default";
import { mapZoomConfigs, getBoundaryBox, addMapControls } from "~/helpers";
import { randomLocationValues } from "~/helpers/mock-locations";

export const LeafletMap = component$(({ location }: any) => {
  useStyles$(leafletCSS);
  useStyles$(`
      #map {
          margin-top: 1rem;
          height: 450px;
          border: 2px solid var(--custom-blue);
      }
   `);
  const mapContainer$ = useSignal<L.Map>();



  useVisibleTask$(async ({ track }) => {
    track(location);
    const pointCenter = location.data.location;
    const centerPosition: L.LatLngExpression = [pointCenter[0], pointCenter[1]];
    
    if (location && window) {
      if (mapContainer$.value) {
        mapContainer$.value.remove();
      }

      await import("leaflet.markercluster");

      const markersToCluster = new L.MarkerClusterGroup();

      const map = new L.Map("map").setView(
        centerPosition,
        location.data.zoom || 13,
      );

      // Take bounds

      const bounds = getBoundaryBox(map);
      location.data.boundaryBox = bounds;

      mapZoomConfigs(map, location.data);

      L.marker(centerPosition, {
        icon: defaultIcon,
      })
        .addTo(map)
        .bindPopup(`<h1>${location.data.name}</h1>`);

      const markers = randomLocationValues(
        80,
        map.getBounds().getNorthEast(),
        map.getBounds().getSouthWest()
      );

      // console.log(markers);

      // I want take this code to group in clusters
      markers.map((element: any) => {
        const markerItem = L.marker([element.lat, element.lng], {
          icon: otherIcon,
        });
        markerItem.bindPopup(
          `
            <h2>Sin definir</h2>
            <p>Tag: Sin definir tipo</p>
          `
        );
        markerItem.addTo(markersToCluster);
      });

      markersToCluster.addTo(map)

      // TODO resolve error to load clusters
      // If implement next code, "window is not defined" error appear
      // const markersList = markers.map((item) => marker([item.lat, item.lng]));
      // useCreateClusters(markersList, map, 50, true);

      // Controls

      addMapControls(map);

      mapContainer$.value = noSerialize(map);
    }
  });
  return <div id="map"></div>;
});
