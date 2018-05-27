import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const lifes = [
     { id: 1, name: 'mob 1', type: 'vitalidade', value: '8' },
	  { id: 2, name: 'mob 2', type: 'vitalidade', value: '6' },
	  { id:3, name: 'lock 1', type: 'espiral', value: '6,4,4,0' },
	  { id:4, name: 'beats 1', type: 'espiral', value: '8,5,3,0' }
    ];
    return {lifes};
  }
}