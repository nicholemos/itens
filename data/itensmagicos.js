// itensmagicos.js
// Baseado na Tabela 8-12: Poções (p. 341, Livro Básico Tormenta 20)

const itensMagicosData = {
    "item": [
        // Poções
        { nome: "Poção: Abençoar Alimentos (óleo)", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Óleo mágico que purifica e abençoa alimentos e bebidas, tornando-os nutritivos e seguros para consumo." },
        { nome: "Poção: Área Escorregadia (granada)", preco: "T$ 30", tipo: "Granada", espacos: "0,5", categoria: "Item Mágico", descricao: "Granada que ao explodir cria uma área escorregadia de 3m de raio, dificultando movimento (penalidade em testes de Atletismo)." },
        { nome: "Poção: Arma Mágica (óleo)", preco: "T$ 30", tipo: "Óleo", espacos: "0,5", categoria: "Item Mágico", descricao: "Óleo que confere +1 em ataques e dano com a arma ungida. Efeito dura uma cena." },
        { nome: "Poção: Compreensão", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Poção que concede compreensão mágica, permitindo entender qualquer linguagem por 1 hora." },
        { nome: "Poção: Curar Ferimentos (2d8+2 PV)", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Poção de cura que restaura 2d8+2 pontos de vida ao ser consumida." },
        { nome: "Poção: Disfarce Ilusório", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Poção que cria ilusão visual, alterando a aparência do usuário por até 8 horas." },
        { nome: "Poção: Escuridão (óleo)", preco: "T$ 30", tipo: "Óleo", espacos: "0,5", categoria: "Item Mágico", descricao: "Óleo que ao ser aplicado gera uma zona de escuridão mágica de 6m de raio." },
        { nome: "Poção: Luz (óleo)", preco: "T$ 30", tipo: "Óleo", espacos: "0,5", categoria: "Item Mágico", descricao: "Óleo que emite luz intensa (como uma tocha mágica) quando aplicado." },
        { nome: "Poção: Névoa (granada)", preco: "T$ 30", tipo: "Granada", espacos: "0,5", categoria: "Item Mágico", descricao: "Granada que cria uma nuvem de névoa de 6m de raio ao explodir, reduzindo visibilidade." },
        { nome: "Poção: Primor Atlético", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Poção que concede +2 em testes de Atletismo e Acrobacia por 1 hora." },
        { nome: "Poção: Proteção Divina", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Poção que fornece +1 na Defesa e +1 em testes de resistência por 1 cena." },
        { nome: "Poção: Resistência a Energia", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Poção que concede resistência 10 contra um tipo de energia escolhido por 1 cena." },
        { nome: "Poção: Sono", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Poção que adormece criaturas em uma área de 6m de raio (Vontade CD 15 evita)." },
        { nome: "Poção: Suporte Ambiental", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Poção que protege contra calor extremo, frio extremo ou falta de ar por 24 horas." },
        { nome: "Poção: Tranca Arcana (óleo)", preco: "T$ 30", tipo: "Óleo", espacos: "0,5", categoria: "Item Mágico", descricao: "Óleo que fecha e sela magicamente portas ou objetos, impedindo abertura por 1 dia." },
        { nome: "Poção: Visão Mística", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Poção que permite ver magias e auras mágicas em um raio de 18m por 1 hora." },
        { nome: "Poção: Vitalidade Fantasma", preco: "T$ 30", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Poção que concede 10 pontos de vida temporários que duram 1 hora." },
        { nome: "Poção: Escudo da Fé (duração cena)", preco: "T$ 120", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Poção que cria campo de proteção divina, concedendo +2 na Defesa por uma cena completa." },
        { nome: "Poção: Alterar Tamanho", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Poção que permite crescer ou encolher em um passo de tamanho por 1 hora." },
        { nome: "Poção: Aparência Perfeita", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Poção que concede aparência perfeita e carismática, fornecendo +2 em Diplomacia por 1 cena." },
        { nome: "Poção: Armamento da Natureza (óleo)", preco: "T$ 270", tipo: "Óleo", espacos: "0,5", categoria: "Item Mágico", descricao: "Óleo que imbuí uma arma com poder natural, concedendo +1d6 de dano de impacto adicional." },
        { nome: "Poção: Bola de Fogo (granada)", preco: "T$ 270", tipo: "Granada", espacos: "0,5", categoria: "Item Mágico", descricao: "Granada explosiva que causa 5d6 de dano de fogo em área de 6m (Reflexos CD 15 reduz à metade)." },
        { nome: "Poção: Camuflagem Ilusória", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Poção que cria ilusão visual ocultando o usuário, concedendo +5 em Furtividade por 1 cena." },
        { nome: "Poção: Concentração de Combate (duração cena)", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Poção que melhora foco em combate, concedendo +1 em ataques e +2 na Defesa por uma cena." },
        { nome: "Poção: Curar Ferimentos (4d8+4 PV)", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Poção de cura potente que restaura 4d8+4 pontos de vida." },
        { nome: "Poção: Físico Divino", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Poção que aumenta um atributo físico (For, Des ou Con) em +2 por uma cena." },
        { nome: "Poção: Mente Divina", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Poção que aumenta um atributo mental (Int, Sab ou Car) em +2 por uma cena." },
        { nome: "Poção: Metamorfose", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Poção que permite assumir a forma de outra criatura humanóide por 1 hora." },
        { nome: "Poção: Purificação", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Poção que remove todos os venenos, doenças e condições negativas do usuário." },
        { nome: "Poção: Velocidade", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Poção que concede uma ação de movimento extra por turno durante uma cena." },
        { nome: "Poção: Vestimenta da Fé (óleo)", preco: "T$ 270", tipo: "Óleo", espacos: "0,5", categoria: "Item Mágico", descricao: "Óleo que abençoa armaduras com energia divina, concedendo +1 na Defesa." },
        { nome: "Poção: Voz Divina", preco: "T$ 270", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Poção que amplifica a voz, concedendo +2 em Intimidação e Diplomacia por 1 cena." },
        { nome: "Poção: Arma Mágica +3 (óleo)", preco: "T$ 750", tipo: "Óleo", espacos: "0,5", categoria: "Item Mágico", descricao: "Óleo mágico que confere +3 em ataques e dano com a arma ungida. Efeito dura uma cena." },
        { nome: "Poção: Curar Ferimentos (7d8+7 PV)", preco: "T$ 1.080", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Poção de cura muito potente que restaura 7d8+7 pontos de vida." },
        { nome: "Poção: Físico Divino (três atributos)", preco: "T$ 1.080", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Poção que aumenta os três atributos físicos (For, Des e Con) em +2 cada por uma cena." },
        { nome: "Poção: Invisibilidade (duração cena)", preco: "T$ 1.080", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Poção que torna o usuário invisível por uma cena completa (ataques quebram o efeito)." },
        { nome: "Poção: Bola de Fogo Aprimorada (granada)", preco: "T$ 1.470", tipo: "Granada", espacos: "0,5", categoria: "Item Mágico", descricao: "Granada explosiva potente que causa 10d6 de dano de fogo em área de 6m (Reflexos CD 18 reduz à metade)." },
        { nome: "Poção: Curar Ferimentos (11d8+11 PV)", preco: "T$ 3.000", tipo: "Poção", espacos: "0,5", categoria: "Item Mágico", descricao: "Poção de cura lendária que restaura 11d8+11 pontos de vida." },

        // Armas Especificas
        { nome: "Azagaia dos Relâmpagos", preco: "T$ 30.000", tipo: "Arma Mágica Maior", espacos: "1", categoria: "Item Mágico", descricao: "Azagaia mágica que ao ser arremessada se transforma em um raio, causando 5d6 de dano elétrico em linha (Reflexos CD 15 reduz à metade). Retorna ao usuário." },
        {
            nome: "Espada Baronial",
            preco: "T$ 30.000",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            espacos: "1",
            descricao: "Espada longa +2 que concede +2 em testes de Diplomacia e Intimidação quando empunhada. Marca o portador como nobre."
        },
        {
            nome: "Lâmina da Luz",
            preco: "T$ 45.000",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            espacos: "1",
            descricao: "Espada +3 sagrada que causa +2d6 de dano de luz adicional contra mortos-vivos e demônios."
        },
        {
            nome: "Lança Animalesca",
            preco: "T$ 45.000",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            espacos: "1",
            descricao: "Lança +2 que permite invocar um aliado animal ou assumir forma bestial por uma cena."
        },
        {
            nome: "Maça do Terror",
            preco: "T$ 45.000",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            espacos: "1",
            descricao: "Maça +3 que pode amedrontar inimigos em um raio de 9m (Vontade CD 17 evita)."
        },
        {
            nome: "Florete Fugaz",
            preco: "T$ 50.000",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            espacos: "1",
            descricao: "Florete +3 que permite se mover 3m como reação após um acerto em combate corpo a corpo."
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
            descricao: "Cajado +3 que permite conjurar Curar Ferimentos Maiores uma vez por dia."
        },
        {
            nome: "Machado Silvestre",
            preco: "T$ 70.000",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            espacos: "2",
            descricao: "Machado que comunica com a natureza, fornecendo +2 em testes de Sobrevivência."
        },
        {
            nome: "Martelo de Doherimm",
            preco: "T$ 70.000",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            espacos: "2",
            descricao: "Martelo ancestral dos anões com poder sobre pedra."
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
            descricao: "Besta que dispara virotes explosivos causando dano em área."
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
            descricao: "Espada que parece ter sorte, concedendo +1 em todos os testes de ataque."
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
            tipo: "Armadura Mágica Maior",
            espacos: "2",
            descricao: "Cota de malha leve e silenciosa feita por elfos; concede +8 na Defesa e +5 em Furtividade."
        },
        {
            nome: "Couro de Monstro",
            preco: "T$ 36.000",
            categoria: "Item Mágico",
            tipo: "Armadura Mágica Maior",
            espacos: "2",
            descricao: "Feita de peles e escamas de bestas mágicas; concede resistência 10 a um tipo de energia."
        },
        {
            nome: "Escudo do Conjurador",
            preco: "T$ 45.000",
            categoria: "Item Mágico",
            tipo: "Escudo Mágico Maior",
            espacos: "1",
            descricao: "Concede +2 na Defesa e permite ignorar a chance de falha arcana ao conjurar magias com escudo."
        },
        {
            nome: "Loriga do Centurião",
            preco: "T$ 45.000",
            categoria: "Item Mágico",
            tipo: "Armadura Mágica Maior",
            espacos: "5",
            descricao: "Armadura de escamas +3 que concede +2 em testes de Guerra e Intimidação."
        },
        {
            nome: "Manto da Noite",
            preco: "T$ 45.000",
            categoria: "Item Mágico",
            tipo: "Armadura Mágica Maior",
            espacos: "2",
            descricao: "Manto encantado que funciona como armadura leve +3 e concede invisibilidade em áreas de escuridão."
        },
        {
            nome: "Couraça do Comando",
            preco: "T$ 45.000",
            categoria: "Item Mágico",
            tipo: "Armadura Mágica Maior",
            espacos: "5",
            descricao: "Couraça +3 que concede +2 em testes de Carisma e permite inspirar aliados como uma ação de movimento."
        },
        {
            nome: "Baluarte Anão",
            preco: "T$ 50.000",
            categoria: "Item Mágico",
            tipo: "Escudo Mágico Maior",
            espacos: "5",
            descricao: "Escudo pesado +3 feito de aço anão; concede RD 5 e vantagem em testes de resistência contra efeitos de empurrão."
        },
        {
            nome: "Escudo Espinhoso",
            preco: "T$ 50.000",
            categoria: "Item Mágico",
            tipo: "Escudo Mágico Maior",
            espacos: "2",
            descricao: "Escudo +3 coberto de espinhos; causa 1d6 de dano de perfuração em quem ataca corpo a corpo."
        },
        {
            nome: "Escudo do Leão",
            preco: "T$ 50.000",
            categoria: "Item Mágico",
            tipo: "Escudo Mágico Maior",
            espacos: "2",
            descricao: "Escudo +3 com símbolo de leão; pode rugir uma vez por dia, apavorando inimigos próximos (Vontade CD 20)."
        },
        {
            nome: "Carapaça Demoníaca",
            preco: "T$ 63.000",
            categoria: "Item Mágico",
            tipo: "Armadura Mágica Maior",
            espacos: "5",
            descricao: "Armadura de placas +4 feita de ossos infernais; concede resistência 10 a fogo e +2 em testes de Intimidação."
        },
        {
            nome: "Escudo do Eclipse",
            preco: "T$ 70.000",
            categoria: "Item Mágico",
            tipo: "Escudo Mágico Maior",
            espacos: "2",
            descricao: "Escudo +4 que pode gerar uma área de escuridão mágica uma vez por dia."
        },
        {
            nome: "Escudo de Azgher",
            preco: "T$ 140.000",
            categoria: "Item Mágico",
            tipo: "Escudo Mágico Maior",
            espacos: "2",
            descricao: "Escudo +5 banhado em luz solar; reflete magias de trevas e causa 3d6 de dano de luz em mortos-vivos adjacentes."
        },
        {
            nome: "Armadura da Luz",
            preco: "T$ 150.000",
            categoria: "Item Mágico",
            tipo: "Armadura Mágica Maior",
            espacos: "5",
            descricao: "Armadura completa +5 que emite luz intensa e concede imunidade a dano de trevas e a cegueira."
        },

        // acessórios Menores

        { nome: "Anel do Sustento", preco: "T$ 3.000", categoria: "Item Mágico", tipo: "Acessório Menor", espacos: "1", descricao: "Usuário não precisa comer, beber e dorme apenas 2h por dia." },
        { nome: "Bainha Mágica", preco: "T$ 3.000", categoria: "Item Mágico", tipo: "Acessório Menor", espacos: "1", descricao: "Limpa, repara e protege a arma guardada nela; saca a arma como ação livre." },
        { nome: "Corda da Escalada", preco: "T$ 3.000", categoria: "Item Mágico", tipo: "Acessório Menor", espacos: "1", descricao: "Sobe e se amarra sozinha; suporta até 300 kg." },
        { nome: "Ferraduras da Velocidade", preco: "T$ 3.000", categoria: "Item Mágico", tipo: "Acessório Menor", espacos: "—", descricao: "Concede +6 m de deslocamento ao animal equipado." },
        { nome: "Garrafa da Fumaça Eterna", preco: "T$ 3.000", categoria: "Item Mágico", tipo: "Acessório Menor", espacos: "1", descricao: "Emite fumaça densa continuamente; pode ser tampada para interromper." },
        { nome: "Gema da Luminosidade", preco: "T$ 3.000", categoria: "Item Mágico", tipo: "Acessório Menor", espacos: "1", descricao: "Emite luz como uma tocha; pode ser acesa ou apagada com comando." },
        { nome: "Manto Élfico", preco: "T$ 3.000", categoria: "Item Mágico", tipo: "Acessório Menor", espacos: "1", descricao: "Concede +5 em Furtividade." },
        { nome: "Mochila de Carga", preco: "T$ 3.000", categoria: "Item Mágico", tipo: "Acessório Menor", espacos: "0", descricao: "Reduz o peso carregado pela metade para efeitos de carga." },
        { nome: "Brincos da Sagacidade", preco: "T$ 4.500", categoria: "Item Mágico", tipo: "Acessório Menor", espacos: "1", descricao: "Concede +1 em Inteligência (após 1 dia de uso)." },
        { nome: "Luvas da Delicadeza", preco: "T$ 4.500", categoria: "Item Mágico", tipo: "Acessório Menor", espacos: "1", descricao: "Concede +1 em Destreza (após 1 dia de uso)." },
        { nome: "Manoplas da Força do Ogro", preco: "T$ 4.500", categoria: "Item Mágico", tipo: "Acessório Menor", espacos: "1", descricao: "Concede +1 em Força (após 1 dia de uso)." },
        { nome: "Manto da Resistência", preco: "T$ 4.500", categoria: "Item Mágico", tipo: "Acessório Menor", espacos: "1", descricao: "Concede +1 em todos os testes de resistência (Fortitude, Reflexos e Vontade)." },
        { nome: "Manto do Fascínio", preco: "T$ 4.500", categoria: "Item Mágico", tipo: "Acessório Menor", espacos: "1", descricao: "Concede +1 em Carisma (após 1 dia de uso)." },
        { nome: "Torque do Vigor", preco: "T$ 4.500", categoria: "Item Mágico", tipo: "Acessório Menor", espacos: "1", descricao: "Concede +1 em Constituição (após 1 dia de uso)." },
        { nome: "Flauta Fantasma", preco: "T$ 6.000", categoria: "Item Mágico", tipo: "Acessório Menor", espacos: "1", descricao: "Ao ser tocada, cria sons assombrados que podem causar medo (Vontade CD 15)." },
        { nome: "Lanterna da Revelação", preco: "T$ 9.000", categoria: "Item Mágico", tipo: "Acessório Menor", espacos: "1", descricao: "Revela criaturas invisíveis em seu raio de luz." },
        { nome: "Anel do Escudo Mental", preco: "T$ 9.000", categoria: "Item Mágico", tipo: "Acessório Menor", espacos: "1", descricao: "Concede imunidade a efeitos de adivinhação e leitura mental." },
        { nome: "Pingente da Saúde", preco: "T$ 9.000", categoria: "Item Mágico", tipo: "Acessório Menor", espacos: "1", descricao: "Concede imunidade a doenças e venenos." },


        // Acessórios Médios

        { nome: "Anel de Telecinesia", preco: "T$ 10.500", categoria: "Item Mágico", tipo: "Acessório Médio", espacos: "1", descricao: "Permite mover objetos à distância, como a magia Telecinesia." },
        { nome: "Bola de Cristal", preco: "T$ 10.500", categoria: "Item Mágico", tipo: "Acessório Médio", espacos: "1", descricao: "Permite observar locais ou criaturas distantes, como a magia Vidência." },
        { nome: "Caveira Maldita", preco: "T$ 10.500", categoria: "Item Mágico", tipo: "Acessório Médio", espacos: "1", descricao: "Cria uma caveira voadora obediente ao usuário, que ataca com rajadas de energia sombria." },
        { nome: "Botas Aladas", preco: "T$ 15.000", categoria: "Item Mágico", tipo: "Acessório Médio", espacos: "1", descricao: "Permite ao usuário voar com deslocamento de 12 m por cena enquanto calçadas." },
        { nome: "Braceletes de Bronze", preco: "T$ 15.000", categoria: "Item Mágico", tipo: "Acessório Médio", espacos: "1", descricao: "Concede +1 na Defesa e resistência 5 contra dano de impacto." },
        { nome: "Anel da Energia", preco: "T$ 21.000", categoria: "Item Mágico", tipo: "Acessório Médio", espacos: "1", descricao: "Concede +5 PM (após 1 dia de uso)." },
        { nome: "Anel da Vitalidade", preco: "T$ 21.000", categoria: "Item Mágico", tipo: "Acessório Médio", espacos: "1", descricao: "Concede +10 PV (após 1 dia de uso)." },
        { nome: "Manto da Invisibilidade", preco: "T$ 21.000", categoria: "Item Mágico", tipo: "Acessório Médio", espacos: "1", descricao: "Permite ficar invisível por uma cena, até realizar uma ação hostil." },
        { nome: "Braçadeiras do Arqueiro", preco: "T$ 21.000", categoria: "Item Mágico", tipo: "Acessório Médio", espacos: "1", descricao: "Concede +2 em testes de ataque e dano com arcos e bestas." },
        { nome: "Brincos de Marah", preco: "T$ 21.000", categoria: "Item Mágico", tipo: "Acessório Médio", espacos: "1", descricao: "Permitem lançar Curar Ferimentos Leves 3/dia." },
        { nome: "Faixas do Pugilista", preco: "T$ 21.000", categoria: "Item Mágico", tipo: "Acessório Médio", espacos: "1", descricao: "Concede +2 em ataques desarmados e dano corpo a corpo." },
        { nome: "Manto da Aranha", preco: "T$ 21.000", categoria: "Item Mágico", tipo: "Acessório Médio", espacos: "1", descricao: "Permite escalar superfícies e paredes como uma aranha." },
        { nome: "Vassoura Voadora", preco: "T$ 21.000", categoria: "Item Mágico", tipo: "Acessório Médio", espacos: "—", descricao: "Permite voar com deslocamento de 9 m; suporta até 100 kg." },
        { nome: "Amuleto da Robustez", preco: "T$ 25.500", categoria: "Item Mágico", tipo: "Acessório Médio", espacos: "1", descricao: "Concede +2 em Constituição (após 1 dia de uso)." },
        { nome: "Cinto da Força do Gigante", preco: "T$ 25.500", categoria: "Item Mágico", tipo: "Acessório Médio", espacos: "1", descricao: "Concede +2 em Força (após 1 dia de uso)." },
        { nome: "Coroa Majestosa", preco: "T$ 25.500", categoria: "Item Mágico", tipo: "Acessório Médio", espacos: "1", descricao: "Concede +2 em Carisma (após 1 dia de uso)." },
        { nome: "Estola da Serenidade", preco: "T$ 25.500", categoria: "Item Mágico", tipo: "Acessório Médio", espacos: "1", descricao: "Concede +2 em Sabedoria (após 1 dia de uso)." },
        { nome: "Manto do Morcego", preco: "T$ 25.500", categoria: "Item Mágico", tipo: "Acessório Médio", espacos: "1", descricao: "Concede visão no escuro 18 m e bônus +5 em Furtividade." },
        { nome: "Pulseiras da Celeridade", preco: "T$ 25.500", categoria: "Item Mágico", tipo: "Acessório Médio", espacos: "1", descricao: "Concede +2 em Destreza (após 1 dia de uso)." },
        { nome: "Tiara da Sapiencia", preco: "T$ 25.500", categoria: "Item Mágico", tipo: "Acessório Médio", espacos: "1", descricao: "Concede +2 em Inteligência (após 1 dia de uso)." },

        { nome: "Elmo de Teletransporte", preco: "T$ 30.000", categoria: "Item Mágico", tipo: "Acessório Maior", espacos: "1", descricao: "Permite ao usuário se teleportar como a magia Teletransporte." },
        { nome: "Gema da Telepatia", preco: "T$ 30.000", categoria: "Item Mágico", tipo: "Acessório Maior", espacos: "1", descricao: "Permite comunicação telepática com qualquer criatura inteligente em alcance médio." },
        { nome: "Gema Elemental", preco: "T$ 30.000", categoria: "Item Mágico", tipo: "Acessório Maior", espacos: "1", descricao: "Liberta um elemental (fogo, ar, água ou terra) uma vez por dia para lutar por você." },
        { nome: "Manual da Saúde Corporal", preco: "T$ 30.000", categoria: "Item Mágico", tipo: "Acessório Maior", espacos: "1", descricao: "Ao ser lido, concede +1 permanente em Constituição." },
        { nome: "Manual do Bom Exercício", preco: "T$ 30.000", categoria: "Item Mágico", tipo: "Acessório Maior", espacos: "1", descricao: "Ao ser lido, concede +1 permanente em Força." },
        { nome: "Manual dos Movimentos Precisos", preco: "T$ 30.000", categoria: "Item Mágico", tipo: "Acessório Maior", espacos: "1", descricao: "Ao ser lido, concede +1 permanente em Destreza." },
        { nome: "Medalhão de Lena", preco: "T$ 30.000", categoria: "Item Mágico", tipo: "Acessório Maior", espacos: "1", descricao: "Permite usar a magia Curar Ferimentos Graves uma vez por dia." },
        { nome: "Tomo da Compreensão", preco: "T$ 30.000", categoria: "Item Mágico", tipo: "Acessório Maior", espacos: "1", descricao: "Ao ser lido, concede +1 permanente em Inteligência." },
        { nome: "Tomo da Liderança e Influência", preco: "T$ 30.000", categoria: "Item Mágico", tipo: "Acessório Maior", espacos: "1", descricao: "Ao ser lido, concede +1 permanente em Carisma." },
        { nome: "Tomo dos Grandes Pensamentos", preco: "T$ 30.000", categoria: "Item Mágico", tipo: "Acessório Maior", espacos: "1", descricao: "Ao ser lido, concede +1 permanente em Sabedoria." },
        { nome: "Anel Refletor", preco: "T$ 51.000", categoria: "Item Mágico", tipo: "Acessório Maior", espacos: "1", descricao: "Reflete uma magia de alvo único de volta ao conjurador uma vez por dia." },
        { nome: "Cinto do Campeão", preco: "T$ 51.000", categoria: "Item Mágico", tipo: "Acessório Maior", espacos: "1", descricao: "Concede +2 em testes de ataque e dano em combate corpo a corpo." },
        { nome: "Colar Guardião", preco: "T$ 51.000", categoria: "Item Mágico", tipo: "Acessório Maior", espacos: "1", descricao: "Enquanto carregado, concede resistência a veneno e doenças." },
        { nome: "Estatueta Animista", preco: "T$ 51.000", categoria: "Item Mágico", tipo: "Acessório Maior", espacos: "1", descricao: "Pode invocar uma criatura mágica (animal, espírito ou construto) uma vez por dia." },
        { nome: "Anel da Liberdade", preco: "T$ 64.500", categoria: "Item Mágico", tipo: "Acessório Maior", espacos: "1", descricao: "Concede imunidade a efeitos de paralisia, imobilização e lentidão." },
        { nome: "Tapete Voador", preco: "T$ 64.500", categoria: "Item Mágico", tipo: "Acessório Maior", espacos: "2", descricao: "Permite voar com deslocamento de 18m e carregar até 200kg." },
        { nome: "Braceletes de Ouro", preco: "T$ 64.500", categoria: "Item Mágico", tipo: "Acessório Maior", espacos: "1", descricao: "Concede +2 em Defesa e resistência 5 contra todas as energias." },
        { nome: "Espelho da Oposição", preco: "T$ 79.500", categoria: "Item Mágico", tipo: "Acessório Maior", espacos: "—", descricao: "Cria um clone perfeito do usuário que o enfrenta em combate uma vez por semana." },
        { nome: "Robe do Arquimago", preco: "T$ 79.500", categoria: "Item Mágico", tipo: "Acessório Maior", espacos: "1", descricao: "Concede +2 em testes de ataque mágicos e +2 na CD das magias lançadas." },
        { nome: "Orbe das Tempestades", preco: "T$ 79.500", categoria: "Item Mágico", tipo: "Acessório Maior", espacos: "1", descricao: "Permite controlar o clima e conjurar Tempestade uma vez por dia." },
        { nome: "Anel da Regeneração", preco: "T$ 150.000", categoria: "Item Mágico", tipo: "Acessório Maior", espacos: "1", descricao: "Restaura 1d6 PV por rodada e regenera membros perdidos." },
        { nome: "Espelho do Aprisionamento", preco: "T$ 150.000", categoria: "Item Mágico", tipo: "Acessório Maior", espacos: "—", descricao: "Aprisiona criaturas refletidas em seu interior (Vontade CD 20 nega)." },

        // (Itens de Coração de Rubi - Aventura 6)

        {
            nome: "Pingente da Sereia Adormecida",
            preco: "T$ 3.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Menor",
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
            tipo: "Arma Mágica Maior",
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
            tipo: "Armadura Mágica Maior",
            descricao: "Simbionte (Elmo). Invocar é ação livre (perde 1d4 PV). Funciona como uma armadura completa espinhosa selada sob medida de matéria vermelha (não requer proficiência). Usuário não precisa respirar. Ativa-se como reação ao sofrer dano (Vontade CD 10 + dano evita).",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Asas do Devorador",
            preco: "T$ 27.000",
            espacos: "—",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Simbionte (Costas). O hospedeiro pode gastar 2 PM para ativar as Asas e ganhar deslocamento de voo igual ao seu deslocamento em terra (duração sustentada).",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Flagelo do Devorador",
            preco: "T$ 33.000",
            espacos: "—",
            categoria: "Item Mágico",
            tipo: "Escudo Mágico Maior",
            descricao: "Simbionte (Braço). Conta como um escudo leve de matéria vermelha. Permite lançar 'Jato Corrosivo' (como ação de movimento). Se aprender a magia, custo -1 PM.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Mente do Devorador",
            preco: "T$ 34.000",
            espacos: "—",
            categoria: "Item Mágico",
            tipo: "Acessório Maior",
            descricao: "Simbionte (Cabeça). Concede +1 em Inteligência e Sabedoria (cumulativo). Permite lançar uma magia arcana de encantamento de 1º círculo (escolhida na implantação). Se aprender a magia, custo -1 PM.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Olhos do Devorador",
            preco: "T$ 34.000",
            espacos: "—",
            categoria: "Item Mágico",
            tipo: "Acessório Maior",
            descricao: "Simbionte (Rosto). Concede +5 em Percepção, visão no escuro (ignora escuridão mágica) e não pode ser flanqueado. Permite lançar 'Visão da Verdade'. Se aprender a magia, custo -1 PM.",
            fonte: "Ameaças de Arton"
        },
        // (Itens de Ameaças de Arton - Mágicos)
        {
            nome: "Chifre de Unicórnio",
            preco: "T$ 120.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Maior",
            descricao: "Maior. Permite lançar Curar Ferimentos e Purificação (custo -1 PM se já as conhece). Pode lançar Segunda Chance (1x, perde poderes). Pode ser usado como Espada Curta Formidável (+2). Pode ser transformado em 12 doses de 'Pó de Chifre de Unicórnio' (aumenta dados de cura de poções em +2 passos).",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Fragmento de Filactério",
            preco: "T$ 90.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Maior",
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
            tipo: "Armadura Mágica Menor",
            descricao: "Armadura completa (+1) reforçada (+1) e selada (+1). Amaldiçoada: não pode ser retirada. Se morrer usando-a, não pode ser ressuscitado e se torna um guerreiro perpétuo. Se a maldição for removida, ganha um encanto aleatório.",
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
            tipo: "Arma Mágica Média",
            descricao: ". Pistola formidável (+2) e profana (+1d6 trevas). Está sempre carregada e não precisa de munição. 1/dia (escolha do mestre), o portador deve tentar disparar em uma criatura inteligente aleatória (Vontade CD 25 evita).",
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
            tipo: "Arma Mágica Média",
            descricao: ". Machado de guerra magnífico (+4), aumentado (dano +1 passo), atroz (+2 dano) de adamante (+1 passo). Se empunhado por um duyshidakk, causa +2d8 de dano contra não-duyshidakks e recebe um encanto adicional baseado no Akzath.",
            fonte: "Ameaças de Arton"
        },

        // (Item de Guerra Artoniana)
        {
            nome: "Manto do Viajante",
            preco: "T$ 25.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Manto velho e surrado. Fornece +5 em Sobrevivência e +3m em deslocamento (apenas em ambientes ermos). Permite lançar a magia Primor Atlético (apenas em você mesmo).",
            fonte: "Guerra Artoniana"
        },

        // (Item de Duelo de Dragões)
        {
            nome: "Lança do Guerreiro Dragão",
            preco: "T$ 24.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Média",
            descricao: "Lança que canaliza poder dracônico, causando +2d6 de dano de fogo.",
            fonte: "Duelo de Dragões"
        },
        // (Itens de Heróis de Arton - Implantes)
        {
            nome: "Asas (Implante)",
            preco: "T$ 20.000",
            espacos: "-",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Implante. Asas monstruosas. Você pode voar com deslocamento igual ao seu deslocamento base mas, enquanto estiver voando dessa forma, fica vulnerável.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Braço de Ogro",
            preco: "T$ 36.000",
            espacos: "-",
            categoria: "Item Mágico",
            tipo: "Acessório Maior",
            descricao: "Implante (substitui um braço). Você recebe +2 em Força e, com este braço, seu alcance natural aumenta em +1,5m.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Cauda com Ferrão",
            preco: "T$ 27.000",
            espacos: "-",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Implante (Cauda). Concede arma natural de ferrão (dano 1d6, crítico x2, perfuração). 1/rodada, pode gastar 1 PM para ataque extra com ferrão. Ao causar dano com ele, pode gastar 1 PM para inocular veneno (1d12 PV).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Escamas (+2 Defesa)",
            preco: "T$ 12.000",
            espacos: "-",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Implante. Escamas de monstros formam uma armadura leve. Fornecem +2 na Defesa. Pode ser enxertado uma segunda vez.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Escamas (Melhoria +5 Defesa)",
            preco: "T$ 12.000",
            espacos: "-",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Implante (Requer Escamas +2). O bônus na Defesa totaliza +5.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Garras (Implante)",
            preco: "T$ 27.000",
            espacos: "-",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Implante (Mãos). Mãos se transformam em armas naturais de garra (dano 1d6 cada, crítico x2, corte). 1/rodada, pode gastar 1 PM para ataque extra com uma garra (se livre). Pode usá-las para Estilo de Duas Armas.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Olho Anulador",
            preco: "T$ 30.000",
            espacos: "-",
            categoria: "Item Mágico",
            tipo: "Acessório Maior",
            descricao: "Implante (Peito). Permite lançar Dissipar Magia (apenas em cone de 9m, usa Vontade no lugar de Misticismo).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Olho Desintegrador",
            preco: "T$ 50.000",
            espacos: "-",
            categoria: "Item Mágico",
            tipo: "Acessório Maior",
            descricao: "Implante (Costas). Permite lançar a magia Desintegrar (atributo-chave Constituição).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Olho Petrificante",
            preco: "T$ 18.000",
            espacos: "-",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Implante (Olho). Concede a habilidade Olhar Atordoante (T20, p. 29). Se já a tiver, a CD aumenta em +2.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Patas de Aranha",
            preco: "T$ 12.000",
            espacos: "-",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Implante (Tronco). Concede deslocamento de escalada igual ao seu deslocamento base. Se já tiver, aumenta em +6m.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Tentáculo com Garras",
            preco: "T$ 27.000",
            espacos: "-",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
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
            descricao: "Adaga formidável envolta em névoa que permite se tornar invisível por 1 rodada após um acerto (custo 2 PM).",
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
            descricao: "Arco curto sombrio que deixa alvos cegos por 1 rodada ao acertar (custo 2 PM).",
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
            descricao: "Arco longo formidável que ofusca inimigos por 1d4 rodadas ao acertar (custo 1 PM).",
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
            descricao: "Azagaia caçadora de cristal que ignora RD ao acertar (custo 1 PM). Retorna ao usuário.",
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
            descricao: "Besta leve cravejada de gemas que dispara múltiplos virotes (custo 3 PM).",
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
            descricao: "Espada que canaliza poder de tempestades, causando +1d6 de dano elétrico.",
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
            descricao: "Espada que protege seu portador, concedendo +1 na Defesa e +2 em testes de resistência.",
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
            descricao: "Espada que brilha com luz solar intensa, causando +2d6 de dano de luz contra criaturas do mal.",
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
            descricao: "Lança que retorna como a fênix após ser arremessada, regenerando dano.",
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
            descricao: "Machado feito de madeira viva que regenera 1 PV por rodada.",
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
            descricao: "Machado que canaliza poder das profundezas, causando +1d6 de dano de trevas.",
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
            descricao: "Machado que queima como lava, causando +2d6 de dano de fogo.",
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
            descricao: "Martelo que canaliza poder da terra, causando dano em área ao impactar.",
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
            descricao: "Martelo de tamanho imenso que causa +3d6 de dano.",
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
            tipo: "Acessório Menor",
            descricao: " Bolsa. Quando uma criatura faz punga contra você, sofre 6d6 dano de corte e fica agarrada (Acrobacia CD 20 para soltar).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Algibeira Provedora",
            preco: "T$ 6.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Menor",
            descricao: " Bolsa. Pode gastar ação completa para procurar item mundano (até 1 espaço). Role 1d20: 6+ encontra; 5- falha (perde poderes por 1 dia); 1 natural morde (4d6 dano) e desaparece.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Ampulheta da Harmonia Temporal",
            preco: "T$ 10.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "1/dia, pode realizar uma tarefa (de 1 min a 1 hora) como uma ação completa.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Amuleto da Visão Etérea",
            preco: "T$ 3.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Menor",
            descricao: " Concede resistência a ilusões +5. Pode lançar Visão Mística (como ação livre se já a conhece).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Amuleto do Amparo",
            preco: "T$ 10.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Medalhão. Quando você faz um teste para ajudar, o bônus que fornece aumenta em +2.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Anel da Beleza Ilusória",
            preco: "T$ 21.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Concede +5 em perícias baseadas em Carisma (exceto Intimidação). Pode lançar Enfeitiçar (custo -1 PM se já a conhece).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Anel da Chama Dançante",
            preco: "T$ 30.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Maior",
            descricao: " Chama mágica age como um parceiro vigilante veterano. Permite lançar Controlar Fogo (custo -1 PM se já a conhece).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Anel da Proteção Mental",
            preco: "T$ 9.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Menor",
            descricao: " Concede resistência a efeitos mentais +5.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Anel do Pacto Oneroso",
            preco: "T$ 15.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Permite lançar uma magia divina (até 4º círculo) sem custo em PM. Exige realizar uma penitência (definida pelo mestre) antes de usar de novo.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Bastão da Grande Harmonia",
            preco: "T$ 25.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Bastão que equilibra energias mágicas, fornecendo +1 em testes de resistência contra magia.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Bastão do Sonhador",
            preco: "T$ 21.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Bastão que permite comunicação através de sonhos com aliados.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Berço das Fadas",
            preco: "T$ 9.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Menor",
            descricao: " Saco de dormir. Oferece descanso confortável (mesmo ao relento). Concede efeito da magia Suporte Ambiental enquanto dorme.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Botas do Andarilho das Sombras",
            preco: "T$ 15.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Botas. Concede +5 em Furtividade (em ambientes urbanos ou escuros). 1/dia, pode lançar Salto Dimensional (apenas para uma sombra em alcance).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Braçadeiras da Força do Colosso",
            preco: "T$ 120.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Maior",
            descricao: " Braçadeiras. Concede +4 em Força (após 1 dia). 1/cena, pode gastar 5 PM para aumentar o bônus para +8 por 1 rodada.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Bracelete do Coração Vivaz",
            preco: "T$ 27.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Bracelete. Fornece +10 PV (após 1 dia). Quando reduzido a 0 PV ou menos, pode gastar 2 PM para curar 2d8+2 PV (luz).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Braceletes da Amizade Intensa",
            preco: "T$ 36.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Maior",
            descricao: " Par de braceletes. Usuários (em alcance médio) podem se comunicar por telepatia e sentir direção/distância um do outro. Cura mágica ou efeito benéfico em um afeta o outro (em alcance curto).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Caixa dos Ecos Perdidos",
            preco: "T$ 10.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Caixa de madeira. Pode gastar 3 PM para receber +10 em um teste de perícia baseada em Inteligência (relacionada a um evento passado).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Cálice das Marés",
            preco: "T$ 15.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Cálice de prata. Permite lançar Controlar Água (custo -1 PM se já a conhece).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Capa Nebulosa",
            preco: "T$ 16.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Capa de névoa. Sempre que estiver sob camuflagem leve (escuridão ou neblina), ela se torna camuflagem total.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Chapéu dos Truques Infinitos",
            preco: "T$ 9.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Menor",
            descricao: " Cartola. Pode lançar livremente qualquer versão 'truque' de magias de 1º círculo, mesmo que não as conheça.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Chapéu Pensador",
            preco: "T$ 30.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Maior",
            descricao: " Chapéu. Recebe a habilidade Engenhosidade. Se já a possui, o bônus aumenta em +2.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Chave dos Planos",
            preco: "T$ 60.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Maior",
            descricao: " Chave. Permite lançar Teletransporte ou Viagem Planar (sem componente material) através de uma porta (requer uma porta no destino).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Cinto da Desmaterialização",
            preco: "T$ 60.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Maior",
            descricao: " Cinto. Permite lançar Forma Etérea (apenas em você).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Cinto da Flecha Veloz",
            preco: "T$ 30.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Maior",
            descricao: " Cinto. Recebe a habilidade Ataque Extra (apenas com armas de disparo). Se já a possui, o custo para usá-la com armas de disparo diminui em –1 PM.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Cinto da Leveza Graciosa",
            preco: "T$ 9.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Menor",
            descricao: " Cinto. Recebe +5 em Acrobacia e está sempre sob efeito básico de Queda Suave.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Cinto dos Caminhos Cruzados",
            preco: "T$ 15.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Cinto. 1/cena, pode gastar (Ação Mov., 3 PM) para trocar de lugar com um aliado em alcance curto.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Cinturão do Trobo",
            preco: "T$ 3.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Menor",
            descricao: " Cinto. Recebe +5 em testes de Atletismo para erguer peso e sua capacidade de carga aumenta em 5 espaços.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Colar da Fúria Monstruosa",
            preco: "T$ 21.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Colar. Adquire a habilidade Fúria (de Bárbaro). Se já a possui, os bônus em ataque e dano aumentam em +1.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Colar da Perseverança",
            preco: "T$ 10.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Colar. Recebe +5 em Vontade e +2 em todos os testes estendidos.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Colar do Tirano",
            preco: "T$ 10.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Colar. Conectado a 1d8 coleiras. 1/rodada, pode causar 2d8+2 dano de eletricidade a um escravo. Dano ou efeito nocivo ao usuário também afeta os escravos.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Colar das Bolas de Fogo",
            preco: "T$ 12.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Colar com 1d4+1 rubis. Recebe RD fogo 10. Pode lançar Bola de Fogo (CD Int/Car; +2 PM em aprimoramentos se já a conhece). Pode gastar (Ação Mov.) e 1 rubi para aumentar a CD em +2 e o dano em +1 passo.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Coração do Inverno",
            preco: "T$ 45.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Maior",
            descricao: " Cristal. Permite lançar Raio Polar (CD Int/Car; +1 passo de dado se já a conhece).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Corda da Resignação",
            preco: "T$ 7.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Menor",
            descricao: " Corda. Quando usada para amarrar, a CD para escapar (Acrobacia) aumenta em +20. A vítima fica alquebrada e esmorecida.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Coroa da Floresta Sussurrante",
            preco: "T$ 21.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Tiara. Está sempre sob efeito de Voz Divina. Pode lançar Acalmar Animal e Controlar Plantas (CD Sab; como ação de movimento se já as conhece).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Coroa da Majestade Distorcida",
            preco: "T$ 25.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Coroa. Recebe +1 Carisma (após 1 dia). Pode lançar Comando (CD Car, +2 CD) como ação de movimento. (Criaturas que passam no TR ficam imunes).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Cristal da Voz Silenciosa",
            preco: "T$ 9.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Menor",
            descricao: " Pingente. Permite falar com voz mágica (audível apenas por quem selecionar em alcance curto). Permite lançar magias sem componente verbal.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Cristal do Tempo Célere",
            preco: "T$ 9.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Menor",
            descricao: " Cristal (consumível). Quebrar o cristal permite realizar um intervalo entre aventuras no tempo de 1 dia.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Elixir da Eternidade",
            preco: "T$ 3.000",
            espacos: "0,5",
            categoria: "Item Mágico",
            tipo: "Acessório Menor",
            descricao: " Elixir (Poção). Evita que o usuário envelheça (até o fim da aventura). Recebe resistência a trevas +5 e imunidade a envelhecimento mágico.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Elixir da Mente Dividida",
            preco: "T$ 1.500",
            espacos: "0,5",
            categoria: "Item Mágico",
            tipo: "Acessório Menor",
            descricao: " Elixir (Poção). Beber (ação padrão) concede +1 ação de movimento e +1 ação padrão por rodada (não cumulativo) por 1 cena. Causa –5 em testes de perícia (exceto reações) e condição ruim para lançar magias. Causa fadiga por 1 dia após o fim.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Espelho da Verdade",
            preco: "T$ 21.000",
            espacos: "2",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Espelho grande. Revela a forma verdadeira de criaturas/objetos (como Visão da Verdade). Pode ser usado para lançar Vidência (CD +5, alvo também afetado por Visão da Verdade).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Espelho do Outro Lado",
            preco: "T$ 18.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Espelho pequeno. 1/aventura, pode conversar com sua contraparte espiritual. Role 1d10–3. Se positivo, recebe esse valor em d6 de auxílio (para testes de perícia). Se negativo, o mestre recebe esse valor em d6 de penalidade (para seus testes de perícia).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Frigideira do Chef Anão",
            preco: "T$ 24.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Instrumento de Ofício (cozinheiro) aprimorado (+5). Pode ser usada como Maça maciça (+1 crit) formidável (+2) de adamante (+1 passo). Pode ser usada como Escudo Pesado defensor (+2) de adamante (RD 2), mas exige duas mãos.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Gaiola dos Arcanos",
            preco: "T$ 6.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Menor",
            descricao: " Gaiola de prata. Quando uma criatura usa habilidade mágica em 9m, o cristal suga 1 PM (por círculo de magia) ou 2 PM (outras hab.) da criatura.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Gema da Profanação",
            preco: "T$ 30.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Maior",
            descricao: " Gema. O custo de suas habilidades mágicas que causam dano de trevas diminui em –2 PM.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Gema da Purificação",
            preco: "T$ 18.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Gema. Pode lançar a magia Purificação. Custo -1 PM se for devoto de deus de energia positiva e/ou já conhecer a magia (cumulativo).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Gema da Santificação",
            preco: "T$ 24.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Gema. Área em alcance curto da gema é considerada sob efeito de Consagrar. Se for devoto, pode pagar PM para ativar aprimoramentos (duração 1 cena).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Instrumentos da Celeridade",
            preco: "T$ 22.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Ferramentas de Ofício aprimoradas (+1). Permite fabricar um item adicional (mesma categoria e tempo) ao mesmo tempo (pague o custo e faça o teste para cada).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Lâmpada da Ilusão Impecável",
            preco: "T$ 6.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Menor",
            descricao: " Lâmpada de cristal. Pode lançar Criar Ilusão (apenas visual, CD Int; +2 PM em aprimoramentos se já a conhece). A CD para resistir à magia aumenta em +5.",
            fonte: "Heróis de Arton"
        },
        // (Itens de Heróis de Arton - Acessórios Específicos Finais)
        {
            nome: "Máscara da Raposa",
            preco: "T$ 18.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Máscara. Permite lançar Imagem Espelhada (como ação de movimento e custo -1 PM se já a conhece).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Máscara do Predador",
            preco: "T$ 22.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Máscara. Recebe +5 em Investigação (procurar) e Sobrevivência (rastrear). Recebe a habilidade Marca da Presa (custo -1 PM se já a possui).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Monóculo da Franqueza",
            preco: "T$ 4.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Menor",
            descricao: " Monóculo. Concede +10 em testes de Intuição para perceber mentiras.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Ocarina da Melodia Distante",
            preco: "T$ 9.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Menor",
            descricao: " Instrumento musical. Fornece +2 em Atuação (+5 para bardos). O alcance das Músicas de bardo aumenta em um passo (curto->médio, médio->longo).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Óculos da Revelação",
            preco: "T$ 10.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Óculos. Permite lançar a magia Lendas e Histórias.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Olhos do Corvo",
            preco: "T$ 9.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Menor",
            descricao: " Venda. Fica cego em ambientes iluminados. Em ambientes escuros (mundanos ou mágicos), enxerga normalmente e fica imune a cego e ofuscado.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Papiro das Estrelas",
            preco: "T$ 1.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Menor",
            descricao: " Pergaminho. Fornece +5 em Sobrevivência (orientar-se, rastrear) e Percepção (evitar surpresa nos ermos).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Pedra da Passagem",
            preco: "T$ 15.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Pedra. Pode gastar (Ação Padrão, 3 PM) para criar uma abertura Média em superfície sólida não mágica (RD 8 ou menos). Apenas portas e paredes.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Pena da Criação",
            preco: "T$ 6.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Menor",
            descricao: " Ferramenta (Ofício: escriba) aprimorada. 1/cena (Ação Completa), faça um teste de Ofício (escriba) (CD 10) para lançar Conjurar Monstro (básico). A cada 5 pontos acima da CD, recebe +1 PM para aprimoramentos.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Pergaminho da Verdade Cósmica",
            preco: "T$ 9.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Menor",
            descricao: " Pergaminho (consumível). Abrir exige Vontade (CD 40). Falha: debilidade (permanente). Sucesso: lança Intervenção Divina (sem custo de PM). Pergaminho se desfaz.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Pérola da Nulificação Mágica",
            preco: "T$ 3.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Menor",
            descricao: " Pérola (consumível). Ativar (Ação Mov.) produz efeito básico de Campo Antimagia por 1 cena. Uso único.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Pingente da Dor Partilhada",
            preco: "T$ 15.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Pingente. Quando um aliado em alcance curto se fere, pode gastar 2 PM; o aliado não sofre o dano, mas você perde PV em quantidade igual ao dano (após RD/etc. do aliado).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Saco dos Ventos Silenciosos",
            preco: "T$ 3.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Menor",
            descricao: " Saco. Permite lançar Criar Elementos (apenas ar), Queda Suave e Suporte Ambiental (apenas contra calor). Se já conhece as magias, custo -1 PM.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Sandálias de Valkaria",
            preco: "T$ 12.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: "Sandálias. Permite andar sobre qualquer superfície (ignora terreno difícil, anda sobre líquidos). Recebe +5 em Acrobacia (terreno escorregadio) e Atletismo (escalar).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Tomo da Técnica Definitiva",
            preco: "T$ 30.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Maior",
            descricao: " Tomo. Estudar (ação entre aventuras). Seu Golpe Pessoal recebe +2 PM em efeitos (não contam no limite e não aumentam o custo). Aplica-se a apenas um Golpe Pessoal.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Tomo dos Companheiros",
            preco: "T$ 45.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Maior",
            descricao: " Tomo. Pode gastar (Ação Completa, 3 PM) para convocar um parceiro veterano (à escolha), que surge adjacente. Dura até o fim do dia ou até conjurar outro.",
            fonte: "Heróis de Arton"
        },

        // (Itens de Deuses de Arton - Itens Litúrgicos 2)
        {
            nome: "Armadura dos Neladriel",
            preco: "T$ 65.000",
            bonus_defesa: "+8",
            penalidade_armadura: "–4",
            espacos: "5",
            categoria: "Item Mágico",
            tipo: "Armadura Mágica Maior",
            descricao: "Meia armadura reforçada (+1) guardiã (+4) de mitral (penalidade -2). Conta como armadura leve para Destreza na Defesa e habilidades (como Evasão).",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Varinha da Generosidade Wynna",
            preco: "T$ 30.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: " Varinha arcana poderosa (+2 CD) de madeira Tollon. Se devoto de Wynna: fornece RD 5. Quando lança magia, transfere mana para aliado em alcance curto (1 PM temporário por círculo, máx. custo da magia). 1/dia por aliado.",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Machado Lamnoriano Thwor",
            preco: "T$ 22.500",
            dano: "1d12",
            critico: "x3",
            alcance: "—",
            tipo_dano: "Corte",
            espacos: "2",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Média",
            descricao: "Machado ancestral dos anões que causa +1d6 de dano adicional contra lefeu.",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Espada Imaculada Thyatis",
            preco: "T$ 45.000",
            dano: "1d8",
            critico: "19",
            alcance: "—",
            tipo_dano: "Corte",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Média",
            descricao: " Espada longa precisa (crit +1). Se devoto de Thyatis: torna-se formidável (+2). Pode gastar 2 PM (cena) para virar plasma vermelho: ataque +4, dano aumenta 2 passos (fogo não letal) e ignora 20 RD.",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Pira Póstera Thyatis",
            preco: "T$ 15.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: " Se devoto de Thyatis: +1 Sabedoria (após 1 dia). 1/dia, pode rolar novamente um teste de Iniciativa, Percepção ou resistência.",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Botas Inquietas Valkaria",
            preco: "T$ 15.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: " Se devoto de Valkaria: +1 Constituição (após 1 dia) e +5 Fortitude (marcha forçada). Ao fazer investida, recebe 1 PM temporário cumulativo (máx. 3 PM/patamar por dia).",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Mangual Aventureiro Valkaria",
            preco: "T$ 40.000",
            dano: "1d8",
            critico: "x2",
            alcance: "—",
            tipo_dano: "Impacto",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            descricao: "Média. Mangual certeiro (+1 ataque) e cruel (+1 dano). Se devoto de Valkaria: torna-se dançarino (flutua) e formidável (+2). Se estiver em lugar inédito, dano aumenta 2 passos.",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Argolas Místicas Wynna",
            preco: "T$ 25.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: " Vestuário. Se devoto de Wynna: ao lançar magia, recebe +2 PM para aprimoramentos (pode exceder limite). Pode ser usada sobre outras roupas.",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Maça Monstruosa Megalokk",
            preco: "T$ 27.000",
            dano: "1d8",
            critico: "x2",
            alcance: "—",
            tipo_dano: "Impacto",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Média",
            descricao: "Maça que causa dano devastador, +2d6 de dano adicional.",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Alguma Coisa de Nimb...",
            preco: "T$ 54.000",
            dano: "3d8",
            critico: "x2",
            alcance: "—",
            tipo_dano: "Variável",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            descricao: "Média. Forma variável. Se devoto de Nimb: Arma simples (uma mão), formidável (+2), veloz (ataque extra). Dano 3d8 (1d3: 1=corte, 2=impacto, 3=perfuração). Pode gastar 1 PM ao acertar: para cada dado de dano ímpar, rola um dado extra (repetindo se for ímpar).",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Jarro das Profundezas Oceano",
            preco: "T$ 9.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Menor",
            descricao: ". Se devoto de Oceano: 1 PM cria água salgada; 1 PM cone 6m de água (derruba, Ref CD Sab); 2 PM invoca elemental da água (parceiro destruidor/frio ou guardião veterano) por 1 cena.",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Tridente Aquoso Oceano",
            preco: "T$ 54.000",
            dano: "1d8",
            critico: "x2",
            alcance: "—",
            tipo_dano: "Perfuração",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            descricao: "Tridente que controla água, permitindo respirar debaixo d'água.",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Adaga Ofídica Sszzaas",
            preco: "T$ 36.000",
            dano: "1d4",
            critico: "19",
            alcance: "Curto",
            tipo_dano: "Perfuração",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            descricao: "Média. Adaga cruel (+1 dano). Possui veneno (peçonha concentrada, reposta magicamente). Se devoto de Sszzaas: torna-se formidável (+2) e ignora imunidade a veneno. Se Patamar Campeão+, veneno vira peçonha potente.",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Bordão Sabichão Tanna-Toh",
            preco: "T$ 72.000",
            dano: "1d6/1d6",
            critico: "x2",
            alcance: "—",
            tipo_dano: "Impacto",
            espacos: "2",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            descricao: "Maior. Bordão maciço (crit +1). Se devoto de Tanna-Toh: torna-se formidável (+2) e piedoso (+1d6 luz). Pode gastar 2 PM para somar Sabedoria a um teste de perícia.",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Escrivaninha Consagrada Tanna-Toh",
            preco: "T$ 9.000",
            espacos: "2",
            categoria: "Item Mágico",
            tipo: "Acessório Menor",
            descricao: ". Se devoto de Tanna-Toh: Estudar 1h dobra bônus de treino em perícia (Int/Sab) por 1 dia. 1/aventura, recebe 1d3 pergaminhos que poderia criar.",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Vestido Noturno Tenebra",
            preco: "T$ 21.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: " Conta como Veste de Seda aprimorada (+1) cravejada de gemas (+2 Enganação). Total +2 Enganação/Reflexos. Se devoto de Tenebra: Pode gastar (Ação Padrão, 5 PM) para ficar invisível (veja magia Invisibilidade) até o fim da cena ou atacar.",
            fonte: "Deuses de Arton"
        },
        // (Itens de Deuses de Arton - Itens Litúrgicos 1)
        {
            nome: "Espada Monástica Khalmyr",
            preco: "T$ 54.000",
            dano: "1d8",
            critico: "19",
            alcance: "—",
            tipo_dano: "Corte",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Média",
            descricao: " Espada longa certeira (+1 ataque). Se devoto de Khalmyr: pode gastar (Ação Mov.) para ler versículo e fazer teste de Religião (CD 20). Sucesso: torna-se formidável (+2). Por 10+: gera efeito Oração. Por 20+: torna-se magnífica (+4). Dura pela cena.",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Armadura do Julgamento Khalmyr",
            preco: "T$ 54.000",
            bonus_defesa: "+11",
            penalidade_armadura: "–5",
            espacos: "5",
            categoria: "Item Mágico",
            tipo: "Armadura Mágica Média",
            descricao: "Armadura completa polida (+5 Def 1ª rodada) e reforçada (+1). Se devoto de Khalmyr: torna-se defensora (+2). Quando criatura ataca, pode gastar 2 PM para deixá-la pasma (1 rodada, 1/cena) e frustrada (Vontade CD Sab reduz para frustrada). Se Patamar Campeão+, torna-se guardiã (+4).",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Caldeirão da Vida Lena",
            preco: "T$ 25.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: " Panela de ferro. Gastando 1h e T$ 5 (Ofício Cozinheiro CD 15), cria comida para 5 pessoas. Comensais recebem +2 em TR por 1 dia (devotos de Lena recebem +10 PV temp.). Pode acumular com Prato Especial (+5 CD).",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Alabarda da Coragem Lin-Wu",
            preco: "T$ 36.000",
            dano: "1d10",
            critico: "x3",
            alcance: "—",
            tipo_dano: "Corte/Perfuração",
            espacos: "2",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Média",
            descricao: " Alabarda certeira (+1 ataque) e precisa (crit +1). Se devoto de Lin-Wu: torna-se formidável (+2) e fornece +5 Iniciativa. Se for o primeiro a agir, recebe 2 PM temporários por nível (cena).",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Katana da Determinação Lin-Wu",
            preco: "T$ 54.000",
            dano: "1d8/1d10",
            critico: "19",
            alcance: "—",
            tipo_dano: "Corte",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Média",
            descricao: "Katana que fortalece a vontade, concedendo +2 em testes de Vontade.",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Instrumento da Alegria Marah",
            preco: "T$ 10.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: " Instrumento musical aprimorado (+1). Se treinado em Atuação, pode gastar (Ação Padrão, 1 PM) para dar +2 em perícias para aliados em alcance médio (cena). Se devoto de Marah e usar Música, ativa como ação livre.",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Véu Diáfano Marah",
            preco: "T$ 13.500",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: " Conta como Veste de Seda aprimorada (+1 Reflexos). Se devoto de Marah: fornece +1 Carisma (após 1 dia) e +2 Defesa (cumulativo).",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Colar de Presas Megalokk",
            preco: "T$ 21.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: " Colar. Fornece +2 Intimidação e -2 Diplomacia. Se devoto de Megalokk: fornece +2 em ataque e dano com armas naturais.",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Machado da Bravura Arsenal",
            preco: "T$ 25.000",
            dano: "1d8",
            critico: "x3",
            alcance: "—",
            tipo_dano: "Corte",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Média",
            descricao: "Machado que inspira coragem, concedendo +1 em Intimidação aos aliados próximos.",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Alfange Dourado Azgher",
            preco: "T$ 36.000",
            dano: "2d6",
            critico: "18",
            alcance: "—",
            tipo_dano: "Corte",
            espacos: "2",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Média",
            descricao: " Alfange maciço (crit +1, -2 ataque, 2d6 dano). Se devoto de Azgher: pode gastar (Ação Completa) para sacrificar ouro. Remove penalidade e dá bônus (dia): T$ 10 (+2), T$ 100 (+3), T$ 500 (+4), T$ 1.000 (+5).",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Cimitarra Solar Azgher",
            preco: "T$ 54.000",
            dano: "1d6",
            critico: "18",
            alcance: "—",
            tipo_dano: "Corte",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Maior",
            descricao: "Cimitarra que brilha com luz solar, causando +1d6 de dano de fogo contra lefeu.",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Adaga Sorrateira Hyninn",
            preco: "T$ 22.500",
            dano: "1d4",
            critico: "19",
            alcance: "Curto",
            tipo_dano: "Perfuração",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Menor",
            descricao: "Adaga. Se devoto de Hyninn: torna-se formidável (+2). Na 1ª vez na cena que passar em Enganação ou Furtividade, recebe +5 em um teste à escolha (cena). Se Patamar Campeão+, torna-se magnífica (+4).",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Cubo Armadilha Hyninn",
            preco: "T$ 25.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Médio",
            descricao: " Se devoto de Hyninn: Pode gastar (Ação Padrão) para armar o cubo em espaço curto (invisível). 1º inimigo a entrar sofre 10d8 corte (Ref CD Int reduz). Dados '1' ou '8' explodem (rolam de novo). Pode ser percebido com Investigação (CD 30 + Int).",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Lança da Dominação Kallyadranoch",
            preco: "T$ 45.000",
            dano: "1d6",
            critico: "x3",
            alcance: "Curto",
            tipo_dano: "Perfuração",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Média",
            descricao: " Lança maciça (crit +1). Se devoto de Kally: +1 ataque/dano e +1d10 dano elemental (ácido/eletricidade/fogo/frio) à escolha. Bônus aumenta +1 a cada nível (máx +6). Se ficar 1 mês longe, bônus cai.",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Ossos Dracônicos Kallyadranoch",
            preco: "T$ 90.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Maior",
            descricao: " Acessório de ossos. Fornece +4 Intimidação e -2 Diplomacia. Se devoto de Kally: fornece +2 Força, +2 Carisma e +2 na CD de todas as habilidades.",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Cilício Vivo Aharadak",
            preco: "T$ 37.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Maior",
            descricao: " Item vestido (cinta com anzóis). Reduz PV máx em 1/nível. Fornece +1 em todos os testes (cumulativo). Se devoto de Aharadak: bônus +2. Se Patamar Campeão+, aumenta PM máx em +1/nível.",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Coração Corrompido Aharadak",
            preco: "T$ 45.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Maior",
            descricao: " Baú com coração. Se devoto de Aharadak sacrificar criatura inteligente, item absorve dano/condições do devoto (até 100 PV e 3 condições). Funciona à distância.",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Coroa de Flores Allihanna",
            preco: "T$ 9.000",
            espacos: "1",
            categoria: "Item Mágico",
            tipo: "Acessório Menor",
            descricao: ". Tiara. Se devoto de Allihanna: +1 Sabedoria (após 1 dia) e magias com efeitos numéricos variáveis recebem +1 por dado.",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Cajado das Matas Allihanna",
            preco: "T$ 27.000",
            dano: "1d6/1d6",
            critico: "x2",
            alcance: "—",
            tipo_dano: "Impacto",
            espacos: "2",
            categoria: "Item Mágico",
            tipo: "Arma Mágica Menor",
            descricao: "Bordão. Se devoto de Allihanna: torna-se formidável (+2) e fornece +2 Defesa ao ar livre (cumulativo). Se Patamar Campeão+, torna-se magnífico (+4).",
            fonte: "Deuses de Arton"
        },
        {
            nome: "Tapeçaria da Guerra Arsenal",
            preco: "T$ 35.000",
            espacos: "2",
            categoria: "Item Mágico",
            tipo: "Acessório Maior",
            descricao: " Ferramenta de Guerra aprimorada (+2). Se devoto de Arsenal: pode gastar (Ação Completa, CD 20 Guerra). Sucesso: bônus em Guerra aplica a todos os testes de perícia de aliados em alcance curto (cena). Sucesso por 20+: aliados recebem ação padrão extra.",
            fonte: "Deuses de Arton"
        }



    ]


};

window.itensMagicosData = itensMagicosData;



// itensmagicos.js
// Baseado na Tabela 8-14: Acessórios Médios (p. 342–343, Livro Básico Tormenta 20)

