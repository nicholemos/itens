// ===== DADOS GLOBAIS (JSON EMBUTIDO) =====
// Agora sim, os dados estão aqui DENTRO do script.
const t20Data = {
    "itens": [
        // ---------- ARMAS SIMPLES ----------
        {
            "nome": "Adaga",
            "preco": "T$ 2",
            "dano": "1d4",
            "critico": "19",
            "alcance": "Curto",
            "tipo_dano": "Perfuração",
            "espacos": "1",
            "categoria": "Arma",
            "tipo": "Simples",
            "empunhadura": "Leve",
            "descricao": "Esta faca afiada é usada por muitos habitantes do Reinado, embora seja favorita de ladrões e assassinos, por ser facilmente escondida (fornece +5 em testes de Ladinagem para ocultá-la). Quando ataca com uma adaga, você pode usar sua Destreza em vez de Força nos testes de ataque. Uma adaga pode ser arremessada."
        },
        {
            "nome": "Espada curta",
            "preco": "T$ 10",
            "dano": "1d6",
            "critico": "19",
            "alcance": "—",
            "tipo_dano": "Perfuração",
            "espacos": "1",
            "categoria": "Arma",
            "tipo": "Simples",
            "empunhadura": "Leve",
            "descricao": "O tipo mais comum de espada, usada por guardas ou como arma secundária de guerreiros mais capazes. Mede entre 40 e 50cm."
        },
        {
            "nome": "Foice",
            "preco": "T$ 4",
            "dano": "1d6",
            "critico": "x3",
            "alcance": "—",
            "tipo_dano": "Corte",
            "espacos": "1",
            "categoria": "Arma",
            "tipo": "Simples",
            "empunhadura": "Leve",
            "descricao": "Originalmente um instrumento agrícola, consiste de uma lâmina curva presa a um cabo de madeira. Uma arma tradicional de druidas."
        },
        {
            "nome": "Clava",
            "preco": "—",
            "dano": "1d6",
            "critico": "x2",
            "alcance": "—",
            "tipo_dano": "Impacto",
            "espacos": "1",
            "categoria": "Arma",
            "tipo": "Simples",
            "empunhadura": "Uma Mão",
            "descricao": "Um pedaço de madeira empunhado como arma, geralmente usado por bárbaros ou criaturas brutais. Sendo fácil de conseguir, seu preço é zero."
        },
        {
            "nome": "Lança",
            "preco": "T$ 2",
            "dano": "1d6",
            "critico": "x2",
            "alcance": "Curto",
            "tipo_dano": "Perfuração",
            "espacos": "1",
            "categoria": "Arma",
            "tipo": "Simples",
            "empunhadura": "Uma Mão",
            "descricao": "Qualquer arma feita com uma haste de madeira e uma ponta afiada. Uma lança pode ser arremessada."
        },
        {
            "nome": "Maça",
            "preco": "T$ 12",
            "dano": "1d8",
            "critico": "x2",
            "alcance": "—",
            "tipo_dano": "Impacto",
            "espacos": "1",
            "categoria": "Arma",
            "tipo": "Simples",
            "empunhadura": "Uma Mão",
            "descricao": "Bastão com um peso cheio de protuberâncias na ponta, a maça é usada por clérigos que fazem votos de não derramar sangue."
        },
        {
            "nome": "Bordão",
            "preco": "—",
            "dano": "1d6/1d6",
            "critico": "x2",
            "alcance": "—",
            "tipo_dano": "Impacto",
            "espacos": "2",
            "categoria": "Arma",
            "tipo": "Simples",
            "empunhadura": "Duas Mãos",
            "descricao": "Um cajado apreciado por viajantes e camponeses por sua praticidade e fácil acesso (seu preço é zero). O bordão é uma arma dupla."
        },
        {
            "nome": "Pique",
            "preco": "T$ 2",
            "dano": "1d8",
            "critico": "x2",
            "alcance": "—",
            "tipo_dano": "Perfuração",
            "espacos": "2",
            "categoria": "Arma",
            "tipo": "Simples",
            "empunhadura": "Duas Mãos",
            "descricao": "Essencialmente uma lança muito longa. O pique é uma arma alongada (dobra o alcance natural)."
        },
        {
            "nome": "Tacape",
            "preco": "—",
            "dano": "1d10",
            "critico": "x2",
            "alcance": "—",
            "tipo_dano": "Impacto",
            "espacos": "2",
            "categoria": "Arma",
            "tipo": "Simples",
            "empunhadura": "Duas Mãos",
            "descricao": "Versão maior e/ou com pregos de uma clava. Usado por bárbaros e humanoides bestiais. Preço é zero."
        },
        {
            "nome": "Azagaia",
            "preco": "T$ 1",
            "dano": "1d6",
            "critico": "x2",
            "alcance": "Médio",
            "tipo_dano": "Perfuração",
            "espacos": "1",
            "categoria": "Arma",
            "tipo": "Simples",
            "empunhadura": "Uma Mão",
            "descricao": "Uma lança leve e flexível, própria para arremesso. Pode ser usada como arma corpo a corpo, mas sofre penalidade de –5 no ataque."
        },
        {
            "nome": "Besta leve",
            "preco": "T$ 35",
            "dano": "1d8",
            "critico": "19",
            "alcance": "Médio",
            "tipo_dano": "Perfuração",
            "espacos": "1",
            "categoria": "Arma",
            "tipo": "Simples",
            "empunhadura": "Uma Mão",
            "descricao": "Um arco montado sobre uma coronha de madeira com um gatilho. Recarregar uma besta leve é uma ação de movimento."
        },
        {
            "nome": "Funda",
            "preco": "—",
            "dano": "1d4",
            "critico": "x2",
            "alcance": "Médio",
            "tipo_dano": "Impacto",
            "espacos": "1",
            "categoria": "Arma",
            "tipo": "Simples",
            "empunhadura": "Uma Mão",
            "descricao": "Uma simples tira de couro usada para arremessar pedras. Recarregar é uma ação de movimento. Aplica Força ao dano."
        },
        {
            "nome": "Arco curto",
            "preco": "T$ 30",
            "dano": "1d6",
            "critico": "x3",
            "alcance": "Médio",
            "tipo_dano": "Perfuração",
            "espacos": "2",
            "categoria": "Arma",
            "tipo": "Simples",
            "empunhadura": "Duas Mãos",
            "descricao": "Uma arma antiga e comum, usada para caça. Pode ser usado montado."
        },
        {
            "nome": "Machadinha",
            "preco": "T$ 6",
            "dano": "1d6",
            "critico": "x3",
            "alcance": "Curto",
            "tipo_dano": "Corte",
            "espacos": "1",
            "categoria": "Arma",
            "tipo": "Marcial",
            "empunhadura": "Leve",
            "descricao": "Ferramenta útil para cortar madeira e também inimigos. Uma machadinha pode ser arremessada."
        },
        {
            "nome": "Cimitarra",
            "preco": "T$ 15",
            "dano": "1d6",
            "critico": "18",
            "alcance": "—",
            "tipo_dano": "Corte",
            "espacos": "1",
            "categoria": "Arma",
            "tipo": "Marcial",
            "empunhadura": "Uma Mão",
            "descricao": "Espada com a lâmina curva e muito afiada. A cimitarra é uma arma ágil."
        },
        {
            "nome": "Espada longa",
            "preco": "T$ 15",
            "dano": "1d8",
            "critico": "19",
            "alcance": "—",
            "tipo_dano": "Corte",
            "espacos": "1",
            "categoria": "Arma",
            "tipo": "Marcial",
            "empunhadura": "Uma Mão",
            "descricao": "Arma típica de soldados e guerreiros, esta espada de dois gumes tem lâmina reta medindo entre 80cm e 1m."
        },
        {
            "nome": "Florete",
            "preco": "T$ 20",
            "dano": "1d6",
            "critico": "18",
            "alcance": "—",
            "tipo_dano": "Perfuração",
            "espacos": "1",
            "categoria": "Arma",
            "tipo": "Marcial",
            "empunhadura": "Uma Mão",
            "descricao": "A lâmina leve e fina desta espada torna a arma muito precisa. O florete é uma arma ágil."
        },
        {
            "nome": "Machado de batalha",
            "preco": "T$ 10",
            "dano": "1d8",
            "critico": "x3",
            "alcance": "—",
            "tipo_dano": "Corte",
            "espacos": "1",
            "categoria": "Arma",
            "tipo": "Marcial",
            "empunhadura": "Uma Mão",
            "descricao": "Adaptado do machado de lenhador, este não é um instrumento para corte de árvores, mas sim uma arma capaz de causar ferimentos terríveis."
        },
        {
            "nome": "Mangual",
            "preco": "T$ 8",
            "dano": "1d8",
            "critico": "x2",
            "alcance": "—",
            "tipo_dano": "Impacto",
            "espacos": "1",
            "categoria": "Arma",
            "tipo": "Marcial",
            "empunhadura": "Uma Mão",
            "descricao": "Uma haste metálica ligada a uma corrente com uma esfera de aço na ponta. O mangual é uma arma versátil, fornecendo +2 em testes para desarmar."
        },
        {
            "nome": "Martelo de guerra",
            "preco": "T$ 12",
            "dano": "1d8",
            "critico": "x3",
            "alcance": "—",
            "tipo_dano": "Impacto",
            "espacos": "1",
            "categoria": "Arma",
            "tipo": "Marcial",
            "empunhadura": "Uma Mão",
            "descricao": "Outra ferramenta adaptada para combate, esta é a arma favorita de quase todos os anões que não usam machados."
        },
        {
            "nome": "Picareta",
            "preco": "T$ 8",
            "dano": "1d6",
            "critico": "x4",
            "alcance": "—",
            "tipo_dano": "Perfuração",
            "espacos": "1",
            "categoria": "Arma",
            "tipo": "Marcial",
            "empunhadura": "Uma Mão",
            "descricao": "Usada por mineradores, esta ferramenta quebra pedras com facilidade. Imagine o que pode fazer com carne e osso!"
        },
        {
            "nome": "Tridente",
            "preco": "T$ 15",
            "dano": "1d8",
            "critico": "x2",
            "alcance": "Curto",
            "tipo_dano": "Perfuração",
            "espacos": "1",
            "categoria": "Arma",
            "tipo": "Marcial",
            "empunhadura": "Uma Mão",
            "descricao": "Uma lança com três pontas, favorita de povos marinhos e gladiadores. O tridente é uma arma versátil (+2 em testes para derrubar). Pode ser arremessado."
        },
        {
            "nome": "Alabarda",
            "preco": "T$ 10",
            "dano": "1d10",
            "critico": "x3",
            "alcance": "—",
            "tipo_dano": "Corte/Perfuração",
            "espacos": "2",
            "categoria": "Arma",
            "tipo": "Marcial",
            "empunhadura": "Duas Mãos",
            "descricao": "Uma haste de madeira com 2m de comprimento e uma lâmina de machado na ponta. A alabarda é uma arma alongada."
        },
        {
            "nome": "Alfange",
            "preco": "T$ 75",
            "dano": "2d4",
            "critico": "18",
            "alcance": "—",
            "tipo_dano": "Corte",
            "espacos": "2",
            "categoria": "Arma",
            "tipo": "Marcial",
            "empunhadura": "Duas Mãos",
            "descricao": "Uma versão maior da cimitarra, esta espada de lâmina larga e curva é bastante usada por guerreiros do Deserto da Perdição."
        },
        {
            "nome": "Gadanho",
            "preco": "T$ 18",
            "dano": "2d4",
            "critico": "x4",
            "alcance": "—",
            "tipo_dano": "Corte",
            "espacos": "2",
            "categoria": "Arma",
            "tipo": "Marcial",
            "empunhadura": "Duas Mãos",
            "descricao": "Outra ferramenta agrícola, o gadanho é uma versão maior da foice, para uso com as duas mãos."
        },
        {
            "nome": "Lança montada",
            "preco": "T$ 10",
            "dano": "1d8",
            "critico": "x3",
            "alcance": "—",
            "tipo_dano": "Perfuração",
            "espacos": "2",
            "categoria": "Arma",
            "tipo": "Marcial",
            "empunhadura": "Duas Mãos",
            "descricao": "Arma alongada. Se montado, pode usá-la com uma mão. Causa +2d8 de dano em investida montada."
        },
        {
            "nome": "Machado de guerra",
            "preco": "T$ 20",
            "dano": "1d12",
            "critico": "x3",
            "alcance": "—",
            "tipo_dano": "Corte",
            "espacos": "2",
            "categoria": "Arma",
            "tipo": "Marcial",
            "empunhadura": "Duas Mãos",
            "descricao": "Este imenso machado de lâmina dupla é uma arma extremamente perigosa."
        },
        {
            "nome": "Marreta",
            "preco": "T$ 20",
            "dano": "3d4",
            "critico": "x2",
            "alcance": "—",
            "tipo_dano": "Impacto",
            "espacos": "2",
            "categoria": "Arma",
            "tipo": "Marcial",
            "empunhadura": "Duas Mãos",
            "descricao": "Uma haste de madeira resistente com uma pesada cabeça de metal ou pedra."
        },
        {
            "nome": "Montante",
            "preco": "T$ 50",
            "dano": "2d6",
            "critico": "19",
            "alcance": "—",
            "tipo_dano": "Corte",
            "espacos": "2",
            "categoria": "Arma",
            "tipo": "Marcial",
            "empunhadura": "Duas Mãos",
            "descricao": "Enorme e pesada, esta espada de 1,5m de comprimento é uma arma poderosa."
        },
        {
            "nome": "Arco longo",
            "preco": "T$ 100",
            "dano": "1d8",
            "critico": "x3",
            "alcance": "Médio",
            "tipo_dano": "Perfuração",
            "espacos": "2",
            "categoria": "Arma",
            "tipo": "Marcial",
            "empunhadura": "Duas Mãos",
            "descricao": "Este arco reforçado tem a altura de uma pessoa. Permite aplicar sua Força às rolagens de dano. Não pode ser usado montado."
        },
        {
            "nome": "Besta pesada",
            "preco": "T$ 50",
            "dano": "1d12",
            "critico": "19",
            "alcance": "Médio",
            "tipo_dano": "Perfuração",
            "espacos": "2",
            "categoria": "Arma",
            "tipo": "Marcial",
            "empunhadura": "Duas Mãos",
            "descricao": "Versão maior e mais potente da besta leve. Recarregar uma besta pesada é uma ação padrão."
        },
        // ---------- ARMAS EXÓTICAS ----------
        {
            "nome": "Chicote",
            "preco": "T$ 2",
            "dano": "1d3",
            "critico": "x2",
            "alcance": "—",
            "tipo_dano": "Corte",
            "espacos": "1",
            "categoria": "Arma",
            "tipo": "Exótica",
            "empunhadura": "Uma Mão",
            "descricao": "Ataca a até 4,5m. Arma ágil e versátil (+2 em derrubar ou desarmar)."
        },
        {
            "nome": "Espada bastarda",
            "preco": "T$ 35",
            "dano": "1d10/1d12",
            "critico": "19",
            "alcance": "—",
            "tipo_dano": "Corte",
            "espacos": "1",
            "categoria": "Arma",
            "tipo": "Exótica",
            "empunhadura": "Uma Mão",
            "descricao": "Arma adaptável. Pode ser usada como arma marcial de duas mãos."
        },
        {
            "nome": "Katana",
            "preco": "T$ 100",
            "dano": "1d8/1d10",
            "critico": "19",
            "alcance": "—",
            "tipo_dano": "Corte",
            "espacos": "1",
            "categoria": "Arma",
            "tipo": "Exótica",
            "empunhadura": "Uma Mão",
            "descricao": "Espada tradicional do samurai. Arma adaptável e ágil. Pode ser usada como arma marcial de duas mãos."
        },
        {
            "nome": "Machado anão",
            "preco": "T$ 30",
            "dano": "1d10",
            "critico": "x3",
            "alcance": "—",
            "tipo_dano": "Corte",
            "espacos": "1",
            "categoria": "Arma",
            "tipo": "Exótica",
            "empunhadura": "Uma Mão",
            "descricao": "Arma preferida dos anões. Pode ser usada como arma marcial de duas mãos."
        },
        {
            "nome": "Corrente de espinhos",
            "preco": "T$ 25",
            "dano": "2d4/2d4",
            "critico": "19",
            "alcance": "—",
            "tipo_dano": "Corte",
            "espacos": "2",
            "categoria": "Arma",
            "tipo": "Exótica",
            "empunhadura": "Duas Mãos",
            "descricao": "Ataca a até 4,5m. Arma ágil, dupla e versátil (+2 em derrubar ou desarmar)."
        },
        {
            "nome": "Machado táurico",
            "preco": "T$ 50",
            "dano": "2d8",
            "critico": "x3",
            "alcance": "—",
            "tipo_dano": "Corte",
            "espacos": "2",
            "categoria": "Arma",
            "tipo": "Exótica",
            "empunhadura": "Duas Mãos",
            "descricao": "Arma ancestral dos minotauros. Arma desbalanceada (–2 em ataques)."
        },
        {
            "nome": "Rede",
            "preco": "T$ 20",
            "dano": "—",
            "critico": "—",
            "alcance": "Curto",
            "tipo_dano": "—",
            "espacos": "1",
            "categoria": "Arma",
            "tipo": "Exótica",
            "empunhadura": "Uma Mão",
            "descricao": "Se acertar, não causa dano, mas deixa a vítima enredada."
        },
        // ---------- ARMAS DE FOGO ----------
        {
            "nome": "Pistola",
            "preco": "T$ 250",
            "dano": "2d6",
            "critico": "19/x3",
            "alcance": "Curto",
            "tipo_dano": "Perfuração",
            "espacos": "1",
            "categoria": "Arma",
            "tipo": "De Fogo",
            "empunhadura": "Leve",
            "descricao": "A arma de fogo mais comum. Recarregar é uma ação padrão."
        },
        {
            "nome": "Mosquete",
            "preco": "T$ 500",
            "dano": "2d8",
            "critico": "19/x3",
            "alcance": "Médio",
            "tipo_dano": "Perfuração",
            "espacos": "2",
            "categoria": "Arma",
            "tipo": "De Fogo",
            "empunhadura": "Duas Mãos",
            "descricao": "Arma de fogo de uso difícil, mas com poder devastador. Recarregar é uma ação padrão."
        },
        // ---------- ARMADURAS E ESCUDOS ----------
        {
            "nome": "Armadura acolchoada",
            "preco": "T$ 5",
            "bonus_defesa": "+1",
            "penalidade_armadura": "0",
            "espacos": "2",
            "categoria": "Armadura",
            "tipo": "Armadura Leve",
            "descricao": "Uma túnica almofadada. É a armadura mais leve, mas protege todo o corpo, fornecendo +2 em Fortitude."
        },
        {
            "nome": "Armadura de couro",
            "preco": "T$ 20",
            "bonus_defesa": "+2",
            "penalidade_armadura": "0",
            "espacos": "2",
            "categoria": "Armadura",
            "tipo": "Armadura Leve",
            "descricao": "O peitoral desta armadura é feito de couro curtido em óleo fervente, para ficar mais rígido."
        },
        {
            "nome": "Couro batido",
            "preco": "T$ 35",
            "bonus_defesa": "+3",
            "penalidade_armadura": "–1",
            "espacos": "2",
            "categoria": "Armadura",
            "tipo": "Armadura Leve",
            "descricao": "Versão mais pesada da armadura de couro, reforçada com rebites de metal."
        },
        {
            "nome": "Gibão de peles",
            "preco": "T$ 25",
            "bonus_defesa": "+4",
            "penalidade_armadura": "–3",
            "espacos": "2",
            "categoria": "Armadura",
            "tipo": "Armadura Leve",
            "descricao": "Usada principalmente por bárbaros, esta armadura é formada por várias camadas de peles e couro de animais."
        },
        {
            "nome": "Couraça",
            "preco": "T$ 500",
            "bonus_defesa": "+5",
            "penalidade_armadura": "–4",
            "espacos": "2",
            "categoria": "Armadura",
            "tipo": "Armadura Leve",
            "descricao": "A mais robusta das armaduras leves, formada por uma placa metálica que protege o peito e as costas."
        },
        {
            "nome": "Brunea",
            "preco": "T$ 50",
            "bonus_defesa": "+5",
            "penalidade_armadura": "–2",
            "espacos": "5",
            "categoria": "Armadura",
            "tipo": "Armadura Pesada",
            "descricao": "Colete de couro coberto com plaquetas de metal sobrepostas. A armadura mais utilizada no Reinado."
        },
        {
            "nome": "Cota de malha",
            "preco": "T$ 150",
            "bonus_defesa": "+6",
            "penalidade_armadura": "–2",
            "espacos": "5",
            "categoria": "Armadura",
            "tipo": "Armadura Pesada",
            "descricao": "Longa veste de anéis metálicos interligados, formando uma malha flexível e resistente."
        },
        {
            "nome": "Loriga segmentada",
            "preco": "T$ 250",
            "bonus_defesa": "+7",
            "penalidade_armadura": "–3",
            "espacos": "5",
            "categoria": "Armadura",
            "tipo": "Armadura Pesada",
            "descricao": "Composta por tiras horizontais de metal, esta armadura pesada é muito utilizada por legionários do Império de Tauron."
        },
        {
            "nome": "Meia armadura",
            "preco": "T$ 600",
            "bonus_defesa": "+8",
            "penalidade_armadura": "–4",
            "espacos": "5",
            "categoria": "Armadura",
            "tipo": "Armadura Pesada",
            "descricao": "Uma cota de malha reforçada com placas de metal."
        },
        {
            "nome": "Armadura completa",
            "preco": "T$ 3.000",
            "bonus_defesa": "+10",
            "penalidade_armadura": "–5",
            "espacos": "5",
            "categoria": "Armadura",
            "tipo": "Armadura Pesada",
            "descricao": "A mais forte e pesada das armaduras, formada por placas de metal forjadas e encaixadas. Precisa ser feita sob medida."
        },
        {
            "nome": "Escudo leve",
            "preco": "T$ 5",
            "bonus_defesa": "+1",
            "penalidade_armadura": "–1",
            "espacos": "1",
            "categoria": "Escudo",
            "tipo": "Escudo Leve",
            "descricao": "Tipicamente feito de madeira, é amarrado no antebraço, deixando a mão livre."
        },
        {
            "nome": "Escudo pesado",
            "preco": "T$ 15",
            "bonus_defesa": "+2",
            "penalidade_armadura": "–2",
            "espacos": "2",
            "categoria": "Escudo",
            "tipo": "Escudo Pesado",
            "descricao": "Normalmente feito de aço, é preso ao antebraço e também deve ser empunhado com firmeza, impedindo o usuário de usar aquela mão."
        },
        // ---------- ITENS GERAIS: EQUIPAMENTO DE AVENTURA ----------
        {
            "nome": "Água benta",
            "preco": "T$ 10",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Um frasco de água sagrada. Causa 2d10 de dano de luz em mortos-vivos ou abissais em alcance curto (Reflexos CD Sab reduz à metade)."
        },
        {
            "nome": "Algemas",
            "preco": "T$ 15",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Um par de algemas para criaturas Médias. Escapar exige Acrobacia (CD 30) ou Força (CD 25)."
        },
        {
            "nome": "Arpéu",
            "preco": "T$ 5",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Um gancho de aço amarrado na ponta de uma corda. Prender exige Pontaria (CD 15). Fornece +5 em Atletismo para escalar."
        },
        {
            "nome": "Bandoleira de poções",
            "preco": "T$ 20",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Um cinto de couro com bolsos. Se estiver vestindo, pode sacar itens alquímicos e poções como ação livre."
        },
        {
            "nome": "Barraca",
            "preco": "T$ 10",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Esta barraca de lona conta como um saco de dormir para duas pessoas e fornece +2 em testes de Sobrevivência para acampar."
        },
        {
            "nome": "Corda",
            "preco": "T$ 1",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Um rolo com 10 metros de corda de cânhamo. Arrebentar a corda exige 2 pontos de dano de corte ou Força (CD 20)."
        },
        {
            "nome": "Espelho",
            "preco": "T$ 10",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Este pequeno espelho possui diversas utilidades: observar cantos, fazer sinais de luz, etc."
        },
        {
            "nome": "Lampião",
            "preco": "T$ 7",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Ilumina um raio com 15m. Dura uma cena."
        },
        {
            "nome": "Mochila",
            "preco": "T$ 2",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Uma bolsa de lona com tiras para ser carregada nas costas. Não conta como item vestido."
        },
        {
            "nome": "Mochila de aventureiro",
            "preco": "T$ 50",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Feita de couro resistente, esta mochila é repleta de bolsos. Aumenta sua capacidade de carga em 2 espaços."
        },
        {
            "nome": "Óleo",
            "preco": "T$ 0,1",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Um frasco com óleo inflamável. Pode ser atirado. Se o alvo sofrer dano de fogo, sofre 1d6 de dano extra e fica em chamas."
        },
        {
            "nome": "Organizador de pergaminhos",
            "preco": "T$ 25",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Um estojo de madeira ou couro rígido. Se estiver vestindo, pode sacar pergaminhos como uma ação livre."
        },
        {
            "nome": "Pé de cabra",
            "preco": "T$ 2",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Esta barra de ferro fornece +5 em testes de Força para abrir portas, janelas e baús fechados. Pode ser usado como clava."
        },
        {
            "nome": "Saco de dormir",
            "preco": "T$ 1",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Um colchão com uma coberta fina. Necessário para descanso normal ao relento."
        },
        {
            "nome": "Símbolo sagrado",
            "preco": "T$ 5",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Um medalhão de madeira ou metal com o símbolo de uma divindade. Se for devoto, recebe +1 em testes de resistência."
        },
        {
            "nome": "Tocha",
            "preco": "T$ 0,1",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Ilumina um raio de 9m e dura uma cena. Pode ser usada como uma arma simples leve (dano 1d4 impacto mais 1 de fogo)."
        },
        {
            "nome": "Vara de madeira (3m)",
            "preco": "T$ 0,2",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Uma haste com 3m de comprimento. Útil para alcançar pontos distantes."
        },
        // ---------- ITENS GERAIS: FERRAMENTAS ----------
        {
            "nome": "Alaúde élfico",
            "preco": "T$ 300",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Ferramenta",
            "descricao": "Instrumento musical. Permite usar a habilidade Inspiração como uma ação de movimento."
        },
        {
            "nome": "Coleção de livros",
            "preco": "T$ 75",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Ferramenta",
            "descricao": "Fornece +1 em Conhecimento, Guerra, Misticismo, Nobreza ou Religião (definido na compra)."
        },
        {
            "nome": "Equipamento de viagem",
            "preco": "T$ 10",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Ferramenta",
            "descricao": "Saco com pederneira, panelas, anzol, etc. Evita penalidade de -5 em testes de Sobrevivência para acampar."
        },
        {
            "nome": "Estojo de disfarces",
            "preco": "T$ 50",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Ferramenta",
            "descricao": "Cosméticos, tintas para cabelo e próteses. Evita penalidade de -5 em testes de Enganação para disfarce."
        },
        {
            "nome": "Flauta mística",
            "preco": "T$ 150",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Ferramenta",
            "descricao": "Instrumento musical. Um bardo que empunhe este item aumenta a CD para resistir às magias lançadas por ele em +1."
        },
        {
            "nome": "Gazua",
            "preco": "T$ 5",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Ferramenta",
            "descricao": "Uma barra fina de ferro. Evita penalidade de -5 em testes de Ladinagem para abrir fechaduras."
        },
        {
            "nome": "Instrumentos de Ofício",
            "preco": "T$ 30",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Ferramenta",
            "descricao": "Kit para uma perícia de Ofício. Um personagem sem os instrumentos sofre –5 nessa perícia."
        },
        {
            "nome": "Instrumento musical",
            "preco": "T$ 35",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Ferramenta",
            "descricao": "Um instrumento típico, como um bandolim, flauta ou lira."
        },
        {
            "nome": "Luneta",
            "preco": "T$ 100",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Ferramenta",
            "descricao": "Cilindro metálico com lentes. Fornece +5 em testes de Percepção para observar coisas em alcance longo ou além."
        },
        {
            "nome": "Maleta de medicamentos",
            "preco": "T$ 50",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Ferramenta",
            "descricao": "Caixa com ervas, unguentos, bandagens. Evita penalidade de -5 em Cura."
        },
        {
            "nome": "Sela",
            "preco": "T$ 20",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Ferramenta",
            "descricao": "Peça de couro para montaria. Evita penalidade de -5 em testes de Cavalgar."
        },
        {
            "nome": "Tambor das profundezas",
            "preco": "T$ 80",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Ferramenta",
            "descricao": "Instrumento musical anão. Dobra o alcance da habilidade Inspiração e de qualquer Música de Bardo."
        },
        // ---------- ITENS GERAIS: VESTUÁRIO ----------
        {
            "nome": "Andrajos de aldeão",
            "preco": "T$ 1",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Roupas típicas de camponês. +2 em testes de Investigação para interrogar, mas -2 em perícias de Carisma social."
        },
        {
            "nome": "Bandana",
            "preco": "T$ 5",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Lenço de bandido/pirata. Fornece +1 em Intimidação."
        },
        {
            "nome": "Botas reforçadas",
            "preco": "T$ 20",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Botas de cano alto. Aumentam seu deslocamento em +1,5m em terreno difícil."
        },
        {
            "nome": "Camisa bufante",
            "preco": "T$ 25",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Blusa colorida, com mangas e golas longas. Fornece +1 em Atuação."
        },
        {
            "nome": "Capa esvoaçante",
            "preco": "T$ 25",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Capa de seda chamativa. Fornece +1 em Enganação."
        },
        {
            "nome": "Capa pesada",
            "preco": "T$ 15",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Capa de couro grossa e resistente. Fornece +1 em Fortitude."
        },
        {
            "nome": "Casaco longo",
            "preco": "T$ 20",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Casaco quente e pesado. Fornece +5 em Fortitude (frio), mas impõe penalidade de armadura de –2."
        },
        {
            "nome": "Chapéu arcano",
            "preco": "T$ 50",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Chapéu pontudo. Fornece +1 ponto de mana (apenas Arcanistas)."
        },
        {
            "nome": "Enfeite de elmo",
            "preco": "T$ 15",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Adorno chamativo (plumas, asas, etc). Fornece resistência a medo +2."
        },
        {
            "nome": "Farrapos de ermitão",
            "preco": "T$ 1",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Trapos com plantas. -2 em Diplomacia e Investigação (interrogar), +2 em Adestramento."
        },
        {
            "nome": "Gorro de ervas",
            "preco": "T$ 75",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Chapéu preenchido com ervas. Fornece +1 em Vontade."
        },
        {
            "nome": "Luva de pelica",
            "preco": "T$ 5",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Luvas delicadas. Fornecem +1 em Ladinagem."
        },
        {
            "nome": "Manopla",
            "preco": "T$ 10",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Luva metálica. Ataques desarmados causam dano letal. Conta como uma arma para melhorias/encantos."
        },
        {
            "nome": "Manto camuflado",
            "preco": "T$ 12",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Manto para terreno específico. Fornece +2 em Furtividade no terreno correto."
        },
        {
            "nome": "Manto eclesiástico",
            "preco": "T$ 20",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Manto típico de igrejas e templos. Fornece +1 em Religião."
        },
        {
            "nome": "Robe místico",
            "preco": "T$ 50",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Manto longo, adornado com temas arcanos. Fornece +1 em Misticismo."
        },
        {
            "nome": "Sapatos de camurça",
            "preco": "T$ 8",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Leves e resistentes. Fornecem +1 em Acrobacia."
        },
        {
            "nome": "Tabardo",
            "preco": "T$ 10",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Peça de tecido com heráldica. Fornece +1 em Diplomacia."
        },
        {
            "nome": "Traje da corte",
            "preco": "T$ 100",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Roupas de luxo. Evita penalidade de -5 em perícias de Carisma em ambientes aristocráticos."
        },
        {
            "nome": "Traje de viajante",
            "preco": "T$ 10",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Roupa padrão de aventureiros. Não ocupa espaço."
        },
        {
            "nome": "Veste de seda",
            "preco": "T$ 25",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Roupa leve e elegante. Fornece +1 em Reflexos."
        },
        // ---------- ITENS GERAIS: ESOTÉRICOS ----------
        {
            "nome": "Bolsa de pó",
            "preco": "T$ 300",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Esotérico",
            "descricao": "Pó de flores da Pondsmânia. +2 PM para aprimorar magias de encantamento ou ilusão."
        },
        {
            "nome": "Cajado arcano",
            "preco": "T$ 1.000",
            "espacos": "2",
            "categoria": "Item Geral",
            "tipo": "Esotérico",
            "descricao": "Cajado com runas. Limite de PM e CD de magias arcanas +1. (Duas mãos). Pode ser usado como bordão."
        },
        {
            "nome": "Cetro elemental",
            "preco": "T$ 750",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Esotérico",
            "descricao": "Cetro com gema (ácido, eletricidade, fogo ou frio). Magias de dano desse tipo causam +1 dado."
        },
        {
            "nome": "Costela de lich",
            "preco": "T$ 300",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Esotérico",
            "descricao": "Varinha de osso. Magias causam +1d6 dano de trevas. Você não recupera PV por cura mágica."
        },
        {
            "nome": "Dedo de ente",
            "preco": "T$ 200",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Esotérico",
            "descricao": "Varinha de árvore senciente. Ao gastar 1 PM ou mais, role 1d4. Se 4, recupera 1 PM."
        },
        {
            "nome": "Luva de ferro",
            "preco": "T$ 150",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Esotérico",
            "descricao": "Dedais interligados. Bônus de Defesa/Resistência de magias arcanas pessoais +1."
        },
        {
            "nome": "Medalhão de prata",
            "preco": "T$ 750",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Esotérico",
            "descricao": "Medalhão com runa. Custo de magias de alcance pessoal diminui em -1 PM."
        },
        {
            "nome": "Orbe cristalino",
            "preco": "T$ 750",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Esotérico",
            "descricao": "Esfera perfeita. Limite de PM para magias arcanas +1."
        },
        {
            "nome": "Tomo hermético",
            "preco": "T$ 1.500",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Esotérico",
            "descricao": "Livro de tratados. CD para resistir a magias arcanas de uma escola específica +2."
        },
        {
            "nome": "Varinha arcana",
            "preco": "T$ 100",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Esotérico",
            "descricao": "Varinha com runas. CD para resistir a magias arcanas +1."
        },
        // ---------- ITENS GERAIS: ALQUÍMICOS (PREPARADOS) ----------
        {
            "nome": "Ácido",
            "preco": "T$ 10",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Frasco de vidro. Causa 2d4 de dano de ácido (Reflexos CD Des reduz à metade)."
        },
        {
            "nome": "Bálsamo restaurador",
            "preco": "T$ 10",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Pasta de ervas. Recupera 2d4 PV."
        },
        {
            "nome": "Bomba",
            "preco": "T$ 50",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Granada rudimentar. Causa 6d6 de dano de impacto em área de 3m (Reflexos CD Des reduz à metade)."
        },
        {
            "nome": "Cosmético",
            "preco": "T$ 30",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Perfume ou maquiagem. Fornece +2 em testes de perícias baseadas em Carisma até o fim da cena."
        },
        {
            "nome": "Elixir do amor",
            "preco": "T$ 100",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Humanoide que beba fica enfeitiçado pela primeira criatura que vir (Vontade CD Car anula). Dura 1d3 dias."
        },
        {
            "nome": "Essência de mana",
            "preco": "T$ 50",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Poção de ervas raras. Recupera 1d4 pontos de mana."
        },
        {
            "nome": "Fogo alquímico",
            "preco": "T$ 10",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Frasco de cerâmica. Causa 1d6 de dano de fogo e deixa em chamas (Reflexos CD Des reduz à metade e evita chamas)."
        },
        {
            "nome": "Pó do desaparecimento",
            "preco": "T$ 100",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Cobre criatura ou objeto, tornando-o invisível por 2d6 rodadas."
        },
        // ---------- ITENS GERAIS: ALQUÍMICOS (CATALISADORES) ----------
        {
            "nome": "Baga-de-fogo",
            "preco": "T$ 30",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Catalisador. Adiciona +1d6 de dano de fogo a magias."
        },
        {
            "nome": "Dente-de-dragão",
            "preco": "T$ 45",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Catalisador. Aumenta o dano de magias em um dado do mesmo tipo."
        },
        {
            "nome": "Essência abissal",
            "preco": "T$ 150",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Catalisador. Aumenta os dados de dano de magias de fogo em uma categoria (ex: d6 para d8)."
        },
        {
            "nome": "Líquen lilás",
            "preco": "T$ 30",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Catalisador. Adiciona +1d6 de dano de frio a magias."
        },
        {
            "nome": "Musgo púrpura",
            "preco": "T$ 45",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Catalisador. Fornece +2 na CD de magias de ilusão."
        },
        {
            "nome": "Ossos de monstro",
            "preco": "T$ 45",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Catalisador. Fornece +2 na CD de magias de necromancia."
        },
        {
            "nome": "Pó de cristal",
            "preco": "T$ 30",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Catalisador. Diminui o custo de magias de encantamento em –1 PM."
        },
        {
            "nome": "Pó de giz",
            "preco": "T$ 30",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Catalisador. Diminui o custo de magias de convocação em –1 PM."
        },
        {
            "nome": "Ramo verdejante",
            "preco": "T$ 45",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Catalisador. Aumenta a cura de magias em +1 PV por dado."
        },
        {
            "nome": "Saco de sal",
            "preco": "T$ 45",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Catalisador. Fornece +2 na CD de magias de abjuração."
        },
        {
            "nome": "Seixo de âmbar",
            "preco": "T$ 30",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Catalisador. Diminui o custo de magias de transmutação em –1 PM."
        },
        {
            "nome": "Terra de cemitério",
            "preco": "T$ 30",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Catalisador. Adiciona +1d6 de dano de trevas a magias."
        },
        // ---------- ITENS GERAIS: ALQUÍMICOS (VENENOS) ----------
        {
            "nome": "Beladona",
            "preco": "T$ 1.500",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Veneno (Ingestão). Vítima fica paralisada (lenta) por 3 rodadas (Fort CD Int+5 anula/reduz)."
        },
        {
            "nome": "Bruma sonolenta",
            "preco": "T$ 150",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Veneno (Inalação). Vítima fica inconsciente (enjoada por 1 rodada) (Fort CD Int anula/reduz)."
        },
        {
            "nome": "Cicuta",
            "preco": "T$ 60",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Veneno (Ingestão). Perde 1d12 PV por rodada durante 3 rodadas (Fort CD Int reduz para 1d12 PV)."
        },
        {
            "nome": "Essência de sombra",
            "preco": "T$ 100",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Veneno (Contato). Vítima fica debilitada (fraca) (Fort CD Int anula/reduz)."
        },
        {
            "nome": "Névoa tóxica",
            "preco": "T$ 30",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Veneno (Inalação). Perde 1d12 PV por rodada durante 3 rodadas (Fort CD Int reduz para 1d12 PV)."
        },
        {
            "nome": "Peçonha comum",
            "preco": "T$ 15",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Veneno (Contato). Perde 1d12 PV (Fort CD Int anula)."
        },
        {
            "nome": "Peçonha concentrada",
            "preco": "T$ 90",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Veneno (Contato). Perde 1d12 PV por rodada durante 3 rodadas (Fort CD Int reduz para 1d12 PV)."
        },
        {
            "nome": "Peçonha potente",
            "preco": "T$ 600",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Veneno (Contato). Perde 2d12 PV por rodada durante 3 rodadas (Fort CD Int reduz para 2d12 PV)."
        },
        {
            "nome": "Pó de lich",
            "preco": "T$ 3.000",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Veneno (Ingestão). Perde 4d12 PV por rodada durante 5 rodadas (Fort CD Int+5 reduz para 4d12 PV)."
        },
        {
            "nome": "Riso de Nimb",
            "preco": "T$ 150",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Veneno (Inalação). Vítima fica confusa (lenta por 1 rodada) (Fort CD Int anula/reduz)."
        },
        // ---------- ITENS GERAIS: ALIMENTAÇÃO ----------
        {
            "nome": "Batata valkariana",
            "preco": "T$ 2",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alimentação",
            "descricao": "Prato especial. Fornece +1d6 num único teste a sua escolha até o fim do dia."
        },
        {
            "nome": "Gorad quente",
            "preco": "T$ 18",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alimentação",
            "descricao": "Prato especial. Fornece +2 PM temporários."
        },
        {
            "nome": "Macarrão de Yuvalin",
            "preco": "T$ 6",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alimentação",
            "descricao": "Prato especial. Fornece +5 PV temporários."
        },
        {
            "nome": "Prato do aventureiro",
            "preco": "T$ 1",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alimentação",
            "descricao": "Prato especial. Aumenta a recuperação de PV em +1 por nível na próxima noite de sono."
        },
        {
            "nome": "Ração de viagem (por dia)",
            "preco": "T$ 0,5",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alimentação",
            "descricao": "Alimentos conservados que alimentam uma pessoa por um dia."
        },
        {
            "nome": "Refeição comum",
            "preco": "T$ 0,3",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alimentação",
            "descricao": "Refeição típica em taverna (pão, queijo, cozido, bebida)."
        },
        {
            "nome": "Sopa de peixe",
            "preco": "T$ 1",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alimentação",
            "descricao": "Prato especial. Aumenta a recuperação de PM em +1 por nível na próxima noite de sono."
        },
        // ---------- ITENS GERAIS: ANIMAIS E VEÍCULOS ----------
        {
            "nome": "Alforje",
            "preco": "T$ 30",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Animal",
            "descricao": "Sacos de couro para sela. Permitem que uma montaria carregue até 10 espaços."
        },
        {
            "nome": "Cão de caça",
            "preco": "T$ 150",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Animal",
            "descricao": "Parceiro perseguidor (iniciante) ou montaria (Pequeno/Minúsculo)."
        },
        {
            "nome": "Cavalo",
            "preco": "T$ 75",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Animal",
            "descricao": "Parceiro montaria (iniciante). Deslocamento 12m, +1 ação de movimento (deslocar)."
        },
        {
            "nome": "Cavalo de guerra",
            "preco": "T$ 400",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Animal",
            "descricao": "Montaria (parceiro iniciante). Não se assusta em combate."
        },
        {
            "nome": "Pônei",
            "preco": "T$ 5",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Animal",
            "descricao": "Montaria (iniciante) para raças Pequenas."
        },
        {
            "nome": "Pônei de guerra",
            "preco": "T$ 30",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Animal",
            "descricao": "Montaria (iniciante) para raças Pequenas. Não se assusta em combate."
        },
        {
            "nome": "Trobo",
            "preco": "T$ 60",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Animal",
            "descricao": "Ave-touro. Montaria (iniciante). Deslocamento 9m, +1 ação de movimento (deslocar), +1 em testes de resistência."
        },
        {
            "nome": "Balão goblin",
            "preco": "T$ 200",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Veículo",
            "descricao": "Engenho voador. Deslocamento voo 12m, 100 PV, Defesa 5. Carrega 160 espaços."
        },
        {
            "nome": "Carroça",
            "preco": "T$ 150",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Veículo",
            "descricao": "Veículo terrestre puxado por 2 cavalos ou 1 trobo. Deslocamento 9m, 50 PV, Defesa 8. Carrega 80 espaços."
        },
        {
            "nome": "Carruagem",
            "preco": "T$ 500",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Veículo",
            "descricao": "Similar à carroça, mas com cabine fechada (cobertura leve)."
        },
        {
            "nome": "Canoa",
            "preco": "T$ 70",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Veículo",
            "descricao": "Embarcação simples de tronco de árvore. Mesmas estatísticas de carroça, mas com deslocamento de natação."
        },
        {
            "nome": "Veleiro",
            "preco": "T$ 10.000",
            "espacos": "—",
            "categoria": "Item Geral",
            "tipo": "Veículo",
            "descricao": "Navio de viagem com três mastros."
        },
        // ---------- ITENS GERAIS: MUNIÇÕES (Tabela 3-4) ----------
        {
            "nome": "Balas (20)",
            "preco": "T$ 20",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Munição",
            "descricao": "Munição para pistola ou mosquete. Recarregar é uma ação padrão."
        },
        {
            "nome": "Flechas (20)",
            "preco": "T$ 1",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Munição",
            "descricao": "Munição para arco curto ou arco longo. Recarregar é uma ação livre."
        },
        {
            "nome": "Pedras (20)",
            "preco": "T$ 0,5",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Munição",
            "descricao": "Munição para funda. Recarregar é uma ação de movimento."
        },
        {
            "nome": "Virotes (20)",
            "preco": "T$ 2",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Munição",
            "descricao": "Munição para besta leve (ação de movimento) ou besta pesada (ação padrão)."
        },

        // ===== NOVOS ITENS: ITENS SUPERIORES (MELHORIAS) =====
        {
            "nome": "Ajustada",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Armaduras/Escudos. A penalidade de armadura é diminuída em 1. (p. 164)"
        },
        {
            "nome": "Aprimorado",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Ferramentas/Vestuário. Fornece +1 na perícia (ou aumenta o bônus em +1). (p. 164)"
        },
        {
            "nome": "Atroz",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Armas. Fornece +2 nas rolagens de dano. Pré-req: Cruel. (p. 164)"
        },
        {
            "nome": "Banhado a Ouro",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Todos. Fornece +2 em Diplomacia. (p. 164)"
        },
        {
            "nome": "Canalizador",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Esotéricos. O limite de PM que você pode gastar em magias aumenta em +1. (p. 164)"
        },
        {
            "nome": "Certeira",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Armas. Fornece +1 nos testes de ataque. (p. 164)"
        },
        {
            "nome": "Cravejado de Gemas",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Todos. Fornece +2 em Enganação. (p. 164)"
        },
        {
            "nome": "Cruel",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Armas. Fornece +1 nas rolagens de dano. (p. 164)"
        },
        {
            "nome": "Delicada",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Armaduras Pesadas. Permite aplicar 1 ponto de Destreza na Defesa. Não pode ser Reforçada. (p. 164)"
        },
        {
            "nome": "Discreto",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Todos. Ocupa –1 espaço (mín. 1) e fornece +5 em Ladinagem para ocultar. (p. 164)"
        },
        {
            "nome": "Energético",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Esotéricos. Magias de dano causam +1d6 de dano do mesmo tipo. (p. 165)"
        },
        {
            "nome": "Equilibrada",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Armas. Fornece +2 em testes de manobras (desarmar, quebrar, etc.). (p. 165)"
        },
        {
            "nome": "Espinhosa (Armadura)",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Armaduras. Causa dano de perfuração (igual à Força) ao agarrar ou ser agarrado. (p. 165)"
        },
        {
            "nome": "Espinhoso (Escudo)",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Escudos. Aumenta o dano de um ataque com escudo em um passo. (p. 165)"
        },
        {
            "nome": "Harmonizada (Arma)",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Armas. Reduz em –1 PM o custo de uma habilidade de ataque. Pré-req: outra melhoria. (p. 165)"
        },
        {
            "nome": "Harmonizado (Esotérico)",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Esotéricos. Reduz o custo de uma magia em –1 PM. (p. 165)"
        },
        {
            "nome": "Injeção Alquímica",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Armas. Libera um preparado (ácido, fogo alquímico) ou água benta no acerto (2 doses). (p. 165)"
        },
        {
            "nome": "Macabro",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Todos. Fornece +2 em Intimidação, mas –2 em Diplomacia. (p. 165)"
        },
        {
            "nome": "Maciça",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Armas. O multiplicador de crítico aumenta em +1. Não pode ser Precisa. (p. 165)"
        },
        {
            "nome": "Material Especial",
            "preco": "Variável",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Armas/Armaduras/Escudos/Esotéricos. O item é feito de um material especial. (p. 165-166)"
        },
        {
            "nome": "Mira Telescópica",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Armas de Disparo. Aumenta o alcance da arma em uma categoria. (p. 166)"
        },
        {
            "nome": "Poderoso",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Esotéricos. A CD para resistir a suas magias aumenta em +1. (p. 166)"
        },
        {
            "nome": "Polida",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Armaduras/Escudos. Fornece +5 na Defesa na primeira rodada de combate (em luz). (p. 166)"
        },
        {
            "nome": "Precisa",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Armas. A margem de ameaça aumenta em +1. Não pode ser Maciça. (p. 166)"
        },
        {
            "nome": "Pungente",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Armas. Fornece +2 nos testes de ataque. Pré-req: Certeira. (p. 166)"
        },
        {
            "nome": "Reforçada",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Armaduras/Escudos. O bônus na Defesa e a penalidade de armadura aumentam em 1. (p. 166)"
        },
        {
            "nome": "Selada",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Armaduras Pesadas. Fornece +1 em testes de resistência. (p. 166)"
        },
        {
            "nome": "Sob Medida",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Armaduras/Escudos. Reduz a penalidade de armadura em 2 (apenas para o dono). Pré-req: Ajustada. (p. 166)"
        },
        {
            "nome": "Vigilante",
            "preco": "",
            "categoria": "Item Superior",
            "tipo": "Melhoria",
            "descricao": "Aplicável em: Esotéricos. Você recebe +2 na Defesa. (p. 166)"
        },

        // ===== NOVOS ITENS: ITENS SUPERIORES (MATERIAIS) =====
        {
            "nome": "Aço-Rubi (Arma)",
            "preco": "+ T$ 6.000",
            "categoria": "Item Superior",
            "tipo": "Material",
            "descricao": "Ignora 10 RD e a imunidade a crítico de lefeu. (p. 166)"
        },
        {
            "nome": "Aço-Rubi (Armadura/Escudo)",
            "preco": "+ T$ 6.000 / + T$ 3.000",
            "categoria": "Item Superior",
            "tipo": "Material",
            "descricao": "Chance de ignorar dano extra de acertos críticos/ataques furtivos (25% leve/escudo, 50% pesada). (p. 166)"
        },
        {
            "nome": "Aço-Rubi (Esotérico)",
            "preco": "+ T$ 6.000",
            "categoria": "Item Superior",
            "tipo": "Material",
            "descricao": "Magias de dano ignoram 10 RD e imunidades a dano de lefeu. (p. 166)"
        },
        {
            "nome": "Adamante (Arma)",
            "preco": "+ T$ 3.000",
            "categoria": "Item Superior",
            "tipo": "Material",
            "descricao": "Aumenta o dano em um passo. (p. 166)"
        },
        {
            "nome": "Adamante (Armadura/Escudo)",
            "preco": "+ T$ 18.000 / + T$ 6.000",
            "categoria": "Item Superior",
            "tipo": "Material",
            "descricao": "Fornece RD 2 (leve/escudo) ou RD 5 (pesada). (p. 166)"
        },
        {
            "nome": "Adamante (Esotérico)",
            "preco": "+ T$ 3.000",
            "categoria": "Item Superior",
            "tipo": "Material",
            "descricao": "Pode pagar +1 PM para rolar novamente resultados 1 em magias de dano. (p. 166)"
        },
        {
            "nome": "Gelo Eterno (Arma)",
            "preco": "+ T$ 600",
            "categoria": "Item Superior",
            "tipo": "Material",
            "descricao": "Causa +2 pontos de dano por frio. (p. 166)"
        },
        {
            "nome": "Gelo Eterno (Armadura/Escudo)",
            "preco": "+ T$ 1.500 / + T$ 3.000",
            "categoria": "Item Superior",
            "tipo": "Material",
            "descricao": "Fornece RD Fogo 5 (leve/escudo) ou RD Fogo 10 (pesada). (p. 166)"
        },
        {
            "nome": "Gelo Eterno (Esotérico)",
            "preco": "+ T$ 3.000",
            "categoria": "Item Superior",
            "tipo": "Material",
            "descricao": "Pode rolar novamente resultados 1 em magias de dano de frio. (p. 166)"
        },
        {
            "nome": "Madeira Tollon (Arma)",
            "preco": "+ T$ 1.500",
            "categoria": "Item Superior",
            "tipo": "Material",
            "descricao": "Conta como mágica. Custo de habilidades de ataque diminui em –1 PM. (p. 167)"
        },
        {
            "nome": "Madeira Tollon (Escudo/Esotérico)",
            "preco": "+ T$ 1.500",
            "categoria": "Item Superior",
            "tipo": "Material",
            "descricao": "Fornece resistência a magia +2. (p. 167)"
        },
        {
            "nome": "Matéria Vermelha (Arma)",
            "preco": "+ T$ 1.500",
            "categoria": "Item Superior",
            "tipo": "Material",
            "descricao": "Causa +1d6 de dano extra. Causa 1 de dano ao usuário por acerto. (-2 em Carisma). (p. 167)"
        },
        {
            "nome": "Matéria Vermelha (Armadura/Escudo)",
            "preco": "+ T$ 6.000 / + T$ 18.000",
            "categoria": "Item Superior",
            "tipo": "Material",
            "descricao": "Fornece chance de falha (10% leve/escudo, 25% pesada). (-2 em Carisma). (p. 167)"
        },
        {
            "nome": "Matéria Vermelha (Esotérico)",
            "preco": "+ T$ 3.000",
            "categoria": "Item Superior",
            "tipo": "Material",
            "descricao": "Você e inimigos em alcance curto sofrem –2 em testes de resistência contra magia. (-2 em Carisma). (p. 167)"
        },
        {
            "nome": "Mitral (Arma)",
            "preco": "+ T$ 1.500",
            "categoria": "Item Superior",
            "tipo": "Material",
            "descricao": "Aumenta a margem de ameaça em +1. Ocupa –1 espaço. (p. 167)"
        },
        {
            "nome": "Mitral (Armadura/Escudo)",
            "preco": "+ T$ 1.500 / + T$ 12.000",
            "categoria": "Item Superior",
            "tipo": "Material",
            "descricao": "Penalidade de armadura diminui em 2. Armadura pesada permite aplicar até Des +2 na Defesa. Ocupa –1 espaço. (p. 167)"
        },
        {
            "nome": "Mitral (Esotérico)",
            "preco": "+ T$ 3.000",
            "categoria": "Item Superior",
            "tipo": "Material",
            "descricao": "Pode pagar +2 PM ao lançar magia para aumentar a CD em +2. Ocupa –1 espaço. (p. 167)"
        },

        // ===== NOVOS ITENS: ITENS MÁGICOS (POÇÕES) =====
        {
            "nome": "Poção: Curar Ferimentos (2d8+2)",
            "preco": "T$ 30",
            "espacos": "0,5",
            "categoria": "Item Mágico",
            "tipo": "Poção",
            "descricao": "Poção Menor. Beber cura 2d8+2 PV. (p. 341)"
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
            "nome": "Poção: Curar Ferimentos (7d8+7)",
            "preco": "T$ 1.080",
            "espacos": "0,5",
            "categoria": "Item Mágico",
            "tipo": "Poção",
            "descricao": "Poção Média (Magia de 3º Círculo). Beber cura 7d8+7 PV. (p. 341)"
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
            "nome": "Poção: Vitalidade Fantasma",
            "preco": "T$ 30",
            "espacos": "0,5",
            "categoria": "Item Mágico",
            "tipo": "Poção",
            "descricao": "Poção Menor. Beber concede 2d10 PV temporários. (p. 341)"
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

        // ===== NOVOS ITENS: ITENS MÁGICOS (ACESSÓRIOS) =====
        {
            "nome": "Anel da Proteção",
            "preco": "T$ 9.000",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório Menor",
            "descricao": "Concede +2 na Defesa. (p. 342)"
        },
        {
            "nome": "Anel do Sustento",
            "preco": "T$ 3.000",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório Menor",
            "descricao": "Você não precisa comer ou beber e só precisa de 2h de sono. (p. 342)"
        },
        {
            "nome": "Brincos da Sagacidade",
            "preco": "T$ 4.500",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório Menor",
            "descricao": "Concede +1 em Inteligência (após 1 dia de uso). (p. 342)"
        },
        {
            "nome": "Luvas da Delicadeza",
            "preco": "T$ 4.500",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório Menor",
            "descricao": "Concede +1 em Destreza (após 1 dia de uso). (p. 342)"
        },
        {
            "nome": "Manoplas da Força do Ogro",
            "preco": "T$ 4.500",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório Menor",
            "descricao": "Concede +1 em Força (após 1 dia de uso). (p. 342)"
        },
        {
            "nome": "Manto do Fascínio",
            "preco": "T$ 4.500",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório Menor",
            "descricao": "Concede +1 em Carisma (após 1 dia de uso). (p. 342)"
        },
        {
            "nome": "Pingente da Sensatez",
            "preco": "T$ 4.500",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório Menor",
            "descricao": "Concede +1 em Sabedoria (após 1 dia de uso). (p. 342)"
        },
        {
            "nome": "Torque do Vigor",
            "preco": "T$ 4.500",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório Menor",
            "descricao": "Concede +1 em Constituição (após 1 dia de uso). (p. 342)"
        },
        {
            "nome": "Anel da Energia",
            "preco": "T$ 21.000",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório Médio",
            "descricao": "Concede +5 PM (após 1 dia de uso). (p. 342)"
        },
        {
            "nome": "Anel da Vitalidade",
            "preco": "T$ 21.000",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório Médio",
            "descricao": "Concede +10 PV (após 1 dia de uso). (p. 342)"
        },
        {
            "nome": "Amuleto da Robustez",
            "preco": "T$ 25.500",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório Médio",
            "descricao": "Concede +2 em Constituição (após 1 dia de uso). (p. 342)"
        },
        {
            "nome": "Cinto da Força do Gigante",
            "preco": "T$ 25.500",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório Médio",
            "descricao": "Concede +2 em Força (após 1 dia de uso). (p. 342)"
        },
        {
            "nome": "Coroa Majestosa",
            "preco": "T$ 25.500",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório Médio",
            "descricao": "Concede +2 em Carisma (após 1 dia de uso). (p. 343)"
        },
        {
            "nome": "Estola da Serenidade",
            "preco": "T$ 25.500",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório Médio",
            "descricao": "Concede +2 em Sabedoria (após 1 dia de uso). (p. 343)"
        },
        {
            "nome": "Pulseiras da Celeridade",
            "preco": "T$ 25.500",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório Médio",
            "descricao": "Concede +2 em Destreza (após 1 dia de uso). (p. 343)"
        },
        {
            "nome": "Tiara da Sapiência",
            "preco": "T$ 25.500",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório Médio",
            "descricao": "Concede +2 em Inteligência (após 1 dia de uso). (p. 343)"
        },
        {
            "nome": "Anel da Regeneração",
            "preco": "T$ 150.000",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório Maior",
            "descricao": "Concede Cura Acelerada 5 (após 1 dia de uso). (p. 342)"
        },
        {
            "nome": "Colar Guardião",
            "preco": "T$ 51.000",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório Maior",
            "descricao": "Concede +5 na Defesa. (p. 343)"
        },
        {
            "nome": "Tomo (Manual) de Atributo +1",
            "preco": "T$ 30.000",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Acessório Maior",
            "descricao": "Ler o livro (uma semana) aumenta um atributo em +1 permanentemente. (p. 343)"
        },

        // ===== NOVOS ITENS: ITENS MÁGICOS (ARMAS) =====
        {
            "nome": "Encanto Formidável",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Encanto Menor. Concede +2 em testes de ataque e rolagens de dano. (p. 336)"
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
            "nome": "Encanto Energética",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Encanto Médio. Concede +4 em testes de ataque, ignora 20 RD, dano de essência, emite luz. Pré-Requisito: Formidável (p. 335) "
        },
        {
            "nome": "Encanto Ameaçadora",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Encanto Menor. A margem de ameaça da arma duplica. (p. 335)"
        },
        {
            "nome": "Encanto Congelante",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Encanto Menor. Causa +1d6 de dano de frio. Pode gastar 2 PM para deixar o alvo enredado. (p. 335)"
        },
        {
            "nome": "Encanto Flamejante",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Encanto Menor. Causa +1d6 de dano de fogo. Pode gastar 2 PM para disparar uma Bola de Fogo (6d6). (p. 335)"
        },
        {
            "nome": "Encanto Elétrica",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Encanto Menor. Causa +1d6 de dano de eletricidade. Pode gastar 2 PM para causar 3d8 de dano em outro alvo. (p. 335)"
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
            "nome": "Espada Longa Flamejante (+1d6 fogo)",
            "preco": "T$ 18.015",
            "espacos": "1",
            "categoria": "Item Mágico",
            "tipo": "Arma",
            "descricao": "Exemplo de Arma Mágica Menor (Espada Longa + Encanto Flamejante). (p. 335)"
        },

        // ===== NOVOS ITENS: ITENS MÁGICOS (ARMADURAS/ESCUDOS) =====
        {
            "nome": "Encanto Defensor",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Armadura/Escudo",
            "descricao": "Encanto Menor. O bônus na Defesa do item aumenta em +2. (p. 338)"
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
            "nome": "Encanto Fortificado (25%/50%)",
            "preco": "",
            "espacos": "—",
            "categoria": "Item Mágico",
            "tipo": "Armadura/Escudo",
            "descricao": "Encanto Médio. Chance de ignorar dano extra de acerto crítico (25% escudo, 50% armadura). (p. 339)"
        },
        {
            "nome": "Escudo Pesado Defensor (+4 Def)",
            "preco": "T$ 18.015",
            "espacos": "2",
            "categoria": "Item Mágico",
            "tipo": "Armadura/Escudo",
            "descricao": "Exemplo de Item Mágico Menor (Escudo Pesado + Encanto Defensor). Bônus total de Defesa: +4. (p. 338)"
        },
        {
            "nome": "Armadura Completa Guardiã (+14 Def)",
            "preco": "T$ 39.000",
            "espacos": "5",
            "categoria": "Item Mágico",
            "tipo": "Armadura/Escudo",
            "descricao": "Exemplo de Item Mágico Médio (Armadura Completa + Encanto Guardião). Bônus total de Defesa: +14. (p. 338)"
        }
    ]
};

// ===== ESTADO GLOBAL =====
let allItems = [];
let filteredItems = [];
let inventory = []; // Este array será carregado do localStorage
let currentModalItem = null; 
let currentCategory = 'todos';
let currentType = 'todos';
let searchTerm = '';

// ===== ELEMENTOS DO DOM =====
const searchInput = document.getElementById('searchInput');
const itemsGrid = document.getElementById('itemsGrid');
const itemModal = document.getElementById('itemModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.querySelector('.modal-close'); 
const categoryButtons = document.querySelectorAll('.filter-group .filter-btn[data-category]');
const specificFiltersContainer = document.getElementById('specificFilters');

const inventoryList = document.getElementById('inventoryList');
const totalCostEl = document.getElementById('totalCost');
const totalSpacesEl = document.getElementById('totalSpaces');
const totalVestidosEl = document.getElementById('totalVestidos'); 
const clearInventoryBtn = document.getElementById('clearInventoryBtn');
const modalQuantityInput = document.getElementById('modalQuantity');
const addItemBtn = document.getElementById('addItemBtn');


// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    loadInventory(); // NOVO: Carrega o inventário salvo
    loadItems(); 
    setupEventListeners();
    renderInventory(); // ATUALIZADO: Renderiza o inventário que foi carregado
});

