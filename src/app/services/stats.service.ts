import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../interfaces/user';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  constructor(private http: HttpClient) { }
  reMapPersons(persons): Array<Person>{
    return persons.map( user =>{
      return {
        firstname: user.firstname,
        lastname: user.lastname,
        city: user.city,
        country: user.country
      }
    })
  }
  reMapPersons2(personas){
    if(personas){
      return personas.map( person =>{
          return{ 
            'First Name': person.firstname,
            'Last Name': person.lastname,
            'City': person.city,
            'Country': person.country
          }
      })
    }
  }
  getUserStats(): Observable<Array<Person> | false>{
    const url : string = `${environment.domain}/${environment.stage}/${environment.stats}`
    return this.http.get(`${url}`).pipe(
      map( persons => this.reMapPersons2(persons))
    )
  }
}
