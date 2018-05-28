import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const lifes = [
     { id: 1, name: 'mob 1', type: 'vitalidade', value: '8', arm:12, def:11, inc: 12, von: 11, 
		melleweapons: [
		{name:'espada', hit:6, pod:3, pf:9, note:'',local:''}
		],
		rangeweapons:[]
	 },
	 { id: 2, name: 'mob 2', type: 'vitalidade', value: '6', arm:10, def:13, inc: 13, von: 10, 
		melleweapons: [
		{name:'espada', hit:5, pod:3, pf:7, note:'',local:''}
		],
		rangeweapons:[
		{name:'arco', hit:5, pod:8, alc:8,munition:10, note:'',local:''}
		]
	 },
	 { id:3, name: 'lock 1', type: 'espiral', value: '6,4,4,0', arm:12, def:11, inc: 12, von: 10, 
		melleweapons: [
		{name:'lança', hit:5, pod:5, pf:10, note:'',local:''}
		],
		rangeweapons:[]
	 },
	 { id:4, name: 'beats 1', type: 'espiral', value: '9,5,3,0', arm:15, def:10, inc: 13, von: 14, 
		melleweapons: [
		{name:'garra', hit:6, pod:4, pf:11, note:'',local:'d'},
		{name:'garra', hit:6, pod:4, pf:11, note:'',local:'e'},
		{name:'mordida', hit:5, pod:6, pf:13, note:'',local:''}
		],
		rangeweapons:[]
	 },
	 { id:5, name: 'corruptor', type: 'grid', 
	 value:'x,x,o,o,x,x;'+
	 'x,o,o,o,o,x;'+
	 'o,o,o,o,o,o;'+
	 'o,e,o,o,d,o;'+
	 'e,e,m,c,d,d;'+
	 'x,m,m,c,c,x', arm:12, def:11, inc: 12, von: 11,
		melleweapons: [
		{name:'necrojector', hit:7, pod:5, pf:15, note:'deixa corrosão,mão livre',local:'d'}
		],
		rangeweapons:[
		{name:'Necrosludge Cannon', hit:5, pod:14, alc:12,munition:1, note:'deixa corrosão',local:'e'}
		]
	 }
    ];
    return {lifes};
  }
}