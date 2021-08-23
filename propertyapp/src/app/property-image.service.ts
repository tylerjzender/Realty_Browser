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

  public addProperty(propertyImage: PropertyImage): Observable<PropertyImage> {
    return this.http.post<PropertyImage>(`${this.apiServerUrl}/propertyImage/add`, propertyImage);
  }

  public updateProperty(propertyImage: PropertyImage): Observable<PropertyImage> {
    return this.http.put<PropertyImage>(`${this.apiServerUrl}/propertyImage/update`, propertyImage);
  }

  public deleteProperty(propertyImageId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/propertyImage/delete/${propertyImageId}`);
  }
}
