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
        }
    ]
};

// Publica a variável para o script.js
window.itensData = itensData;