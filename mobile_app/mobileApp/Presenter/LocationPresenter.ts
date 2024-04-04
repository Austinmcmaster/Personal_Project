import * as Location from "expo-location";
export class LocationPresenter {
  public async getLocation(): Promise<Location.LocationObject | undefined> {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return undefined;
      }

      let location: Location.LocationObject =
        await Location.getCurrentPositionAsync({});
      return location;
    } catch (error) {
      console.error("Error getting location:", error);
    }
  }
}
