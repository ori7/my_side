import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, of } from 'rxjs';
import { RecipeModel } from '../models/recipe.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeSocketService {

  constructor(private socket: Socket,
    private httpClient: HttpClient) { }

  get(): Observable<RecipeModel[]> {

    this.socket.emit("message");

    return this.socket.fromEvent("message").pipe(map((res: RecipeModel[]) => {console.log(res);
      res.forEach(r => {
        if (typeof r.instructions === 'string') {
          r.instructions = r.instructions.split("\n");
        }
        return r;
      });
      return res;
    }));
  }

  addRecipe(recipe: RecipeModel): Observable<object> {

    return of(this.socket.emit("add", recipe));
  }

  update(recipe: RecipeModel): Observable<object> {

    return of(this.socket.emit("update", recipe));
  };

  delite(id): Observable<object> {

    return of(this.socket.emit("delite", id));
  };

  getById(id) :Observable<RecipeModel> {

    return this.httpClient.get<RecipeModel>(environment.serverUrl  + 'recipes/' + id);
  }
}
