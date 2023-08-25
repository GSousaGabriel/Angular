import { LoggingService } from './logging.service';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated= new EventEmitter<string>()

  constructor(
    private logService: LoggingService
  ) { }

  getAccounts() {
    return this.accounts
  }

  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
    this.logService.logStatusChange(status)
  }

  changeStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.logService.logStatusChange(newStatus)
  }
}
