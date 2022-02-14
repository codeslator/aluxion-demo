import { MutationTree } from 'vuex';
import Mapboxgl from 'mapbox-gl';
import { MapState } from './state';
import { Feature } from '../../../interfaces/map';
import { Stop } from '../../../interfaces/lines';

export const MapMutations = {
  SET_MAP: 'setMap',
  SET_MARKERS: 'setMarkers',
  SET_ROUTE_POLYLINES: 'setRoutePolylines',
  SET_DISTANCE_AND_DURATION: 'setDistanceAndDuration'
}

const mutation: MutationTree<MapState> = {
  setMap: (state: MapState, map: Mapboxgl.Map) => {
    state.map = map;
  },
  setDistanceAndDuration: (state: MapState, { distance, duration }: { distance: number, duration: number }) => {
    let kms = distance / 1000;
    kms = Math.round(distance * 100);
    kms /= 100;
    state.distance = kms;
    state.duration = Math.floor(duration / 60);
  },
  setMarkers: (state: MapState, stops: Stop[]) => {
    // deleting markers
    state.markers.forEach((marker) => marker.remove());
    state.markers = [];
    if (!state.map) return;
    for (const stop of stops) {
      const [lng, lat] = stop.geometry.coordinates;
      const popup = new Mapboxgl.Popup()
        .setLngLat([lng, lat])
        .setHTML(`
          <h4 class="text-black">Parada Actual</h4>
          <p class="text-black">${stop.stop}, ${stop.name}</p>
        `);
      const marker = new Mapboxgl.Marker()
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(state.map);
      state.markers.push(marker);
    }
    // Clear polylines
    if (state.map?.getLayer('RouteString')) {
      state.map?.removeLayer('RouteString');
      state.map?.removeSource('RouteString');
      state.distance = undefined;
      state.duration = undefined;
    }
  },
}


export default mutation;