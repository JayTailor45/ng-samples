import {computed, Injectable, signal} from '@angular/core';

export enum UserGenderEnum {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  terms: boolean;
  gender: UserGenderEnum;
}

@Injectable()
export class SignalStoreCrudService {

  private _userStore = signal<User[]>([]);

  readonly users = computed(() => this._userStore());

  constructor() {
  }

  createUser(user: User) {
    const userList = this._userStore();
    const id = Math.floor(Math.random() * 100000)
    user.id = id;
    this._userStore.set([...userList, user]);
  }

  updateUser(user: User) {
    const userList = this._userStore();
    const userIndex = userList.findIndex(u => u.id == user.id);
    userList.splice(userIndex, 1, user);
    this._userStore.set([...userList]);
  }

  deleteUser(id: number) {
    const userList = this._userStore();
    this._userStore.set(userList.filter(user => user.id !== id));
  }
}
