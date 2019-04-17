import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {name: 'Mr. Nice'},
      {name: 'Narco'},
      {name: 'Bombasto'},
      {name: 'Celeritas'},
      {name: 'Magneta'},
      {name: 'RubberMan'},
      {name: 'Dynama'},
      {name: 'Dr IQ'},
      {name: 'Magma'},
      {name: 'Tornado'}
    ];
    return {heroes};
  }
}