// ===== CARREGAR DADOS =====
function loadItems() {
    try {
        allItems = t20Data.itens; 
        filteredItems = allItems;
        renderItems();
    } catch (error) {
        console.error('Erro ao carregar itens:', error);
        itemsGrid.innerHTML = '<div class="no-results">Erro ao carregar itens.</div>';
    }
}

// ===== NOVO: Salvar e Carregar Inventário =====
function saveInventory() {
    // Converte o array de inventário em string JSON e salva no localStorage
    localStorage.setItem('t20Inventory', JSON.stringify(inventory));
}

function loadInventory() {
    // Pega a string do localStorage e converte de volta para um array
    const savedInventory = localStorage.getItem('t20Inventory');
    if (savedInventory) {
        inventory = JSON.parse(savedInventory);
    } else {
        inventory = []; // Se não houver nada salvo, começa com um array vazio
    }
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        applyFilters();
    });

    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            currentType = 'todos'; 
            updateSpecificFilters();
            applyFilters();
        });
    });

    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    itemModal.addEventListener('click', (e) => {
        if (e.target === itemModal) closeModal();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && itemModal.classList.contains('active')) {
            closeModal();
        }
    });

    addItemBtn.addEventListener('click', addItemToInventory);
    clearInventoryBtn.addEventListener('click', clearInventory);

    inventoryList.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-item-btn')) {
            const index = parseInt(e.target.dataset.index, 10);
            removeItemFromInventory(index);
        }
    });
}

