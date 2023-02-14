import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-board',
  templateUrl: './new-board.component.html',
  styleUrls: ['./new-board.component.scss']
})
export class NewBoardComponent {

  constructor(private dialogRef:MatDialogRef<NewBoardComponent>){}

  close(){
    this.dialogRef.close();
  }

}
