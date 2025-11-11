// itensmagicos.js
// Baseado na Tabela 8-12: Poções (p. 341, Livro Básico Tormenta 20)

const itensMagicosData = {
    "item": [
        // Poções
        { nome: "Poção: Abençoar Alimentos (óleo)", preco: "T$ 30", tipo: "Poção", espacos: "0,5",  categoria: "Item Mágico", descricao: "Purifica e abençoa alimentos e bebidas." },
        { nome: "Poção: Área Escorregadia (granada)", preco: "T$ 30",  tipo: "Granada", espacos: "0,5", categoria: "Item Mágico", descricao: "Cria uma área escorregadia no local de impacto." },
        { nome: "Poção: Arma Mágica (óleo)", preco: "T$ 30",  tipo: "Óleo", espacos: "0,5", categoria: "Item Mágico", descricao: "Concede +1 em ataques e dano com a arma ungida." },
        { nome: "Poção: Compreensão", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Concede compreensão mágica e linguística temporária." },
        { nome: "Poção: Curar Ferimentos (2d8+2 PV)", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Restaura 2d8+2 pontos de vida ao beber." },
        { nome: "Poção: Disfarce Ilusório", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Cria uma ilusão que altera a aparência do usuário." },
        { nome: "Poção: Escuridão (óleo)", preco: "T$ 30",  tipo: "Óleo", espacos: "0,5", categoria: "Item Mágico", descricao: "Gera uma área de escuridão mágica ao ser aplicada." },
        { nome: "Poção: Luz (óleo)", preco: "T$ 30",  tipo: "Óleo", espacos: "0,5", categoria: "Item Mágico", descricao: "Emite luz intensa ao ser aplicada." },
        { nome: "Poção: Névoa (granada)", preco: "T$ 30",  tipo: "Granada", espacos: "0,5", categoria: "Item Mágico", descricao: "Cria uma nuvem de névoa na área de impacto." },
        { nome: "Poção: Primor Atlético", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Concede bônus em testes de Atletismo e Acrobacia." },
        { nome: "Poção: Proteção Divina", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Concede +1 na Defesa e nos testes de resistência." },
        { nome: "Poção: Resistência a Energia", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Concede resistência a um tipo de energia." },
        { nome: "Poção: Sono", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Adormece criaturas em uma pequena área." },
        { nome: "Poção: Suporte Ambiental", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Protege contra calor, frio ou falta de ar." },
        { nome: "Poção: Tranca Arcana (óleo)", preco: "T$ 30",  tipo: "Óleo", espacos: "0,5", categoria: "Item Mágico", descricao: "Fecha e sela portas ou objetos." },
        { nome: "Poção: Visão Mística", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Permite ver magias e auras mágicas." },
        { nome: "Poção: Vitalidade Fantasma", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Concede pontos de vida temporários." },
        { nome: "Poção: Escudo da Fé (duração cena)", preco: "T$ 120", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Cria um campo de proteção divina por uma cena." },
        { nome: "Poção: Alterar Tamanho", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Permite crescer ou encolher temporariamente." },
        { nome: "Poção: Aparência Perfeita", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Concede aparência perfeita e carismática." },
        { nome: "Poção: Armamento da Natureza (óleo)", preco: "T$ 270",  tipo: "Óleo", espacos: "0,5", categoria: "Item Mágico", descricao: "Imbuí uma arma com poder natural." },
        { nome: "Poção: Bola de Fogo (granada)", preco: "T$ 270",  tipo: "Granada", espacos: "0,5", categoria: "Item Mágico", descricao: "Explode causando 5d6 de dano de fogo em área." },
        { nome: "Poção: Camuflagem Ilusória", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Cria uma ilusão que oculta o usuário." },
        { nome: "Poção: Concentração de Combate (duração cena)", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Melhora foco e resistência em combate." },
        { nome: "Poção: Curar Ferimentos (4d8+4 PV)", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Restaura 4d8+4 pontos de vida." },
        { nome: "Poção: Físico Divino", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Concede +2 em For, Des ou Con por uma cena." },
        { nome: "Poção: Mente Divina", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Concede +2 em Int, Sab ou Car por uma cena." },
        { nome: "Poção: Metamorfose", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Permite assumir a forma de outra criatura." },
        { nome: "Poção: Purificação", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Remove venenos, doenças e condições negativas." },
        { nome: "Poção: Velocidade", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Concede uma ação de movimento extra por turno." },
        { nome: "Poção: Vestimenta da Fé (óleo)", preco: "T$ 270",  tipo: "Óleo", espacos: "0,5", categoria: "Item Mágico", descricao: "Abençoa armaduras com energia divina." },
        { nome: "Poção: Voz Divina", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Amplifica e inspira por meio da voz." },
        { nome: "Poção: Arma Mágica +3 (óleo)", preco: "T$ 750",  tipo: "Óleo", espacos: "0,5", categoria: "Item Mágico", descricao: "Concede +3 em ataques e dano com a arma ungida." },
        { nome: "Poção: Curar Ferimentos (7d8+7 PV)", preco: "T$ 1.080", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Restaura 7d8+7 pontos de vida." },
        { nome: "Poção: Físico Divino (três atributos)", preco: "T$ 1.080", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Concede +2 em For, Des e Con por uma cena." },
        { nome: "Poção: Invisibilidade (duração cena)", preco: "T$ 1.080", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Torna o usuário invisível por uma cena." },
        { nome: "Poção: Bola de Fogo Aprimorada (granada)", preco: "T$ 1.470",  tipo: "Granada", espacos: "0,5", categoria: "Item Mágico", descricao: "Explode causando 10d6 de dano de fogo em área." },
        { nome: "Poção: Curar Ferimentos (11d8+11 PV)", preco: "T$ 3.000", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Restaura 11d8+11 pontos de vida." },

        // Armas Especificas
        {
            nome: "Azagaia dos Relâmpagos",
            preco: "T$ 30.000",
            categoria: "Item Mágico",
            tipo: "Arma",
            espacos: "1",
            descricao: "Ao ser arremessada, transforma-se em um raio, causando 5d6 de dano elétrico (Reflexos CD 15 reduz à metade)."
        },
        {
            nome: "Espada Baronial",
            preco: "T$ 30.000",
            categoria: "Item Mágico",
            tipo: "Arma",
            espacos: "1",
            descricao: "Espada longa +2 que concede +2 em testes de Diplomacia e Intimidação quando empunhada por nobres."
        },
        {
            nome: "Lâmina da Luz",
            preco: "T$ 45.000",
            categoria: "Item Mágico",
            tipo: "Arma",
            espacos: "1",
            descricao: "Espada +3 sagrada que causa +2d6 de dano de luz contra mortos-vivos e demônios."
        },
        {
            nome: "Lança Animalesca",
            preco: "T$ 45.000",
            categoria: "Item Mágico",
            tipo: "Arma",
            espacos: "1",
            descricao: "Permite invocar um aliado animal ou assumir forma bestial por uma cena (como Metamorfose)."
        },
        {
            nome: "Maça do Terror",
            preco: "T$ 45.000",
            categoria: "Item Mágico",
            tipo: "Arma",
            espacos: "1",
            descricao: "Maça +3 que pode amedrontar inimigos em um raio de 9 m (Vontade CD 17)."
        },
        {
            nome: "Florete Fugaz",
            preco: "T$ 50.000",
            categoria: "Item Mágico",
            tipo: "Arma",
            espacos: "1",
            descricao: "Florete +3 que permite se mover 3 m como reação após um acerto em combate corpo a corpo."
        },
        {
            nome: "Cajado da Destruição",
            preco: "T$ 60.000",
            categoria: "Item Mágico",
            tipo: "Arma",
            espacos: "2",
            descricao: "Cajado +3 que permite conjurar Desintegrar uma vez por dia."
        },
        {
            nome: "Cajado da Vida",
            preco: "T$ 60.000",
            categoria: "Item Mágico",
            tipo: "Arma",
            espacos: "2",
            descricao: "Cajado +3 que concede +2 em testes de Cura e permite conjurar Curar Ferimentos Críticos uma vez por dia."
        },
        {
            nome: "Machado Silvestre",
            preco: "T$ 70.000",
            categoria: "Item Mágico",
            tipo: "Arma",
            espacos: "2",
            descricao: "Machado de batalha +3 que causa +2d6 de dano adicional contra aberrações e mortos-vivos."
        },
        {
            nome: "Martelo de Doherimm",
            preco: "T$ 70.000",
            categoria: "Item Mágico",
            tipo: "Arma",
            espacos: "2",
            descricao: "Martelo de guerra +3 forjado por anões; causa +2d6 de dano contra orcs e goblinoides e retorna ao portador ao ser lançado."
        },
        {
            nome: "Arco do Poder",
            preco: "T$ 90.000",
            categoria: "Item Mágico",
            tipo: "Arma",
            espacos: "2",
            descricao: "Arco longo +4 que dobra o alcance e ignora cobertura parcial e total."
        },
        {
            nome: "Língua do Deserto",
            preco: "T$ 90.000",
            categoria: "Item Mágico",
            tipo: "Arma",
            espacos: "1",
            descricao: "Espada curva +4 flamejante; causa +2d6 de dano de fogo e concede resistência 10 a fogo ao portador."
        },
        {
            nome: "Besta Explosiva",
            preco: "T$ 100.000",
            categoria: "Item Mágico",
            tipo: "Arma",
            espacos: "2",
            descricao: "Dispara projéteis que explodem em área (3 m, 6d6 de dano de fogo)."
        },
        {
            nome: "Punhal Sszzaazita",
            preco: "T$ 100.000",
            categoria: "Item Mágico",
            tipo: "Arma",
            espacos: "1",
            descricao: "Adaga +4 envenenada; ao atingir, o alvo sofre 1d6 de dano por veneno por rodada (Fortitude CD 18 anula)."
        },
        {
            nome: "Espada Sortuda",
            preco: "T$ 110.000",
            categoria: "Item Mágico",
            tipo: "Arma",
            espacos: "1",
            descricao: "Espada longa +4 que concede vantagem em um teste de ataque, perícia ou resistência uma vez por dia."
        },
        {
            nome: "Avalanche",
            preco: "T$ 140.000",
            categoria: "Item Mágico",
            tipo: "Arma",
            espacos: "2",
            descricao: "Martelo gigante +5 que pode liberar uma onda sísmica (como a magia Terremoto) uma vez por semana."
        },
        {
            nome: "Cajado do Poder",
            preco: "T$ 180.000",
            categoria: "Item Mágico",
            tipo: "Arma",
            espacos: "2",
            descricao: "Cajado +5 que concede +2 em testes de ataque mágicos e permite conjurar diversas magias poderosas (Fogo, Relâmpago, Barreira etc.)."
        },
        {
            nome: "Vingadora Sagrada",
            preco: "T$ 200.000",
            categoria: "Item Mágico",
            tipo: "Arma",
            espacos: "2",
            descricao: "Espada longa +5 sagrada; causa +2d6 de dano adicional contra criaturas malignas e concede resistência 10 a trevas ao portador."
        },

        // Armaduras Específicas
        {
            nome: "Cota Élfica",
            preco: "T$ 30.000",
            categoria: "Item Mágico",
            tipo: "Armadura",
            espacos: "2",
            descricao: "Cota de malha leve e silenciosa feita por elfos; concede +8 na Defesa e +5 em Furtividade."
        },
        {
            nome: "Couro de Monstro",
            preco: "T$ 36.000",
            categoria: "Item Mágico",
            tipo: "Armadura",
            espacos: "2",
            descricao: "Feita de peles e escamas de bestas mágicas; concede resistência 10 a um tipo de energia."
        },
        {
            nome: "Escudo do Conjurador",
            preco: "T$ 45.000",
            categoria: "Item Mágico",
            tipo: "Escudo",
            espacos: "1",
            descricao: "Concede +2 na Defesa e permite ignorar a chance de falha arcana ao conjurar magias com escudo."
        },
        {
            nome: "Loriga do Centurião",
            preco: "T$ 45.000",
            categoria: "Item Mágico",
            tipo: "Armadura",
            espacos: "5",
            descricao: "Armadura de escamas +3 que concede +2 em testes de Guerra e Intimidação."
        },
        {
            nome: "Manto da Noite",
            preco: "T$ 45.000",
            categoria: "Item Mágico",
            tipo: "Armadura",
            espacos: "2",
            descricao: "Manto encantado que funciona como armadura leve +3 e concede invisibilidade em áreas de escuridão."
        },
        {
            nome: "Couraça do Comando",
            preco: "T$ 45.000",
            categoria: "Item Mágico",
            tipo: "Armadura",
            espacos: "5",
            descricao: "Couraça +3 que concede +2 em testes de Carisma e permite inspirar aliados como uma ação de movimento."
        },
        {
            nome: "Baluarte Anão",
            preco: "T$ 50.000",
            categoria: "Item Mágico",
            tipo: "Escudo",
            espacos: "5",
            descricao: "Escudo pesado +3 feito de aço anão; concede RD 5 e vantagem em testes de resistência contra efeitos de empurrão."
        },
        {
            nome: "Escudo Espinhoso",
            preco: "T$ 50.000",
            categoria: "Item Mágico",
            tipo: "Escudo",
            espacos: "2",
            descricao: "Escudo +3 coberto de espinhos; causa 1d6 de dano de perfuração em quem ataca corpo a corpo."
        },
        {
            nome: "Escudo do Leão",
            preco: "T$ 50.000",
            categoria: "Item Mágico",
            tipo: "Escudo",
            espacos: "2",
            descricao: "Escudo +3 com símbolo de leão; pode rugir uma vez por dia, apavorando inimigos próximos (Vontade CD 20)."
        },
        {
            nome: "Carapaça Demoníaca",
            preco: "T$ 63.000",
            categoria: "Item Mágico",
            tipo: "Armadura",
            espacos: "5",
            descricao: "Armadura de placas +4 feita de ossos infernais; concede resistência 10 a fogo e +2 em testes de Intimidação."
        },
        {
            nome: "Escudo do Eclipse",
            preco: "T$ 70.000",
            categoria: "Item Mágico",
            tipo: "Escudo",
            espacos: "2",
            descricao: "Escudo +4 que pode gerar uma área de escuridão mágica uma vez por dia."
        },
        {
            nome: "Escudo de Azgher",
            preco: "T$ 140.000",
            categoria: "Item Mágico",
            tipo: "Escudo",
            espacos: "2",
            descricao: "Escudo +5 banhado em luz solar; reflete magias de trevas e causa 3d6 de dano de luz em mortos-vivos adjacentes."
        },
        {
            nome: "Armadura da Luz",
            preco: "T$ 150.000",
            categoria: "Item Mágico",
            tipo: "Armadura",
            espacos: "5",
            descricao: "Armadura completa +5 que emite luz intensa e concede imunidade a dano de trevas e a cegueira."
        },

        // acessórios Menores

        { nome: "Anel do Sustento", preco: "T$ 3.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Usuário não precisa comer, beber e dorme apenas 2h por dia." },
        { nome: "Bainha Mágica", preco: "T$ 3.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Limpa, repara e protege a arma guardada nela; saca a arma como ação livre." },
        { nome: "Corda da Escalada", preco: "T$ 3.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Sobe e se amarra sozinha; suporta até 300 kg." },
        { nome: "Ferraduras da Velocidade", preco: "T$ 3.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "—", descricao: "Concede +6 m de deslocamento ao animal equipado." },
        { nome: "Garrafa da Fumaça Eterna", preco: "T$ 3.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "—", descricao: "Emite fumaça densa continuamente; pode ser tampada para interromper." },
        { nome: "Gema da Luminosidade", preco: "T$ 3.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "—", descricao: "Emite luz como uma tocha; pode ser acesa ou apagada com comando." },
        { nome: "Manto Élfico", preco: "T$ 3.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +5 em Furtividade." },
        { nome: "Mochila de Carga", preco: "T$ 3.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "0", descricao: "Reduz o peso carregado pela metade para efeitos de carga." },
        { nome: "Brincos da Sagacidade", preco: "T$ 4.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +1 em Inteligência (após 1 dia de uso)." },
        { nome: "Luvas da Delicadeza", preco: "T$ 4.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +1 em Destreza (após 1 dia de uso)." },
        { nome: "Manoplas da Força do Ogro", preco: "T$ 4.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +1 em Força (após 1 dia de uso)." },
        { nome: "Manto da Resistência", preco: "T$ 4.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +1 em todos os testes de resistência (Fortitude, Reflexos e Vontade)." },
        { nome: "Manto do Fascínio", preco: "T$ 4.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +1 em Carisma (após 1 dia de uso)." },
        { nome: "Torque do Vigor", preco: "T$ 4.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +1 em Constituição (após 1 dia de uso)." },
        { nome: "Flauta Fantasma", preco: "T$ 6.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "—", descricao: "Ao ser tocada, cria sons assombrados que podem causar medo (Vontade CD 15)." },
        { nome: "Lâmpada da Revelação", preco: "T$ 9.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "—", descricao: "Revela criaturas invisíveis em seu raio de luz." },
        { nome: "Anel do Escudo Mental", preco: "T$ 9.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede imunidade a efeitos de adivinhação e leitura mental." },
        { nome: "Pingente da Saúde", preco: "T$ 9.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede imunidade a doenças e venenos." },


        // Acessórios Médios

        { nome: "Anel de Telecinesia", preco: "T$ 10.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Permite mover objetos à distância, como a magia Telecinesia." },
        { nome: "Bola de Cristal", preco: "T$ 10.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "—", descricao: "Permite observar locais ou criaturas distantes, como a magia Vidência." },
        { nome: "Caveira Maldita", preco: "T$ 10.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "—", descricao: "Cria uma caveira voadora obediente ao usuário, que ataca com rajadas de energia sombria." },
        { nome: "Botas Aladas", preco: "T$ 15.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Permite ao usuário voar com deslocamento de 12 m por cena enquanto calçadas." },
        { nome: "Braceletes de Bronze", preco: "T$ 15.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +1 na Defesa e resistência 5 contra dano de impacto." },
        { nome: "Anel da Energia", preco: "T$ 21.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +5 PM (após 1 dia de uso)." },
        { nome: "Anel da Vitalidade", preco: "T$ 21.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +10 PV (após 1 dia de uso)." },
        { nome: "Manto da Invisibilidade", preco: "T$ 21.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Permite ficar invisível por uma cena, até realizar uma ação hostil." },
        { nome: "Braçadeiras do Arqueiro", preco: "T$ 21.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +2 em testes de ataque e dano com arcos e bestas." },
        { nome: "Brincos de Marah", preco: "T$ 21.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Permitem lançar Curar Ferimentos Leves 3/dia." },
        { nome: "Faixas do Pugilista", preco: "T$ 21.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +2 em ataques desarmados e dano corpo a corpo." },
        { nome: "Manto da Aranha", preco: "T$ 21.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Permite escalar superfícies e paredes como uma aranha." },
        { nome: "Vassoura Voadora", preco: "T$ 21.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "2", descricao: "Permite voar com deslocamento de 9 m; suporta até 100 kg." },
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
        { nome: "Manual da Saúde Corporal", preco: "T$ 30.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "—", descricao: "Ao ser lido, concede +1 permanente em Constituição." },
        { nome: "Manual do Bom Exercício", preco: "T$ 30.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "—", descricao: "Ao ser lido, concede +1 permanente em Força." },
        { nome: "Manual dos Movimentos Precisos", preco: "T$ 30.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "—", descricao: "Ao ser lido, concede +1 permanente em Destreza." },
        { nome: "Medalhão de Lena", preco: "T$ 30.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Permite usar a magia Curar Ferimentos Graves uma vez por dia." },
        { nome: "Tomo da Compreensão", preco: "T$ 30.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "—", descricao: "Ao ser lido, concede +1 permanente em Inteligência." },
        { nome: "Tomo da Liderança e Influência", preco: "T$ 30.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "—", descricao: "Ao ser lido, concede +1 permanente em Carisma." },
        { nome: "Tomo dos Grandes Pensamentos", preco: "T$ 30.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "—", descricao: "Ao ser lido, concede +1 permanente em Sabedoria." },
        { nome: "Anel Refletor", preco: "T$ 51.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Reflete uma magia de alvo único de volta ao conjurador uma vez por dia." },
        { nome: "Cinto do Campeão", preco: "T$ 51.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +2 em testes de ataque e dano em combate corpo a corpo." },
        { nome: "Colar Guardião", preco: "T$ 51.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "—", descricao: "Enquanto carregado, concede resistência a veneno e doenças." },
        { nome: "Estatueta Animista", preco: "T$ 51.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "—", descricao: "Pode invocar uma criatura mágica (animal, espírito ou construto) uma vez por dia." },
        { nome: "Anel da Liberdade", preco: "T$ 64.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede imunidade a efeitos de paralisia, imobilização e lentidão." },
        { nome: "Tapete Voador", preco: "T$ 64.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "2", descricao: "Permite voar com deslocamento de 18m e carregar até 200kg." },
        { nome: "Braceletes de Ouro", preco: "T$ 64.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +2 em Defesa e resistência 5 contra todas as energias." },
        { nome: "Espelho da Oposição", preco: "T$ 79.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "—", descricao: "Cria um clone perfeito do usuário que o enfrenta em combate uma vez por semana." },
        { nome: "Robe do Arquimago", preco: "T$ 79.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Concede +2 em testes de ataque mágicos e +2 na CD das magias lançadas." },
        { nome: "Orbe das Tempestades", preco: "T$ 79.500", categoria: "Item Mágico", tipo: "Acessório", espacos: "—", descricao: "Permite controlar o clima e conjurar Tempestade uma vez por dia." },
        { nome: "Anel da Regeneração", preco: "T$ 150.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "1", descricao: "Restaura 1d6 PV por rodada e regenera membros perdidos." },
        { nome: "Espelho do Aprisionamento", preco: "T$ 150.000", categoria: "Item Mágico", tipo: "Acessório", espacos: "—", descricao: "Aprisiona criaturas refletidas em seu interior (Vontade CD 20 nega)." }




    ]


};

window.itensMagicosData = itensMagicosData;



// itensmagicos.js
// Baseado na Tabela 8-14: Acessórios Médios (p. 342–343, Livro Básico Tormenta 20)

