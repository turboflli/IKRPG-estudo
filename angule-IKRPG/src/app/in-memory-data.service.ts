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
		],for:'',pos:0},
		{id:'lifeoi',text:[
		'Bem vindo a página de planilhas','Welcome to sheet page '
		],for:'',pos:0},
		{id:'detailoi',text:[
		'Bem vindo a página de detalhe','Welcome to detail page '
		],for:'',pos:0},
		{id:'menuintro',text:[
		'Nesta página você pode salvar e carregar suas fichas, e também adicionar iniciativas',
		'In this page you can save and load your sheets, and add initiatives as well'
		],for:'',pos:1},
		{id:'menuinic',text:[
		'para adicionar uma iniciativa preencha os campos (primeiro com valor',
		'to add an initiative fulfil the blanks (the first with value'
		],for:'inicvalue',pos:2},
		{id:'menuinic',text:[
		'e segundo com nome)',
		'and the second with name)'
		],for:'inicname',pos:2},
		{id:'menuinic',text:[
		'e clique no botão ao lado',
		'click on the button at side'
		],for:'inicbutton',pos:2},
		{id:'menuinicclear',text:[
		'para remover todas as iniciativas clique no botão clean',
		'to remove all initiatives just click on the clean button'
		],for:'inicclearbutton',pos:2},
		{id:'menuname',text:[
		'para salvar suas planilhas escolha o nome do arquivo',
		'to save your sheets tip a name for the file'
		],for:'namefile',pos:3},
		{id:'menusave',text:[
		'e clique no botão ao lado',
		'and click on the button at side'
		],for:'savebutton',pos:3},
		{id:'menuread',text:[
		'para carregar suas planilhas escolha um arquivo(json)',
		'to load your sheets choose a file(json)'
		],for:'importedfile',pos:4},
		{id:'menuread',text:[
		' e clique no botão ao lado',
		' and click on the button at side'
		],for:'readbutton',pos:4},
		{id:'menuload',text:[
		'após aparecer amensagem de pronto clique no botão ao lado',
		'after showing the message of ready click on the button at side'
		],for:'loadbutton',pos:4},
		{id:'lifeintro',text:[
		'Nesta página você pode ver o nome de suas planilhas e deletar alguma',
		'In this page you can see the name of your sheets and delete someone'
		],for:'',pos:1},
		{id:'lifeid',text:[
		'você vê o id de sua planilha aqui',
		'you see the id of your sheet here'
		],for:'lifeid0',pos:2},
		{id:'lifelist',text:[
		'para ver mais detalhado clique sobre um nome',
		'to see more details click on the name'
		],for:'lifelink0',pos:2},
		{id:'lifedelete',text:[
		'para deletar clique no botão de x',
		'to delete click on the x button'
		],for:'lifebutton0',pos:2}
    ];
    return {lifes,iniciativas,infos};
  }
  
}