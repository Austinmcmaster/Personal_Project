import * as Location from "expo-location";
export class LocationPresenter {
  private response: Location.LocationPermissionResponse | undefined;
  private location: Location.LocationObject | undefined;
  private static _instance: LocationPresenter;

  private constructor() {}

  public static get instance(): LocationPresenter {
    return this._instance || (this._instance = new this());
  }

  public async loadLocation(): Promise<void> {
    try {
      this.response = await Location.requestForegroundPermissionsAsync();
      if (this.response.status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      this.location = await Location.getCurrentPositionAsync();
      console.log("Successful Location Load!");
    } catch (error) {
      console.log("Error loading location", error);
    }
  }
  public async getLocation(): Promise<Location.LocationObject> {
    while (this.location == undefined) {
      this.location = await Location.getCurrentPositionAsync();
    }
    return this.location;
  }
}