// ===== LÓGICA DE ITENS VESTIDOS =====
/**
 * Verifica se um item conta como "vestido"
 * @param {object} item O objeto do item
 * @returns {boolean}
 */
function isVestido(item) {
    // 1. Armaduras (mas não escudos)
    if (item.categoria === "Armadura") {
        return true;
    }
    // 2. Vestuário
    if (item.tipo === "Vestuário") {
        return true;
    }
    // 3. Acessórios Mágicos (mas não Tomos/Manuais)
    if (item.tipo === "Acessório" && !item.nome.includes("Tomo") && !item.nome.includes("Manual")) {
        return true;
    }
    // 4. Alguns Esotéricos
    const esotericosVestidos = ["Luva de ferro", "Medalhão de prata"];
    if (item.tipo === "Esotérico" && esotericosVestidos.includes(item.nome)) {
        return true;
    }
    // 5. Armaduras Mágicas (mas não Escudos Mágicos)
    if (item.tipo === "Armadura/Escudo" && !item.nome.toLowerCase().includes("escudo")) {
        return true;
    }
    
    return false;
}

// ===== FILTROS ESPECÍFICOS =====
function updateSpecificFilters() {
    specificFiltersContainer.innerHTML = '';
    
    // Agora, "Item Geral" VAI gerar sub-filtros
    if (currentCategory === 'todos') {
        return;
    }

    const types = [...new Set(allItems
        .filter(item => item.categoria === currentCategory)
        .map(item => item.tipo)
        .filter(type => type) 
    )];

    if (types.length === 0) return;

    const allBtn = createFilterButton('todos', 'Todos');
    allBtn.classList.add('active');
    specificFiltersContainer.appendChild(allBtn);

    types.sort().forEach(type => {
        const btn = createFilterButton(type, type);
        specificFiltersContainer.appendChild(btn);
    });
}

