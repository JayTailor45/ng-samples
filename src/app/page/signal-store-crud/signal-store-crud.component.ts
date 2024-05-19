import {Component, inject, OnInit} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from "@angular/material/table";
import {SignalStoreCrudService, User} from "../../services/signal-store-crud.service";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {AddUserDialogComponent} from "./add-user-dialog/add-user-dialog.component";
import {first} from "rxjs";
import {MatIconModule} from "@angular/material/icon";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-signal-store-crud',
  standalone: true,
  imports: [
    MatTable,
    MatCell,
    MatCellDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatRow,
    MatRowDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatColumnDef,
    MatIconModule,
    MatButtonModule,
    TitleCasePipe,
  ],
  templateUrl: './signal-store-crud.component.html',
  styleUrl: './signal-store-crud.component.scss'
})
export class SignalStoreCrudComponent implements OnInit {

  #userService = inject(SignalStoreCrudService);
  users = this.#userService.users;
  #dialogService = inject(MatDialog);

  ngOnInit() {
  }

  onAddUser(user?: User) {
    this.#dialogService.open(AddUserDialogComponent, {
      width: '64vw',
      data: user,
    }).afterClosed()
      .pipe(first())
      .subscribe({
        next: (data: User) => {
          if (data) {
            if (data.id) {
              this.#userService.updateUser(data);
            } else {
              this.#userService.createUser(data);
            }
          }
        }
      });
  }

  onUpdateUser(user: User) {
    this.onAddUser(user);
  }

  onDeleteUser(id: number) {
    this.#userService.deleteUser(id);
  }
}
