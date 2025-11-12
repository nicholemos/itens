// itens.js

const itensData = {
    "item": [
        // ---------- MUNIÇÕES (Tabela 3-4) ----------
        {
            "nome": "Balas (20)",
            "preco": "T$ 20",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Munição",
            "descricao": "Munição para pistola ou mosquete. Recarregar é uma ação padrão. (p. 151)"
        },
        {
            "nome": "Flechas (20)",
            "preco": "T$ 1",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Munição",
            "descricao": "Munição para arco curto ou arco longo. Recarregar é uma ação livre. (p. 151)"
        },
        {
            "nome": "Pedras (20)",
            "preco": "T$ 0,5",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Munição",
            "descricao": "Munição para funda. Recarregar é uma ação de movimento. (p. 151)"
        },
        {
            "nome": "Virotes (20)",
            "preco": "T$ 2",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Munição",
            "descricao": "Munição para besta leve (ação de movimento) ou besta pesada (ação padrão). (p. 151)"
        },

        // ---------- EQUIPAMENTO DE AVENTURA (Tabela 3-5) ----------
        {
            "nome": "Água benta",
            "preco": "T$ 10",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Um frasco de água sagrada. Causa 2d10 de dano de luz em mortos-vivos ou abissais em alcance curto (Reflexos CD Sab reduz à metade). (p. 161)"
        },
        {
            "nome": "Algemas",
            "preco": "T$ 15",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Um par de algemas para criaturas Médias. Escapar exige Acrobacia (CD 30) ou Força (CD 25). (p. 161)"
        },
        {
            "nome": "Arpéu",
            "preco": "T$ 5",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Um gancho de aço amarrado na ponta de uma corda. Prender exige Pontaria (CD 15). Fornece +5 em Atletismo para escalar. (p. 161)"
        },
        {
            "nome": "Bandoleira de poções",
            "preco": "T$ 20",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Um cinto de couro com bolsos. Se estiver vestindo, pode sacar itens alquímicos e poções como ação livre. (p. 161)"
        },
        {
            "nome": "Barraca",
            "preco": "T$ 10",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Esta barraca de lona conta como um saco de dormir para duas pessoas e fornece +2 em testes de Sobrevivência para acampar. (p. 161)"
        },
        {
            "nome": "Corda",
            "preco": "T$ 1",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Um rolo com 10 metros de corda de cânhamo. Arrebentar a corda exige 2 pontos de dano de corte ou Força (CD 20). (p. 161)"
        },
        {
            "nome": "Espelho",
            "preco": "T$ 10",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Este pequeno espelho possui diversas utilidades: observar cantos, fazer sinais de luz, etc. (p. 161)"
        },
        {
            "nome": "Lampião",
            "preco": "T$ 7",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Ilumina um raio com 15m. Dura uma cena. (p. 161)"
        },
        {
            "nome": "Mochila",
            "preco": "T$ 2",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Uma bolsa de lona com tiras para ser carregada nas costas. Não conta como item vestido. (p. 161)"
        },
        {
            "nome": "Mochila de aventureiro",
            "preco": "T$ 50",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Feita de couro resistente, esta mochila é repleta de bolsos. Aumenta sua capacidade de carga em 2 espaços. (p. 161)"
        },
        {
            "nome": "Óleo",
            "preco": "T$ 0,1",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Um frasco com óleo inflamável. Pode ser atirado. Se o alvo sofrer dano de fogo, sofre 1d6 de dano extra e fica em chamas. (p. 161)"
        },
        {
            "nome": "Organizador de pergaminhos",
            "preco": "T$ 25",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Um estojo de madeira ou couro rígido. Se estiver vestindo, pode sacar pergaminhos como uma ação livre. (p. 163)"
        },
        {
            "nome": "Pé de cabra",
            "preco": "T$ 2",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Esta barra de ferro fornece +5 em testes de Força para abrir portas, janelas e baús fechados. Pode ser usado como clava. (p. 163)"
        },
        {
            "nome": "Saco de dormir",
            "preco": "T$ 1",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Um colchão com uma coberta fina. Necessário para descanso normal ao relento. (p. 163)"
        },
        {
            "nome": "Símbolo sagrado",
            "preco": "T$ 5",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Um medalhão de madeira ou metal com o símbolo de uma divindade. Se for devoto, recebe +1 em testes de resistência. (p. 163)"
        },
        {
            "nome": "Tocha",
            "preco": "T$ 0,1",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Ilumina um raio de 9m e dura uma cena. Pode ser usada como uma arma simples leve (dano 1d4 impacto mais 1 de fogo). (p. 163)"
        },
        {
            "nome": "Vara de madeira (3m)",
            "preco": "T$ 0,2",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Uma haste com 3m de comprimento. Útil para alcançar pontos distantes. (p. 163)"
        },

        // ---------- FERRAMENTAS (Tabela 3-5) ----------
        {
            "nome": "Alaúde élfico",
            "preco": "T$ 300",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Ferramenta",
            "descricao": "Instrumento musical. Permite usar a habilidade Inspiração como uma ação de movimento. (p. 164)"
        },
        {
            "nome": "Coleção de livros",
            "preco": "T$ 75",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Ferramenta",
            "descricao": "Fornece +1 em Conhecimento, Guerra, Misticismo, Nobreza ou Religião (definido na compra). (p. 164)"
        },
        {
            "nome": "Equipamento de viagem",
            "preco": "T$ 10",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Ferramenta",
            "descricao": "Saco com pederneira, panelas, anzol, etc. Evita penalidade de -5 em testes de Sobrevivência para acampar. (p. 164)"
        },
        {
            "nome": "Estojo de disfarces",
            "preco": "T$ 50",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Ferramenta",
            "descricao": "Cosméticos, tintas para cabelo e próteses. Evita penalidade de -5 em testes de Enganação para disfarce. (p. 164)"
        },
        {
            "nome": "Flauta mística",
            "preco": "T$ 150",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Ferramenta",
            "descricao": "Instrumento musical. Um bardo que empunhe este item aumenta a CD para resistir às magias lançadas por ele em +1. (p. 164)"
        },
        {
            "nome": "Gazua",
            "preco": "T$ 5",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Ferramenta",
            "descricao": "Uma barra fina de ferro. Evita penalidade de -5 em testes de Ladinagem para abrir fechaduras. (p. 164)"
        },
        {
            "nome": "Instrumentos de Ofício",
            "preco": "T$ 30",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Ferramenta",
            "descricao": "Kit para uma perícia de Ofício. Um personagem sem os instrumentos sofre –5 nessa perícia. (p. 164)"
        },
        {
            "nome": "Instrumento musical",
            "preco": "T$ 35",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Ferramenta",
            "descricao": "Um instrumento típico, como um bandolim, flauta ou lira. (p. 164)"
        },
        {
            "nome": "Luneta",
            "preco": "T$ 100",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Ferramenta",
            "descricao": "Cilindro metálico com lentes. Fornece +5 em testes de Percepção para observar coisas em alcance longo ou além. (p. 164)"
        },
        {
            "nome": "Maleta de medicamentos",
            "preco": "T$ 50",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Ferramenta",
            "descricao": "Caixa com ervas, unguentos, bandagens. Evita penalidade de -5 em Cura. (p. 164)"
        },
        {
            "nome": "Sela",
            "preco": "T$ 20",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Ferramenta",
            "descricao": "Peça de couro para montaria. Evita penalidade de -5 em testes de Cavalgar. (p. 164)"
        },
        {
            "nome": "Tambor das profundezas",
            "preco": "T$ 80",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Ferramenta",
            "descricao": "Instrumento musical anão. Dobra o alcance da habilidade Inspiração e de qualquer Música de Bardo. (p. 164)"
        },

        // ---------- VESTUÁRIO (Tabela 3-5) ----------
        {
            "nome": "Andrajos de aldeão",
            "preco": "T$ 1",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Roupas típicas de camponês. +2 em testes de Investigação para interrogar, mas -2 em perícias de Carisma social. (p. 159)"
        },
        {
            "nome": "Bandana",
            "preco": "T$ 5",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Lenço de bandido/pirata. Fornece +1 em Intimidação. (p. 159)"
        },
        {
            "nome": "Botas reforçadas",
            "preco": "T$ 20",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Botas de cano alto. Aumentam seu deslocamento em +1,5m em terreno difícil. (p. 159)"
        },
        {
            "nome": "Camisa bufante",
            "preco": "T$ 25",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Blusa colorida, com mangas e golas longas. Fornece +1 em Atuação. (p. 159)"
        },
        {
            "nome": "Capa esvoaçante",
            "preco": "T$ 25",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Capa de seda chamativa. Fornece +1 em Enganação. (p. 159)"
        },
        {
            "nome": "Capa pesada",
            "preco": "T$ 15",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Capa de couro grossa e resistente. Fornece +1 em Fortitude. (p. 159)"
        },
        {
            "nome": "Casaco longo",
            "preco": "T$ 20",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Casaco quente e pesado. Fornece +5 em Fortitude (frio), mas impõe penalidade de armadura de –2. (p. 159)"
        },
        {
            "nome": "Chapéu arcano",
            "preco": "T$ 50",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Chapéu pontudo. Fornece +1 ponto de mana (apenas Arcanistas). (p. 159)"
        },
        {
            "nome": "Enfeite de elmo",
            "preco": "T$ 15",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Adorno chamativo (plumas, asas, etc). Fornece resistência a medo +2. (p. 159)"
        },
        {
            "nome": "Farrapos de ermitão",
            "preco": "T$ 1",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Trapos com plantas. -2 em Diplomacia e Investigação (interrogar), +2 em Adestramento. (p. 159)"
        },
        {
            "nome": "Gorro de ervas",
            "preco": "T$ 75",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Chapéu preenchido com ervas. Fornece +1 em Vontade. (p. 159)"
        },
        {
            "nome": "Luva de pelica",
            "preco": "T$ 5",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Luvas delicadas. Fornecem +1 em Ladinagem. (p. 159)"
        },
        {
            "nome": "Manopla",
            "preco": "T$ 10",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Luva metálica. Ataques desarmados causam dano letal. Conta como uma arma para melhorias/encantos. (p. 159)"
        },
        {
            "nome": "Manto camuflado",
            "preco": "T$ 12",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Manto para terreno específico. Fornece +2 em Furtividade no terreno correto. (p. 159)"
        },
        {
            "nome": "Manto eclesiástico",
            "preco": "T$ 20",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Manto típico de igrejas e templos. Fornece +1 em Religião. (p. 159)"
        },
        {
            "nome": "Robe místico",
            "preco": "T$ 50",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Manto longo, adornado com temas arcanos. Fornece +1 em Misticismo. (p. 159)"
        },
        {
            "nome": "Sapatos de camurça",
            "preco": "T$ 8",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Leves e resistentes. Fornecem +1 em Acrobacia. (p. 159)"
        },
        {
            "nome": "Tabardo",
            "preco": "T$ 10",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Peça de tecido com heráldica. Fornece +1 em Diplomacia. (p. 159)"
        },
        {
            "nome": "Traje da corte",
            "preco": "T$ 100",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Roupas de luxo. Evita penalidade de -5 em perícias de Carisma em ambientes aristocráticos. (p. 159)"
        },
        {
            "nome": "Traje de viajante",
            "preco": "T$ 10",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Roupa padrão de aventureiros. Não ocupa espaço. (p. 159)"
        },
        {
            "nome": "Veste de seda",
            "preco": "T$ 25",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Roupa leve e elegante. Fornece +1 em Reflexos. (p. 159)"
        },

        // ---------- ITENS ESOTÉRICOS (Tabela 3-5) ----------
        {
            "nome": "Bolsa de pó",
            "preco": "T$ 300",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Esotérico",
            "descricao": "Pó de flores da Pondsmânia. +2 PM para aprimorar magias de encantamento ou ilusão. (p. 161)"
        },
        {
            "nome": "Cajado arcano",
            "preco": "T$ 1.000",
            "espacos": "2",
            "categoria": "Item Geral",
            "tipo": "Esotérico",
            "descricao": "Cajado com runas. Limite de PM e CD de magias arcanas +1. (Duas mãos). Pode ser usado como bordão. (p. 161)"
        },
        {
            "nome": "Cetro elemental",
            "preco": "T$ 750",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Esotérico",
            "descricao": "Cetro com gema (ácido, eletricidade, fogo ou frio). Magias de dano desse tipo causam +1 dado. (p. 161)"
        },
        {
            "nome": "Costela de lich",
            "preco": "T$ 300",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Esotérico",
            "descricao": "Varinha de osso. Magias causam +1d6 dano de trevas. Você não recupera PV por cura mágica. (p. 161)"
        },
        {
            "nome": "Dedo de ente",
            "preco": "T$ 200",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Esotérico",
            "descricao": "Varinha de árvore senciente. Ao gastar 1 PM ou mais, role 1d4. Se 4, recupera 1 PM. (p. 161)"
        },
        {
            "nome": "Luva de ferro",
            "preco": "T$ 150",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Esotérico",
            "descricao": "Dedais interligados. Bônus de Defesa/Resistência de magias arcanas pessoais +1. (p. 161)"
        },
        {
            "nome": "Medalhão de prata",
            "preco": "T$ 750",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Esotérico",
            "descricao": "Medalhão com runa. Custo de magias de alcance pessoal diminui em -1 PM. (p. 161)"
        },
        {
            "nome": "Orbe cristalino",
            "preco": "T$ 750",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Esotérico",
            "descricao": "Esfera perfeita. Limite de PM para magias arcanas +1. (p. 161)"
        },
        {
            "nome": "Tomo hermético",
            "preco": "T$ 1.500",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Esotérico",
            "descricao": "Livro de tratados. CD para resistir a magias arcanas de uma escola específica +2. (p. 161)"
        },
        {
            "nome": "Varinha arcana",
            "preco": "T$ 100",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Esotérico",
            "descricao": "Varinha com runas. CD para resistir a magias arcanas +1. (p. 161)"
        },

        // ---------- ITENS ALQUÍMICOS (PREPARADOS) ----------
        {
            "nome": "Ácido",
            "preco": "T$ 10",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Frasco de vidro. Causa 2d4 de dano de ácido (Reflexos CD Des reduz à metade). (p. 160)"
        },
        {
            "nome": "Bálsamo restaurador",
            "preco": "T$ 10",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Pasta de ervas. Recupera 2d4 PV. (p. 160)"
        },
        {
            "nome": "Bomba",
            "preco": "T$ 50",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Granada rudimentar. Causa 6d6 de dano de impacto em área de 3m (Reflexos CD Des reduz à metade). (p. 160)"
        },
        {
            "nome": "Cosmético",
            "preco": "T$ 30",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Perfume ou maquiagem. Fornece +2 em testes de perícias baseadas em Carisma até o fim da cena. (p. 160)"
        },
        {
            "nome": "Elixir do amor",
            "preco": "T$ 100",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Humanoide que beba fica enfeitiçado pela primeira criatura que vir (Vontade CD Car anula). Dura 1d3 dias. (p. 160)"
        },
        {
            "nome": "Essência de mana",
            "preco": "T$ 50",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Poção de ervas raras. Recupera 1d4 pontos de mana. (p. 160)"
        },
        {
            "nome": "Fogo alquímico",
            "preco": "T$ 10",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Frasco de cerâmica. Causa 1d6 de dano de fogo e deixa em chamas (Reflexos CD Des reduz à metade e evita chamas). (p. 160)"
        },
        {
            "nome": "Pó do desaparecimento",
            "preco": "T$ 100",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Cobre criatura ou objeto, tornando-o invisível por 2d6 rodadas. (p. 160)"
        },

        // ---------- ITENS ALQUÍMICOS (CATALISADORES) ----------
        {
            "nome": "Baga-de-fogo",
            "preco": "T$ 30",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Catalisador. Adiciona +1d6 de dano de fogo a magias. (p. 160)"
        },
        {
            "nome": "Dente-de-dragão",
            "preco": "T$ 45",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Catalisador. Aumenta o dano de magias em um dado do mesmo tipo. (p. 160)"
        },
        {
            "nome": "Essência abissal",
            "preco": "T$ 150",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Catalisador. Aumenta os dados de dano de magias de fogo em uma categoria (ex: d6 para d8). (p. 160)"
        },
        {
            "nome": "Líquen lilás",
            "preco": "T$ 30",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Catalisador. Adiciona +1d6 de dano de frio a magias. (p. 160)"
        },
        {
            "nome": "Musgo púrpura",
            "preco": "T$ 45",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Catalisador. Fornece +2 na CD de magias de ilusão. (p. 160)"
        },
        {
            "nome": "Ossos de monstro",
            "preco": "T$ 45",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Catalisador. Fornece +2 na CD de magias de necromancia. (p. 160)"
        },
        {
            "nome": "Pó de cristal",
            "preco": "T$ 30",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Catalisador. Diminui o custo de magias de encantamento em –1 PM. (p. 160)"
        },
        {
            "nome": "Pó de giz",
            "preco": "T$ 30",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Catalisador. Diminui o custo de magias de convocação em –1 PM. (p. 160)"
        },
        {
            "nome": "Ramo verdejante",
            "preco": "T$ 45",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Catalisador. Aumenta a cura de magias em +1 PV por dado. (p. 160)"
        },
        {
            "nome": "Saco de sal",
            "preco": "T$ 45",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Catalisador. Fornece +2 na CD de magias de abjuração. (p. 160)"
        },
        {
            "nome": "Seixo de âmbar",
            "preco": "T$ 30",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Catalisador. Diminui o custo de magias de transmutação em –1 PM. (p. 160)"
        },
        {
            "nome": "Terra de cemitério",
            "preco": "T$ 30",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Catalisador. Adiciona +1d6 de dano de trevas a magias. (p. 160)"
        },

        // ---------- ITENS ALQUÍMICOS (VENENOS) ----------
        {
            "nome": "Beladona",
            "preco": "T$ 1.500",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Veneno (Ingestão). Vítima fica paralisada (lenta) por 3 rodadas (Fort CD Int+5 anula/reduz). (p. 161)"
        },
        {
            "nome": "Bruma sonolenta",
            "preco": "T$ 150",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Veneno (Inalação). Vítima fica inconsciente (enjoada por 1 rodada) (Fort CD Int anula/reduz). (p. 161)"
        },
        {
            "nome": "Cicuta",
            "preco": "T$ 60",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Veneno (Ingestão). Perde 1d12 PV por rodada durante 3 rodadas (Fort CD Int reduz para 1d12 PV). (p. 161)"
        },
        {
            "nome": "Essência de sombra",
            "preco": "T$ 100",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Veneno (Contato). Vítima fica debilitada (fraca) (Fort CD Int anula/reduz). (p. 161)"
        },
        {
            "nome": "Névoa tóxica",
            "preco": "T$ 30",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Veneno (Inalação). Perde 1d12 PV por rodada durante 3 rodadas (Fort CD Int reduz para 1d12 PV). (p. 161)"
        },
        {
            "nome": "Peçonha comum",
            "preco": "T$ 15",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Veneno (Contato). Perde 1d12 PV (Fort CD Int anula). (p. 161)"
        },
        {
            "nome": "Peçonha concentrada",
            "preco": "T$ 90",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Veneno (Contato). Perde 1d12 PV por rodada durante 3 rodadas (Fort CD Int reduz para 1d12 PV). (p. 161)"
        },
        {
            "nome": "Peçonha potente",
            "preco": "T$ 600",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Veneno (Contato). Perde 2d12 PV por rodada durante 3 rodadas (Fort CD Int reduz para 2d12 PV). (p. 161)"
        },
        {
            "nome": "Pó de lich",
            "preco": "T$ 3.000",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Veneno (Ingestão). Perde 4d12 PV por rodada durante 5 rodadas (Fort CD Int+5 reduz para 4d12 PV). (p. 161)"
        },
        {
            "nome": "Riso de Nimb",
            "preco": "T$ 150",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Veneno (Inalação). Vítima fica confusa (lenta por 1 rodada) (Fort CD Int anula/reduz). (p. 161)"
        },

        // ---------- ALIMENTAÇÃO (Tabela 3-5) ----------
        {
            "nome": "Batata valkariana",
            "preco": "T$ 2",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alimentação",
            "descricao": "Prato especial. Fornece +1d6 num único teste a sua escolha até o fim do dia. (p. 163)"
        },
        {
            "nome": "Gorad quente",
            "preco": "T$ 18",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alimentação",
            "descricao": "Prato especial. Fornece +2 PM temporários. (p. 163)"
        },
        {
            "nome": "Macarrão de Yuvalin",
            "preco": "T$ 6",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alimentação",
            "descricao": "Prato especial. Fornece +5 PV temporários. (p. 163)"
        },
        {
            "nome": "Prato do aventureiro",
            "preco": "T$ 1",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alimentação",
            "descricao": "Prato especial. Aumenta a recuperação de PV em +1 por nível na próxima noite de sono. (p. 163)"
        },
        {
            "nome": "Ração de viagem (por dia)",
            "preco": "T$ 0,5",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alimentação",
            "descricao": "Alimentos conservados que alimentam uma pessoa por um dia. (p. 163)"
        },
        {
            "nome": "Refeição comum",
            "preco": "T$ 0,3",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alimentação",
            "descricao": "Refeição típica em taverna (pão, queijo, cozido, bebida). (p. 163)"
        },
        {
            "nome": "Sopa de peixe",
            "preco": "T$ 1",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alimentação",
            "descricao": "Prato especial. Aumenta a recuperação de PM em +1 por nível na próxima noite de sono. (p. 163)"
        },

        // ---------- ANIMAIS E VEÍCULOS (Tabela 3-5) ----------
        {
            "nome": "Alforje",
            "preco": "T$ 30",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Animal",
            "descricao": "Sacos de couro para sela. Permitem que uma montaria carregue até 10 espaços. (p. 163)"
        },
        {
            "nome": "Cão de caça",
            "preco": "T$ 150",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Animal",
            "descricao": "Parceiro perseguidor (iniciante) ou montaria (Pequeno/Minúsculo). (p. 163)"
        },
        {
            "nome": "Cavalo",
            "preco": "T$ 75",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Animal",
            "descricao": "Parceiro montaria (iniciante). Deslocamento 12m, +1 ação de movimento (deslocar). (p. 163)"
        },
        {
            "nome": "Cavalo de guerra",
            "preco": "T$ 400",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Animal",
            "descricao": "Montaria (parceiro iniciante). Não se assusta em combate. (p. 163)"
        },
        {
            "nome": "Pônei",
            "preco": "T$ 5",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Animal",
            "descricao": "Montaria (iniciante) para raças Pequenas. (p. 163)"
        },
        {
            "nome": "Pônei de guerra",
            "preco": "T$ 30",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Animal",
            "descricao": "Montaria (iniciante) para raças Pequenas. Não se assusta em combate. (p. 163)"
        },
        {
            "nome": "Trobo",
            "preco": "T$ 60",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Animal",
            "descricao": "Ave-touro. Montaria (iniciante). Deslocamento 9m, +1 ação de movimento (deslocar), +1 em testes de resistência. (p. 163)"
        },
        {
            "nome": "Balão goblin",
            "preco": "T$ 200",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Veículo",
            "descricao": "Engenho voador. Deslocamento voo 12m, 100 PV, Defesa 5. Carrega 160 espaços. (p. 163)"
        },
        {
            "nome": "Carroça",
            "preco": "T$ 150",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Veículo",
            "descricao": "Veículo terrestre puxado por 2 cavalos ou 1 trobo. Deslocamento 9m, 50 PV, Defesa 8. Carrega 80 espaços. (p. 163)"
        },
        {
            "nome": "Carruagem",
            "preco": "T$ 500",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Veículo",
            "descricao": "Similar à carroça, mas com cabine fechada (cobertura leve). (p. 163)"
        },
        {
            "nome": "Canoa",
            "preco": "T$ 70",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Veículo",
            "descricao": "Embarcação simples de tronco de árvore. Mesmas estatísticas de carroça, mas com deslocamento de natação. (p. 163)"
        },
        {
            "nome": "Veleiro",
            "preco": "T$ 10.000",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Veículo",
            "descricao": "Navio de viagem com três mastros. (p. 163)"
        },
        // (Itens de Ameaças de Arton)
        {
            nome: "Caixa de Voz",
            preco: "T$ 50",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Este complexo mecanismo tem 1d4 cargas: quando usa uma habilidade de bardo ou nobre com alcance curto ou médio, você pode gastar uma carga para aumentar seu alcance em um passo. Não pode ser fabricado.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Corda de Teia",
            preco: "T$ 100",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Feita de teia de aranha gigante, esta corda de 10m funciona como uma corda normal, mas é mais resistente. Arrebentá-la exige 5 pontos de dano de corte ou um teste de Força (CD 28).",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Dente de Wisphago",
            preco: "T$ 100",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Pode ser vestido como um amuleto. Quando faz um teste de resistência contra uma magia arcana, você pode gastar o amuleto para rolar novamente esse teste com um bônus de +2. Uma vez ativado, o amuleto se desfaz. Não pode ser fabricado.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Gema de Força",
            preco: "T$ 500",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Esta gema tem 1d4 cargas. Empunhando a gema, você pode gastar uma ação padrão e uma carga para produzir um domo semelhante ao efeito básico da magia Campo de Força. Alternativamente, pode usar uma carga para reduzir o custo de Campo de Força em –2 PM. Não pode ser fabricada.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Garra Feroz",
            preco: "T$ 60",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Estas pinças de insetos gigantes, presas com tiras de couro, funcionam como uma manopla, mas seus benefícios também se aplicam a uma garra ou a uma arma natural.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Manto do Mantor",
            preco: "T$ 450",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Feito a partir do couro de um mantor. Na escuridão completa fornece camuflagem total, mesmo contra criaturas que vejam no escuro.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Manto Pesado",
            preco: "T$ 10",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Estas vestes pesadas com um grande capuz oferecem proteção contra o sol. Você recebe imunidade a condição ofuscado e não é considerado sob luz solar.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Sombreiro",
            preco: "T$ 10",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Tipo de chapéu com abas muito largas. Fornece resistência a efeitos de sentidos +2.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Traje Selako",
            preco: "T$ 90",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Feito com couro de selako. Você recebe +2 em testes de Atletismo para nadar e +3m em seu deslocamento de natação.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Ankh Solar",
            preco: "T$ 450",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Esotérico",
            descricao: "Pode ser usado como arma leve simples (dano 1d6, crítico 19, corte). Suas magias com TR recebem aprimoramento: '+2 PM: criaturas que falham na resistência não podem recuperar PV por 1 rodada.'",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Tomo de Guerra",
            preco: "T$ 300",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Esotérico",
            descricao: "Quando lança uma magia de evocação, você recebe +1 PM para gastar em aprimoramentos.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Tomo do Rancor",
            preco: "T$ 750",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Esotérico",
            descricao: "Suas magias de dano recebem o aprimoramento: '+2 PM: além do normal, a magia causa +2d8+2 pontos de dano (corte, impacto ou perfuração).'",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Bálsamo de Drogadora",
            preco: "T$ 60",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Preparado alquímico. Aplicar é uma ação completa e cura 4d6+4 PV.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Bomba de Fumaça",
            preco: "T$ 15",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Preparado alquímico. Segue as regras da bomba, mas cria uma nuvem de fumaça com 6m de raio (camuflagem leve a 1,5m, total a 3m) por 1 cena.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Elixir Quimérico",
            preco: "T$ 120",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Preparado alquímico. Beber (ação padrão) concede arma natural de mordida (1d6, crit x2) por 1 cena. Pode gastar 1 PM para ataque extra com a mordida. Se já possui mordida, dano aumenta em um passo.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Éter Elemental",
            preco: "T$ 60",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Preparado alquímico. Aplicar (ação padrão) em arma ou 20 munições. Causa +1d4 de dano do tipo elemental (ácido, eletricidade, fogo, frio) até o fim da cena.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Isca Putrefata",
            preco: "T$ 60",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Preparado alquímico. Arremessar (ação padrão, alcance médio). Gruda no alvo (Ref CD Des evita) por 1d6 rodadas. Mortos-vivos não inteligentes em alcance curto são atraídos (Von CD Des evita) e ficam fascinados ou atacam o alvo.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Lágrima Pétrea",
            preco: "T$ 30",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Preparado alquímico. Aplicar (ação padrão) ou arremessar (alcance curto). Remove todos os efeitos de metamorfose (Ref CD Des evita).",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Óleo de Baleia",
            preco: "T$ 30",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Preparado alquímico. Aplicar (ação padrão) em arma ou munição para ignorar penalidades de combate submerso até o fim da cena.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Óleo de Besouro",
            preco: "T$ 50",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Preparado alquímico. Arremessar (ação de movimento para acender, padrão para arremessar, alcance curto). Criaturas a 3m sofrem 4d6 dano de fogo e ficam em chamas (Ref CD Des reduz à metade e evita chamas).",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Pó Azul",
            preco: "T$ 150",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Preparado alquímico. Inalar (ação completa) recupera 2d4 PM.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Corrosivo Mineral",
            preco: "T$ 150",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Catalisador. Aumenta os dados de dano de magias de ácido em uma categoria (máx. d12).",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Gelo Extremo",
            preco: "T$ 150",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Catalisador. Aumenta os dados de dano de magias de frio em uma categoria (máx. d12).",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Pedaço de Língua",
            preco: "T$ 30",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Catalisador. Fornece +1 na CD dos testes de Fortitude para resistir a suas magias.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Raio Cristalizado",
            preco: "T$ 150",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Catalisador. Aumenta os dados de dano de magias de eletricidade em uma categoria (máx. d12).",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Esporos de Cogumelo",
            preco: "T$ 75",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Veneno (Inalação). Vítima fica paralisada (lenta) por 1 rodada (Fort CD Int anula), depois imune por 1 cena.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Peçonha Anciã",
            preco: "T$ 1.800",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Veneno (Contato). Perde 3d12 PV por rodada (3 rodadas). Ignora imunidade a venenos (perde 3d12 PV). Fort CD Int reduz à metade/nega.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Peçonha Irritante",
            preco: "T$ 10",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Veneno (Contato). Perde 1d6 PV (sem TR).",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Veneno Batráquio",
            preco: "T$ 30",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Veneno (Contato). Perde 1d12 PV e fica enjoado por 1 rodada (perde 1d6 PV). Fort CD Int reduz à metade/nega.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Algravia",
            preco: "T$ 3",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Alimentação",
            descricao: "Bebida alcoólica. Fornece +1 em perícias de Carisma (cumulativo com outros itens e doses). Cada dose além da 1ª exige Fort (CD 15 + 5/dose) ou fica enjoado.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Banquete de Canceronte",
            preco: "T$ 36",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Alimentação",
            descricao: "Prato especial. Você recebe 1d4+1 dados de auxílio (d6 com Mestre Cuca) para gastar em testes de perícia.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Coc-au-Triz",
            preco: "T$ 54",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Alimentação",
            descricao: "Prato especial. Ao consumir, escolha uma habilidade com custo em PM. Seu custo diminui em –1 PM.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Cozido de Serpe",
            preco: "T$ 12",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Alimentação",
            descricao: "Prato especial. Requer teste estendido de Ofício (cozinheiro) (CD 20, 3 sucessos). Se passar, fornece +1 em todos os testes de perícia. Se falhar, é envenenado.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Gorlogg Ensopado",
            preco: "T$ 6",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Alimentação",
            descricao: "Prato especial. Em sua próxima noite de sono, aumenta a recuperação de PV e PM em +1 por nível.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Omelete Monstruosa",
            preco: "T$ 3",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Alimentação",
            descricao: "Prato especial. Você recebe +2 em rolagens de dano e –2 em testes de Sabedoria. Com ovos de dragão, muda para +5 e –5.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Sashimi de Kraken",
            preco: "T$ 60",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Alimentação",
            descricao: "Prato especial. Você recebe +2 em Diplomacia (cumulativo) e 5 PM temporários.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Bulette (Animal)",
            preco: "T$ 500",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Animal",
            descricao: "Parceiro montaria (iniciante).",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Capivara (Animal)",
            preco: "T$ 60",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Animal",
            descricao: "Parceiro montaria (iniciante) para personagens Pequenos e Minúsculos.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Corcel do Deserto (Animal)",
            preco: "T$ 150",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Animal",
            descricao: "Parceiro montaria (iniciante).",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Dromedário (Animal)",
            preco: "T$ 75",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Animal",
            descricao: "Parceiro montaria (iniciante).",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Elefante (Animal)",
            preco: "T$ 1.500",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Animal",
            descricao: "Parceiro montaria (iniciante).",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Hiena (Animal)",
            preco: "T$ 220",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Animal",
            descricao: "Parceiro especial (iniciante) ou montaria (Pequeno/Minúsculo).",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Leão (Animal)",
            preco: "T$ 800",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Animal",
            descricao: "Parceiro montaria (iniciante).",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Rinoceronte (Animal)",
            preco: "T$ 600",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Animal",
            descricao: "Parceiro montaria (iniciante).",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Urso Pardo (Animal)",
            preco: "T$ 300",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Animal",
            descricao: "Parceiro montaria (iniciante).",
            fonte: "Ameaças de Arton"
        },
        // (Itens do Atlas de Arton)
        {
            nome: "Macarrão de Caravana",
            preco: "T$ 5",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alimentação",
            descricao: "Prato especial. Recebe +2 em testes de Fortitude contra marcha forçada e em testes contra o perigo complexo jornada pelos ermos.",
            fonte: "Atlas de Arton"
        },
        {
            nome: "Assado Deheoni",
            preco: "T$ 10",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alimentação",
            descricao: "Prato especial. Até o fim do dia, você pode rolar novamente um único teste recém realizado (exceto testes de ataque), mas deve ficar com o segundo resultado.",
            fonte: "Atlas de Arton"
        },
        {
            nome: "Buquê de Thantalla",
            preco: "T$ 150",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alimentação",
            descricao: "Prato especial. Efeitos que recuperem seus pontos de mana recuperam 1 PM a mais.",
            fonte: "Atlas de Arton"
        },

        // (Itens de Guerra Artoniana)
        {
            nome: "Prosciutto Del Mare",
            preco: "T$ 12.000",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Veículo",
            descricao: "Embarcação de três velas, típica para viagens, própria para rios e alto-mar. Veículo Enorme, tripulação 5/30, deslocamento flutuar 12m, Defesa 12, 280 PV, RD 5.",
            fonte: "Guerra Artoniana"
        },
        {
            nome: "Caronte",
            preco: "T$ 25.000",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Veículo",
            descricao: "Navio de Draco Mandíbula. Madeira reforçada, três mastros, 2 canhões. Veículo Enorme, tripulação 10/40, deslocamento flutuar 9m (15m em alto mar), Defesa 14, 350 PV, RD 10.",
            fonte: "Guerra Artoniana"
        },
        {
            nome: "Navio Que Nós Compramos Barato",
            preco: "T$ 1.500",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Veículo",
            descricao: "Embarcação pequena e velha, um mastro e alguns remos. Impõe –2 nos testes de Pilotagem. Veículo Grande, tripulação 1/10, deslocamento flutuar 9m, Defesa 10, 100 PV, RD 5.",
            fonte: "Guerra Artoniana"
        },

        // (Item de Duelo de Dragões)
        {
            nome: "Bolo de Linhaça",
            preco: "T$ 5",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alimentação",
            descricao: "Prato especial. O acolhedor e reconfortante bolo dos pequenos. Concede +2 em Atletismo e Iniciativa.",
            fonte: "Duelo de Dragões"
        },
        {
            nome: "Licor de Lágrimas",
            preco: "T$ 8",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alimentação",
            descricao: "Prato especial. Bebida alcoólica. Fornece +5 em Vontade, mas se falhar em algum teste de Vontade pela duração do prato, fica esmorecido.",
            fonte: "Duelo de Dragões"
        },
        {
            nome: "Treckodimm",
            preco: "T$ 10",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alimentação",
            descricao: "Prato especial. Doce de mel, farinha de grão-de-bico e polpa de treckod. Fornece resistência a cansaço +2.",
            fonte: "Duelo de Dragões"
        },
        {
            nome: "Peçonha Flamejante",
            preco: "Variável",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Veneno (Contato). Perde 1d12 PV e fica em chamas durante 3 rodadas (perde 1d12 PV).",
            fonte: "Duelo de Dragões"
        },
        // (Itens de Heróis de Arton - Munições)
        {
            "nome": "Bola de Ferro (1)",
            "preco": "T$ 5",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Munição",
            "descricao": "Munição para canhão portátil. Vendida individualmente.",
            "fonte": "Heróis de Arton"
        },
        {
            "nome": "Flechas Assobiadoras (20)",
            "preco": "T$ 20",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Munição",
            "descricao": "Simulam o canto de um pássaro. Permite fazer uma finta contra qualquer alvo dentro do alcance da arma (normalmente, apenas alcance curto).",
            "fonte": "Heróis de Arton"
        },
        {
            "nome": "Flechas de Caça (20)",
            "preco": "T$ 10",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Munição",
            "descricao": "Possuem cabeças chatas e pesadas. Esta munição causa dano de impacto não letal.",
            "fonte": "Heróis de Arton"
        },
        {
            "nome": "Flechas Pesadas (20)",
            "preco": "T$ 10",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Munição",
            "descricao": "Versões de ponta mais pesada e afiada. Você sofre –2 em testes de ataque com estas flechas, mas ignora 5 pontos da RD dos alvos.",
            "fonte": "Heróis de Arton"
        },
        {
            "nome": "Virotes Pesados (20)",
            "preco": "T$ 20",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Munição",
            "descricao": "Versões de ponta mais pesada e afiada. Você sofre –2 em testes de ataque com estes virotes, mas ignora 5 pontos da RD dos alvos.",
            "fonte": "Heróis de Arton"
        },

        // (Itens de Heróis de Arton - Equipamento de Aventura)
        {
            nome: "Ábaco",
            preco: "T$ 45",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Requer treino em Conhecimento. Se fizer teste de Ofício para sustento, recebe TO em vez de T$. Se possuir Poder Monetário, limite de TO/dia +2.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Ampulheta",
            preco: "T$ 45",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Mede uma hora. Quando escolhe 10 em Ofício (alquimista), considera o resultado do d20 como 12.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Aparelho de Chá",
            preco: "T$ 30",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Conjunto de xícaras, pires e bule. 1/cena, recebe +1d4 em um teste de Diplomacia ou Enganação com alguém que esteja tomando chá com você.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Armação para Mochila",
            preco: "T$ 50",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Estrutura de metal. Uma mochila de aventureiro encaixada nela aumenta a capacidade de carga em 6 espaços (em vez de 2). A ação para sacar itens dela aumenta em um passo.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Asas do Texugo",
            preco: "T$ 200",
            espacos: "2",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Mochila com asas retráteis. Requer ação de movimento para estender (ocupa espaço de criatura 1 categoria maior). Permite voar (desl. 12m) por 1 rodada (+1 rodada/5 pontos acima de CD 15 em Atletismo para saltar). Ao fim, plana (Queda Suave). Causa vulnerabilidade e condição ruim para magias (ignora com Pilotagem).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Astrolábio",
            preco: "T$ 90",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Instrumento de navegação. Permite usar Conhecimento em vez de Sobrevivência para orientar-se.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Bainha Adornada",
            preco: "T$ 100",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Coberta de ornamentos. Permite que você use armas como parte de um Traje da Corte, sem chamar atenção.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Bússola",
            preco: "T$ 45",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Instrumento de navegação que aponta para o norte. Quando faz um teste de Sobrevivência para orientar-se, rola 2 dados e usa o melhor.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Dente Falso",
            preco: "T$ 300",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Minúsculo frasco disfarçado de dente. Carrega 1 preparado alquímico consumível ou poção sem ocupar espaços. Permite ingerir o item como ação de movimento. É perdido após o uso.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Diagrama Anatômico",
            preco: "T$ 75",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Pergaminho com esquemas de corpos humanoides. Quando usa Ataque Furtivo, você recebe +1 na margem de ameaça.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Espelho Refletor",
            preco: "T$ 45",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Pequeno espelho. Pode gastar ação de movimento para teste de Ladinagem oposto (Reflexos) contra criatura em alcance curto. Se vencer, ela fica desprevenida contra seu próximo ataque (até fim do próximo turno). 1/cena.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Estetoscópio",
            preco: "T$ 60",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Pode gastar ação padrão para teste de Investigação para ajudar a si mesmo (+2) em um teste de Cura, ou de Ladinagem (abrir fechadura ou sabotar) no próximo turno.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Estrepes (bolsa para 3m)",
            preco: "T$ 5",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Cobre um quadrado de 3m (ação padrão). Causa 1d4 dano de perfuração em quem pisa na área. A criatura fica lenta até o fim do próximo turno dela.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Favor da Pessoa Amada",
            preco: "—",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Conquistado, não comprado. Item pessoal (mecha de cabelo, lenço, etc.). Fornece +2 PM (cumulativo com outros itens). Para de funcionar se houver desavença.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Lampião de Foco",
            preco: "T$ 15",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Lanterna sofisticada. Funciona como um lampião, mas concentra a luz em um cone de 24m.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Leque",
            preco: "T$ 3",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "1/cena, quando faz um teste de Vontade, você pode se abanar para usar seu Carisma em vez de Sabedoria nesse teste.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Livro de Métodos Anti-Nimb",
            preco: "T$ 100",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Contém métodos de estatística e probabilidade. Pode gastar 1 minuto e 1 PM para substituir testes de Jogatina por testes de Conhecimento até o fim da cena.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Lupa",
            preco: "T$ 30",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Lente de aumento. Quando faz um teste de Investigação para procurar, pode rolar 2 dados e usar o melhor.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Mapa",
            preco: "T$ 30",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Mapa de uma região específica. Fornece +5 em testes de Sobrevivência para orientar-se nessa região.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Mecanismo de Mola",
            preco: "T$ 25",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Preso ao antebraço. Pode manter 1 arma leve (ocultável). Permite sacar essa arma como ação livre e ela recebe a qualidade 'Surpreendente' para esse ataque.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Mochila Discreta",
            preco: "T$ 20",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Possui compartimento oculto (1 espaço). Recebe +5 em Ladinagem para ocultar esses itens. Deve ser vestida (não ocupa espaço de carga).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Prancheta",
            preco: "T$ 5",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Tabuleta de madeira com pergaminho. Carregar uma lhe confere aparência de autoridade. Você pode fazer testes de Nobreza para etiqueta mesmo sem ser treinado.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Sinete",
            preco: "T$ 50",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Estojo com cera e carimbo com símbolo pessoal. Reduz em –1 PM o custo de habilidades como Autoridade Feudal e Favor.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Caixa de Voz",
            preco: "T$ 50",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Mecanismo com 1d4 cargas. Pode gastar 1 carga para aumentar o alcance de uma habilidade de bardo ou nobre em um passo. Não pode ser fabricado.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Gema de Força",
            preco: "T$ 500",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Equipamento de Aventura",
            descricao: "Gema com 1d4 cargas. Pode gastar 1 ação padrão e 1 carga para criar o efeito básico de Campo de Força. Pode gastar 1 carga para reduzir o custo de Campo de Força em –2 PM. Não pode ser fabricada.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Apito de Caça",
            preco: "T$ 6",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Fornece +1 em Adestramento. Permite usar 'Manejar Animal' com parceiro não inteligente (Int -4 ou -5) como ação livre (1/rodada).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Baralho Marcado",
            preco: "T$ 15",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Recebe +2 em testes de Jogatina com cartas. Se rolar 1 natural, você é descoberto.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Cinto de Utilidades",
            preco: "T$ 50",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Cinturão de couro cheio de bolsos. Se estiver vestindo, pode sacar e guardar engenhocas como uma ação livre.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Espelho Cirúrgico",
            preco: "T$ 12",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Haste com espelho articulado. Se estiver usando, você não sofre a penalidade de –5 em testes de Cura em si mesmo.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Estandarte",
            preco: "T$ 15",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Precisa ser empunhado com uma mão. Seus capangas recebem +1 na Defesa e em rolagens de dano.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Estandarte Portátil",
            preco: "T$ 20",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Como Estandarte, mas usado nas costas ou na sela (mãos livres). Impõe penalidade de armadura –2 (se nas costas) ou conta como item vestido (na montaria).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Molde Pré-Fabricado",
            preco: "T$ 500",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Conjunto de peças (um para cada escola de magia). Diminui o tempo de fabricação de uma engenhoca (da escola do molde) para três dias.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Clarim Deheoni",
            preco: "T$ 150",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Instrumento musical. Criaturas a sua escolha sob efeito de sua Inspiração recebem +1 em testes de resistência.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Cítara Heptatônica",
            preco: "T$ 250",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Instrumento musical. Criaturas a sua escolha sob efeito de sua Inspiração recebem +2 na CD da primeira habilidade mágica que usarem.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Cornamusa de Doherimm",
            preco: "T$ 750",
            espacos: "2",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Instrumento musical. É vestida (não empunhada). Custo de Inspiração -1 PM, mas sofre –2 na Defesa.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Flauta Sar-Allan",
            preco: "T$ 150",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Instrumento musical. Concede +5 no teste de Atuação para Música de bardo, mas apenas contra criaturas reptilianas.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Gaita de Foles",
            preco: "T$ 500",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Instrumento musical. Ao usar Inspiração, teste Atuação (CD 20 + PMs gastos). Se passar, bônus +1. Se falhar, habilidade falha.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Lira de Casco de Tartaruga",
            preco: "T$ 300",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Instrumento musical. Suas Músicas e magias de bardo de cura recuperam +1 PV por dado de cura.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Marionetes",
            preco: "T$ 90",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Instrumento musical (visual). Recebe +2 no teste oposto de Atuação para Música: Balada Fascinante e Fascinar em Massa, e na CD de Manipular e Manipular em Massa.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Pandeiro das Estradas",
            preco: "T$ 200",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Instrumento musical. Pode gastar uma ação de movimento (em vez de padrão) para manter a concentração em uma Música de bardo.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Tamborete Marcial",
            preco: "T$ 80",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Instrumento musical. Criaturas a sua escolha sob efeito de sua Inspiração recebem +3m em deslocamento.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Trombeta Tapistana",
            preco: "T$ 300",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Instrumento musical. Quando você usa Inspiração, cada criatura a sua escolha sob efeito recebe uma ação de movimento extra no próximo turno.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Violino Soprano",
            preco: "T$ 300",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Instrumento musical. Cada criatura a sua escolha sob efeito de sua Inspiração recebe +1d4 em seu próximo teste de perícia (exceto testes de ataque).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Avental de Forja",
            preco: "T$ 75",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Avental grosso de couro. Se estiver usando, pode perder 1d6 PV para receber +1 em um teste de Ofício (cumulativo).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Camisolão",
            preco: "T$ 12",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Roupa de dormir confortável. Dormir com um camisolão (e nenhum outro item vestido) transforma condições de descanso confortáveis em luxuosas.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Capa com Dragonas",
            preco: "T$ 50",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Capa elegante com ombreiras. Enquanto você estiver vestindo esta capa, sua armadura conta como um traje da corte.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Casaca de Apetrechos",
            preco: "T$ 75",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Casacão pesado. Aumenta sua capacidade de carga em 4 espaços (ela própria não gasta espaço). Impõe penalidade de armadura de –2 e não pode ser usada com armadura.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Chapéu Emplumado",
            preco: "T$ 50",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Na primeira rodada de um combate, pode gastar uma ação de movimento para saudar seus inimigos. Se fizer, recebe 1 PM temporário.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Elmo Leve",
            preco: "T$ 15",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Capuz de couro ou capacete aberto. Fornece fortificação 25%, mas impõe –2 em Iniciativa e Percepção (ignora penalidade se proficiente em armadura pesada).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Elmo Pesado",
            preco: "T$ 200",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Coifa ou capacete fechado. Fornece fortificação 50%, mas impõe –5 em Iniciativa e Percepção (reduz para –2 se proficiente em armadura pesada).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Jaqueta de Couro",
            preco: "T$ 15",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Você recebe +1 em testes de Investigação para interrogar e gasta apenas metade do dinheiro (arredondado para cima) neles.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Luva de Falcoaria",
            preco: "T$ 15",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Luva que recobre o antebraço. Concede +2 em testes de Adestramento com pássaros e criaturas semelhantes.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Luva Magnética",
            preco: "T$ 20",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Luva com ímãs nas pontas dos dedos. A vítima de um teste de Ladinagem para punga sofre –5 no teste de Percepção para notar.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Máscara Bucal",
            preco: "T$ 3",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Pano que cobre nariz e boca. Quem vê o usuário deve passar em Percepção (CD 25) para ser capaz de descrevê-lo mais tarde.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Máscara Completa",
            preco: "T$ 15",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Cobre totalmente o rosto. Escolha uma perícia baseada em Carisma; a máscara concede +1 em testes dessa perícia (Intimidação, Atuação, etc.).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Máscara de Baile",
            preco: "T$ 25",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Tapa a região dos olhos. 1/cena, em situação social apropriada, pode colocar/trocar a máscara para repetir um teste de Diplomacia ou Enganação.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Máscara de Soldador",
            preco: "T$ 50",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Chapa metálica com visor escuro. Quando faz um teste de Ofício, pode fazer um teste de Percepção para ajudar a si mesmo (+2).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Monóculo",
            preco: "T$ 50",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Lente corretiva e símbolo de empáfia. Quando você usa a habilidade Orgulho em um teste de Vontade, o bônus fornecido por ela aumenta em +2.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Óculos de Aeronauta",
            preco: "T$ 15",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Proteção para os olhos. Fornece +1 em Pilotagem (cumulativo).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Palmar",
            preco: "T$ 12",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Pequenas pranchas que recobrem as mãos (impede de empunhar itens). Quando passa em um teste de Atletismo (natação), avança seu deslocamento inteiro.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Peruca",
            preco: "T$ 20",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Permite que um personagem com Carisma < 0 seja considerado como Carisma 0 para perícias (exceto Adestramento) por uma cena. Custa T$ 10 para manter/pentear.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Rondel",
            preco: "T$ 150",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Dois discos de aço costurados na armadura. Aumentam o bônus na Defesa da armadura em +1, mas impõem –2 em testes de ataque (ignora penalidade se proficiente em armadura pesada).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Roupão Elegante",
            preco: "T$ 150",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Traje refinado. Recebe +5 em Diplomacia dentro de sua base/domínio. Não funciona se estiver vestindo armadura ou item com bônus de For/Des/Con.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Rufo",
            preco: "T$ 25",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Gola adornada. Se você usar um traje da corte com um rufo, o traje passa a fornecer +1 em Diplomacia (cumulativo).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Sapatos Confortáveis",
            preco: "T$ 6",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Ignora o primeiro teste de Fortitude para marcha forçada.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Sapatos de Salto Alto",
            preco: "T$ 18",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Deslocamento –1,5m e falha automática em marcha forçada. 1/cena, pode usar poder Atraente (ação completa) contra uma criatura (bônus +5 se já tiver o poder).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Veste Acolchoada",
            preco: "T$ 60",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Vestuário",
            descricao: "Traje estofado usado sob armadura. Aumenta a penalidade de armadura em –2, mas reduz o multiplicador de crítico de ataques sofridos em –1 (mín. x2).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Compasso Místico",
            preco: "T$ 600",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Esotérico",
            descricao: "Quando lança uma magia com efeito em área, você pode excluir um alvo da área afetada.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Flauta Convocadora",
            preco: "T$ 300",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Esotérico",
            descricao: "Quando lança uma magia que conjura capangas, você conjura um capanga adicional do mesmo tipo.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Mandala Onírica",
            preco: "T$ 300",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Esotérico",
            descricao: "Quando ao menos um inimigo falha no teste de Vontade de uma de suas magias, você recebe 1 PM temporário (limitado pelo custo da magia).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Varinha Armamentista",
            preco: "T$ 600",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Esotérico",
            descricao: "Aumenta o bônus de dano fornecido pelo poder Arcano de Batalha em +2.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Ácido Concentrado",
            preco: "T$ 60",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Como ácido, mas o alvo sofre 4d8 de dano de ácido e fica vulnerável até o fim da cena (Reflexos CD Des reduz à metade e evita a condição).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Analgésico",
            preco: "T$ 60",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Usar (ação padrão) role 2d4. Este é o máximo de PM que pode gastar. Até o fim da cena, sempre que sofrer dano, pode gastar 1 PM para reduzir esse dano em 5 (até o máximo rolado).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Estalinho Gury",
            preco: "T$ 30",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Arremessar (ação padrão, alcance curto). Criaturas a 3m sofrem 4d6 de dano de impacto e ficam surdas (Fortitude CD Des reduz à metade e evita a condição).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Extrato de Gelo Eterno",
            preco: "T$ 60",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Usar (ação padrão, alcance curto). Alvo sofre 2d12 de dano de frio e fica lento por 1 rodada (Reflexos CD Des reduz à metade e evita a condição).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Extrato de Oxxdon",
            preco: "T$ 180",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Arremessar (ação padrão, alcance curto, área 1,5m²). Objetos não mágicos de metal na área são destruídos e criaturas de metal ficam fatigadas (Fortitude CD Des evita).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Frasco Abissal",
            preco: "T$ 300",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Arremessar (ação padrão, alcance curto). Criaturas a 3m sofrem 6d6 de dano de fogo e ficam em chamas (Reflexos CD Des reduz à metade e evita a condição). Chamas mais fortes (2d6 de dano, CD 20 para apagar).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Pó de Cinza",
            preco: "T$ 5",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Lubrificante. Fornece +5 em um teste de Ladinagem para abrir fechaduras ou sabotar (cumulativo com outros itens).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Pó do Aparecimento",
            preco: "T$ 30",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Usar (ação padrão, alcance curto). Criaturas invisíveis a 3m do ponto deixam de estar invisíveis (passam a ter camuflagem leve).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Visco Persistente",
            preco: "T$ 25",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Usar (ação padrão, alcance curto). Alvo sofre 4d4 de dano de ácido e fica enredado (Fortitude CD Des reduz à metade e evita a condição).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Cristal Reflexivo",
            preco: "T$ 30",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Catalisador. Quando lança uma magia de adivinhação, você recebe +1 na Defesa pela duração da magia.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Essência Fantasmal",
            preco: "T$ 30",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Catalisador. A magia ignora 5 pontos da RD de todas as criaturas afetadas.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Noz Saltadora",
            preco: "T$ 90",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Catalisador. Após lançar a magia, pode se teletransportar para um espaço desocupado em 4,5m.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Presa de Hyninn",
            preco: "T$ 45",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Catalisador. Você recebe 25% de chance de ignorar ataques e efeitos (incluindo de área) por 1 rodada.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Bolor Hemorrágico",
            preco: "T$ 60",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Veneno (Contato). Vítima fica sangrando e a CD para remover essa condição aumenta em +5 (fica sangrando). Fort CD Int anula.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Fumaça Onírica",
            preco: "T$ 150",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Veneno (Inalação). Vítima fica fascinada por 3 rodadas (ofuscada por 1 rodada). Apenas 1/cena. Vontade CD Int anula.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Gás Moroso",
            preco: "T$ 60",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Veneno (Inalação). Vítima fica vulnerável (vulnerável por 1 rodada). Fort CD Int anula.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Seiva Necrótica",
            preco: "T$ 120",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alquímico",
            descricao: "Veneno (Contato). Perde 2d6 PV por rodada (3 rodadas) (perde 2d6 PV). PV perdidos só podem ser recuperados com efeitos mágicos de luz. Fort CD Int reduz à metade/nega.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Aparatos (Geral)",
            preco: "Variável",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Aparatos são itens de inventor para modificar engenhocas. Acoplar exige 1 hora. Aumentam a CD de ativação (+2 para 1 aparato, +5 para 2).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Captador de Luz",
            preco: "T$ 450",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Aparato. Toda cura de luz da engenhoca aumenta em +1 por dado. Funciona apenas com engenhocas de cura de luz.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Comutador",
            preco: "T$ 300",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Aparato. Diminui o custo total dos aprimoramentos da engenhoca em –1 PM.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Conversor-Alimentador",
            preco: "T$ 300",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Aparato. Comporta 3 doses de essência de mana (ou similar). Permite gastar um preparado que forneça PM para pagar o custo de aprimoramentos da engenhoca.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Engenho de Automação",
            preco: "T$ 600",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Aparato. Permite que uma engenhoca (de magia sustentada) não conte no seu limite de magias sustentadas (limite de 1 engenhoca assim). Pré-req: Conversor-Alimentador.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Espera para Melhorias",
            preco: "T$ 150",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Aparato. Permite instalar melhorias de outros itens na engenhoca (ex: engenhoca de Armadura Arcana pode receber melhorias de armadura). Cada 'Espera' permite 1 melhoria.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Estabilizador",
            preco: "T$ 900",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Aparato. Aumenta a CD para resistir ao efeito da engenhoca em +2.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Estimulador de Sobrecarga",
            preco: "T$ 750",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Aparato. Aumenta o dano provocado pela engenhoca em +1 dado. Funciona apenas em engenhocas que causam dano.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Gatilho de Corda",
            preco: "T$ 1.500",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Aparato. Permite ativar uma engenhoca (de ação padrão) com uma ação de movimento. Após o uso, deve-se gastar uma ação completa para dar corda.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Giroscópio",
            preco: "T$ 450",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Aparato. Você não aplica sua penalidade de armadura (de armadura) nos testes de ativação da engenhoca.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Ligação de Convergência",
            preco: "T$ 300",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Aparato. Acoplado a 2 engenhocas, que contam como 1 para seu limite. Apenas uma delas pode ser ativada por cena.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Remontagem de Portabilidade",
            preco: "T$ 300",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Aparato. Permite que a engenhoca seja 'desmontada' e unida a um item de vestuário. Ela não ocupa espaço e conta como vestida (sem contar no limite). Limite de 1.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Sequenciador de Ativação",
            preco: "T$ 600",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Aparato. Acoplado a 3 engenhocas. 1/cena (ação completa), ativa o sequenciador. No início de seus próximos 3 turnos, uma das engenhocas é ativada (ação livre). Falha no teste de ativação interrompe a sequência.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Sistema de Refrigeração",
            preco: "T$ 900",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Aparato. 1/dia (ação completa, 1 PM), reduz a CD de ativação da engenhoca em –5.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Supressor de Segurança",
            preco: "T$ 300",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Aparato. 1/cena, a engenhoca não enguiça com uma falha no teste de ativação (ela não ativa, mas a CD não aumenta).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Transformador Místico",
            preco: "T$ 600",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Ferramenta",
            descricao: "Aparato. Permite acoplar um item esotérico à engenhoca, que fornece seus benefícios à magia simulada por ela (sem precisar ser empunhado).",
            fonte: "Heróis de Arton"
        },

        // (Itens de Heróis de Arton - Alimentação, Animais, Veículos, Serviços)
        {
            nome: "Baga Celeste Cozida",
            preco: "T$ 15",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Alimentação",
            descricao: "Prato especial. Todo dano de queda que você sofre é reduzido em −1d6.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Cozido de Pimenta",
            preco: "T$ 10",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Alimentação",
            descricao: "Prato especial. Fornece +1 em Fortitude (cumulativo com bônus de outros itens).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Manjar de Sombras",
            preco: "T$ 20",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Alimentação",
            descricao: "Prato especial. Você ignora os próximos 10 pontos de dano de trevas que sofrer.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Baba de Troll",
            preco: "T$ 30",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alimentação",
            descricao: "Bebida (não alcoólica). Fornece +1d4 em um teste a sua escolha até o fim do dia.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Barba Queimada",
            preco: "T$ 45",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alimentação",
            descricao: "Bebida (alcoólica, CD 20). Cerveja anã. Fornece redução de dano 2.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Cerveja Deheoni",
            preco: "T$ 15",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alimentação",
            descricao: "Bebida (alcoólica, CD 15). Bebida comum no Reinado. Fornece +1 em testes de resistência.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Dilínio",
            preco: "T$ 600",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alimentação",
            descricao: "Bebida (alcoólica, CD 20). Destilado raro. Seu limite de gasto de PM aumenta em +1. Não pode ser fabricado.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Grogue Negro",
            preco: "T$ 15",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alimentação",
            descricao: "Bebida (alcoólica, CD 15). Rum pirata. Quando você usa Audácia, o bônus fornecido pelo poder aumenta em +1.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Grogue Rubro",
            preco: "T$ 45",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alimentação",
            descricao: "Bebida (alcoólica, CD 20). Variação picante do Grogue Negro. Você pode usar Audácia para testes de ataque.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Hidromel Uivante",
            preco: "T$ 21",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alimentação",
            descricao: "Bebida (alcoólica, CD 20). Fabricada nas montanhas geladas. Fornece +2 em rolagens de dano corpo a corpo.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Licor Feérico",
            preco: "T$ 450",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alimentação",
            descricao: "Bebida (alcoólica, CD 25). De aparência enevoada. Escolha uma habilidade; seu custo para ativar diminui em –1 PM.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Sidra Ahleniense",
            preco: "T$ 45",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alimentação",
            descricao: "Bebida (alcoólica, CD 15). Bebida doce. Fornece +2 em testes de perícias originalmente baseadas em Carisma.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Vinho Pruss",
            preco: "T$ 60",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alimentação",
            descricao: "Bebida (alcoólica, CD 15). Batizado em homenagem ao Rei-Imperador Thormy. Fornece 3 PM temporários.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Vinho Élfico",
            preco: "T$ 90",
            espacos: "0,5",
            categoria: "Item Geral",
            tipo: "Alimentação",
            descricao: "Bebida (alcoólica, CD 20). Aguça a mente, fornecendo +1 na CD para resistir a suas habilidades.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Armadura de Montaria Leve",
            preco: "T$ 600",
            espacos: "2",
            categoria: "Item Geral",
            tipo: "Animal",
            descricao: "Deve ser vestida pela montaria. Aumenta um bônus numérico fornecido por ela em +1 (se fixo) ou em um passo (se rolado).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Armadura de Montaria Pesada",
            preco: "T$ 3.000",
            espacos: "5",
            categoria: "Item Geral",
            tipo: "Animal",
            descricao: "Como a armadura leve, mas aumenta o bônus em +2 ou em dois passos. Diminui o deslocamento da montaria em –3m. Montarias voadoras não podem usar.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Arreios Namalkahnianos",
            preco: "T$ 50",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Animal",
            descricao: "Contam como um item vestido do animal. Aumentam o deslocamento de um veículo de tração animal em +3m.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Caparazão",
            preco: "T$ 75",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Animal",
            descricao: "Cobertura de tecido decorado. Uma montaria vestindo um caparazão fornece +1 em Diplomacia e Intimidação.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Estribos",
            preco: "T$ 60",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Animal",
            descricao: "Apoios para os pés. Deve ser vestido pela montaria. Quando você faz uma investida montada, causa +1d8 pontos de dano.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Ornamento",
            preco: "T$ 50",
            espacos: "1",
            categoria: "Item Geral",
            tipo: "Animal",
            descricao: "Adorno para montarias. 1/cena, se estiver montado e treinado em Cavalgar, pode se exibir (ação) para receber +1d4 em um teste de perícia baseada em Carisma.",
            fonte: "Heróis de Arton"
        },
        // (Itens de Heróis de Arton - Veículos com Descrições)
        {
            nome: "Barcaça",
            preco: "T$ 3.000",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Veículo",
            descricao: "Navio pequeno (Enorme), 1 mastro, remos. Tripulação 10 (+ piloto). Desl. natação 6m, Defesa 10 (+ Des piloto), 120 PV, RD 5. Carrega 15 criaturas Médias ou 300 espaços.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Biga de Guerra",
            preco: "T$ 250",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Veículo",
            descricao: "Carroça blindada (Grande) puxada por 2 cavalos. Desl. 12m, Defesa 12 (+ Des piloto), 75 PV, RD 5. Carrega 2 criaturas Médias (40 espaços) e fornece cobertura leve. Permite investidas montadas e ignora penalidade de arremesso em movimento.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Dirigível Goblin",
            preco: "T$ 1.200",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Veículo",
            descricao: "Versão maior do balão goblin (Enorme). Desl. voo 12m, Defesa 5 (+ Des piloto), 180 PV. Carrega 16 criaturas Médias ou 320 espaços. Segue regras de queda e reparos do balão goblin.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Jangada",
            preco: "T$ 60",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Veículo",
            descricao: "Plataforma flutuante (Grande) com mastro e leme. Tripulação 1 (+ piloto). Desl. natação 9m, Defesa 6 (+ Des piloto), 50 PV, RD 5. Carrega 4 criaturas Médias ou 80 espaços.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Veleiro (Heróis de Arton)",
            preco: "T$ 10.000",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Veículo",
            descricao: "Navio de viagem (Colossal) com 3 mastros. Tripulação 30 (+ piloto, navegador, capitão). Desl. natação 12m, 220 PV, RD 5. Carrega 60 criaturas Médias ou 1.200 espaços.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Banho Quente",
            preco: "T$ 10",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Serviço",
            descricao: "Você recebe +1d6 em seu próximo teste de resistência feito até o fim do próximo dia (cumulativo).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Bigode Encerado",
            preco: "T$ 20",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Serviço",
            descricao: "1/cena, a primeira criatura inteligente que usar um efeito de Vontade contra você deve fazer um teste de Vontade (CD Car). Se falhar, perde a ação. Dura 1 dia.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Instrução Marcial",
            preco: "T$ 300",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Serviço",
            descricao: "Role 1d4; você recebe o resultado em d4 de auxílio para gastar em testes de ataque até o fim da aventura.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Maquiagem Profissional",
            preco: "T$ 30",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Serviço",
            descricao: "Quando faz seu primeiro teste de Diplomacia para mudar atitude em cada cena, rola 2 dados e usa o melhor. Dura 1 dia.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Mercenário: Alquimista de Batalha",
            preco: "T$ 150",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Serviço",
            descricao: "Parceiro veterano (Destruidor) por uma cena.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Mercenário: Aprendiz de Guilda",
            preco: "T$ 30",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Serviço",
            descricao: "Parceiro iniciante (Ajudante - Conhecimento, Ofício) por uma cena.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Mercenário: Aprendiz de Mago",
            preco: "T$ 30",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Serviço",
            descricao: "Parceiro iniciante (Magivocador) por uma cena.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Mercenário: Arauto",
            preco: "T$ 150",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Serviço",
            descricao: "Parceiro veterano (Ajudante - Diplomacia, Intuição, Nobreza) por uma cena.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Mercenário: Arqueiros (Capangas)",
            preco: "T$ 300",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Serviço",
            descricao: "Capangas veteranos (Unidade de arqueiros) por uma cena. Requer treino em Guerra.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Mercenário: Bando de Aldeões (Capangas)",
            preco: "T$ 90",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Serviço",
            descricao: "Capangas iniciantes (Turba de camponeses) por uma cena. Requer treino em Guerra.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Mercenário: Batedor",
            preco: "T$ 150",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Serviço",
            descricao: "Parceiro veterano (Vigilante) por uma cena.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Mercenário: Besteiro",
            preco: "T$ 30",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Serviço",
            descricao: "Parceiro iniciante (Atirador) por uma cena.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Mercenário: Bibliotecário Místico",
            preco: "T$ 150",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Serviço",
            descricao: "Parceiro veterano (Adepto) por uma cena.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Mercenário: Conselheiro",
            preco: "T$ 150",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Serviço",
            descricao: "Parceiro veterano (Ajudante - Conhecimento, Misticismo, Nobreza) por uma cena.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Mercenário: Guarda-Costas",
            preco: "T$ 30",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Serviço",
            descricao: "Parceiro iniciante (Guardião) por uma cena.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Mercenário: Herbalista",
            preco: "T$ 30",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Serviço",
            descricao: "Parceiro iniciante (Médico) por uma cena.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Mercenário: Homem de Armas",
            preco: "T$ 30",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Serviço",
            descricao: "Parceiro iniciante (Fortão) por uma cena.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Mercenário: Irregulares (Capangas)",
            preco: "T$ 300",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Serviço",
            descricao: "Capangas veteranos (Pelotão de infantaria) por uma cena. Requer treino em Guerra.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Mercenário: Matador",
            preco: "T$ 150",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Serviço",
            descricao: "Parceiro veterano (Assassino) por uma cena.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Mercenário: Sombra",
            preco: "T$ 150",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Serviço",
            descricao: "Parceiro veterano (Ajudante - Enganação, Furtividade, Investigação) por uma cena.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Ópera",
            preco: "T$ 200",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Serviço",
            descricao: "Se for treinado em Atuação ou Conhecimento, seu total de PM aumenta em +1d4 até o fim da aventura.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Sarau Informativo",
            preco: "T$ 150",
            espacos: "—",
            categoria: "Item Geral",
            tipo: "Serviço",
            descricao: "Role 1d4; você recebe o resultado em d4 de auxílio para gastar em testes de Conhecimento ou Nobreza até o fim da aventura.",
            fonte: "Heróis de Arton"
        }

    ]
};

// Publica a variável para o script.js
window.itensData = itensData;