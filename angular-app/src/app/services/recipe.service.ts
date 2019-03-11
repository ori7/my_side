import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { RecipeModel } from '../models/recipe.model';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private data: BehaviorSubject<RecipeModel[]>;

  constructor(private httpClient: HttpClient, private socket: Socket) {
    this.data = new BehaviorSubject<RecipeModel[]>([]);
  }
  
  post(n: number){
    return this.socket.emit("message", n)
  }

  get(): Observable<object[]> {

    return this.socket.fromEvent("message");
    /*
    this.getData();
    setInterval(() => {
      this.getData();
    }, 2 * 1000)
    return this.data;
    */
  };

  update(recipe): Observable<object> {

    return this.httpClient.put(environment.serverUrl + 'recipes/' + recipe.id, recipe);
  };

  delite(id): Observable<object> {

    return this.httpClient.delete(environment.serverUrl + 'recipes/' + id);
  };

  addRecipe(recipe: RecipeModel): Observable<object> {

    return this.socket.emit("message", recipe);
  
    // return this.httpClient.post<object>(environment.serverUrl + 'recipes', recipe);
  };

  getData() {
    const sub = this.httpClient.get<RecipeModel[]>(environment.serverUrl + 'recipes').pipe(map(res => {
      res.forEach(r => {
        r.instructions = String(r.instructions).split("\n")
        return r;
      })
      return res;
    })).subscribe(res => {
      this.data.next(res);
      sub.unsubscribe();
    });
  }

};
