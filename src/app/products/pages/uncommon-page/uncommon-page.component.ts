import { Component } from '@angular/core';
import { Observable, interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Jorge';
  public gender: 'male' | 'female' | 'dont exists' = 'male';

  public invitationMap = {
    male: 'him',
    female: 'her',
  };

  changeClient(): void {
    this.name = 'Meliza';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = ['Jorge', 'Meliza', 'Luis', 'Ana', 'Carlos'];
  public clientsMap = {
    '=0': 'we don' + "'" + 't have any clients currently awaiting',
    '=1': 'we have one client currently awaiting',
    other: 'we have # clients currently awaiting',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Jorge',
    age: 22,
    address: 'Lima, Perú',
  };

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000);

  public promiseValue: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise Resolved');
    }, 3500);
  });
}