function createFilterButton(value, label) {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.textContent = label;
    btn.addEventListener('click', () => {
        document.querySelectorAll('#specificFilters .filter-btn').forEach(b => {
            b.classList.remove('active');
        });
        btn.classList.add('active');
        currentType = value;
        applyFilters();
    });
    return btn;
}

// ===== APLICAR FILTROS =====
function applyFilters() {
    let filtered = allItems;

    if (currentCategory !== 'todos') {
        filtered = filtered.filter(item => item.categoria === currentCategory);
    }

    if (currentType !== 'todos') {
        filtered = filtered.filter(item => item.tipo === currentType);
    }

    if (searchTerm) {
        filtered = filtered.filter(item =>
            item.nome.toLowerCase().includes(searchTerm) ||
            (item.descricao && item.descricao.toLowerCase().includes(searchTerm))
        );
    }

    filteredItems = filtered;
    renderItems();
}

// ===== RENDERIZAÇÃO DE ITENS =====
function renderItems() {
    if (filteredItems.length === 0) {
        itemsGrid.innerHTML = '<div class="no-results">Nenhum item encontrado.</div>';
        return;
    }

    itemsGrid.innerHTML = filteredItems.map((item, index) => `
        <div class="item-card" onclick="openModal(${index})">
            <div class="item-name">${item.nome}</div>
            <div class="item-price">${item.preco}</div>
            <div class="item-badges">
                ${item.categoria ? `<span class="badge badge-cat">${item.categoria}</span>` : ''}
                ${item.tipo ? `<span class="badge badge-tipo">${item.tipo}</span>` : ''}
                ${isVestido(item) ? '<span class="badge badge-vestido">Vestido</span>' : ''}
            </div>
            <div class="item-spaces">Espaços: ${item.espacos || '—'}</div>
        </div>
    `).join('');
}


