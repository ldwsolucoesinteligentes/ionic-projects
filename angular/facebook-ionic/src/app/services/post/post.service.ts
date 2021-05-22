import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { tap } from "rxjs/operators";
import { Post } from "src/app/components/post-card/post";

@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(page: number, limite: number = 10) {
    return this.http
      .get<Post[]>(
        `${environment.BASE_URL_API}/posts?_page=${page}&_limit=${limite}`
      )
      .pipe(tap((posts) => console.log("Posts ", posts)));
  }
}
