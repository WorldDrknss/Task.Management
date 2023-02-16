import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { BoardsComponent } from './pages/boards/boards.component';
import { MatIconModule}  from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { NewBoardComponent } from './components/new-board/new-board.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ViewBoardsComponent } from './pages/view-boards/view-boards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NewCardComponent } from './components/new-card/new-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BoardsComponent,
    NewBoardComponent,
    ViewBoardsComponent,
    NewCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
