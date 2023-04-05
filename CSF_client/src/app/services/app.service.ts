import { HttpClient, HttpParams} from "@angular/common/http"
import { Injectable } from "@angular/core"
import { FormBuilder } from "@angular/forms"
import { firstValueFrom, map, Observable, Subject } from "rxjs"
import { Result, Search } from "../models"



@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  onResults = new Subject<Result[]>()
  
  private API_KEY = "ApFMC6tlOAujKXc7XAvmRGFdCWO3o6Mr"
  private URL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json"

  getResponse(search: Search): Promise<Result[]>{
    const params = new HttpParams()
    .set('query', search.search)
    .set('api-key', this.API_KEY)
  
    return firstValueFrom (
      this.httpClient.get<Result[]>(this.URL, {params:params})
      .pipe()
    )
    .then((data:any) => {
      console.log(data)
      const result = data.results as Result[]
      console.log(result)
      this.onResults.next(result)
      return result
    
    })

    // private URL = "http://localhost:8080/api/search"

    // getResponse(search: Search) {

    //   let params = new HttpParams()
    //                     .append("query", search.search)
  
    //   // console.log(params)
    //   return this.httpClient.get(`${this.URL}`, {params});
    // }


}
}

