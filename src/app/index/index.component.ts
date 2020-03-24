import { Component, OnInit } from '@angular/core';

export interface Student {
  type: string;
  name: string;
  gender: string;
  timestamp: string;
}

const STUDENTS: Student[] = [
  { type: "kinder", name: "Alba", gender: "F", timestamp: "20131101145906" },
  { type: "university", name: "Aldo", gender: "M", timestamp: "20131214100330" },
  { type: "high", name: "Miriam", gender: "F", timestamp: "20131101145906" },
  { type: "university", name: "Carlos", gender: "M", timestamp: "20160913054231" },
  { type: "high", name: "Luz", gender: "F", timestamp: "20090321155602" },
  { type: "kinder", name: "Rodrigo", gender: "M", timestamp: "20141201103416" },
  { type: "university", name: "Camila", gender: "F", timestamp: "20131101145906" },
  { type: "high", name: "Borth", gender: "M", timestamp: "20131214100330" },
  { type: "kinder", name: "Barbara", gender: "F", timestamp: "20090321155602" },
  { type: "university", name: "Sean", gender: "M", timestamp: "20131101145906" },
];

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {
  displayedColumns: string[] = ['type', 'name', 'gender', 'timestamp'];
  dataSource = STUDENTS;

  constructor() { }

  ngOnInit(): void {
  }
}
