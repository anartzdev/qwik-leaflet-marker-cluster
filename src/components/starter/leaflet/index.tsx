import {
  component$,
  useVisibleTask$,
  useStyles$,
  useSignal,
  noSerialize,
} from "@builder.io/qwik";
import * as L from "leaflet";

import leafletCSS from "./../../../../node_modules/leaflet/dist/leaflet.css?inline";
import { defaultIcon, otherIcon } from "~/utils/icons/default";
import { mapZoomConfigs, getBoundaryBox, addMapControls } from "~/helpers";
import { randomLocationValues } from "~/helpers/mock-locations";

import markerCluster from './marker-cluster.css?inline'
export const LeafletMap = component$(({ location }: any) => {
  
  useStyles$(markerCluster);
  useStyles$(leafletCSS);
  const mapContainer$ = useSignal<L.Map>();

  useVisibleTask$(async ({ track }) => {
    track(location);
    const pointCenter = location.data.location;

    if (location && window) {
      if (mapContainer$.value) {
        mapContainer$.value.remove();
      }

      await import("leaflet.markercluster");

      const markersToCluster = new L.MarkerClusterGroup();
      
      const centerPosition: L.LatLngExpression = [pointCenter[0], pointCenter[1]];
      const map = L.map("map").setView(
        centerPosition,
        location.data.zoom || 13
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

      L.marker(centerPosition, {
        icon: defaultIcon,
      })
        .addTo(map)
        .bindPopup(`<h1>${location.data.name}</h1>`);

      const markers = randomLocationValues(
        5000,
        map.getBounds().getNorthEast(),
        map.getBounds().getSouthWest()
      );

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

      markersToCluster.addTo(map);

      // Controls

      addMapControls(map);

      mapContainer$.value = noSerialize(map);
    }
  });
  return <div id="map"></div>;
});
