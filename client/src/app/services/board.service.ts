import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor() {
    let str = localStorage.getItem('boards');
    if(str != null) { this.boards = JSON.parse(str); }
  }

  public boards:Array<any> = [];

  public createBoard(title:string){
    let newBoardObj = { title:title, cards:[] };
    this.boards.push(newBoardObj);
    localStorage.setItem('boards', JSON.stringify(this.boards));
  }

}

let board = {
  title: "",
  cards:[
    {title:"", checklist:["task 1", "task 2"], status:[true, false]}
  ]
};
