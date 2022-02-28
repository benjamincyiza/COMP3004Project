import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  player='';
  button=''
  
  constructor() { }

  ngOnInit(): void {
    this.player='Player 1'
    this.button='Next'
  }

  public nextPlayer(){
    console.log(this.player)
    this.player='Player 2'
    this.button='Play'

  }

}
