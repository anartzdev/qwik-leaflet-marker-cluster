import {
  component$,
  useVisibleTask$,
  useStyles$,
  useSignal,
  noSerialize,
} from "@builder.io/qwik";
import * as L from "leaflet";

// Our map features
import { defaultIcon, otherIcon } from "~/utils/icons/default";
import { mapZoomConfigs, getBoundaryBox, addMapControls, getRandomInt } from "~/helpers";
import { MountainPeaksMarkers } from "~/utils/icons/mountain-peak";
import { randomLocationValues } from "~/helpers/mock-locations";

// Styles
import leafletCSS from "./../../../../node_modules/leaflet/dist/leaflet.css?inline";
import markerCluster from './marker-cluster.css?inline';

// Data
import db from '~/data/peaks.json';

export const LeafletMap = component$(({ location }: any) => {
  
  useStyles$(markerCluster);
  useStyles$(leafletCSS);
  const mapContainer$ = useSignal<L.Map>();

  function selectIconMarker(elevation: string = "") {
    console.log(elevation);
    const elevationMetres = getRandomInt(0, 3000);
    if (elevationMetres === 0) {
      return MountainPeaksMarkers('blue');
    } else if (elevationMetres! < 400) {
      return MountainPeaksMarkers('green');
    } else if (elevationMetres! >= 400 && elevationMetres! < 1000) {
      return MountainPeaksMarkers('yellow');
    } else if (elevationMetres! >= 1000 && elevationMetres! < 1500) {
      return MountainPeaksMarkers('orange');
    } else if (elevationMetres! >= 1500 && elevationMetres! < 2000) {
      return MountainPeaksMarkers('red');
    }
    return MountainPeaksMarkers('pink');
  }

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


      const peaks = db['peaks'];
      peaks.map((peak) => {
        // const eleValue = peak.tags.ele !== undefined ? peak.tags.ele : '';

        // TODO resolve div icon problem
        // const selectIcon = selectIconMarker("");
        L.marker([peak.lat, peak.lon])
          .addTo(markersToCluster)
          .bindPopup(
            `
              <h5>${
                peak.tags.name !== undefined ? peak.tags.name : 'No name'
              }</h5>
              <span>${peak.tags.ele !== undefined ? peak.tags.ele : '-'} m.</span>
              `,
            {
              offset: [11, 5],
            }
          );
      });

      markersToCluster.addTo(map);

      // Controls

      addMapControls(map);

      map.fitBounds([
        ...peaks.map((peak) => [peak.lat, peak.lon] as [number, number]),
      ]);

      mapContainer$.value = noSerialize(map);
    }
  });
  return <div id="map"></div>;
});
