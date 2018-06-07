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
	const infos = [
		{id:'menuoi',text:[
		'Bem vindo a página de menu','Welcome to menu page '
		],for:'',width:0},
		{id:'lifeoi',text:[
		'Bem vindo a página de planilhas','Welcome to sheet page '
		],for:'',width:0},
		{id:'detailoi',text:[
		'Bem vindo a página de detalhe','Welcome to detail page '
		],for:'',width:0},
		{id:'menuintro',text:[
		'Nesta página você pode salvar e carregar suas fichas, e também adicionar iniciativas',
		'In this page you can save and load your sheets, and add initiatives as well'
		],for:'',width:90},
		{id:'menuinic',text:[
		'para adicionar uma iniciativa preencha os campos (primeiro com valor e segundo com nome) e clique no botão ao lado',
		'to add an initiative fulfil the blanks (the first with value and the second with name) and click on the button at side'
		],for:'inicbutton',width:45},
		{id:'menuinicclear',text:[
		'para remover todas as iniciativas clique no botão clean',
		'to remove all initiatives just click on the clean button'
		],for:'inicclearbutton',width:20},
		{id:'menusave',text:[
		'para salvar suas planilhas escolha o nome do arquivo e clique no botão ao lado',
		'to save your sheets tip a name for the file and click on the button at side'
		],for:'namefile',width:90},
		{id:'menuread',text:[
		'para carregar suas planilhas escolha um arquivo(json) e clique no botão ao lado',
		'to load your sheets choose a file(json) and click on the button at side'
		],for:'readbutton',width:30},
		{id:'menuload',text:[
		'após aparecer amensagem de pronto clique no botão ao lado',
		'after showing the message of ready click on the button at side'
		],for:'loadbutton',width:25},
		{id:'lifeintro',text:[
		'Nesta página você pode ver o nome de suas planilhas e deletar alguma',
		'In this page you can see the name of your sheets and delete someone'
		],for:'',width:90},
		{id:'lifelist',text:[
		'para ver mais detalhado clique sobre um nome',
		'to see more details click on the name'
		],for:'li',width:20},
		{id:'lifeid',text:[
		'você vê o id de sua planilha aqui',
		'you see the id of your sheet here'
		],for:'span',width:20},
		{id:'lifedelete',text:[
		'para deletar clique no botão de x',
		'to delete click on the x button'
		],for:'button',width:20}
    ];
    return {lifes,iniciativas,infos};
  }
  
}