import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from './property';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class PropertyService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(`${this.apiServerUrl}/property/all`);
  }

  public findPropertyById(propertyId: number): Observable<Property> {
    return this.http.get<Property>(`${this.apiServerUrl}/property/find/id/${propertyId}`);
  }

  
  public findPropertiesByState(propertyState: String): Observable<Property[]> {
    return this.http.get<Property[]>(`${this.apiServerUrl}/property/find/state/${propertyState}`);
  }

  public findPropertiesByStateAndCity(propertyState: String, propertyCity: String): Observable<Property[]> {
    return this.http.get<Property[]>(`${this.apiServerUrl}/property/find/state/${propertyState}/city/${propertyCity}`);
  }

  public addProperty(property: Property): Observable<Property> {
    return this.http.post<Property>(`${this.apiServerUrl}/property/add`, property);
  }

  public updateProperty(property: Property): Observable<Property> {
    return this.http.put<Property>(`${this.apiServerUrl}/property/update`, property);
  }

  public deleteProperty(propertyId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/property/delete/${propertyId}`);
  }
}