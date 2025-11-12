// itensmagicos.js
// Baseado na Tabela 8-12: Poções (p. 341, Livro Básico Tormenta 20)

const itensMagicosData = {
    "item": [
        // Poções
        { nome: "Poção: Abençoar Alimentos (óleo)", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Purifica e abençoa alimentos e bebidas." },
        { nome: "Poção: Área Escorregadia (granada)", preco: "T$ 30", tipo: "Granada", espacos: "0,5", categoria: "Item Mágico", descricao: "Cria uma área escorregadia no local de impacto." },
        { nome: "Poção: Arma Mágica (óleo)", preco: "T$ 30", tipo: "Óleo", espacos: "0,5", categoria: "Item Mágico", descricao: "Concede +1 em ataques e dano com a arma ungida." },
        { nome: "Poção: Compreensão", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Concede compreensão mágica e linguística temporária." },
        { nome: "Poção: Curar Ferimentos (2d8+2 PV)", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Restaura 2d8+2 pontos de vida ao beber." },
        { nome: "Poção: Disfarce Ilusório", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Cria uma ilusão que altera a aparência do usuário." },
        { nome: "Poção: Escuridão (óleo)", preco: "T$ 30", tipo: "Óleo", espacos: "0,5", categoria: "Item Mágico", descricao: "Gera uma área de escuridão mágica ao ser aplicada." },
        { nome: "Poção: Luz (óleo)", preco: "T$ 30", tipo: "Óleo", espacos: "0,5", categoria: "Item Mágico", descricao: "Emite luz intensa ao ser aplicada." },
        { nome: "Poção: Névoa (granada)", preco: "T$ 30", tipo: "Granada", espacos: "0,5", categoria: "Item Mágico", descricao: "Cria uma nuvem de névoa na área de impacto." },
        { nome: "Poção: Primor Atlético", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Concede bônus em testes de Atletismo e Acrobacia." },
        { nome: "Poção: Proteção Divina", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Concede +1 na Defesa e nos testes de resistência." },
        { nome: "Poção: Resistência a Energia", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Concede resistência a um tipo de energia." },
        { nome: "Poção: Sono", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Adormece criaturas em uma pequena área." },
        { nome: "Poção: Suporte Ambiental", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Protege contra calor, frio ou falta de ar." },
        { nome: "Poção: Tranca Arcana (óleo)", preco: "T$ 30", tipo: "Óleo", espacos: "0,5", categoria: "Item Mágico", descricao: "Fecha e sela portas ou objetos." },
        { nome: "Poção: Visão Mística", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Permite ver magias e auras mágicas." },
        { nome: "Poção: Vitalidade Fantasma", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Concede pontos de vida temporários." },
        { nome: "Poção: Escudo da Fé (duração cena)", preco: "T$ 120", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Cria um campo de proteção divina por uma cena." },
        { nome: "Poção: Alterar Tamanho", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Permite crescer ou encolher temporariamente." },
        { nome: "Poção: Aparência Perfeita", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Concede aparência perfeita e carismática." },
        { nome: "Poção: Armamento da Natureza (óleo)", preco: "T$ 270", tipo: "Óleo", espacos: "0,5", categoria: "Item Mágico", descricao: "Imbuí uma arma com poder natural." },
        { nome: "Poção: Bola de Fogo (granada)", preco: "T$ 270", tipo: "Granada", espacos: "0,5", categoria: "Item Mágico", descricao: "Explode causando 5d6 de dano de fogo em área." },
        { nome: "Poção: Camuflagem Ilusória", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Cria uma ilusão que oculta o usuário." },
        { nome: "Poção: Concentração de Combate (duração cena)", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Melhora foco e resistência em combate." },
        { nome: "Poção: Curar Ferimentos (4d8+4 PV)", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Restaura 4d8+4 pontos de vida." },
        { nome: "Poção: Físico Divino", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Concede +2 em For, Des ou Con por uma cena." },
        { nome: "Poção: Mente Divina", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Concede +2 em Int, Sab ou Car por uma cena." },
        { nome: "Poção: Metamorfose", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Permite assumir a forma de outra criatura." },
        { nome: "Poção: Purificação", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Remove venenos, doenças e condições negativas." },
        { nome: "Poção: Velocidade", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Concede uma ação de movimento extra por turno." },
        { nome: "Poção: Vestimenta da Fé (óleo)", preco: "T$ 270", tipo: "Óleo", espacos: "0,5", categoria: "Item Mágico", descricao: "Abençoa armaduras com energia divina." },
        { nome: "Poção: Voz Divina", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Amplifica e inspira por meio da voz." },
        { nome: "Poção: Arma Mágica +3 (óleo)", preco: "T$ 750", tipo: "Óleo", espacos: "0,5", categoria: "Item Mágico", descricao: "Concede +3 em ataques e dano com a arma ungida." },
        { nome: "Poção: Curar Ferimentos (7d8+7 PV)", preco: "T$ 1.080", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Restaura 7d8+7 pontos de vida." },
        { nome: "Poção: Físico Divino (três atributos)", preco: "T$ 1.080", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Concede +2 em For, Des e Con por uma cena." },
        { nome: "Poção: Invisibilidade (duração cena)", preco: "T$ 1.080", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Torna o usuário invisível por uma cena." },
        { nome: "Poção: Bola de Fogo Aprimorada (granada)", preco: "T$ 1.470", tipo: "Granada", espacos: "0,5", categoria: "Item Mágico", descricao: "Explode causando 10d6 de dano de fogo em área." },
        { nome: "Poção: Curar Ferimentos (11d8+11 PV)", preco: "T$ 3.000", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Restaura 11d8+11 pontos de vida." },

        // Armas Especificas
        { nome: "Azagaia dos Relâmpagos", preco: "T$ 30.000", tipo: "Arma Mágica Maior", espacos: "1", categoria: "Item Mágico", descricao: "Ao ser arremessada, transforma-se em um raio, causando 5d6 de dano elétrico (Reflexos CD 15 reduz à metade)." },
        {
            nome: "Espada Baronial",
            preco: "T$ 30.000",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            espacos: "1",
            descricao: "Espada longa +2 que concede +2 em testes de Diplomacia e Intimidação quando empunhada por nobres."
        },
        {
            nome: "Lâmina da Luz",
            preco: "T$ 45.000",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            espacos: "1",
            descricao: "Espada +3 sagrada que causa +2d6 de dano de luz contra mortos-vivos e demônios."
        },
        {
            nome: "Lança Animalesca",
            preco: "T$ 45.000",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            espacos: "1",
            descricao: "Permite invocar um aliado animal ou assumir forma bestial por uma cena (como Metamorfose)."
        },
        {
            nome: "Maça do Terror",
            preco: "T$ 45.000",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            espacos: "1",
            descricao: "Maça +3 que pode amedrontar inimigos em um raio de 9 m (Vontade CD 17)."
        },
        {
            nome: "Florete Fugaz",
            preco: "T$ 50.000",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            espacos: "1",
            descricao: "Florete +3 que permite se mover 3 m como reação após um acerto em combate corpo a corpo."
        },
        {
            nome: "Cajado da Destruição",
            preco: "T$ 60.000",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            espacos: "2",
            descricao: "Cajado +3 que permite conjurar Desintegrar uma vez por dia."
        },
        {
            nome: "Cajado da Vida",
            preco: "T$ 60.000",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            espacos: "2",
            descricao: "Cajado +3 que concede +2 em testes de Cura e permite conjurar Curar Ferimentos Críticos uma vez por dia."
        },
        {
            nome: "Machado Silvestre",
            preco: "T$ 70.000",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            espacos: "2",
            descricao: "Machado de batalha +3 que causa +2d6 de dano adicional contra aberrações e mortos-vivos."
        },
        {
            nome: "Martelo de Doherimm",
            preco: "T$ 70.000",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            espacos: "2",
            descricao: "Martelo de guerra +3 forjado por anões; causa +2d6 de dano contra orcs e goblinoides e retorna ao portador ao ser lançado."
        },
        {
            nome: "Arco do Poder",
            preco: "T$ 90.000",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            espacos: "2",
            descricao: "Arco longo +4 que dobra o alcance e ignora cobertura parcial e total."
        },
        {
            nome: "Língua do Deserto",
            preco: "T$ 90.000",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            espacos: "1",
            descricao: "Espada curva +4 flamejante; causa +2d6 de dano de fogo e concede resistência 10 a fogo ao portador."
        },
        {
            nome: "Besta Explosiva",
            preco: "T$ 100.000",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            espacos: "2",
            descricao: "Dispara projéteis que explodem em área (3 m, 6d6 de dano de fogo)."
        },
        {
            nome: "Punhal Sszzaazita",
            preco: "T$ 100.000",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            espacos: "1",
            descricao: "Adaga +4 envenenada; ao atingir, o alvo sofre 1d6 de dano por veneno por rodada (Fortitude CD 18 anula)."
        },
        {
            nome: "Espada Sortuda",
            preco: "T$ 110.000",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            espacos: "1",
            descricao: "Espada longa +4 que concede vantagem em um teste de ataque, perícia ou resistência uma vez por dia."
        },
        {
            nome: "Avalanche",
            preco: "T$ 140.000",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            espacos: "2",
            descricao: "Martelo gigante +5 que pode liberar uma onda sísmica (como a magia Terremoto) uma vez por semana."
        },
        {
            nome: "Cajado do Poder",
            preco: "T$ 180.000",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            espacos: "2",
            descricao: "Cajado +5 que concede +2 em testes de ataque mágicos e permite conjurar diversas magias poderosas (Fogo, Relâmpago, Barreira etc.)."
        },
        {
            nome: "Vingadora Sagrada",
            preco: "T$ 200.000",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            espacos: "2",
            descricao: "Espada longa +5 sagrada; causa +2d6 de dano adicional contra criaturas malignas e concede resistência 10 a trevas ao portador."
        },

        // Armaduras Específicas
        {
            nome: "Cota Élfica",
            preco: "T$ 30.000",
            categoria: "Item Mágico",
            tipo: "Armadura Mágica",
            espacos: "2",
            descricao: "Cota de malha leve e silenciosa feita por elfos; concede +8 na Defesa e +5 em Furtividade."
        },
        {
            nome: "Couro de Monstro",
            preco: "T$ 36.000",
            categoria: "Item Mágico",
            tipo: "Armadura Mágica",
            espacos: "2",
            descricao: "Feita de peles e escamas de bestas mágicas; concede resistência 10 a um tipo de energia."
        },
        {
            nome: "Escudo do Conjurador",
            preco: "T$ 45.000",
            categoria: "Item Mágico",
            tipo: "Escudo Mágico",
            espacos: "1",
            descricao: "Concede +2 na Defesa e permite ignorar a chance de falha arcana ao conjurar magias com escudo."
        },
        {
            nome: "Loriga do Centurião",
            preco: "T$ 45.000",
            categoria: "Item Mágico",
            tipo: "Armadura Mágica",
            espacos: "5",
            descricao: "Armadura de escamas +3 que concede +2 em testes de Guerra e Intimidação."
        },
        {
            nome: "Manto da Noite",
            preco: "T$ 45.000",
            categoria: "Item Mágico",
            tipo: "Armadura Mágica",
            espacos: "2",
            descricao: "Manto encantado que funciona como armadura leve +3 e concede invisibilidade em áreas de escuridão."
        },
        {
            nome: "Couraça do Comando",
            preco: "T$ 45.000",
            categoria: "Item Mágico",
            tipo: "Armadura Mágica",
            espacos: "5",
            descricao: "Couraça +3 que concede +2 em testes de Carisma e permite inspirar aliados como uma ação de movimento."
        },
        {
            nome: "Baluarte Anão",
            preco: "T$ 50.000",
            categoria: "Item Mágico",
            tipo: "Escudo Mágico",
            espacos: "5",
            descricao: "Escudo pesado +3 feito de aço anão; concede RD 5 e vantagem em testes de resistência contra efeitos de empurrão."
        },
        {
            nome: "Escudo Espinhoso",
            preco: "T$ 50.000",
            categoria: "Item Mágico",
            tipo: "Escudo Mágico",
            espacos: "2",
            descricao: "Escudo +3 coberto de espinhos; causa 1d6 de dano de perfuração em quem ataca corpo a corpo."
        },
        {
            nome: "Escudo do Leão",
            preco: "T$ 50.000",
            categoria: "Item Mágico",
            tipo: "Escudo Mágico",
            espacos: "2",
            descricao: "Escudo +3 com símbolo de leão; pode rugir uma vez por dia, apavorando inimigos próximos (Vontade CD 20)."
        },
        {
            nome: "Carapaça Demoníaca",
            preco: "T$ 63.000",
            categoria: "Item Mágico",
            tipo: "Armadura Mágica",
            espacos: "5",
            descricao: "Armadura de placas +4 feita de ossos infernais; concede resistência 10 a fogo e +2 em testes de Intimidação."
        },
        {
            nome: "Escudo do Eclipse",
            preco: "T$ 70.000",
            categoria: "Item Mágico",
            tipo: "Escudo Mágico",
            espacos: "2",
            descricao: "Escudo +4 que pode gerar uma área de escuridão mágica uma vez por dia."
        },
        {
            nome: "Escudo de Azgher",
            preco: "T$ 140.000",
            categoria: "Item Mágico",
            tipo: "Escudo Mágico",
            espacos: "2",
            descricao: "Escudo +5 banhado em luz solar; reflete magias de trevas e causa 3d6 de dano de luz em mortos-vivos adjacentes."
        },
        {
            nome: "Armadura da Luz",
            preco: "T$ 150.000",
            categoria: "Item Mágico",
            tipo: "Armadura Mágica",
            espacos: "5",
            descricao: "Armadura completa +5 que emite luz intensa e concede imunidade a dano de trevas e a cegueira."
        },

        // acessórios Menores

        { nome: "Anel do Sustento", preco: "T$ 3.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Usuário não precisa comer, beber e dorme apenas 2h por dia." },
        { nome: "Bainha Mágica", preco: "T$ 3.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Limpa, repara e protege a arma guardada nela; saca a arma como ação livre." },
        { nome: "Corda da Escalada", preco: "T$ 3.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Sobe e se amarra sozinha; suporta até 300 kg." },
        { nome: "Ferraduras da Velocidade", preco: "T$ 3.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "—", descricao: "Concede +6 m de deslocamento ao animal equipado." },
        { nome: "Garrafa da Fumaça Eterna", preco: "T$ 3.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Emite fumaça densa continuamente; pode ser tampada para interromper." },
        { nome: "Gema da Luminosidade", preco: "T$ 3.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Emite luz como uma tocha; pode ser acesa ou apagada com comando." },
        { nome: "Manto Élfico", preco: "T$ 3.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +5 em Furtividade." },
        { nome: "Mochila de Carga", preco: "T$ 3.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "0", descricao: "Reduz o peso carregado pela metade para efeitos de carga." },
        { nome: "Brincos da Sagacidade", preco: "T$ 4.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +1 em Inteligência (após 1 dia de uso)." },
        { nome: "Luvas da Delicadeza", preco: "T$ 4.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +1 em Destreza (após 1 dia de uso)." },
        { nome: "Manoplas da Força do Ogro", preco: "T$ 4.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +1 em Força (após 1 dia de uso)." },
        { nome: "Manto da Resistência", preco: "T$ 4.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +1 em todos os testes de resistência (Fortitude, Reflexos e Vontade)." },
        { nome: "Manto do Fascínio", preco: "T$ 4.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +1 em Carisma (após 1 dia de uso)." },
        { nome: "Torque do Vigor", preco: "T$ 4.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +1 em Constituição (após 1 dia de uso)." },
        { nome: "Flauta Fantasma", preco: "T$ 6.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Ao ser tocada, cria sons assombrados que podem causar medo (Vontade CD 15)." },
        { nome: "Lanterna da Revelação", preco: "T$ 9.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Revela criaturas invisíveis em seu raio de luz." },
        { nome: "Anel do Escudo Mental", preco: "T$ 9.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede imunidade a efeitos de adivinhação e leitura mental." },
        { nome: "Pingente da Saúde", preco: "T$ 9.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede imunidade a doenças e venenos." },


        // Acessórios Médios

        { nome: "Anel de Telecinesia", preco: "T$ 10.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Permite mover objetos à distância, como a magia Telecinesia." },
        { nome: "Bola de Cristal", preco: "T$ 10.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Permite observar locais ou criaturas distantes, como a magia Vidência." },
        { nome: "Caveira Maldita", preco: "T$ 10.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Cria uma caveira voadora obediente ao usuário, que ataca com rajadas de energia sombria." },
        { nome: "Botas Aladas", preco: "T$ 15.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Permite ao usuário voar com deslocamento de 12 m por cena enquanto calçadas." },
        { nome: "Braceletes de Bronze", preco: "T$ 15.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +1 na Defesa e resistência 5 contra dano de impacto." },
        { nome: "Anel da Energia", preco: "T$ 21.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +5 PM (após 1 dia de uso)." },
        { nome: "Anel da Vitalidade", preco: "T$ 21.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +10 PV (após 1 dia de uso)." },
        { nome: "Manto da Invisibilidade", preco: "T$ 21.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Permite ficar invisível por uma cena, até realizar uma ação hostil." },
        { nome: "Braçadeiras do Arqueiro", preco: "T$ 21.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +2 em testes de ataque e dano com arcos e bestas." },
        { nome: "Brincos de Marah", preco: "T$ 21.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Permitem lançar Curar Ferimentos Leves 3/dia." },
        { nome: "Faixas do Pugilista", preco: "T$ 21.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +2 em ataques desarmados e dano corpo a corpo." },
        { nome: "Manto da Aranha", preco: "T$ 21.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Permite escalar superfícies e paredes como uma aranha." },
        { nome: "Vassoura Voadora", preco: "T$ 21.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "—", descricao: "Permite voar com deslocamento de 9 m; suporta até 100 kg." },
        { nome: "Amuleto da Robustez", preco: "T$ 25.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +2 em Constituição (após 1 dia de uso)." },
        { nome: "Cinto da Força do Gigante", preco: "T$ 25.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +2 em Força (após 1 dia de uso)." },
        { nome: "Coroa Majestosa", preco: "T$ 25.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +2 em Carisma (após 1 dia de uso)." },
        { nome: "Estola da Serenidade", preco: "T$ 25.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +2 em Sabedoria (após 1 dia de uso)." },
        { nome: "Manto do Morcego", preco: "T$ 25.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede visão no escuro 18 m e bônus +5 em Furtividade." },
        { nome: "Pulseiras da Celeridade", preco: "T$ 25.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +2 em Destreza (após 1 dia de uso)." },
        { nome: "Tiara da Sapiencia", preco: "T$ 25.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +2 em Inteligência (após 1 dia de uso)." },

        { nome: "Elmo de Teletransporte", preco: "T$ 30.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Permite ao usuário se teleportar como a magia Teletransporte." },
        { nome: "Gema da Telepatia", preco: "T$ 30.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Permite comunicação telepática com qualquer criatura inteligente em alcance médio." },
        { nome: "Gema Elemental", preco: "T$ 30.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Liberta um elemental (fogo, ar, água ou terra) uma vez por dia para lutar por você." },
        { nome: "Manual da Saúde Corporal", preco: "T$ 30.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Ao ser lido, concede +1 permanente em Constituição." },
        { nome: "Manual do Bom Exercício", preco: "T$ 30.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Ao ser lido, concede +1 permanente em Força." },
        { nome: "Manual dos Movimentos Precisos", preco: "T$ 30.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Ao ser lido, concede +1 permanente em Destreza." },
        { nome: "Medalhão de Lena", preco: "T$ 30.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Permite usar a magia Curar Ferimentos Graves uma vez por dia." },
        { nome: "Tomo da Compreensão", preco: "T$ 30.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Ao ser lido, concede +1 permanente em Inteligência." },
        { nome: "Tomo da Liderança e Influência", preco: "T$ 30.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Ao ser lido, concede +1 permanente em Carisma." },
        { nome: "Tomo dos Grandes Pensamentos", preco: "T$ 30.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Ao ser lido, concede +1 permanente em Sabedoria." },
        { nome: "Anel Refletor", preco: "T$ 51.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Reflete uma magia de alvo único de volta ao conjurador uma vez por dia." },
        { nome: "Cinto do Campeão", preco: "T$ 51.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +2 em testes de ataque e dano em combate corpo a corpo." },
        { nome: "Colar Guardião", preco: "T$ 51.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Enquanto carregado, concede resistência a veneno e doenças." },
        { nome: "Estatueta Animista", preco: "T$ 51.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Pode invocar uma criatura mágica (animal, espírito ou construto) uma vez por dia." },
        { nome: "Anel da Liberdade", preco: "T$ 64.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede imunidade a efeitos de paralisia, imobilização e lentidão." },
        { nome: "Tapete Voador", preco: "T$ 64.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "2", descricao: "Permite voar com deslocamento de 18m e carregar até 200kg." },
        { nome: "Braceletes de Ouro", preco: "T$ 64.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +2 em Defesa e resistência 5 contra todas as energias." },
        { nome: "Espelho da Oposição", preco: "T$ 79.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "—", descricao: "Cria um clone perfeito do usuário que o enfrenta em combate uma vez por semana." },
        { nome: "Robe do Arquimago", preco: "T$ 79.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +2 em testes de ataque mágicos e +2 na CD das magias lançadas." },
        { nome: "Orbe das Tempestades", preco: "T$ 79.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Permite controlar o clima e conjurar Tempestade uma vez por dia." },
        { nome: "Anel da Regeneração", preco: "T$ 150.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Restaura 1d6 PV por rodada e regenera membros perdidos." },
        { nome: "Espelho do Aprisionamento", preco: "T$ 150.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "—", descricao: "Aprisiona criaturas refletidas em seu interior (Vontade CD 20 nega)." },

        // (Itens de Coração de Rubi - Aventura 6)

        {
            nome: "Pingente da Sereia Adormecida",
            preco: "T$ 3.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Menor. Uma pérola enorme e brilhante. Seu usuário se torna imune a sono e sua recuperação de PV e PM é sempre confortável. O usuário pode gastar uma ação de movimento e 1 PM para remover uma condição de fadiga (alcance curto).",
            fonte: "Coração de Rubi"
        },
        {
            nome: "Cálices Encantados de Mulk",
            preco: "T$ 7.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: " Um par de cálices de vidro. Um cálice torna venenoso qualquer líquido (Fortitude CD Int, ou enjoado e 4d12 PV por veneno/rodada por 10 rodadas). O outro cálice transforma líquido em antídoto.",
            fonte: "Coração de Rubi"
        },
        {
            nome: "Adaga do Último Suspiro",
            preco: "T$ 70.000",
            dano: "1d4",
            critico: "19",
            alcance: "Curto",
            tipo_dano: "Perfuração",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica",
            descricao: "Arma específica. É uma adaga formidável (+2), assassina (+2d6) e sanguinária (cura metade do dano). Você pode gastar 2 PM para tocar em um cadáver e ver a última cena vista por esta criatura antes de morrer.",
            fonte: "Coração de Rubi"
        },
        {
            nome: "Manoplas do Mestre Moldador",
            preco: "T$ 21.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: " Manoplas de couro avermelhado. Permitem que o usuário molde rocha e minérios comuns. Você pode lançar Transmutar Objetos (aprimoramento +3 PM: muda execução para ação completa e duração para permanente). Se já conhece a magia, custo diminui em –1 PM.",
            fonte: "Coração de Rubi"
        },

        // (Itens de Ameaças de Arton)
        {
            nome: "Armadura do Devorador",
            preco: "T$ 54.000",
            espacos: "—",
            categoria: "Item Mágico",
            tipo: "Armadura Mágica",
            descricao: "Simbionte (Elmo). Invocar é ação livre (perde 1d4 PV). Funciona como uma armadura completa espinhosa selada sob medida de matéria vermelha (não requer proficiência). Usuário não precisa respirar. Ativa-se como reação ao sofrer dano (Vontade CD 10 + dano evita).",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Asas do Devorador",
            preco: "T$ 27.000",
            espacos: "—",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Simbionte (Costas). O hospedeiro pode gastar 2 PM para ativar as Asas e ganhar deslocamento de voo igual ao seu deslocamento em terra (duração sustentada).",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Flagelo do Devorador",
            preco: "T$ 33.000",
            espacos: "—",
            categoria: "Item Mágico",
            tipo: "Escudo Mágico",
            descricao: "Simbionte (Braço). Conta como um escudo leve de matéria vermelha. Permite lançar 'Jato Corrosivo' (como ação de movimento). Se aprender a magia, custo -1 PM.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Mente do Devorador",
            preco: "T$ 34.000",
            espacos: "—",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Simbionte (Cabeça). Concede +1 em Inteligência e Sabedoria (cumulativo). Permite lançar uma magia arcana de encantamento de 1º círculo (escolhida na implantação). Se aprender a magia, custo -1 PM.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Olhos do Devorador",
            preco: "T$ 34.000",
            espacos: "—",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Simbionte (Rosto). Concede +5 em Percepção, visão no escuro (ignora escuridão mágica) e não pode ser flanqueado. Permite lançar 'Visão da Verdade'. Se aprender a magia, custo -1 PM.",
            fonte: "Ameaças de Arton"
        },
        // (Itens de Ameaças de Arton - Mágicos)
        {
            nome: "Chifre de Unicórnio",
            preco: "T$ 120.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Maior. Permite lançar Curar Ferimentos e Purificação (custo -1 PM se já as conhece). Pode lançar Segunda Chance (1x, perde poderes). Pode ser usado como Espada Curta Formidável (+2). Pode ser transformado em 12 doses de 'Pó de Chifre de Unicórnio' (aumenta dados de cura de poções em +2 passos).",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Fragmento de Filactério",
            preco: "T$ 90.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Maior. Conta como uma Costela de Lich Poderosa (+20 PM após 1 dia de uso). Não pode ser fabricado.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Grilhão de Descrença",
            preco: "T$ 24.000",
            bonus_defesa: "+11",
            penalidade_armadura: "–4",
            espacos: "5",
            categoria: "Item Mágico",
            tipo: "Armadura Mágica",
            descricao: "Menor. Armadura completa (+1) reforçada (+1) e selada (+1). Amaldiçoada: não pode ser retirada. Se morrer usando-a, não pode ser ressuscitado e se torna um guerreiro perpétuo. Se a maldição for removida, ganha um encanto aleatório.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Pilão Conspurcado",
            preco: "T$ 21.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: " Conta como uma Costela de Lich (magias causam +1d6 dano de trevas). Além disso, o custo de suas magias de Encantamento e Necromancia diminui em –1 PM e a CD para resistir a elas aumenta em +2.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Pistola Demoníaca",
            preco: "T$ 72.250",
            dano: "2d6",
            critico: "19/x3",
            alcance: "Curto",
            tipo_dano: "Perfuração",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma",
            descricao: "Média. Pistola formidável (+2) e profana (+1d6 trevas). Está sempre carregada e não precisa de munição. 1/dia (escolha do mestre), o portador deve tentar disparar em uma criatura inteligente aleatória (Vontade CD 25 evita).",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Uyzrrak Da'ukthra",
            preco: "T$ 78.050",
            dano: "1d12",
            critico: "x3",
            alcance: "—",
            tipo_dano: "Corte",
            espacos: "2",
            categoria: "Item Mágico",
            tipo: "Arma",
            descricao: "Média. Machado de guerra magnífico (+4), aumentado (dano +1 passo), atroz (+2 dano) de adamante (+1 passo). Se empunhado por um duyshidakk, causa +2d8 de dano contra não-duyshidakks e recebe um encanto adicional baseado no Akzath.",
            fonte: "Ameaças de Arton"
        },

        // (Item de Guerra Artoniana)
        {
            nome: "Manto do Viajante",
            preco: "T$ 25.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório médio",
            descricao: "Manto velho e surrado. Fornece +5 em Sobrevivência e +3m em deslocamento (apenas em ambientes ermos). Permite lançar a magia Primor Atlético (apenas em você mesmo).",
            fonte: "Guerra Artoniana"
        },

        // (Item de Duelo de Dragões)
        {
            nome: "Lança do Guerreiro Dragão",
            preco: "T$ 24.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica",
            descricao: "Arma específica (Lança). É formidável (+2). Se estiver empunhando esta lança quando lança uma magia, ela recebe +2 nas rolagens de dano e sua CD aumenta em +2.",
            fonte: "Duelo de Dragões"
        },
        // (Itens de Heróis de Arton - Implantes)
        {
            nome: "Asas (Implante)",
            preco: "T$ 20.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Implante. Asas monstruosas. Você pode voar com deslocamento igual ao seu deslocamento base mas, enquanto estiver voando dessa forma, fica vulnerável.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Braço de Ogro",
            preco: "T$ 36.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Implante (substitui um braço). Você recebe +2 em Força e, com este braço, seu alcance natural aumenta em +1,5m.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Cauda com Ferrão",
            preco: "T$ 27.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Implante (Cauda). Concede arma natural de ferrão (dano 1d6, crítico x2, perfuração). 1/rodada, pode gastar 1 PM para ataque extra com ferrão. Ao causar dano com ele, pode gastar 1 PM para inocular veneno (1d12 PV).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Escamas (+2 Defesa)",
            preco: "T$ 12.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Implante. Escamas de monstros formam uma armadura leve. Fornecem +2 na Defesa. Pode ser enxertado uma segunda vez.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Escamas (Melhoria +5 Defesa)",
            preco: "T$ 12.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Implante (Requer Escamas +2). O bônus na Defesa totaliza +5.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Garras (Implante)",
            preco: "T$ 27.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Implante (Mãos). Mãos se transformam em armas naturais de garra (dano 1d6 cada, crítico x2, corte). 1/rodada, pode gastar 1 PM para ataque extra com uma garra (se livre). Pode usá-las para Estilo de Duas Armas.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Olho Anulador",
            preco: "T$ 30.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Implante (Peito). Permite lançar Dissipar Magia (apenas em cone de 9m, usa Vontade no lugar de Misticismo).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Olho Desintegrador",
            preco: "T$ 50.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Implante (Costas). Permite lançar a magia Desintegrar (atributo-chave Constituição).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Olho Petrificante",
            preco: "T$ 18.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Implante (Olho). Concede a habilidade Olhar Atordoante (T20, p. 29). Se já a tiver, a CD aumenta em +2.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Patas de Aranha",
            preco: "T$ 12.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Implante (Tronco). Concede deslocamento de escalada igual ao seu deslocamento base. Se já tiver, aumenta em +6m.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Tentáculo com Garras",
            preco: "T$ 27.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Implante. Concede arma natural de tentáculo (dano 1d4, crítico x2, impacto) com alcance +1,5m. 1/rodada, pode gastar 1 PM para ataque extra com o tentáculo.",
            fonte: "Heróis de Arton"
        },
        // (Itens de Heróis de Arton - Armas Específicas)
        {
            nome: "Adaga da Bruma",
            preco: "T$ 27.000",
            dano: "1d4",
            critico: "19",
            alcance: "Curto",
            tipo_dano: "Perfuração",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Média",
            descricao: ". Adaga formidável (+2). Se acertar um ataque, pode gastar 2 PM para se tornar invisível por 1 rodada.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Arco das Sombras",
            preco: "T$ 27.000",
            dano: "1d6",
            critico: "x3",
            alcance: "Médio",
            tipo_dano: "Perfuração",
            espacos: "2",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Média",
            descricao: ". Arco curto sombrio (+2 Furtividade, lança Escuridão). Quando ataca, pode gastar 2 PM; se acertar, alvo fica cego por 1 rodada (Fort CD Des evita).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Arco do Crepúsculo",
            preco: "T$ 22.500",
            dano: "1d8",
            critico: "x3",
            alcance: "Médio",
            tipo_dano: "Perfuração",
            espacos: "2",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Média",
            descricao: ". Arco longo formidável (+2). Quando ataca, pode gastar 1 PM; se acertar, o alvo fica ofuscado por 1d4 rodadas.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Azagaia Fantasma",
            preco: "T$ 30.000",
            dano: "1d6",
            critico: "x2",
            alcance: "Médio",
            tipo_dano: "Perfuração",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            descricao: " Azagaia caçadora (+1d8 dano vs tipo). Ao arremessar, pode gastar 1 PM para ignorar a RD do alvo. Retorna no fim do turno.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Besta Estelar",
            preco: "T$ 30.000",
            dano: "1d8",
            critico: "19",
            alcance: "Médio",
            tipo_dano: "Perfuração",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            descricao: " Besta leve cravejada de gemas (+2 Enganação) e formidável (+2). Pode gastar 3 PM para disparar um projétil que deixa inimigos em 9m fascinados por 1d4 rodadas (Von CD Des evita).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Clava de Lava",
            preco: "T$ 45.000",
            dano: "1d6",
            critico: "x3",
            alcance: "—",
            tipo_dano: "Impacto",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            descricao: " Clava maciça (crit +1), flamejante (+1d6 fogo) e formidável (+2). Ao acertar, pode gastar 1 PM para aumentar o dano de fogo para +3d6.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Espada da Tempestade",
            preco: "T$ 45.000",
            dano: "1d8",
            critico: "18",
            alcance: "—",
            tipo_dano: "Corte",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            descricao: " Espada longa precisa (crit +1), formidável (+2) e trovejante (+1d8 sônico, surdo). Em acerto crítico, pode gastar 2 PM para atordoar (efeito do encanto) criaturas em alcance curto.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Espada do Guardião",
            preco: "T$ 54.000",
            dano: "1d8",
            critico: "19",
            alcance: "—",
            tipo_dano: "Corte",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            descricao: " Espada longa defensora (bônus de ataque vira Defesa) e formidável (+2). 1/rodada, pode gastar 3 PM para fornecer RD 10 a você e aliados em 6m por 1 rodada.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Espada Solar",
            preco: "T$ 45.000",
            dano: "1d10/1d12",
            critico: "19",
            alcance: "—",
            tipo_dano: "Corte",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            descricao: " Espada bastarda magnífica (+4). Pode gastar 3 PM para cegar todos os inimigos em alcance curto por 1 rodada (Ref CD For/Des evita).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Florete do Vendaval",
            preco: "T$ 27.000",
            dano: "1d6",
            critico: "18",
            alcance: "—",
            tipo_dano: "Perfuração",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Média",
            descricao: ". Florete formidável (+2) de mitral (ágil, -1 espaço). Pode gastar 3 PM para ganhar voo 12m por 2 rodadas. Durante o voo, recebe +5 na Defesa contra ataques à distância.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Lança da Fênix",
            preco: "T$ 100.000",
            dano: "1d6",
            critico: "x2",
            alcance: "Curto",
            tipo_dano: "Perfuração",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            descricao: " Lança flamejante (+1d6 fogo) e magnífica (+4). Sempre que reduz um inimigo a 0 PV, recupera 10 PV. 1/cena, se for reduzido a 0 PV, pode gastar 5 PM para 'renascer' com metade dos PV e causar 10d6 de dano de fogo em 9m.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Machado da Natureza",
            preco: "T$ 22.500",
            dano: "1d8",
            critico: "19",
            alcance: "—",
            tipo_dano: "Corte",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Média",
            descricao: ". Machado de batalha preciso (crit +1) e formidável (+2). Sempre que faz um acerto crítico com ele, recupera 1d12+1 PV.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Machado do Abismo",
            preco: "T$ 36.000",
            dano: "1d8",
            critico: "x3",
            alcance: "—",
            tipo_dano: "Corte",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            descricao: " Machado de batalha macabro (+2 Intimidação) e formidável (+2). Pode gastar (Ação Mov., 3 PM) para causar 4d8 dano de essência em 9m e deixar abalado (Von CD For/Des 1/2 dano e nega abalado).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Machado do Vulcão",
            preco: "T$ 54.000",
            dano: "1d12",
            critico: "x4",
            alcance: "—",
            tipo_dano: "Corte",
            espacos: "2",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            descricao: " Machado de guerra maciço (crit +1), flamejante (+1d6 fogo) e formidável (+2). Pode gastar (Ação Mov., 3 PM) para detonar 3m² (alcance médio). Criaturas sofrem 3d10 dano de fogo e ficam em chamas (Ref CD For/Des 1/2 dano e nega chamas).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Martelo da Terra",
            preco: "T$ 33.000",
            dano: "1d8",
            critico: "x3",
            alcance: "—",
            tipo_dano: "Impacto",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            descricao: " Martelo de guerra cravejado de gemas (+2 Enganação), formidável (+2) de adamante (dano +1 passo). Pode gastar (Ação Mov., 3 PM) para criar rachadura (linha 18m). Criaturas na linha caem na fenda (caído, vulnerável) (Ref CD For/Des evita).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Martelo do Titã",
            preco: "T$ 22.500",
            dano: "1d8",
            critico: "x3",
            alcance: "—",
            tipo_dano: "Impacto",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Média",
            descricao: "Martelo de guerra formidável (+2). Em acerto crítico, pode gastar 2 PM para empurrar o alvo 6m.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Punhal das Profundezas",
            preco: "T$ 36.000",
            dano: "1d4",
            critico: "19",
            alcance: "Curto",
            tipo_dano: "Perfuração",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            descricao: " Adaga formidável (+2). Quando ataca, pode gastar 1 PM para causar +3d6 de dano de ácido.",
            fonte: "Heróis de Arton"
        },
        // (Itens de Heróis de Arton - Armaduras e Escudos Específicos)
        {
            nome: "Armadura das Sombras Profundas",
            preco: "T$ 40.500",
            bonus_defesa: "+8",
            penalidade_armadura: "0",
            espacos: "5",
            categoria: "Item Mágico",
            tipo: "Armadura Mágica Maior",
            descricao: ". Cota de malha (+2) sob medida (penalidade -2) defensora (+2) e sombria (+2 Furtividade, lança Escuridão). Recebe RD luz 10 e pode lançar Invisibilidade (custo -1 PM se já a conhece).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Armadura do Dragão Ancião",
            preco: "T$ 100.000",
            bonus_defesa: "+14",
            penalidade_armadura: "–5",
            espacos: "5",
            categoria: "Item Mágico",
            tipo: "Armadura Mágica Maior",
            descricao: ". Armadura completa (+4) guardiã (+4) e invulnerável (RD 5). Recebe RD eletricidade, fogo e frio 10. Se estiver com menos da metade dos PV, pode usar efeito de item 'Assustador' (T20, p. 338).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Armadura do Inverno Perene",
            preco: "T$ 40.500",
            bonus_defesa: "+7",
            penalidade_armadura: "–4",
            espacos: "2",
            categoria: "Item Mágico",
            tipo: "Armadura Mágica Maior",
            descricao: ". Couraça (+2) defensora (+2), gélida (+1d6 frio) de gelo eterno (RD Fogo 5). Habilidade do encanto gélido cura 20 PV (em vez de 10). Pode lançar Área Escorregadia (CD Sab) como ação de movimento (custo -1 PM se já a conhece).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Cota da Serpente Marinha",
            preco: "T$ 27.000",
            bonus_defesa: "+10",
            penalidade_armadura: "0",
            espacos: "5",
            categoria: "Item Mágico",
            tipo: "Armadura Mágica Média",
            descricao: ". Cota de malha (+4) ajustada (penalidade -1) e guardiã (+4). Recebe deslocamento de natação 12m. Pode lançar Sopro das Uivantes (CD Sab) (custo -1 PM se já a conhece).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Couraça do Guardião Celeste",
            preco: "T$ 54.000",
            bonus_defesa: "+7",
            penalidade_armadura: "–4",
            espacos: "2",
            categoria: "Item Mágico",
            tipo: "Armadura Mágica Maior",
            descricao: ". Couraça (+2) banhada a ouro (+2 Diplomacia), defensora (+2) e protetora (+2 TR). Concede +1 em Carisma (após 1 dia). Efeitos de cura de luz curam +1 PV por dado.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Escudo da Luz Estelar",
            preco: "T$ 27.000",
            bonus_defesa: "+3",
            penalidade_armadura: "–1",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Armadura Mágica Média",
            descricao: ". Escudo leve (+1) defensor (+2). Recebe +5 em Percepção. Pode lançar Luz (CD Int) (custo -1 PM se já a conhece).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Escudo da Ira Vulcânica",
            preco: "T$ 54.000",
            bonus_defesa: "+6",
            penalidade_armadura: "–2",
            espacos: "2",
            categoria: "Item Mágico",
            tipo: "Armadura Mágica Maior",
            descricao: ". Escudo pesado (+2) guardião (+4). Fornece RD fogo 10. Permite lançar Explosão de Chamas (Ref CD Car) como ação de movimento (área dobrada se já a conhece).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Escudo da Natureza Viva",
            preco: "T$ 27.000",
            bonus_defesa: "+3",
            penalidade_armadura: "–1",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Armadura Mágica Média",
            descricao: ". Escudo leve (+1) defensor (+2) de madeira Tollon (resist. magia +2). Recebe +2 em Fortitude. Pode lançar Curar Ferimentos (CD Sab) (custo -1 PM se já a conhece).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Escudo do Grifo",
            preco: "T$ 27.000",
            bonus_defesa: "+4",
            penalidade_armadura: "–2",
            espacos: "2",
            categoria: "Item Mágico",
            tipo: "Armadura Mágica Média",
            descricao: ". Escudo pesado (+2) defensor (+2). Recebe RD 10 contra ataques à distância. Pode lançar Sopro das Uivantes (CD Sab) (custo -1 PM se já a conhece).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Escudo do Trovão",
            preco: "T$ 54.000",
            bonus_defesa: "+6",
            penalidade_armadura: "0",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Armadura Mágica Maior",
            descricao: ". Escudo pesado (+2) guardião (+4) de mitral (penalidade -2, -1 espaço). Ao sofrer dano corpo a corpo, pode gastar 2 PM para empurrar inimigos adjacentes 3m (Fort CD Car evita).",
            fonte: "Heróis de Arton"
        },
        // (Itens de Heróis de Arton - Esotéricos Específicos)
        {
            nome: "Cajado das Marés",
            preco: "T$ 27.000",
            espacos: "2",
            categoria: "Item Mágico",
            tipo: "Esotérico Mágico Médio",
            descricao: "Cajado arcano (+1 CD) glacial (+1d6 frio, vulnerável). Recebe deslocamento de natação 9m (+3m se já possuir). Pode gastar (Ação Mov., 2 PM) para empurrar inimigos adjacentes 4,5m (Ref CD Int evita).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Cálice Sagrado",
            preco: "T$ 150.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Esotérico Mágico Maior",
            descricao: " O custo de suas magias divinas diminui em –2 PM e todos os efeitos variáveis delas aumentam em +1 por dado.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Relógio do Arcanista",
            preco: "T$ 60.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Esotérico Mágico Maior",
            descricao: " Relógio de bolso. Ao lançar magia arcana (execução mov, padrão ou completa), pode gastar +4 PM para lançá-la como ação livre. Se possuir Magia Acelerada, o custo diminui em –2 PM.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Varinha Milenar",
            preco: "T$ 200.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Esotérico Mágico Maior",
            descricao: " Varinha arcana (+1 CD). Aumenta a CD para resistir a suas magias arcanas em +4 (total +5) e aumenta todos os dados de dano de suas magias arcanas em um passo. Se um inimigo passar no TR contra uma magia sua, você perde 1 PV por PM gasto na magia.",
            fonte: "Heróis de Arton"
        },
        // (Itens de Heróis de Arton - Acessórios Específicos)
        {
            nome: "Algibeira Mordedora",
            preco: "T$ 1.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Menor. Bolsa. Quando uma criatura faz punga contra você, sofre 6d6 dano de corte e fica agarrada (Acrobacia CD 20 para soltar).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Algibeira Provedora",
            preco: "T$ 6.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Menor. Bolsa. Pode gastar ação completa para procurar item mundano (até 1 espaço). Role 1d20: 6+ encontra; 5- falha (perde poderes por 1 dia); 1 natural morde (4d6 dano) e desaparece.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Ampulheta da Harmonia Temporal",
            preco: "T$ 10.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. 1/dia, pode realizar uma tarefa (de 1 min a 1 hora) como uma ação completa.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Amuleto da Visão Etérea",
            preco: "T$ 3.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Menor. Concede resistência a ilusões +5. Pode lançar Visão Mística (como ação livre se já a conhece).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Amuleto do Amparo",
            preco: "T$ 10.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Medalhão. Quando você faz um teste para ajudar, o bônus que fornece aumenta em +2.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Anel da Beleza Ilusória",
            preco: "T$ 21.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Concede +5 em perícias baseadas em Carisma (exceto Intimidação). Pode lançar Enfeitiçar (custo -1 PM se já a conhece).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Anel da Chama Dançante",
            preco: "T$ 30.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Maior. Chama mágica age como um parceiro vigilante veterano. Permite lançar Controlar Fogo (custo -1 PM se já a conhece).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Anel da Proteção Mental",
            preco: "T$ 9.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Menor. Concede resistência a efeitos mentais +5.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Anel do Pacto Oneroso",
            preco: "T$ 15.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Permite lançar uma magia divina (até 4º círculo) sem custo em PM. Exige realizar uma penitência (definida pelo mestre) antes de usar de novo.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Bastão da Grande Harmonia",
            preco: "T$ 25.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Bastão. Pode gastar (Ação Padrão, 3 PM) para forçar criaturas em 9m a largar armas e ficarem pasmas (Vontade CD Sab anula). 1/cena. Pode lançar Guardião Divino (custo -1 PM se já a conhece).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Bastão do Sonhador",
            preco: "T$ 21.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Bastão. Permite lançar Sonho. 1/mês, se já conhece a magia, pode entregar ou roubar um item da pessoa (teste de Vontade oposto para roubar).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Berço das Fadas",
            preco: "T$ 9.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Menor. Saco de dormir. Oferece descanso confortável (mesmo ao relento). Concede efeito da magia Suporte Ambiental enquanto dorme.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Botas do Andarilho das Sombras",
            preco: "T$ 15.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Botas. Concede +5 em Furtividade (em ambientes urbanos ou escuros). 1/dia, pode lançar Salto Dimensional (apenas para uma sombra em alcance).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Braçadeiras da Força do Colosso",
            preco: "T$ 120.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Maior. Braçadeiras. Concede +4 em Força (após 1 dia). 1/cena, pode gastar 5 PM para aumentar o bônus para +8 por 1 rodada.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Bracelete do Coração Vivaz",
            preco: "T$ 27.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Bracelete. Fornece +10 PV (após 1 dia). Quando reduzido a 0 PV ou menos, pode gastar 2 PM para curar 2d8+2 PV (luz).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Braceletes da Amizade Intensa",
            preco: "T$ 36.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Maior. Par de braceletes. Usuários (em alcance médio) podem se comunicar por telepatia e sentir direção/distância um do outro. Cura mágica ou efeito benéfico em um afeta o outro (em alcance curto).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Caixa dos Ecos Perdidos",
            preco: "T$ 10.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Caixa de madeira. Pode gastar 3 PM para receber +10 em um teste de perícia baseada em Inteligência (relacionada a um evento passado).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Cálice das Marés",
            preco: "T$ 15.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Cálice de prata. Permite lançar Controlar Água (custo -1 PM se já a conhece).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Capa Nebulosa",
            preco: "T$ 16.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Capa de névoa. Sempre que estiver sob camuflagem leve (escuridão ou neblina), ela se torna camuflagem total.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Chapéu dos Truques Infinitos",
            preco: "T$ 9.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Menor. Cartola. Pode lançar livremente qualquer versão 'truque' de magias de 1º círculo, mesmo que não as conheça.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Chapéu Pensador",
            preco: "T$ 30.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Maior. Chapéu. Recebe a habilidade Engenhosidade. Se já a possui, o bônus aumenta em +2.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Chave dos Planos",
            preco: "T$ 60.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Maior. Chave. Permite lançar Teletransporte ou Viagem Planar (sem componente material) através de uma porta (requer uma porta no destino).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Cinto da Desmaterialização",
            preco: "T$ 60.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Maior. Cinto. Permite lançar Forma Etérea (apenas em você).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Cinto da Flecha Veloz",
            preco: "T$ 30.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Maior. Cinto. Recebe a habilidade Ataque Extra (apenas com armas de disparo). Se já a possui, o custo para usá-la com armas de disparo diminui em –1 PM.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Cinto da Leveza Graciosa",
            preco: "T$ 9.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Menor. Cinto. Recebe +5 em Acrobacia e está sempre sob efeito básico de Queda Suave.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Cinto dos Caminhos Cruzados",
            preco: "T$ 15.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Cinto. 1/cena, pode gastar (Ação Mov., 3 PM) para trocar de lugar com um aliado em alcance curto.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Cinturão do Trobo",
            preco: "T$ 3.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Menor. Cinto. Recebe +5 em testes de Atletismo para erguer peso e sua capacidade de carga aumenta em 5 espaços.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Colar da Fúria Monstruosa",
            preco: "T$ 21.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Colar. Adquire a habilidade Fúria (de Bárbaro). Se já a possui, os bônus em ataque e dano aumentam em +1.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Colar da Perseverança",
            preco: "T$ 10.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Colar. Recebe +5 em Vontade e +2 em todos os testes estendidos.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Colar do Tirano",
            preco: "T$ 10.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Colar. Conectado a 1d8 coleiras. 1/rodada, pode causar 2d8+2 dano de eletricidade a um escravo. Dano ou efeito nocivo ao usuário também afeta os escravos.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Colar das Bolas de Fogo",
            preco: "T$ 12.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Colar com 1d4+1 rubis. Recebe RD fogo 10. Pode lançar Bola de Fogo (CD Int/Car; +2 PM em aprimoramentos se já a conhece). Pode gastar (Ação Mov.) e 1 rubi para aumentar a CD em +2 e o dano em +1 passo.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Coração do Inverno",
            preco: "T$ 45.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Maior. Cristal. Permite lançar Raio Polar (CD Int/Car; +1 passo de dado se já a conhece).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Corda da Resignação",
            preco: "T$ 7.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Menor. Corda. Quando usada para amarrar, a CD para escapar (Acrobacia) aumenta em +20. A vítima fica alquebrada e esmorecida.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Coroa da Floresta Sussurrante",
            preco: "T$ 21.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Tiara. Está sempre sob efeito de Voz Divina. Pode lançar Acalmar Animal e Controlar Plantas (CD Sab; como ação de movimento se já as conhece).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Coroa da Majestade Distorcida",
            preco: "T$ 25.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Coroa. Recebe +1 Carisma (após 1 dia). Pode lançar Comando (CD Car, +2 CD) como ação de movimento. (Criaturas que passam no TR ficam imunes).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Cristal da Voz Silenciosa",
            preco: "T$ 9.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Menor. Pingente. Permite falar com voz mágica (audível apenas por quem selecionar em alcance curto). Permite lançar magias sem componente verbal.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Cristal do Tempo Célere",
            preco: "T$ 9.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Menor. Cristal (consumível). Quebrar o cristal permite realizar um intervalo entre aventuras no tempo de 1 dia.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Elixir da Eternidade",
            preco: "T$ 3.000",
            espacos: "0,5",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Menor. Elixir (Poção). Evita que o usuário envelheça (até o fim da aventura). Recebe resistência a trevas +5 e imunidade a envelhecimento mágico.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Elixir da Mente Dividida",
            preco: "T$ 1.500",
            espacos: "0,5",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Menor. Elixir (Poção). Beber (ação padrão) concede +1 ação de movimento e +1 ação padrão por rodada (não cumulativo) por 1 cena. Causa –5 em testes de perícia (exceto reações) e condição ruim para lançar magias. Causa fadiga por 1 dia após o fim.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Espelho da Verdade",
            preco: "T$ 21.000",
            espacos: "2",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Espelho grande. Revela a forma verdadeira de criaturas/objetos (como Visão da Verdade). Pode ser usado para lançar Vidência (CD +5, alvo também afetado por Visão da Verdade).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Espelho do Outro Lado",
            preco: "T$ 18.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Espelho pequeno. 1/aventura, pode conversar com sua contraparte espiritual. Role 1d10–3. Se positivo, recebe esse valor em d6 de auxílio (para testes de perícia). Se negativo, o mestre recebe esse valor em d6 de penalidade (para seus testes de perícia).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Frigideira do Chef Anão",
            preco: "T$ 24.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Instrumento de Ofício (cozinheiro) aprimorado (+5). Pode ser usada como Maça maciça (+1 crit) formidável (+2) de adamante (+1 passo). Pode ser usada como Escudo Pesado defensor (+2) de adamante (RD 2), mas exige duas mãos.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Gaiola dos Arcanos",
            preco: "T$ 6.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Menor. Gaiola de prata. Quando uma criatura usa habilidade mágica em 9m, o cristal suga 1 PM (por círculo de magia) ou 2 PM (outras hab.) da criatura.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Gema da Profanação",
            preco: "T$ 30.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Maior. Gema. O custo de suas habilidades mágicas que causam dano de trevas diminui em –2 PM.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Gema da Purificação",
            preco: "T$ 18.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Gema. Pode lançar a magia Purificação. Custo -1 PM se for devoto de deus de energia positiva e/ou já conhecer a magia (cumulativo).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Gema da Santificação",
            preco: "T$ 24.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Gema. Área em alcance curto da gema é considerada sob efeito de Consagrar. Se for devoto, pode pagar PM para ativar aprimoramentos (duração 1 cena).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Instrumentos da Celeridade",
            preco: "T$ 22.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Ferramentas de Ofício aprimoradas (+1). Permite fabricar um item adicional (mesma categoria e tempo) ao mesmo tempo (pague o custo e faça o teste para cada).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Lâmpada da Ilusão Impecável",
            preco: "T$ 6.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Menor. Lâmpada de cristal. Pode lançar Criar Ilusão (apenas visual, CD Int; +2 PM em aprimoramentos se já a conhece). A CD para resistir à magia aumenta em +5.",
            fonte: "Heróis de Arton"
        },
        // (Itens de Heróis de Arton - Acessórios Específicos Finais)
        {
            nome: "Máscara da Raposa",
            preco: "T$ 18.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Máscara. Permite lançar Imagem Espelhada (como ação de movimento e custo -1 PM se já a conhece).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Máscara do Predador",
            preco: "T$ 22.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Máscara. Recebe +5 em Investigação (procurar) e Sobrevivência (rastrear). Recebe a habilidade Marca da Presa (custo -1 PM se já a possui).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Monóculo da Franqueza",
            preco: "T$ 4.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Menor. Monóculo. Concede +10 em testes de Intuição para perceber mentiras.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Ocarina da Melodia Distante",
            preco: "T$ 9.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Menor. Instrumento musical. Fornece +2 em Atuação (+5 para bardos). O alcance das Músicas de bardo aumenta em um passo (curto->médio, médio->longo).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Óculos da Revelação",
            preco: "T$ 10.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Óculos. Permite lançar a magia Lendas e Histórias.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Olhos do Corvo",
            preco: "T$ 9.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Menor. Venda. Fica cego em ambientes iluminados. Em ambientes escuros (mundanos ou mágicos), enxerga normalmente e fica imune a cego e ofuscado.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Papiro das Estrelas",
            preco: "T$ 1.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Menor. Pergaminho. Fornece +5 em Sobrevivência (orientar-se, rastrear) e Percepção (evitar surpresa nos ermos).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Pedra da Passagem",
            preco: "T$ 15.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Pedra. Pode gastar (Ação Padrão, 3 PM) para criar uma abertura Média em superfície sólida não mágica (RD 8 ou menos). Apenas portas e paredes.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Pena da Criação",
            preco: "T$ 6.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Menor. Ferramenta (Ofício: escriba) aprimorada. 1/cena (Ação Completa), faça um teste de Ofício (escriba) (CD 10) para lançar Conjurar Monstro (básico). A cada 5 pontos acima da CD, recebe +1 PM para aprimoramentos.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Pergaminho da Verdade Cósmica",
            preco: "T$ 9.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Menor. Pergaminho (consumível). Abrir exige Vontade (CD 40). Falha: debilidade (permanente). Sucesso: lança Intervenção Divina (sem custo de PM). Pergaminho se desfaz.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Pérola da Nulificação Mágica",
            preco: "T$ 3.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Menor. Pérola (consumível). Ativar (Ação Mov.) produz efeito básico de Campo Antimagia por 1 cena. Uso único.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Pingente da Dor Partilhada",
            preco: "T$ 15.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Pingente. Quando um aliado em alcance curto se fere, pode gastar 2 PM; o aliado não sofre o dano, mas você perde PV em quantidade igual ao dano (após RD/etc. do aliado).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Saco dos Ventos Silenciosos",
            preco: "T$ 3.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Menor. Saco. Permite lançar Criar Elementos (apenas ar), Queda Suave e Suporte Ambiental (apenas contra calor). Se já conhece as magias, custo -1 PM.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Sandálias de Valkaria",
            preco: "T$ 12.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Média. Sandálias. Permite andar sobre qualquer superfície (ignora terreno difícil, anda sobre líquidos). Recebe +5 em Acrobacia (terreno escorregadio) e Atletismo (escalar).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Tomo da Técnica Definitiva",
            preco: "T$ 30.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Maior. Tomo. Estudar (ação entre aventuras). Seu Golpe Pessoal recebe +2 PM em efeitos (não contam no limite e não aumentam o custo). Aplica-se a apenas um Golpe Pessoal.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Tomo dos Companheiros",
            preco: "T$ 45.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório",
            descricao: "Maior. Tomo. Pode gastar (Ação Completa, 3 PM) para convocar um parceiro veterano (à escolha), que surge adjacente. Dura até o fim do dia ou até conjurar outro.",
            fonte: "Heróis de Arton"
        }



    ]


};

window.itensMagicosData = itensMagicosData;



// itensmagicos.js
// Baseado na Tabela 8-14: Acessórios Médios (p. 342–343, Livro Básico Tormenta 20)

