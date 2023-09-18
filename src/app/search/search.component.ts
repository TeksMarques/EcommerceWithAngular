import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  descricao = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  search() {
    if (this.descricao) {
      this.router.navigate(['produtos'], {
        queryParams: { descricao: this.descricao },
      });
      return;
    }

    this.router.navigate(['produtos']);
  }
}
