import { Component, OnInit } from '@angular/core';
import { DepartementService } from '../Service/departement.service';
import { Departement } from '../Model/departement.model';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrl: './departement.component.css'
})
export class DepartementComponent implements OnInit {

  departements!: Departement[]; //un tableau de chînes de caractères

  constructor(private departementServices: DepartementService , public authService: AuthService ) {
    // this.departements = departementServices.listeDepartements();
  }







  ngOnInit(): void {
    this.chargeDepartements();
  }

  chargeDepartements() {
    this.departementServices.listeDepartements().subscribe(depar => {
      console.log(depar);
      this.departements = depar;
    });
  }


  supprimerDepartement(d: Departement) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.departementServices.supprimerDepartement(d.idDepartement!).subscribe(() => {
        console.log("produit supprimé");
        this.chargeDepartements();
      });
  }

}
