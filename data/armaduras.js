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
        }
    ]
};

// Publica a variável para o script.js
window.armadurasData = armadurasData;