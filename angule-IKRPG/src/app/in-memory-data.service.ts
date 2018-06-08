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
		
		//iniciativa
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
		
		//save
		{id:'menuname',text:[
		'para salvar suas planilhas escolha o nome do arquivo',
		'to save your sheets tip a name for the file'
		],for:'namefile',pos:3},
		{id:'menusave',text:[
		'e clique no botão ao lado',
		'and click on the button at side'
		],for:'savebutton',pos:3},
		
		//load
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
		
		//seletor
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
		],for:'lifebutton0',pos:2},
		
		
		{id:'detailintro',text:[
		'Nesta página você vê detalhadamente a planilha, e pode editá-la, seja alterando (atributos, armas e habilidades) ou controlando sua vida',
		'In this page you see a sheet detailed, and can edit it, could be update (attributes, weapons and abilities) or controlling the life'
		],for:'',pos:1},
		
		//detalhe
		{id:'detailname',text:[
		'nome da planilha',
		'sheet name'
		],for:'lifename',pos:2},
		{id:'detailbase',text:[
		'tamanho da base do personagem',
		'character base size'
		],for:'lifebase',pos:2},
		{id:'detailtype',text:[
		'tipo da vida do personagem',
		'character life type'
		],for:'lifetype',pos:2},
		{id:'detailarm',text:[
		'e controlar o valor de seus atributos, como arm',
		'and control the values of its attributes, like arm'
		],for:'armdemonstrativo',pos:2},
		
		//vitalidade
		{id:'detailvitadd',text:[
		'para adicionar uma barra de vitalidade para seus mobs',
		'to add a vitality bar for your mobs'
		],for:'addvitbar',pos:3},
		{id:'detailvitdel',text:[
		'ou remover uma barra de vitalidade',
		'or remove a vitality bar'
		],for:'removevitbar',pos:3},
		{id:'detailvit',text:[
		'controle a quantidade de vida clicando nos circulos',
		'control the life quantity by clicking on the circles'
		],for:'cb00',pos:3},
		
		//espiral
		{id:'detailspiralintro',text:[
		'controle o valor de cada espiral',
		'control the value of each spiral'
		],for:'',pos:4},
		{id:'detailfis',text:[
		'começando pelo físico',
		'starting by physical'
		],for:'cbf0',pos:4},
		{id:'detailfisup',text:[
		'clique de cima',
		'clique on top'
		],for:'cbf2',pos:4},
		{id:'detailfisdown',text:[
		'para baixo',
		'to bottom'
		],for:'cbf3',pos:4},
		{id:'detailagi',text:[
		'o mesmo para agilidade',
		'the same for agility'
		],for:'cba0',pos:4},
		{id:'detailint',text:[
		'e intelecto',
		'and intellect'
		],for:'cbi0',pos:4},
		{id:'detailfield',text:[
		'mais o campo de força para conjuradores',
		'plus the force field for warcasters'
		],for:'cbd0',pos:4},
		
		//grid
		{id:'detailgridintro',text:[
		'veja a grade de seu gigante',
		'see the grid of your warjack'
		],for:'',pos:5},
		{id:'detailgridchange',text:[
		'mude o modulo clicando em uma espaço na grade, ou danifique pressionando ctrl ou shift',
		'change the module by click on a space on grid, or damage by pressing ctrl or shift '
		],for:'btn00',pos:5},
		{id:'detailgridchange',text:[
		'não esqueça campo de força para mirmidões',
		'don\'t forget the force field for myrmidons'
		],for:'cbgd0',pos:5},
		
		//meele
		{id:'detailmadd',text:[
		'adicione uma arma corpo-a-corpo',
		'add a meele weapon'
		],for:'addmeele',pos:6},
		{id:'detailmname',text:[
		'escolha nome',
		'chose the name'
		],for:'mlname0',pos:6},
		{id:'detailmlocal',text:[
		'local da arma',
		'weapon location'
		],for:'mllocal0',pos:6},
		{id:'detailmlhit',text:[
		'bonus de acerto',
		'hit bonus'
		],for:'mlhit0',pos:6},
		{id:'detailmlpod',text:[
		'potência',
		'power'
		],for:'mlpod0',pos:6},
		{id:'detailmlpf',text:[
		'potência mais força',
		'power plus strength'
		],for:'mlpf0',pos:6},
		{id:'detailmlnt',text:[
		'notas',
		'notes'
		],for:'mlnt0',pos:6},
		{id:'detailmldel',text:[
		'ou remova a arma',
		'or delete the weapon'
		],for:'mldel0',pos:6},
		
		//range
		{id:'detailradd',text:[
		'adicione uma arma à distância',
		'add a range weapon'
		],for:'addrange',pos:7},
		{id:'detailrname',text:[
		'escolha nome',
		'chose the name'
		],for:'rgname0',pos:7},
		{id:'detailrlocal',text:[
		'local da arma',
		'weapon location'
		],for:'rglocal0',pos:7},
		{id:'detailrghit',text:[
		'bonus de acerto',
		'hit bonus'
		],for:'rghit0',pos:7},
		{id:'detailrgalc',text:[
		'alcance',
		'range'
		],for:'rgalc0',pos:7},
		{id:'detailrgrof',text:[
		'Cadência',
		'Rate of fire'
		],for:'rgrof0',pos:7},
		{id:'detailrgade',text:[
		'área de efeito',
		'area of effect'
		],for:'rgade0',pos:7},
		{id:'detailrgpod',text:[
		'potência',
		'power'
		],for:'rgpod0',pos:7},
		{id:'detailrgnt',text:[
		'notas',
		'notes'
		],for:'rgnt0',pos:7},
		{id:'detailrgdel',text:[
		'ou remova a arma',
		'or delete the weapon'
		],for:'rgdel0',pos:7},
		
		//habilidade
		{id:'detailaadd',text:[
		'adicione uma habilidade',
		'add an ability'
		],for:'addability',pos:8},
		{id:'detailaname',text:[
		'escolha nome',
		'chose the name'
		],for:'abname0',pos:8},
		{id:'detailadesc',text:[
		'coloque a descrição',
		'put the description'
		],for:'abdesc0',pos:8},
		{id:'detailapg',text:[
		'livro e página',
		'book and page'
		],for:'abpg0',pos:8},
		{id:'detailadel',text:[
		'o remova a habilidade',
		'or delete the ability'
		],for:'abdel0',pos:8},
		
		//magic
		{id:'detailgadd',text:[
		'adicione uma mágia',
		'add a magic'
		],for:'addmagic',pos:9},
		{id:'detailgname',text:[
		'escolha nome',
		'chose the name'
		],for:'mgname0',pos:9},
		{id:'detailmcost',text:[
		'custo',
		'cost'
		],for:'mgcost0',pos:9},
		{id:'detailmgalc',text:[
		'alcance',
		'range'
		],for:'mgalc0',pos:9},
		{id:'detailmgade',text:[
		'área de efeito',
		'area of effect'
		],for:'mgade0',pos:9},
		{id:'detailmgpod',text:[
		'potência',
		'power'
		],for:'mgpod0',pos:9},
		{id:'detailmgman',text:[
		'manutenção',
		'upkeep'
		],for:'rgman0',pos:9},
		{id:'detailmgoff',text:[
		'ofensiva',
		'offensive'
		],for:'mgodd0',pos:9},
		{id:'detailmgnt',text:[
		'notas',
		'notes'
		],for:'mgnt0',pos:9},
		{id:'detailmgdel',text:[
		'ou remova a mágia',
		'or delete the magic'
		],for:'mgdel0',pos:9}
    ];
    return {lifes,iniciativas,infos};
  }
  
}