// ===== LÓGICA DO INVENTÁRIO =====

function addItemToInventory() {
    if (!currentModalItem) return;

    const quantity = parseInt(modalQuantityInput.value, 10);
    if (isNaN(quantity) || quantity < 1) {
        return;
    }

    const existingItemIndex = inventory.findIndex(invItem => invItem.item.nome === currentModalItem.nome);

    if (existingItemIndex > -1) {
        inventory[existingItemIndex].quantity += quantity;
    } else {
        inventory.push({
            item: currentModalItem,
            quantity: quantity
        });
    }

    renderInventory(); // Esta função agora também salva
    closeModal();
}

function removeItemFromInventory(index) {
    inventory.splice(index, 1); 
    renderInventory(); // Esta função agora também salva
}

function clearInventory() {
    inventory = [];
    renderInventory(); // Esta função agora também salva
}

function renderInventory() {
    if (inventory.length === 0) {
        inventoryList.innerHTML = '<li class="inventory-empty">Seu inventário está vazio.</li>';
    } else {
        inventoryList.innerHTML = inventory.map((invItem, index) => {
            const item = invItem.item;
            const quantity = invItem.quantity;
            const vestidoIndicator = isVestido(item) ? '<span class="vestido-indicator">[Vestido]</span>' : '';
            
            return `
                <li class="inventory-item">
                    <div class="item-info">
                        <span class="item-name">${item.nome} (x${quantity}) ${vestidoIndicator}</span>
                        <span class="item-details">
                            Custo: ${item.preco} | Espaços: ${item.espacos || '—'}
                        </span>
                    </div>
                    <div class="item-actions">
                        <button class="remove-item-btn" data-index="${index}">&times;</button>
                    </div>
                </li>
            `;
        }).join('');
    }
    
    updateInventorySummary();
    saveInventory(); // NOVO: Salva o inventário toda vez que ele é renderizado
}

