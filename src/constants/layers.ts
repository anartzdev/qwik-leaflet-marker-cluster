const ATRIBUTIONS_LIST = {
  CartoDb:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  CyclOSM:
    '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  EsriWorldImagery:
    'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
  EsriWorldTopoMap:
    'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community',
  OSM:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  OSMHot:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
  OpenTopo:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
  Stadia:
    '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  OPNVKarte:
    'Map <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  ThunderForest:
    '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
};

const thunderForestKey = '47455e4b0807408c87ead5d6f7a8d1c8';

export const tileLayers = {
  baseLayers: {
    default: {
      map: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
      atribution: ATRIBUTIONS_LIST.OSM,
    },
    osmManik: {
      map: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      atribution: ATRIBUTIONS_LIST.OSM,
    },
    osmDE: {
      map: 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
      atribution: ATRIBUTIONS_LIST.OSM,
    },
    osmHot: {
      map: 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
      atribution: ATRIBUTIONS_LIST.OSMHot,
    },
    openTopoMap: {
      map: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
      atribution: ATRIBUTIONS_LIST.OpenTopo,
    },
    stadia: {
      map: {
        AlidadeSmooth:
          'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
        AlidadeSmoothDark:
          'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
        OsmBright:
          'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png',
        Outdoors:
          'https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png',
      },
      atribution: ATRIBUTIONS_LIST.Stadia,
    },
    cycloOsm: {
      map: 'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
      atribution: ATRIBUTIONS_LIST.CyclOSM,
    },
    esri: {
      worldStreetMap: {
        map:
          'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
        atribution: ATRIBUTIONS_LIST.EsriWorldTopoMap,
      },
      worldImagery: {
        map:
          'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        atribution: ATRIBUTIONS_LIST.EsriWorldImagery,
      },
    },
    cartoDb: {
      map: {
        positron:
          'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        positronNoLabels:
          'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png',
        voyager:
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      },
      atribution: ATRIBUTIONS_LIST.CartoDb,
    },
    opnVKarte: {
      map: 'https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png',
      atribution: ATRIBUTIONS_LIST.OPNVKarte,
    },
    thunderForest: {
      map: {
        openCycleMap: `https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=${thunderForestKey}`,
        transport: `https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=${thunderForestKey}`,
        landscape: `https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=${thunderForestKey}`,
        outdoors: `https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=${thunderForestKey}`,
        transportDark: `https://tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=${thunderForestKey}`,
        spinalMap: `https://tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=${thunderForestKey}`,
        pioneer: `https://tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=${thunderForestKey}`,
        mobileAtlas: `https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=${thunderForestKey}`,
        neighbourhood: `https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=${thunderForestKey}`,
        atlas: `https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=${thunderForestKey}`,
      },
      atribution: ATRIBUTIONS_LIST.ThunderForest,
    },
  },
  overlayers: {
    openSeaMap: 'https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png',
    openPtMap: 'http://openptmap.org/tiles/{z}/{x}/{y}.png',
    openRailway:
      'https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png',
    wayMarkedTrails: {
      hiking: 'https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png',
      cycling: 'https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png',
      mtb: 'https://tile.waymarkedtrails.org/mtb/{z}/{x}/{y}.png',
      slopes: 'https://tile.waymarkedtrails.org/slopes/{z}/{x}/{y}.png',
    },
    openSnowMap: 'https://tiles.opensnowmap.org/pistes/{z}/{x}/{y}.png',
  },
};

export const tileLayersWMS = {
  ign: {
    baseUrl: 'https://www.ign.es/wms-inspire/ign-base?',
    layers: {
      baseOrto: 'IGNBaseOrto',
      baseTodo: 'IGNBaseTodo',
      baseTodoGris: 'IGNBaseTodo-gris',
      baseTodoNoFondo: 'IGNBaseTodo-nofondo',
    },
  },
  mundialis: {
    baseUrl: 'http://ows.mundialis.de/services/service?',
    layers: {
      dark: 'Dark',
      osmWMS: 'OSM-WMS',
      osmOverlayWMS: 'OSM-Overlay-WMS',
      topoWMS: 'TOPO-WMS',
      topoOsmWMS: 'TOPO-OSM-WMS',
      srtmThirtyHillshade: 'SRTM30-Hillshade',
      srtmThirtyColored: 'SRTM30-Colored',
      srtmThirtyColoredHillshade: 'SRTM30-Colored-Hillshade',
    },
  },
};

export const WITHOUT_LIMITS_BASE_LAYERS = [
  {
    label: 'Default - Mapnik',
    map: tileLayers.baseLayers.default.map,
    atribution: tileLayers.baseLayers.default.atribution,
    default: true,
  },
  {
    label: 'OSMDeutchLand',
    map: tileLayers.baseLayers.osmDE.map,
    atribution: tileLayers.baseLayers.osmDE.atribution,
  },
  {
    label: 'CycloOSM',
    map: tileLayers.baseLayers.cycloOsm.map,
    atribution: tileLayers.baseLayers.cycloOsm.atribution,
  },
  {
    label: 'OSMHot',
    map: tileLayers.baseLayers.osmHot.map,
    atribution: tileLayers.baseLayers.osmHot.atribution,
  },

  {
    label: 'OPNVKarte - Transporte',
    map: tileLayers.baseLayers.opnVKarte.map,
    atribution: tileLayers.baseLayers.opnVKarte.atribution,
  },
];

export const WITHOUT_LIMITS_OVER_LAYERS = [
  {
    label: 'Trail / Hiking',
    map: tileLayers.overlayers.wayMarkedTrails.hiking,
    select: false,
  },
  {
    label: 'Cycling',
    map: tileLayers.overlayers.wayMarkedTrails.cycling,
    select: false,
  },
  {
    label: 'Open Railway',
    map: tileLayers.overlayers.openRailway,
    select: false,
  },
  {
    label: 'Ski Stations',
    map: tileLayers.overlayers.wayMarkedTrails.slopes,
    select: false,
  },
];
