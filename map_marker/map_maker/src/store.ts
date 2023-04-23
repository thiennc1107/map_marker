import {LatLng} from 'leaflet'
import { Database, set, ref} from 'firebase/database'

export class PosDTO {
  private latitude: Number;
  private longtitude: Number;

  constructor (latitude: Number, longtitude: Number) {
    this.latitude = latitude;
    this.longtitude = longtitude;
  }

  public static toDTO = (posItem: LatLng) => {
    return new PosDTO(posItem.lat, posItem.lng)
  }

  public static saveCoordinate(path: string, posList: PosDTO[], database: Database) {
    set(ref(database, path), posList)
  }

}
