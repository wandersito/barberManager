import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class BarberiasService {

    constructor(private http: HttpClient){
           
        console.log("servicio listo");

    }

    getBarberias(){

        return this.http.get('https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Business_and_Economic_Development_WebMercator/MapServer/36/query?where=1%3D1&outFields=BARBERSHOP,ADDRESS,PHONE&outSR=4326&f=json#');

    }
    
}