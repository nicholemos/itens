// enchantmentos.js

const enchantmentosData = {
    "encantamento": [
        // ===== ENCANTOS DE ARMA (Tabela 8-2) =====
        {
            "nome": "Encanto Ameaçadora",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Encanto Menor. A margem de ameaça da arma duplica. (p. 335)"
        },
        {
            "nome": "Encanto Antimagia",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Encanto Maior. Fornece +2 na Defesa e em testes de resistência contra magias. Como uma reação (custo 4 PM), pode dissipar uma magia (como Dissipar Magia). (p. 335)"
        },
        {
            "nome": "Encanto Assassina",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Encanto Médio. Como uma ação livre (custo 2 PM), causa +2d6 de dano. Se reduzir os PV do alvo a 0, ele deve fazer um teste de Fortitude (CD 20) ou morre. (p. 335)"
        },
        {
            "nome": "Encanto Atordoante",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Encanto Médio. Como uma ação livre (custo 2 PM), em um acerto crítico, o alvo fica atordoado por 1 rodada (Fortitude CD 20 anula). (p. 335)"
        },
        {
            "nome": "Encanto Caçadora",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Encanto Menor. Causa +1d8 de dano contra um tipo de criatura (Humanoide, Monstro, Espírito, etc.). (p. 335)"
        },
        {
            "nome": "Encanto Congelante",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Encanto Menor. Causa +1d6 de dano de frio. Como uma ação livre (custo 2 PM), pode fazer o alvo ficar enredado (Reflexos CD 20 anula). (p. 335)"
        },
        {
            "nome": "Encanto Conjuradora",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Encanto Médio. Armazena uma magia de 1º ou 2º círculo. Como uma ação livre (custo 2 PM), pode lançar a magia armazenada. (p. 335)"
        },
        {
            "nome": "Encanto Dançarina",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Encanto Maior. Como uma ação padrão (custo 2 PM), a arma flutua e ataca sozinha por 3 rodadas. (p. 335)"
        },
        {
            "nome": "Encanto Defensora",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Encanto Médio. Como uma ação livre (custo 1 PM), pode transferir o bônus de ataque da arma (até +4) para sua Defesa. (p. 335)"
        },
        {
            "nome": "Encanto Drenante",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Encanto Médio. Em um acerto crítico, causa +1d6 de dano de trevas e você cura metade do dano total. Como ação livre (custo 2 PM), causa +2d6 de dano de trevas (e cura metade). (p. 335)"
        },
        {
            "nome": "Encanto Elétrica",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Encanto Menor. Causa +1d6 de dano de eletricidade. Como uma ação livre (custo 2 PM), pode causar 3d8 de dano de eletricidade em outro alvo em 9m. (p. 335)"
        },
        {
            "nome": "Encanto Energética",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Encanto Médio. Concede +4 em testes de ataque, ignora 20 RD, causa dano de essência, emite luz (9m). Pré-Requisito: Formidável. (p. 335)"
        },
        {
            "nome": "Encanto Flamejante",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Encanto Menor. Causa +1d6 de dano de fogo. Como uma ação livre (custo 2 PM), pode disparar uma Bola de Fogo (6d6, CD 20). (p. 335)"
        },
        {
            "nome": "Encanto Formidável",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Encanto Menor. Concede +2 em testes de ataque e rolagens de dano. (p. 336)"
        },
        {
            "nome": "Encanto Inimiga",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Encanto Maior. Causa +2d8 de dano contra o tipo de criatura escolhido (Caçadora). Como ação livre (custo 5 PM), um acerto crítico mata o alvo (Fortitude CD 25 anula). Pré-Requisito: Caçadora. (p. 336)"
        },
        {
            "nome": "Encanto Lacinante",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Encanto Médio. Causa +1d8 de dano de trevas. Como ação livre (custo 2 PM), o alvo fica fatigado (Fortitude CD 20 anula). (p. 336)"
        },
        {
            "nome": "Encanto Magnífica",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Encanto Médio. Concede +4 em testes de ataque e rolagens de dano. Pré-Requisito: Formidável. (p. 336)"
        },
        {
            "nome": "Encanto Sagrada",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Encanto Menor. Causa +2d8 de dano contra devotos de deuses de energia negativa e criaturas malignas. (p. 336)"
        },
        {
            "nome": "Encanto Trovejante",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Encanto Menor. Causa +1d8 de dano sônico. Como ação livre (custo 1 PM), o alvo fica surdo (Fortitude CD 20 anula). (p. 336)"
        },
        {
            "nome": "Encanto Tumular",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Encanto Médio. Causa +1d8 de dano de trevas. Como ação livre (custo 2 PM), o alvo fica apavorado (Vontade CD 20 anula). (p. 336)"
        },
        {
            "nome": "Encanto Veloz",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Encanto Maior. Como ação livre (custo 3 PM), permite fazer uma ação de ataque adicional (uma vez por rodada). (p. 336)"
        },

        // ===== ENCANTOS DE ARMADURA E ESCUDO (Tabela 8-3) =====
        {
            "nome": "Encanto Defensor",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Armadura/Escudo",
            "descricao": "Encanto Menor. O bônus na Defesa do item aumenta em +2. (p. 338)"
        },
        {
            "nome": "Encanto Fortificado",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Armadura/Escudo",
            "descricao": "Encanto Médio. Chance de ignorar dano extra de acerto crítico (25% escudo, 50% armadura). (p. 339)"
        },
        {
            "nome": "Encanto Guardião",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Armadura/Escudo",
            "descricao": "Encanto Médio. O bônus na Defesa do item aumenta em +4. Pré-Requisito: Defensor. (p. 339)"
        },
        {
            "nome": "Encanto Invulnerável (RD 2/5)",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Armadura/Escudo",
            "descricao": "Encanto Menor. Concede RD 2 (escudo) ou RD 5 (armadura). (p. 339)"
        },
        {
            "nome": "Encanto Protetor (+2 TR)",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Armadura/Escudo",
            "descricao": "Encanto Menor. Concede +2 em testes de resistência. (p. 339)"
        },
        {
            "nome": "Encanto Refletor",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Armadura/Escudo",
            "descricao": "Encanto Maior. Aplicável apenas em escudos. Como uma reação (custo 3 PM), reflete uma magia de alvo único (Reflexos CD 25 anula). (p. 339)"
        }
    ]
};

// Publica a variável para o script.js
window.enchantmentosData = enchantmentosData;