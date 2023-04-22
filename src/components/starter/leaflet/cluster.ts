import { Marker, LatLngExpression, latLng, Map } from "leaflet";
import { $, useVisibleTask$ } from '@builder.io/qwik';
interface Cluster {
    markers: Marker[];
    center: LatLngExpression;
}
export const useCreateClusters = $(async (markers: Marker[], map: Map, maxClusterRadius: number, zoomOnClick: boolean)=> {
    useVisibleTask$(() => {
        console.log('create cluster', window)
        /**
         * const clusters: Cluster[] = [];

    for (let i = 0; i < markers.length; i++) {
        const marker = markers[i];
        let addedToCluster = false;

        for (let j = 0; j < clusters.length; j++) {
            const cluster = clusters[j];
            const distance = marker.getLatLng().distanceTo(cluster.center);

            if (distance <= maxClusterRadius) {
                cluster.markers.push(marker);
                const totalMarkers = cluster.markers.length;

                // Calculate new center as average of all markers in cluster
                const latSum = cluster.markers.reduce((acc, m) => acc + m.getLatLng().lat, 0);
                const lngSum = cluster.markers.reduce((acc, m) => acc + m.getLatLng().lng, 0);
                cluster.center = latLng([latSum / totalMarkers, lngSum / totalMarkers]);

                addedToCluster = true;
                break;
            }
        }

        if (!addedToCluster) {
            const newCluster: Cluster = {
                markers: [marker],
                center: marker.getLatLng()
            };
            clusters.push(newCluster);
        }
    }

    for (let i = 0; i < clusters.length; i++) {
        const cluster = clusters[i];

        const marker = new Marker(cluster.center);
        marker.bindPopup(`There are ${cluster.markers.length} markers here.`);
        marker.on('click', () => {
            if (zoomOnClick) {
                map.setView(cluster.center);
            }
            for (let j = 0; j < cluster.markers.length; j++) {
                const marker = cluster.markers[j];
                marker.addTo(map);
            }
        });
        marker.addTo(map);
    }
         */
    })
    
});
