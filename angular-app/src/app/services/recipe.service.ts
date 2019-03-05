import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<object> {

    return this.httpClient.get(environment.serverUrl + 'recipes');
  };

  update(recipe): Observable<object> {
    
    return this.httpClient.put(environment.serverUrl + 'recipes/' + recipe.id, {instructions: recipe.instructions, name: recipe.name});
  };

  delite(id): Observable<object> {

    return this.httpClient.delete(environment.serverUrl + 'recipes/' + id);
  };

  addRecipe(recipe): Observable<object> {

    return this.httpClient.post<object>(environment.serverUrl + 'recipes', recipe);
  };

};
