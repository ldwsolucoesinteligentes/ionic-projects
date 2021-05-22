import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { tap } from "rxjs/operators";
import { Story } from "src/app/components/stories/story.ts";

@Injectable({
  providedIn: "root",
})
export class StoriesService {
  constructor(private http: HttpClient) {}

  getStories(userId: string, page: number, limite: number = 10) {
    return this.http
      .get<Story[]>(
        `${environment.BASE_URL_API}/stories?_page=${page}&_limit=${limite}`
      )
      .pipe(tap((stories) => console.log("Stories ", stories)));
  }
}
