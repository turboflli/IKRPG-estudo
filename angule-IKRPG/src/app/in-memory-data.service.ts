import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const lifes = [
     { id: 1, name: 'BoneSwarm', type: 'espiral', value: '10,6,4,0', base:"medium", spd: 5,arm:15, def:13, inc: 13, von: 11, arc:3, cmd:0, thr:9,
		melleweapons: [
		{name:'bone strike', hit:6, pod:4, pf:12, note:'inimigos no alcance não avançam, só viram'}
		],
		rangeweapons:[],
		abilities:[
		{name:'Terro',desc:'14',pg:'u366'}
		],
		magics:[
		{name:'swarm', cost:'2',alc:'cjr', ade:2, pod:0, man:false, off:false, note:'inimigos -2 atk'}
		]
	 }
    ];
    const iniciativas = [
    ];
    return {lifes,iniciativas};
  }
  
}