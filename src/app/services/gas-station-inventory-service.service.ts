import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { GasStationDatapoint } from '../interfaces/gas-station-datapoint';


interface GasStationResponse {
  displayFieldName: string;
  fieldAliases: { [key: string]: string };
  geometryType: string;
  spatialReference: {
    wkid: number;
    latestWkid: number;
  };
  fields: Array<{
    name: string;
    type: string;
    alias: string;
    length?: number;
  }>;
  features: Array<{
    attributes: {
      objectid: number;
      adresse: string;
    };
    geometry: {
      x: number;
      y: number;
    };
  }>;
}

@Injectable({
  providedIn: 'root'
})
export class GasStationInventoryService {
  private apiUrl = 'https://geoportal.stadt-koeln.de/arcgis/rest/services/verkehr/gefahrgutstrecken/MapServer/0/query?where=objectid+is+not+null&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=pjson';
  constructor(private http: HttpClient) {}

  gasStationResponse$: Observable<GasStationResponse> | undefined;

  private getGasStationResponse(): Observable<GasStationResponse> {
    if (this.gasStationResponse$) {
      return this.gasStationResponse$; 
    } else {
      this.gasStationResponse$ = this.http
        .get<GasStationResponse>(this.apiUrl, { responseType: 'json' })
        .pipe(shareReplay(1)); 
    }
    return this.gasStationResponse$;
  }

  getGasStationData(): Observable<GasStationDatapoint[]> {
    return this.getGasStationResponse()
      .pipe(
        map((response: GasStationResponse) => response.features.map(feature => ({
          objectid: feature.attributes.objectid,
          adresse: feature.attributes.adresse,
          latitude: feature.geometry.y,
          longitude: feature.geometry.x
        })))
      );
  }

  getGasStationById(id: number): Observable<GasStationDatapoint | undefined> {
    return this.getGasStationData().pipe(
      map(stations => stations.find(station => station.objectid === id))
    );
  }
}
