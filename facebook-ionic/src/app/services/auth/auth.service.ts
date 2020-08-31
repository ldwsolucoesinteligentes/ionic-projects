import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "src/app/profile/profile";
import { environment } from "src/environments/environment";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUsers(page: number, limite: number = 10) {
    return this.http
      .get<User[]>(
        `${environment.BASE_URL_API}/users?_page=${page}&_limit=${limite}`
      )
      .pipe(tap((users) => console.log("Users ", users)));
  }

  getUser(id: string) {
    return this.http
      .get<User>(`${environment.BASE_URL_API}/users/${id}`)
      .pipe(tap((user) => console.log("User ", user)));
  }
}
