import { Injectable } from '@angular/core';
import { College } from '../Model/college.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departement } from '../Model/departement.model';
import { CollegeWrapper } from '../Model/collegeWarped';
import { tap } from 'rxjs/operators';




const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
  
@Injectable({
  providedIn: 'root'
})




export class DepartementService {
  // departement!: Departement;
  departements!: Departement[]; //un tableau de Produit
  // colleges !: College[];




  apiURL: string = 'http://localhost:8092/departements/api';

  api : string = 'http://localhost:8092/departements/col'

  api_update : string = 'http://localhost:8092/departements/api/departements'


  constructor(private http : HttpClient) {
  }

  
// partie Departement 

  listeDepartements():  Observable<Departement[]>{
    return this.http.get<Departement[]>(this.apiURL);

  }


  rechercherParNom(nomcol: string):Observable< Departement[]> {
    const url = `${this.apiURL}/DeparByName/${nomcol}`;
    return this.http.get<Departement[]>(url);

    }
    

  ajouterDepartement(depar: Departement):Observable<Departement>{
    return this.http.post<Departement>(this.apiURL, depar, httpOptions);
    }
    

  supprimerDepartement(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);

  }


  consulterDepartement(id: number): Observable<Departement> {
    const url = `${this.apiURL}/${id}`;
    console.log(url);  
    return this.http.get<Departement>(url);  
  }
  

  updateDepartement(depar: Departement) :  Observable<Departement>{
    
    return this.http.put<Departement>(this.api_update, depar, httpOptions);


  }

  trierDepartements() {
    this.departements = this.departements.sort((n1, n2) => {
      if (n1.idDepartement! > n2.idDepartement!) {
        return 1;
      }
      if (n1.idDepartement! < n2.idDepartement!) {
        return -1;
      }
      return 0;
    });
  }

  // partie College 

   ajouterCollege( col: College):Observable<College>{
    return this.http.post<College>(this.api, col, httpOptions);
    }

    rechercherParCollege(idcol: number):Observable< Departement[]> {
    const url = `${this.apiURL}/deparscol/${idcol}`;
    return this.http.get<Departement[]>(url);
    }

    
    listCollege(): Observable<College> {
    return this.http.get<College>(this.api).pipe(
      tap((response) => {
        console.log(response);
      }),
     
    );
  }


  // consulterCollege(idCol:number): College
  // {
  //     return this.colleges.find(col => col.idcol == idCol)!;
  // }



  
   
        
}