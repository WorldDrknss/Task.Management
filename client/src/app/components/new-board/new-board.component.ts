import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-new-board',
  templateUrl: './new-board.component.html',
  styleUrls: ['./new-board.component.scss']
})
export class NewBoardComponent {

  constructor(private dialogRef:MatDialogRef<NewBoardComponent>, public boardService:BoardService, private router:Router){}

  title:string = "";

  close(){
    this.dialogRef.close();
  }

  create(){
    this.boardService.createBoard(this.title);
    this.router.navigate(['/view-board', this.boardService.boards.length-1]);
    this.dialogRef.close();
  }

}
