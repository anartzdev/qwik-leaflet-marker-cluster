export const randomLocationValues = (
    pointsTotal: number = 1,
    northEast: { lat: number; lng: number },
    southWest: { lat: number; lng: number }
  ) => {
    const lngSpan = northEast.lng - southWest.lng;
    const latSpan = northEast.lat - southWest.lat;
  
    const allPoints = [];
  
    if (pointsTotal === 1) {
      return [
        {
          lat: southWest.lat + latSpan * Math.random(),
          lng: southWest.lng + lngSpan * Math.random(),
        },
      ];
    }
    // generate random points and add to array 'allPoints'
    for (let i = 0; i < pointsTotal; i++) {
      allPoints.push({
        lat: southWest.lat + latSpan * Math.random(),
        lng: southWest.lng + lngSpan * Math.random(),
      });
    }
    return allPoints;
  };