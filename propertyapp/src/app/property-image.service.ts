import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PropertyImage } from './propertyImage';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class PropertyImageService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getPropertyImages(): Observable<PropertyImage[]> {
    return this.http.get<PropertyImage[]>(`${this.apiServerUrl}/propertyImage/all`);
  }

  public findPropertyImagesById(propertyId: number): Observable<PropertyImage[]> {
    return this.http.get<PropertyImage[]>(`${this.apiServerUrl}/propertyImage/find/${propertyId}`);
  }

  public findPropertyImagesByPropertyId(propertyId: number): Observable<PropertyImage[]> {
    return this.http.get<PropertyImage[]>(`${this.apiServerUrl}/propertyImage/find/propertyId/${propertyId}`);
  }

  public addPropertyImage(propertyImage: PropertyImage): Observable<PropertyImage> {
    return this.http.post<PropertyImage>(`${this.apiServerUrl}/propertyImage/add`, propertyImage);
  }

  public updatePropertyImage(propertyImage: PropertyImage): Observable<PropertyImage> {
    return this.http.put<PropertyImage>(`${this.apiServerUrl}/propertyImage/update`, propertyImage);
  }

  public deletePropertyImage(propertyImageId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/propertyImage/delete/${propertyImageId}`);
  }

  
  
}
