import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo = "Alunos";

  public alunos =
  [
    { nome: "Danilo" },
    { nome: "Maria" },
    { nome: "Sueli" },
    { nome: "João" },
    { nome: "Marcos" },
    { nome: "Rosana" },
    { nome: "José" },
    { nome: "Nayla" },
    {nome: "Ysabella" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