function updateInventorySummary() {
    let totalCost = 0;
    let totalSpaces = 0;
    let totalVestidos = 0; 

    inventory.forEach(invItem => {
        const item = invItem.item;
        const quantity = invItem.quantity;
        
        const price = parsePrice(item.preco);
        
        totalCost += price * quantity;
        totalSpaces += parseSpaces(item.espacos) * quantity;

        if (isVestido(item)) {
            totalVestidos += 1;
        }
    });

    totalCostEl.textContent = `T$ ${totalCost.toLocaleString('pt-BR')}`;
    totalSpacesEl.textContent = totalSpaces.toLocaleString('pt-BR');
    totalVestidosEl.textContent = `${totalVestidos} / 10`; 
}

function parsePrice(priceString) {
    if (!priceString || priceString === "—" || priceString.startsWith('+') || priceString === 'Variável') {
        return 0;
    }
    const cleanString = priceString.replace("T$ ", "").replace(/\./g, "").replace(",", ".");
    return parseFloat(cleanString) || 0;
}

function parseSpaces(spaceString) {
    if (!spaceString || spaceString === "—") return 0;
    const cleanString = spaceString.replace(",", ".");
    return parseFloat(cleanString) || 0;
}


// ===== MODAL =====
function openModal(index) {
    currentModalItem = filteredItems[index]; 
    const item = currentModalItem;

    document.getElementById('modalTitle').textContent = item.nome;
    document.getElementById('modalPrice').textContent = item.preco;

    const modalImage = document.getElementById('modalImage');
    const imagePath = getImagePath(item.nome);
    
    if (imagePath) {
        modalImage.src = imagePath;
        modalImage.style.display = 'block';
    } else {
        modalImage.style.display = 'none';
    }

    const badgesContainer = document.getElementById('modalBadges');
    badgesContainer.innerHTML = `
        ${item.categoria ? `<span class="badge badge-cat">${item.categoria}</span>` : ''}
        ${item.tipo ? `<span class="badge badge-tipo">${item.tipo}</span>` : ''}
        ${item.empunhadura ? `<span class="badge badge-extra">${item.empunhadura}</span>` : ''}
        ${isVestido(item) ? '<span class="badge badge-vestido">Vestido</span>' : ''}
    `;

    document.getElementById('modalDescription').textContent = item.descricao;

    const weaponStatsContainer = document.getElementById('weaponStats');
    if (item.dano) {
        weaponStatsContainer.innerHTML = `
            <div class="modal-section">
                <h3>Estatísticas de Arma</h3>
                <div class="modal-stats">
                    <div class="stat-box">
                        <p class="stat-label">Dano</p>
                        <p class="stat-value">${item.dano}</p>
                    </div>
                    <div class="stat-box">
                        <p class="stat-label">Crítico</p>
                        <p class="stat-value">${item.critico}</p>
                    </div>
                    ${item.alcance && item.alcance !== "—" ? `
                    <div class="stat-box">
                        <p class="stat-label">Alcance</p>
                        <p class="stat-value">${item.alcance}</p>
                    </div>
                    ` : ''}
                    ${item.tipo_dano && item.tipo_dano !== "—" ? `
                    <div class="stat-box">
                        <p class="stat-label">Tipo de Dano</p>
                        <p class="stat-value">${item.tipo_dano}</p>
                    </div>
                    ` : ''}
                </div>
            </div>
        `;
    } else {
        weaponStatsContainer.innerHTML = '';
    }

    const armorStatsContainer = document.getElementById('armorStats');
    if (item.bonus_defesa) {
        armorStatsContainer.innerHTML = `
            <div class="modal-section">
                <h3>Estatísticas de Defesa</h3>
                <div class="modal-stats">
                    <div class="stat-box">
                        <p class="stat-label">Bônus de Defesa</p>
                        <p class="stat-value">${item.bonus_defesa}</p>
                    </div>
                    <div class="stat-box">
                        <p class="stat-label">Penalidade de Armadura</p>
                        <p class="stat-value">${item.penalidade_armadura}</p>
                    </div>
                </div>
            </div>
        `;
    } else {
        armorStatsContainer.innerHTML = '';
    }

    document.getElementById('modalSpaces').textContent = item.espacos || '—';
    modalQuantityInput.value = "1"; 

    if (item.preco.startsWith('+') || item.preco === 'Variável') {
        document.querySelector('.modal-add-item').style.display = 'none';
    } else {
        document.querySelector('.modal-add-item').style.display = 'flex';
    }

    itemModal.classList.add('active');
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    itemModal.classList.remove('active');
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentModalItem = null; 
}

// ===== MAPA DE IMAGENS (SIMPLIFICADO) =====
function getImagePath(itemName) {
    const imageMap = {
        'Adaga': 'https://png.pngtree.com/png-vector/20240913/ourmid/pngtree-dagger-png-image_13245837.png',
    };
    return imageMap[itemName] || null; 
}
