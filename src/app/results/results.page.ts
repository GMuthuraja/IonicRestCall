import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})

export class ResultsPage implements OnInit {

  resultData: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.resultData = this.router.getCurrentNavigation().extras.state.results;
  }

}
