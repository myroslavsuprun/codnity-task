interface getEarthLandsatQueryParams {
  lon: string;
  lat: string;
  date: string;
}

interface getEarthLandsatResult {
  date: Date;
  id: string;
  resource: { dataset: string; planet: string };
  service_version: string;
  url: string;
}

export { type getEarthLandsatQueryParams, type getEarthLandsatResult };
