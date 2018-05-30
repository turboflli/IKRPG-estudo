import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const lifes = [
     /*{ id: 1, name: 'mob 1', type: 'vitalidade', value: '8', arm:12, def:11, inc: 12, von: 11, 
		melleweapons: [
		{name:'espada', hit:6, pod:3, pf:9, note:'',local:''}
		],
		rangeweapons:[],
		abilities:[
		{name:'durão', desc:'Se incapacitado 1d6 em 5,6 rec 1 em cada espiral', pg:'56'}
		],
		magics:[]
	 },
	 { id: 2, name: 'mob 2', type: 'vitalidade', value: '6', arm:10, def:13, inc: 13, von: 10, 
		melleweapons: [
		{name:'espada', hit:5, pod:3, pf:7, note:'',local:''}
		],
		rangeweapons:[
		{name:'arco', hit:5, pod:8, alc:8,munition:10, ade:0, note:'',local:''}
		],
		abilities:[],
		magics:[]
	 },
	 { id:3, name: 'lock 1', type: 'espiral', value: '6,4,4,0', arm:12, def:11, inc: 12, von: 10, 
		melleweapons: [
		{name:'lança', hit:5, pod:5, pf:10, note:'',local:''}
		],
		rangeweapons:[],
		abilities:[
		{name:'conjurador rápido', desc:'uma ação a mais pra magia', pg:'100'},
		{name:'conjurador de batalha', desc:'1d adicional no ataque', pg:'100'}
		],
		magics:[
		{name:'sangrar', cost:2, alc:'8', ade:0, pod:10, man:false, off:true, note:'em hit rec(1d3)'},
		{name:'pacto da morte', cost:2, alc:'ctr', ade:0, pod:0, man:true, off:false, note:'+2arm'}
		]
	 },
	 { id:4, name: 'beats 1', type: 'espiral', value: '9,5,3,0', arm:15, def:10, inc: 13, von: 14, 
		melleweapons: [
		{name:'garra', hit:6, pod:4, pf:11, note:'',local:'d'},
		{name:'garra', hit:6, pod:4, pf:11, note:'',local:'e'},
		{name:'mordida', hit:5, pod:6, pf:13, note:'',local:''}
		],
		rangeweapons:[],
		abilities:[
		{name:'devorar', desc:'ao incapacitar vivo rec(1d3)', pg:'u127'}
		],
		magics:[
		{name:'rise', cost:2, alc:'cjr', ade:0, pod:0, man:false, off:false, note:'Remove efeito de derrubado'}
		]
	 },
	 { id:5, name: 'corruptor', type: 'grid', 
	 value:'x,x,o,o,x,x;'+
	 'x,o,o,o,o,x;'+
	 'o,o,o,o,o,o;'+
	 'o,e,o,o,d,o;'+
	 'e,e,m,c,d,d;'+
	 'x,m,m,c,c,x;0', arm:12, def:11, inc: 12, von: 11,
		melleweapons: [
		{name:'necrojector', hit:7, pod:5, pf:15, note:'deixa corrosão,mão livre',local:'d'}
		],
		rangeweapons:[
		{name:'Necrosludge Cannon', hit:5, pod:14, alc:12,munition:1, ade:0, note:'deixa corrosão',local:'e'}
		],
		abilities:[
		{name:'protetor', desc:'pode avançar 2 para tomar golpe', pg:'b188'}
		],
		magics:[]
	 }*/
    ];
    return {lifes};
  }
}