import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewBoardComponent } from 'src/app/components/new-board/new-board.component';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent {

  constructor(private matDialog:MatDialog) {}

  openNewBoardDialog(){
    const dialogRef = this.matDialog.open(NewBoardComponent, {
      width:'500px'
    });
  }

}
