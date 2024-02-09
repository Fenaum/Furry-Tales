export async function getCurrentPosition(): Promise<GeolocationPosition | null> {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => {
        console.error("Error getting geolocation", error);
        resolve(null);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  });
}
