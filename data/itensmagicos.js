// itensmagicos.js

const itensMagicosData = {
    "item": [
        // ===== POÇÕES (Tabela 8-4) =====
        {
            "nome": "Poção: Curar Ferimentos (2d8+2)",
            "preco": "T$ 30",
            "espacos": "0,5",
            "categoria": "Item Mágico",
            "tipo": "Poção",
            "descricao": "Poção Menor. Beber cura 2d8+2 PV. (p. 341)"
        },
        {
            "nome": "Poção: Vitalidade Fantasma (2d10)",
            "preco": "T$ 30",
            "espacos": "0,5",
            "categoria": "Item Mágico",
            "tipo": "Poção",
            "descricao": "Poção Menor. Beber concede 2d10 PV temporários. (p. 341)"
        },
        {
            "nome": "Poção: Curar Ferimentos (4d8+4)",
            "preco": "T$ 270",
            "espacos": "0,5",
            "categoria": "Item Mágico",
            "tipo": "Poção",
            "descricao": "Poção Menor (Magia de 2º Círculo). Beber cura 4d8+4 PV. (p. 341)"
        },
        {
            "nome": "Poção: Físico Divino (+2)",
            "preco": "T$ 270",
            "espacos": "0,5",
            "categoria": "Item Mágico",
            "tipo": "Poção",
            "descricao": "Poção Menor. Beber concede +2 em For, Des ou Con (à escolha) por uma cena. (p. 341)"
        },
        {
            "nome": "Poção: Mente Divina (+2)",
            "preco": "T$ 270",
            "espacos": "0,5",
            "categoria": "Item Mágico",
            "tipo": "Poção",
            "descricao": "Poção Menor. Beber concede +2 em Int, Sab ou Car (à escolha) por uma cena. (p. 341)"
        },
        {
            "nome": "Poção: Purificação",
            "preco": "T$ 270",
            "espacos": "0,5",
            "categoria": "Item Mágico",
            "tipo": "Poção",
            "descricao": "Poção Menor. Beber remove uma condição (lista na pág. 203). (p. 341)"
        },
        {
            "nome": "Poção: Velocidade",
            "preco": "T$ 270",
            "espacos": "0,5",
            "categoria": "Item Mágico",
            "tipo": "Poção",
            "descricao": "Poção Menor. Beber concede uma ação de movimento adicional por turno, por uma cena. (p. 341)"
        },
        {
            "nome": "Poção: Curar Ferimentos (7d8+7)",
            "preco": "T$ 1.080",
            "espacos": "0,5",
            "categoria": "Item Mágico",
            "tipo": "Poção",
            "descricao": "Poção Média (Magia de 3º Círculo). Beber cura 7d8+7 PV. (p. 341)"
        },
        {
            "nome": "Poção: Pele de Pedra",
            "preco": "T$ 1.080",
            "espacos": "0,5",
            "categoria": "Item Mágico",
            "tipo": "Poção",
            "descricao": "Poção Média. Beber concede RD 5 por uma cena. (p. 341)"
        },
        {
            "nome": "Poção: Voo",
            "preco": "T$ 1.080",
            "espacos": "0,5",
            "categoria": "Item Mágico",
            "tipo": "Poção",
            "descricao": "Poção Média. Beber concede deslocamento de voo 12m por uma cena. (p. 341)"
        },
        {
            "nome": "Poção: Curar Ferimentos (11d8+11)",
            "preco": "T$ 3.000",
            "espacos": "0,5",
            "categoria": "Item Mágico",
            "tipo": "Poção",
            "descricao": "Poção Média (Magia de 4º Círculo). Beber cura 11d8+11 PV. (p. 341)"
        },
        {
            "nome": "Poção: Físico Divino (+4)",
            "preco": "T$ 3.000",
            "espacos": "0,5",
            "categoria": "Item Mágico",
            "tipo": "Poção",
            "descricao": "Poção Média. Beber concede +4 em For, Des ou Con (à escolha) por uma cena. (p. 341)"
        },
        {
            "nome": "Poção: Mente Divina (+4)",
            "preco": "T$ 3.000",
            "espacos": "0,5",
            "categoria": "Item Mágico",
            "tipo": "Poção",
            "descricao": "Poção Média. Beber concede +4 em Int, Sab ou Car (à escolha) por uma cena. (p. 341)"
        },
        {
            "nome": "Poção: Invisibilidade",
            "preco": "T$ 3.000",
            "espacos": "0,5",
            "categoria": "Item Mágico",
            "tipo": "Poção",
            "descricao": "Poção Média. Beber concede invisibilidade por uma cena. (p. 341)"
        },
        {
            "nome": "Poção: Sopro do Dragão",
            "preco": "T$ 3.000",
            "espacos": "0,5",
            "categoria": "Item Mágico",
            "tipo": "Poção",
            "descricao": "Poção Média. Beber permite cuspir um cone de 6m de fogo (8d6, Reflexos CD 22 reduz à metade). (p. 341)"
        },
        {
            "nome": "Poção: Curar Ferimentos (16d8+16)",
            "preco": "T$ 6.600",
            "espacos": "0,5",
            "categoria": "Item Mágico",
            "tipo": "Poção",
            "descricao": "Poção Maior (Magia de 5º Círculo). Beber cura 16d8+16 PV. (p. 341)"
        },

        // ===== ARMAS MÁGICAS (Tabela 8-5) =====
        {
            "nome": "Adaga Lançável",
            "preco": "T$ 3.002",
            "dano": "1d4",
            "critico": "19",
            "alcance": "Curto",
            "tipo_dano": "Perfuração",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Menor. Esta adaga mágica (+1) reaparece em sua mão após ser arremessada. (p. 341)"
        },
        {
            "nome": "Lâmina Maldita",
            "preco": "T$ 18.010",
            "dano": "1d6",
            "critico": "19",
            "alcance": "—",
            "tipo_dano": "Perfuração",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Menor. Esta espada curta (+2) amaldiçoa alvos (Vontade CD 20 anula). Causa 1d6 de dano de trevas por rodada (Fort CD 20 anula). (p. 341)"
        },
        {
            "nome": "Machadinha de Arremesso",
            "preco": "T$ 18.006",
            "dano": "1d6",
            "critico": "x3",
            "alcance": "Curto",
            "tipo_dano": "Corte",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Menor. Esta machadinha mágica (+2) reaparece na mão após ser arremessada. (p. 341)"
        },
        {
            "nome": "Espada Justiceira",
            "preco": "T$ 36.015",
            "dano": "1d8",
            "critico": "19",
            "alcance": "—",
            "tipo_dano": "Corte",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Média. Esta espada longa (+4) é Sagrada e causa +2d6 de dano contra mortos-vivos e espíritos. (p. 341)"
        },

        // ===== ARMADURAS MÁGICAS (Tabela 8-6) =====
        {
            "nome": "Armadura da Batalha",
            "preco": "T$ 21.000",
            "bonus_defesa": "+10",
            "penalidade_armadura": "–5",
            "espacos": "5",
            "categoria": "Item Mágico",
            "tipo": "Armadura/Escudo",
            "descricao": "Menor. Esta armadura completa (+2) fornece +5 em testes de resistência. (p. 341)"
        },
        {
            "nome": "Armadura de Allihanna",
            "preco": "T$ 36.020",
            "bonus_defesa": "+4",
            "penalidade_armadura": "0",
            "espacos": "2",
            "categoria": "Item Mágico",
            "tipo": "Armadura/Escudo",
            "descricao": "Média. Esta armadura de couro (+4) tem RD 5 e permite ao usuário se transformar em um animal (como Metamorfose). (p. 342)"
        },
        {
            "nome": "Couraça da Raposa",
            "preco": "T$ 18.500",
            "bonus_defesa": "+7",
            "penalidade_armadura": "–4",
            "espacos": "2",
            "categoria": "Item Mágico",
            "tipo": "Armadura/Escudo",
            "descricao": "Menor. Esta couraça (+2) fornece +2 em Furtividade e Ladinagem. (p. 342)"
        },
        {
            "nome": "Cota de Malha de Mithral",
            "preco": "T$ 13.650",
            "bonus_defesa": "+6",
            "penalidade_armadura": "0",
            "espacos": "4",
            "categoria": "Item Mágico",
            "tipo": "Armadura/Escudo",
            "descricao": "Menor. Esta cota de malha (+0) é feita de mitral (penalidade reduzida em 2, ocupa -1 espaço). (p. 342)"
        },

        // ===== ESCUDOS MÁGICOS (Tabela 8-7) =====
        {
            "nome": "Escudo do Sobrevivente",
            "preco": "T$ 18.015",
            "bonus_defesa": "+4",
            "penalidade_armadura": "–2",
            "espacos": "2",
            "categoria": "Item Mágico",
            "tipo": "Armadura/Escudo",
            "descricao": "Menor. Este escudo pesado (+2) concede +2 em todos os testes de resistência. (p. 342)"
        },
        {
            "nome": "Escudo do Leão",
            "preco": "T$ 36.015",
            "bonus_defesa": "+6",
            "penalidade_armadura": "–2",
            "espacos": "2",
            "categoria": "Item Mágico",
            "tipo": "Armadura/Escudo",
            "descricao": "Médio. Este escudo pesado (+4) concede RD 5. Uma vez por dia, pode emitir um rugido que apavora (Vontade CD 25). (p. 342)"
        },

        // ===== ACESSÓRIOS MÁGICOS (Tabela 8-8) =====
        {
            "nome": "Anel da Proteção",
            "preco": "T$ 9.000",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório",
            "descricao": "Menor. Concede +2 na Defesa. (p. 342)"
        },
        {
            "nome": "Anel do Sustento",
            "preco": "T$ 3.000",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório",
            "descricao": "Menor. Você não precisa comer ou beber e só precisa de 2h de sono. (p. 342)"
        },
        {
            "nome": "Amuleto da Robustez (+1 Con)",
            "preco": "T$ 4.500",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório",
            "descricao": "Menor. Concede +1 em Constituição (após 1 dia de uso). (p. 342)"
        },
        {
            "nome": "Botas de Sete Léguas",
            "preco": "T$ 9.000",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório",
            "descricao": "Menor. Seu deslocamento aumenta em +6m. (p. 342)"
        },
        {
            "nome": "Brincos da Sagacidade (+1 Int)",
            "preco": "T$ 4.500",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório",
            "descricao": "Menor. Concede +1 em Inteligência (após 1 dia de uso). (p. 342)"
        },
        {
            "nome": "Cinto da Força do Gigante (+1 For)",
            "preco": "T$ 4.500",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório",
            "descricao": "Menor. Concede +1 em Força (após 1 dia de uso). (p. 342)"
        },
        {
            "nome": "Luvas da Delicadeza (+1 Des)",
            "preco": "T$ 4.500",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório",
            "descricao": "Menor. Concede +1 em Destreza (após 1 dia de uso). (p. 342)"
        },
        {
            "nome": "Manto do Fascínio (+1 Car)",
            "preco": "T$ 4.500",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório",
            "descricao": "Menor. Concede +1 em Carisma (após 1 dia de uso). (p. 342)"
        },
        {
            "nome": "Pingente da Sensatez (+1 Sab)",
            "preco": "T$ 4.500",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório",
            "descricao": "Menor. Concede +1 em Sabedoria (após 1 dia de uso). (p. 342)"
        },
        {
            "nome": "Amuleto da Robustez (+2 Con)",
            "preco": "T$ 25.500",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório",
            "descricao": "Médio. Concede +2 em Constituição (após 1 dia de uso). (p. 342)"
        },
        {
            "nome": "Anel da Energia",
            "preco": "T$ 21.000",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório",
            "descricao": "Médio. Concede +5 PM (após 1 dia de uso). (p. 342)"
        },
        {
            "nome": "Anel da Vitalidade",
            "preco": "T$ 21.000",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório",
            "descricao": "Médio. Concede +10 PV (após 1 dia de uso). (p. 342)"
        },
        {
            "nome": "Cinto da Força do Gigante (+2 For)",
            "preco": "T$ 25.500",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório",
            "descricao": "Médio. Concede +2 em Força (após 1 dia de uso). (p. 342)"
        },
        {
            "nome": "Coroa Majestosa (+2 Car)",
            "preco": "T$ 25.500",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório",
            "descricao": "Médio. Concede +2 em Carisma (após 1 dia de uso). (p. 343)"
        },
        {
            "nome": "Estola da Serenidade (+2 Sab)",
            "preco": "T$ 25.500",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório",
            "descricao": "Médio. Concede +2 em Sabedoria (após 1 dia de uso). (p. 343)"
        },
        {
            "nome": "Pulseiras da Celeridade (+2 Des)",
            "preco": "T$ 25.500",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório",
            "descricao": "Médio. Concede +2 em Destreza (após 1 dia de uso). (p. 343)"
        },
        {
            "nome": "Tiara da Sapiência (+2 Int)",
            "preco": "T$ 25.500",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório",
            "descricao": "Médio. Concede +2 em Inteligência (após 1 dia de uso). (p. 343)"
        },
        {
            "nome": "Tomo (Manual) de Atributo +1",
            "preco": "T$ 30.000",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório",
            "descricao": "Maior. Ler o livro (uma semana) aumenta um atributo em +1 permanentemente. (p. 343)"
        },
        {
            "nome": "Anel da Regeneração",
            "preco": "T$ 150.000",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório",
            "descricao": "Maior. Concede Cura Acelerada 5 (após 1 dia de uso). (p. 342)"
        },
        {
            "nome": "Colar Guardião",
            "preco": "T$ 51.000",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório",
            "descricao": "Maior. Concede +5 na Defesa. (p. 343)"
        },
        {
            "nome": "Mosca de Azgher",
            "preco": "T$ 51.000",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório",
            "descricao": "Maior. Um broche que se transforma em um " + "constructo" + " espião voador (usa a ficha de um zangão). (p. 343)"
        },
        {
            "nome": "Símbolo da Fé Abençoado",
            "preco": "T$ 102.000",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório",
            "descricao": "Maior. Concede +5 em testes de Religião. Como ação livre (custo 5 PM), pode lançar uma magia divina de 1º ou 2º círculo. (p. 343)"
        }
    ]
};

// Publica a variável para o script.js
window.itensMagicosData = itensMagicosData;