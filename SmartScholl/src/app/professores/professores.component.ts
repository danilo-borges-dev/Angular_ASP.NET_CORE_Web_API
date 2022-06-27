import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = "Professores";

  public professor = [
    { nome: "Eduardo" },
    { nome: "Lucimara "},
    { nome: "Eliana" },
    { nome: "Luiz Marcelo" },
  ];

  constructor() { }

  ngOnInit() {
  }

}
