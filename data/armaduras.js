// armaduras.js

const armadurasData = {
    "armadura": [
        // ---------- ARMADURAS LEVES ----------
        {
            "nome": "Armadura acolchoada",
            "preco": "T$ 5",
            "bonus_defesa": "+1",
            "penalidade_armadura": "0",
            "espacos": "2",
            "categoria": "Armadura",
            "tipo": "Armadura Leve",
            "descricao": "Uma túnica almofadada. É a armadura mais leve, mas protege todo o corpo, fornecendo +2 em Fortitude. (p. 154)"
        },
        {
            "nome": "Armadura de couro",
            "preco": "T$ 20",
            "bonus_defesa": "+2",
            "penalidade_armadura": "0",
            "espacos": "2",
            "categoria": "Armadura",
            "tipo": "Armadura Leve",
            "descricao": "O peitoral desta armadura é feito de couro curtido em óleo fervente, para ficar mais rígido. (p. 154)"
        },
        {
            "nome": "Couro batido",
            "preco": "T$ 35",
            "bonus_defesa": "+3",
            "penalidade_armadura": "–1",
            "espacos": "2",
            "categoria": "Armadura",
            "tipo": "Armadura Leve",
            "descricao": "Versão mais pesada da armadura de couro, reforçada com rebites de metal. (p. 154)"
        },
        {
            "nome": "Gibão de peles",
            "preco": "T$ 25",
            "bonus_defesa": "+4",
            "penalidade_armadura": "–3",
            "espacos": "2",
            "categoria": "Armadura",
            "tipo": "Armadura Leve",
            "descricao": "Usada principalmente por bárbaros, esta armadura é formada por várias camadas de peles e couro de animais. (p. 154)"
        },
        {
            "nome": "Couraça",
            "preco": "T$ 500",
            "bonus_defesa": "+5",
            "penalidade_armadura": "–4",
            "espacos": "2",
            "categoria": "Armadura",
            "tipo": "Armadura Leve",
            "descricao": "A mais robusta das armaduras leves, formada por uma placa metálica que protege o peito e as costas. (p. 154)"
        },
        // ---------- ARMADURAS PESADAS ----------
        {
            "nome": "Brunea",
            "preco": "T$ 50",
            "bonus_defesa": "+5",
            "penalidade_armadura": "–2",
            "espacos": "5",
            "categoria": "Armadura",
            "tipo": "Armadura Pesada",
            "descricao": "Colete de couro coberto com plaquetas de metal sobrepostas. A armadura mais utilizada no Reinado. (p. 154)"
        },
        {
            "nome": "Cota de malha",
            "preco": "T$ 150",
            "bonus_defesa": "+6",
            "penalidade_armadura": "–2",
            "espacos": "5",
            "categoria": "Armadura",
            "tipo": "Armadura Pesada",
            "descricao": "Longa veste de anéis metálicos interligados, formando uma malha flexível e resistente. (p. 154)"
        },
        {
            "nome": "Loriga segmentada",
            "preco": "T$ 250",
            "bonus_defesa": "+7",
            "penalidade_armadura": "–3",
            "espacos": "5",
            "categoria": "Armadura",
            "tipo": "Armadura Pesada",
            "descricao": "Composta por tiras horizontais de metal, esta armadura pesada é muito utilizada por legionários do Império de Tauron. (p. 154)"
        },
        {
            "nome": "Meia armadura",
            "preco": "T$ 600",
            "bonus_defesa": "+8",
            "penalidade_armadura": "–4",
            "espacos": "5",
            "categoria": "Armadura",
            "tipo": "Armadura Pesada",
            "descricao": "Uma cota de malha reforçada com placas de metal. (p. 154)"
        },
        {
            "nome": "Armadura completa",
            "preco": "T$ 3.000",
            "bonus_defesa": "+10",
            "penalidade_armadura": "–5",
            "espacos": "5",
            "categoria": "Armadura",
            "tipo": "Armadura Pesada",
            "descricao": "A mais forte e pesada das armaduras, formada por placas de metal forjadas e encaixadas. Precisa ser feita sob medida. (p. 154)"
        },
        // ---------- ESCUDOS ----------
        {
            "nome": "Escudo leve",
            "preco": "T$ 5",
            "bonus_defesa": "+1",
            "penalidade_armadura": "–1",
            "espacos": "1",
            "categoria": "Escudo",
            "tipo": "Escudo Leve",
            "descricao": "Tipicamente feito de madeira, é amarrado no antebraço, deixando a mão livre. (p. 154)"
        },
        {
            "nome": "Escudo pesado",
            "preco": "T$ 15",
            "bonus_defesa": "+2",
            "penalidade_armadura": "–2",
            "espacos": "2",
            "categoria": "Escudo",
            "tipo": "Escudo Pesado",
            "descricao": "Normalmente feito de aço, é preso ao antebraço e também deve ser empunhado com firmeza, impedindo o usuário de usar aquela mão. (p. 154)"
        },

        // (Itens de Ameaças de Arton)
        {
            nome: "Armadura de Ossos",
            preco: "T$ 120",
            bonus_defesa: "+3",
            penalidade_armadura: "–2",
            espacos: "2",
            categoria: "Armadura",
            tipo: "Armadura Leve",
            descricao: "Esta armadura sinistra fornece +1 em Intimidação e na CD de seus efeitos de medo (cumulativo com a melhoria macabra).",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Veste de Teia de Aranha",
            preco: "T$ 3.000",
            bonus_defesa: "+4",
            penalidade_armadura: "0",
            espacos: "2",
            categoria: "Armadura",
            tipo: "Armadura Leve",
            descricao: "Feita com teia de aranha gigante, esta veste é cinza-escura, maleável e silenciosa. Fornece +5 em Furtividade, mas não pode receber a melhoria material especial.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Armadura de Quitina",
            preco: "T$ 350",
            bonus_defesa: "+7",
            penalidade_armadura: "–3",
            espacos: "5",
            categoria: "Armadura",
            tipo: "Armadura Pesada",
            descricao: "Feita com carapaças de grandes insetos, esta armadura dos povos-trovão é mais leve que suas contrapartes metálicas. Embora seja uma armadura pesada, não reduz o deslocamento do usuário.",
            fonte: "Ameaças de Arton"
        },
        {
            nome: "Escudo de Couro",
            preco: "T$ 3",
            bonus_defesa: "+1",
            penalidade_armadura: "–1",
            espacos: "1",
            categoria: "Escudo",
            tipo: "Escudo Leve",
            descricao: "Feito com uma armação de madeira esticando uma membrana de couro. Contra ataques à distância, o bônus na Defesa do escudo aumenta em +2. É muito leve para ser usado como arma.",
            fonte: "Ameaças de Arton"
        },
        // (Itens de Heróis de Arton)
        {
            nome: "Armadura Sensual",
            preco: "T$ 55",
            bonus_defesa: "+1",
            penalidade_armadura: "0",
            espacos: "2",
            categoria: "Armadura",
            tipo: "Armadura Leve",
            descricao: "Permite usar o poder Atraente. Se já o tiver, o bônus aumenta para +5. Pode não ser apropriada em certas situações sociais.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Armadura de Folhas",
            preco: "T$ 75",
            bonus_defesa: "+2",
            penalidade_armadura: "0",
            espacos: "2",
            categoria: "Armadura",
            tipo: "Armadura Leve",
            descricao: "Feita de folhas preparadas. Se for treinado em Sobrevivência, você recebe +2 PM (somente após 1 dia de uso).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Armadura de Engenhoqueiro Goblin",
            preco: "T$ 85",
            bonus_defesa: "+3",
            penalidade_armadura: "–2 a –10",
            espacos: "2",
            categoria: "Armadura",
            tipo: "Armadura Leve",
            descricao: "Pode levar até 2 espaços de itens na armadura. Pode levar +8 espaços (total 10), mas a penalidade aumenta em –1 por espaço extra (até –10). Penalidade não se aplica a testes para ativar engenhocas. Causa –5 em Furtividade. Não pode ter penalidade reduzida.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Cota de Moedas",
            preco: "T$ 350",
            bonus_defesa: "+4",
            penalidade_armadura: "–3",
            espacos: "2",
            categoria: "Armadura",
            tipo: "Armadura Leve",
            descricao: "Feita de tibares entrelaçados. Você recebe +2 em Diplomacia (cumulativo com melhorias). Pode impor –2 em Diplomacia contra certos grupos.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Colete Fora da Lei",
            preco: "T$ 750",
            bonus_defesa: "+5",
            penalidade_armadura: "–5",
            espacos: "2",
            categoria: "Armadura",
            tipo: "Armadura Leve",
            descricao: "Colete metálico com ranhuras. Contra armas de disparo, o bônus na Defesa aumenta em +2.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Veste de Teia de Aranha",
            preco: "T$ 3.000",
            bonus_defesa: "+4",
            penalidade_armadura: "0",
            espacos: "2",
            categoria: "Armadura",
            tipo: "Armadura Leve",
            descricao: "Veste cinza-escura, maleável e silenciosa. Fornece +5 em Furtividade, mas não pode receber a melhoria material especial.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Armadura de Ossos",
            preco: "T$ 120",
            bonus_defesa: "+3",
            penalidade_armadura: "–2",
            espacos: "2",
            categoria: "Armadura",
            tipo: "Armadura Leve",
            descricao: "Esta armadura sinistra fornece +1 em Intimidação e na CD de seus efeitos de medo (cumulativo com a melhoria macabra).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Brigantina",
            preco: "T$ 75",
            bonus_defesa: "+6",
            penalidade_armadura: "0",
            espacos: "5",
            categoria: "Armadura",
            tipo: "Armadura Pesada",
            descricao: "Veste de couro com pequenas placas metálicas. Contra armas de perfuração, o bônus na Defesa diminui em –2.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Armadura de Quitina",
            preco: "T$ 350",
            bonus_defesa: "+7",
            penalidade_armadura: "–3",
            espacos: "5",
            categoria: "Armadura",
            tipo: "Armadura Pesada",
            descricao: "Feita com carapaças de grandes insetos. Embora seja uma armadura pesada, não reduz o deslocamento do usuário.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Armadura de Chumbo",
            preco: "T$ 750",
            bonus_defesa: "+7",
            penalidade_armadura: "–5",
            espacos: "5",
            categoria: "Armadura",
            tipo: "Armadura Pesada",
            descricao: "Extremamente pesada. Fornece redução de dano 2/mundano e resistência a magia +2 (cumulativo).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Armadura de Justa",
            preco: "T$ 1.200",
            bonus_defesa: "+9",
            penalidade_armadura: "–5",
            espacos: "5",
            categoria: "Armadura",
            tipo: "Armadura Pesada",
            descricao: "Meia armadura de placas. Fornece +5 para resistir a ser derrubado (montado). Contra armas de perfuração, bônus na Defesa +2. Penalidade de armadura aumenta em 2 se não estiver montado.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Armadura de Hussardo Alado",
            preco: "T$ 4.500",
            bonus_defesa: "+10",
            penalidade_armadura: "–6",
            espacos: "5",
            categoria: "Armadura",
            tipo: "Armadura Pesada",
            descricao: "Armadura completa com 'asas' de penas. Quando faz uma investida montada, pode fazer um teste de Intimidação para assustar o alvo (1/cena por oponente).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Armadura de Pedra",
            preco: "T$ 5.500",
            bonus_defesa: "+12",
            penalidade_armadura: "–5",
            espacos: "5",
            categoria: "Armadura",
            tipo: "Armadura Pesada",
            descricao: "Armadura completa de pedra. Fornece redução de dano 2 (cumulativo). Seu deslocamento é reduzido pela metade (em vez de -3m). Não pode receber material especial.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Broquel",
            preco: "T$ 25",
            bonus_defesa: "—",
            penalidade_armadura: "–1",
            espacos: "0,5",
            categoria: "Escudo",
            tipo: "Escudo Leve",
            descricao: "Não fornece bônus passivo. 1/rodada, quando é atingido por um ataque, pode fazer um teste de ataque corpo a corpo (reação). Para cada 10 pontos no resultado, reduz o dano em 2. Pode atacar como escudo leve.",
            fonte: "Heróis de Arton"
        },

        {
            nome: "Escudo de Vime",
            preco: "T$ 15",
            bonus_defesa: "+2",
            penalidade_armadura: "–2",
            espacos: "2",
            categoria: "Escudo",
            tipo: "Escudo Pesado",
            descricao: "Leve e volumoso. Exige duas mãos (impede empunhar armas). Não pode ser usado montado ou para atacar. Fornece camuflagem leve. Pode gastar ação para fornecer o bônus de Defesa e camuflagem a um aliado adjacente. Se você ou o aliado sofrerem um crítico, o escudo é destruído.",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Escudo Torre",
            preco: "T$ 45",
            bonus_defesa: "+2",
            penalidade_armadura: "–4",
            espacos: "2",
            categoria: "Escudo",
            tipo: "Escudo Pesado",
            descricao: "Escudo grande e retangular. Não pode ser usado para atacar ou montado. Pode gastar uma ação de movimento para fixá-lo no chão (fornece cobertura leve).",
            fonte: "Heróis de Arton"
        },
        {
            nome: "Sagna",
            preco: "T$ 20",
            bonus_defesa: "+2",
            penalidade_armadura: "–3",
            espacos: "2",
            categoria: "Escudo",
            tipo: "Escudo Pesado",
            descricao: "Grande escudo de madeira. Anula a penalidade de armadura (deste escudo e da sua armadura) para natação. Se passa em teste de natação, avança deslocamento normal (+3m se já tiver desloc. de natação). Pode atacar como escudo pesado.",
            fonte: "Heróis de Arton"
        }

    ]
};

// Publica a variável para o script.js
window.armadurasData = armadurasData;