import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<object> {

    return this.httpClient.get('http://localhost:8888/recipes');
  };

  delite(name): Observable<object> {

    return this.httpClient.delete('http://localhost:8888/recipes/' + name);
  }

  addRecipe(recipe): Observable<object> {

    return this.httpClient.post<object>('http://localhost:8888/recipes', recipe);
  }

}
