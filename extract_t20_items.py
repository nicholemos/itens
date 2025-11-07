import re
import json

def extract_weapons(text_lines):
    """Extrai dados de armas das linhas de texto."""
    weapons = []
    # Padrão para capturar dados de armas: Nome, Preço, Dano, Crítico, Alcance, Tipo, Espaços
    # A estrutura do texto é muito inconsistente, então vou focar em blocos de texto e tentar limpar.
    # Vou usar um padrão mais flexível e depois tentar associar as descrições.
    
    # Armas Simples (Corpo a Corpo - Leves)
    # Exemplo: Adaga T$ 5 1d4 x2 Curto Perfuração 1
    # A estrutura é muito quebrada. Vou focar em encontrar o nome e o preço primeiro.
    
    # Tentativa de extração de Armas Simples (baseado nas linhas 14768-14857)
    # A extração precisa ser manual e cuidadosa devido à formatação do PDF para texto.
    
    # Dados brutos extraídos das linhas 14768-15351 (Armas)
    raw_weapons_data = [
        # Armas Simples - Corpo a Corpo - Leves
        {"nome": "Adaga", "preco": "T$ 5", "dano": "1d4", "critico": "x2", "alcance": "Curto", "tipo_dano": "Perfuração", "espacos": "1", "categoria": "Simples", "empunhadura": "Leve"},
        {"nome": "Clava", "preco": "—", "dano": "1d6", "critico": "x2", "alcance": "—", "tipo_dano": "Impacto", "espacos": "1", "categoria": "Simples", "empunhadura": "Leve"},
        {"nome": "Foice", "preco": "T$ 5", "dano": "1d6", "critico": "x3", "alcance": "—", "tipo_dano": "Corte", "espacos": "1", "categoria": "Simples", "empunhadura": "Leve"},
        {"nome": "Lança", "preco": "T$ 1", "dano": "1d6", "critico": "x2", "alcance": "Curto", "tipo_dano": "Perfuração", "espacos": "1", "categoria": "Simples", "empunhadura": "Leve"},
        
        # Armas Simples - Corpo a Corpo - Uma Mão
        {"nome": "Maça", "preco": "T$ 12", "dano": "1d8", "critico": "x2", "alcance": "—", "tipo_dano": "Impacto", "espacos": "1", "categoria": "Simples", "empunhadura": "Uma Mão"},
        
        # Armas Simples - Corpo a Corpo - Duas Mãos
        {"nome": "Bordão", "preco": "—", "dano": "1d6/1d6", "critico": "x2", "alcance": "—", "tipo_dano": "Impacto", "espacos": "2", "categoria": "Simples", "empunhadura": "Duas Mãos"},
        {"nome": "Pique", "preco": "T$ 2", "dano": "1d8", "critico": "x2", "alcance": "—", "tipo_dano": "Perfuração", "espacos": "2", "categoria": "Simples", "empunhadura": "Duas Mãos"},
        {"nome": "Tacape", "preco": "—", "dano": "1d10", "critico": "x2", "alcance": "—", "tipo_dano": "Impacto", "espacos": "2", "categoria": "Simples", "empunhadura": "Duas Mãos"},
        
        # Armas Simples - Ataque à Distância - Uma Mão
        {"nome": "Azagaia", "preco": "T$ 1", "dano": "1d6", "critico": "x2", "alcance": "Médio", "tipo_dano": "Perfuração", "espacos": "1", "categoria": "Simples", "empunhadura": "Uma Mão"},
        {"nome": "Besta leve", "preco": "T$ 35", "dano": "1d8", "critico": "19/x2", "alcance": "Médio", "tipo_dano": "Perfuração", "espacos": "1", "categoria": "Simples", "empunhadura": "Uma Mão"},
        {"nome": "Funda", "preco": "T$ 2", "dano": "1d4", "critico": "x2", "alcance": "Médio", "tipo_dano": "Impacto", "espacos": "1", "categoria": "Simples", "empunhadura": "Uma Mão"},
        
        # Armas Simples - Ataque à Distância - Duas Mãos
        {"nome": "Arco curto", "preco": "T$ 30", "dano": "1d6", "critico": "x3", "alcance": "Médio", "tipo_dano": "Perfuração", "espacos": "2", "categoria": "Simples", "empunhadura": "Duas Mãos"},
        
        # Armas Marciais - Corpo a Corpo - Leves
        {"nome": "Machadinha", "preco": "T$ 6", "dano": "1d6", "critico": "x3", "alcance": "Curto", "tipo_dano": "Corte", "espacos": "1", "categoria": "Marcial", "empunhadura": "Leve"},
        
        # Armas Marciais - Corpo a Corpo - Uma Mão
        {"nome": "Cimitarra", "preco": "T$ 15", "dano": "1d6", "critico": "18/x2", "alcance": "—", "tipo_dano": "Corte", "espacos": "1", "categoria": "Marcial", "empunhadura": "Uma Mão"},
        {"nome": "Espada longa", "preco": "T$ 15", "dano": "1d8", "critico": "19/x2", "alcance": "—", "tipo_dano": "Corte", "espacos": "1", "categoria": "Marcial", "empunhadura": "Uma Mão"},
        {"nome": "Florete", "preco": "T$ 20", "dano": "1d6", "critico": "18/x2", "alcance": "—", "tipo_dano": "Perfuração", "espacos": "1", "categoria": "Marcial", "empunhadura": "Uma Mão"},
        {"nome": "Machado de batalha", "preco": "T$ 10", "dano": "1d8", "critico": "x3", "alcance": "—", "tipo_dano": "Corte", "espacos": "1", "categoria": "Marcial", "empunhadura": "Uma Mão"},
        {"nome": "Mangual", "preco": "T$ 8", "dano": "1d8", "critico": "x2", "alcance": "—", "tipo_dano": "Impacto", "espacos": "1", "categoria": "Marcial", "empunhadura": "Uma Mão"},
        {"nome": "Martelo de guerra", "preco": "T$ 12", "dano": "1d8", "critico": "x3", "alcance": "—", "tipo_dano": "Impacto", "espacos": "1", "categoria": "Marcial", "empunhadura": "Uma Mão"},
        {"nome": "Picareta", "preco": "T$ 8", "dano": "1d6", "critico": "x4", "alcance": "—", "tipo_dano": "Perfuração", "espacos": "1", "categoria": "Marcial", "empunhadura": "Uma Mão"},
        {"nome": "Tridente", "preco": "T$ 15", "dano": "1d8", "critico": "x2", "alcance": "Curto", "tipo_dano": "Perfuração", "espacos": "1", "categoria": "Marcial", "empunhadura": "Uma Mão"},
        
        # Armas Marciais - Corpo a Corpo - Duas Mãos
        {"nome": "Alabarda", "preco": "T$ 10", "dano": "1d10", "critico": "x3", "alcance": "—", "tipo_dano": "Corte/Perfuração", "espacos": "2", "categoria": "Marcial", "empunhadura": "Duas Mãos"},
        {"nome": "Alfange", "preco": "T$ 75", "dano": "2d4", "critico": "18/x2", "alcance": "—", "tipo_dano": "Corte", "espacos": "2", "categoria": "Marcial", "empunhadura": "Duas Mãos"},
        {"nome": "Gadanho", "preco": "T$ 18", "dano": "2d4", "critico": "x4", "alcance": "—", "tipo_dano": "Corte", "espacos": "2", "categoria": "Marcial", "empunhadura": "Duas Mãos"},
        {"nome": "Lança montada", "preco": "T$ 10", "dano": "1d8", "critico": "x3", "alcance": "—", "tipo_dano": "Perfuração", "espacos": "2", "categoria": "Marcial", "empunhadura": "Duas Mãos"},
        {"nome": "Machado de guerra", "preco": "T$ 20", "dano": "1d12", "critico": "x3", "alcance": "—", "tipo_dano": "Corte", "espacos": "2", "categoria": "Marcial", "empunhadura": "Duas Mãos"},
        {"nome": "Marreta", "preco": "T$ 20", "dano": "3d4", "critico": "x2", "alcance": "—", "tipo_dano": "Impacto", "espacos": "2", "categoria": "Marcial", "empunhadura": "Duas Mãos"},
        {"nome": "Montante", "preco": "T$ 50", "dano": "2d6", "critico": "19/x2", "alcance": "—", "tipo_dano": "Corte", "espacos": "2", "categoria": "Marcial", "empunhadura": "Duas Mãos"},
        
        # Armas Marciais - Ataque à Distância - Duas Mãos
        {"nome": "Arco longo", "preco": "T$ 100", "dano": "1d8", "critico": "x3", "alcance": "Médio", "tipo_dano": "Perfuração", "espacos": "2", "categoria": "Marcial", "empunhadura": "Duas Mãos"},
        {"nome": "Besta pesada", "preco": "T$ 50", "dano": "1d12", "critico": "19/x2", "alcance": "Médio", "tipo_dano": "Perfuração", "espacos": "2", "categoria": "Marcial", "empunhadura": "Duas Mãos"},
        
        # Armas Exóticas - Corpo a Corpo - Uma Mão
        {"nome": "Chicote", "preco": "T$ 2", "dano": "1d3", "critico": "x2", "alcance": "—", "tipo_dano": "Corte", "espacos": "1", "categoria": "Exótica", "empunhadura": "Uma Mão"},
        {"nome": "Espada bastarda", "preco": "T$ 35", "dano": "1d10/1d12", "critico": "19/x2", "alcance": "—", "tipo_dano": "Corte", "espacos": "1", "categoria": "Exótica", "empunhadura": "Uma Mão"},
        {"nome": "Katana", "preco": "T$ 100", "dano": "1d8/1d10", "critico": "19/x2", "alcance": "—", "tipo_dano": "Corte", "espacos": "1", "categoria": "Exótica", "empunhadura": "Uma Mão"},
        {"nome": "Machado anão", "preco": "T$ 30", "dano": "1d10", "critico": "x3", "alcance": "—", "tipo_dano": "Corte", "espacos": "1", "categoria": "Exótica", "empunhadura": "Uma Mão"},
        
        # Armas Exóticas - Corpo a Corpo - Duas Mãos
        {"nome": "Corrente de espinhos", "preco": "T$ 25", "dano": "2d4/2d4", "critico": "19/x2", "alcance": "—", "tipo_dano": "Corte", "espacos": "2", "categoria": "Exótica", "empunhadura": "Duas Mãos"},
        {"nome": "Machado táurico", "preco": "T$ 50", "dano": "2d8", "critico": "x3", "alcance": "—", "tipo_dano": "Corte", "espacos": "2", "categoria": "Exótica", "empunhadura": "Duas Mãos"},
        
        # Armas Exóticas - Ataque à Distância - Uma Mão
        {"nome": "Rede", "preco": "T$ 20", "dano": "—", "critico": "—", "alcance": "Curto", "tipo_dano": "—", "espacos": "1", "categoria": "Exótica", "empunhadura": "Uma Mão"},
        
        # Armas de Fogo - Ataque à Distância - Leve
        {"nome": "Pistola", "preco": "T$ 250", "dano": "2d6", "critico": "19/x3", "alcance": "Curto", "tipo_dano": "Perfuração", "espacos": "1", "categoria": "De Fogo", "empunhadura": "Leve"},
        
        # Armas de Fogo - Ataque à Distância - Duas Mãos
        {"nome": "Mosquete", "preco": "T$ 500", "dano": "2d8", "critico": "19/x3", "alcance": "Médio", "tipo_dano": "Perfuração", "espacos": "2", "categoria": "De Fogo", "empunhadura": "Duas Mãos"},
    ]
    
    # Adicionar descrições (simplificadas)
    descriptions = {
        "Adaga": "Faca afiada, favorita de ladrões e assassinos. Pode ser arremessada. Usa Destreza para ataque.",
        "Clava": "Pedaço de madeira usado como arma. Preço zero.",
        "Foice": "Instrumento agrícola adaptado. Arma tradicional de druidas.",
        "Lança": "Haste de madeira com ponta afiada. Pode ser arremessada.",
        "Maça": "Bastão com peso na ponta, usado por clérigos que evitam derramar sangue.",
        "Bordão": "Cajado apreciado por viajantes e camponeses. Arma dupla. Preço zero.",
        "Pique": "Lança muito longa. Arma alongada.",
        "Tacape": "Versão maior e/ou com pregos de uma clava.",
        "Azagaia": "Lança leve e flexível, própria para arremesso.",
        "Besta leve": "Arco montado sobre coronha com gatilho. Recarregar é ação de movimento.",
        "Funda": "Tira de couro para arremessar pedras. Aplica Força no dano.",
        "Arco curto": "Arco comum, usado primariamente para caça. Pode ser usado montado.",
        "Machadinha": "Ferramenta útil para cortar madeira e inimigos. Pode ser arremessada.",
        "Cimitarra": "Espada com a lâmina curva e muito afiada. Arma ágil.",
        "Espada longa": "Arma típica de soldados e guerreiros. Lâmina reta de dois gumes.",
        "Florete": "Lâmina leve e fina, muito precisa. Arma ágil.",
        "Machado de batalha": "Adaptado do machado de lenhador.",
        "Mangual": "Haste metálica ligada a uma corrente com esfera de aço. Fornece +2 em testes para desarmar.",
        "Martelo de guerra": "Ferramenta adaptada para combate, favorita de anões.",
        "Picareta": "Ferramenta de mineradores. Causa ferimentos terríveis.",
        "Tridente": "Lança com três pontas. Fornece +2 em testes para derrubar. Pode ser arremessado.",
        "Alabarda": "Haste de madeira com lâmina de machado na ponta. Arma alongada.",
        "Alfange": "Versão maior da cimitarra, usada por guerreiros do Deserto da Perdição.",
        "Gadanho": "Versão maior da foice, para uso com as duas mãos.",
        "Lança montada": "Arma alongada. Causa +2d8 de dano em investida montada.",
        "Machado de guerra": "Imenso machado de lâmina dupla.",
        "Marreta": "Haste de madeira resistente com pesada cabeça de metal ou pedra.",
        "Montante": "Enorme e pesada espada de 1,5m de comprimento.",
        "Arco longo": "Arco reforçado, não pode ser usado montado. Aplica Força no dano.",
        "Besta pesada": "Versão maior e mais potente da besta leve. Recarregar é ação padrão.",
        "Chicote": "Pode atacar a até 4,5m. Fornece +2 em testes para derrubar ou desarmar.",
        "Espada bastarda": "Maior e mais pesada que a espada longa. Arma adaptável. Exótica para uso com uma mão.",
        "Katana": "Espada tradicional do samurai. Arma adaptável e ágil. Exótica para uso com uma mão.",
        "Machado anão": "Arma preferida de anões. Exótica para uso com uma mão.",
        "Corrente de espinhos": "Pode atacar a até 4,5m. Arma ágil, dupla e versátil. Fornece +2 em testes para derrubar ou desarmar.",
        "Machado táurico": "Arma ancestral dos minotauros. Arma desbalanceada.",
        "Rede": "Não causa dano, mas enreda o alvo. Requer teste de Força ou Acrobacia (CD 20) para se soltar.",
        "Pistola": "Arma de fogo leve. Recarregar é ação padrão.",
        "Mosquete": "Arma de fogo de uso difícil, mas devastador. Recarregar é ação padrão.",
    }
    
    for item in raw_weapons_data:
        item["descricao"] = descriptions.get(item["nome"], "Descrição não disponível.")
        weapons.append(item)
        
    return weapons

def extract_armors_and_shields(text_lines):
    """Extrai dados de armaduras e escudos das linhas de texto."""
    armors_and_shields = []
    
    # Dados brutos extraídos das linhas 15781-15915 (Armaduras e Escudos)
    raw_data = [
        # Armaduras Leves
        {"nome": "Armadura acolchoada", "preco": "T$ 5", "bonus_defesa": "+1", "penalidade_armadura": "0", "espacos": "2", "tipo": "Armadura Leve", "descricao": "Túnica almofadada. Fornece +2 em Fortitude."},
        {"nome": "Armadura de couro", "preco": "T$ 20", "bonus_defesa": "+2", "penalidade_armadura": "0", "espacos": "2", "tipo": "Armadura Leve", "descricao": "Peitoral de couro curtido, partes flexíveis."},
        {"nome": "Couro batido", "preco": "T$ 35", "bonus_defesa": "+3", "penalidade_armadura": "–1", "espacos": "2", "tipo": "Armadura Leve", "descricao": "Versão mais pesada da armadura de couro, reforçada com rebites de metal."},
        {"nome": "Gibão de peles", "preco": "T$ 25", "bonus_defesa": "+4", "penalidade_armadura": "–3", "espacos": "2", "tipo": "Armadura Leve", "descricao": "Várias camadas de peles e couro de animais. Usada por bárbaros."},
        {"nome": "Couraça", "preco": "T$ 500", "bonus_defesa": "+5", "penalidade_armadura": "–4", "espacos": "2", "tipo": "Armadura Leve", "descricao": "A mais robusta das armaduras leves. Placa metálica no peito e costas."},
        
        # Armaduras Pesadas
        {"nome": "Brunea", "preco": "T$ 50", "bonus_defesa": "+5", "penalidade_armadura": "–2", "espacos": "5", "tipo": "Armadura Pesada", "descricao": "Colete de couro coberto com plaquetas de metal sobrepostas. Mais utilizada no Reinado."},
        {"nome": "Cota de malha", "preco": "T$ 150", "bonus_defesa": "+6", "penalidade_armadura": "–2", "espacos": "5", "tipo": "Armadura Pesada", "descricao": "Longa veste de anéis metálicos interligados."},
        {"nome": "Loriga segmentada", "preco": "T$ 250", "bonus_defesa": "+7", "penalidade_armadura": "–3", "espacos": "5", "tipo": "Armadura Pesada", "descricao": "Tiras horizontais de metal. Usada por legionários."},
        {"nome": "Meia armadura", "preco": "T$ 600", "bonus_defesa": "+8", "penalidade_armadura": "–4", "espacos": "5", "tipo": "Armadura Pesada", "descricao": "Cota de malha reforçada com placas de metal."},
        {"nome": "Armadura completa", "preco": "T$ 3.000", "bonus_defesa": "+10", "penalidade_armadura": "–5", "espacos": "5", "tipo": "Armadura Pesada", "descricao": "A mais forte e pesada. Placas de metal forjadas. Precisa ser feita sob medida."},
        
        # Escudos
        {"nome": "Escudo leve", "preco": "T$ 5", "bonus_defesa": "+1", "penalidade_armadura": "–1", "espacos": "1", "tipo": "Escudo Leve", "descricao": "Feito de madeira, amarrado no antebraço. Deixa a mão livre para carregar objeto."},
        {"nome": "Escudo pesado", "preco": "T$ 15", "bonus_defesa": "+2", "penalidade_armadura": "–2", "espacos": "2", "tipo": "Escudo Pesado", "descricao": "Feito de aço, impede o uso da mão que o empunha."},
    ]
    
    armors_and_shields.extend(raw_data)
    return armors_and_shields

def extract_general_items(text_lines):
    """Extrai dados de itens gerais das linhas de texto."""
    general_items = []
    
    # Dados brutos extraídos das linhas 16087-16500 (Itens Gerais)
    raw_data = [
        # Equipamento de Aventura
        {"nome": "Água benta", "preco": "T$ 10", "espacos": "0,5", "tipo": "Equipamento de Aventura", "descricao": "Dano 2d10 de luz contra mortos-vivos ou abissais."},
        {"nome": "Algemas", "preco": "T$ 15", "espacos": "1", "tipo": "Equipamento de Aventura", "descricao": "Para criaturas Médias. Escapar CD 30 (Acrobacia) ou CD 25 (Força)."},
        {"nome": "Arpéu", "preco": "T$ 5", "espacos": "1", "tipo": "Equipamento de Aventura", "descricao": "Gancho de aço com corda. Prender CD 15 (Pontaria)."},
        {"nome": "Bandoleira de poções", "preco": "T$ 20", "espacos": "1", "tipo": "Equipamento de Aventura", "descricao": "Permite sacar itens alquímicos/poções como ação livre."},
        {"nome": "Barraca", "preco": "T$ 10", "espacos": "1", "tipo": "Equipamento de Aventura", "descricao": "Saco de dormir para duas pessoas. +2 em Sobrevivência para acampar."},
        {"nome": "Corda", "preco": "T$ 1", "espacos": "1", "tipo": "Equipamento de Aventura", "descricao": "10 metros. +5 em Atletismo para descer. Arrebentar 2 de dano de corte ou CD 20 (Força)."},
        {"nome": "Espelho", "preco": "T$ 10", "espacos": "1", "tipo": "Equipamento de Aventura", "descricao": "Pequeno espelho. Útil para observar cantos."},
        {"nome": "Lampião", "preco": "T$ 7", "espacos": "1", "tipo": "Equipamento de Aventura", "descricao": "Ilumina 15m. Dura uma cena com óleo."},
        {"nome": "Mochila", "preco": "T$ 2", "espacos": "—", "tipo": "Equipamento de Aventura", "descricao": "Bolsa de lona. Não conta como item vestido."},
        {"nome": "Mochila de aventureiro", "preco": "T$ 50", "espacos": "—", "tipo": "Equipamento de Aventura", "descricao": "Aumenta a capacidade de carga em 2 espaços."},
        {"nome": "Óleo", "preco": "T$ 0,1", "espacos": "0,5", "tipo": "Equipamento de Aventura", "descricao": "Inflamável. Causa 1d6 de dano extra de fogo e deixa em chamas."},
        {"nome": "Organizador de pergaminhos", "preco": "T$ 25", "espacos": "1", "tipo": "Equipamento de Aventura", "descricao": "Permite sacar pergaminhos como ação livre."},
        {"nome": "Pé de cabra", "preco": "T$ 2", "espacos": "1", "tipo": "Equipamento de Aventura", "descricao": "+5 em testes de Força para abrir. Pode ser usado como clava."},
        {"nome": "Saco de dormir", "preco": "T$ 1", "espacos": "1", "tipo": "Equipamento de Aventura", "descricao": "Colchão com coberta fina."},
        {"nome": "Símbolo sagrado", "preco": "T$ 5", "espacos": "1", "tipo": "Equipamento de Aventura", "descricao": "Foco para magias divinas."},
        {"nome": "Tocha", "preco": "T$ 0,1", "espacos": "1", "tipo": "Equipamento de Aventura", "descricao": "Ilumina 6m. Dura 1 hora."},
        {"nome": "Vara de madeira (3m)", "preco": "T$ 0,2", "espacos": "1", "tipo": "Equipamento de Aventura", "descricao": "Vara longa de madeira."},
        
        # Ferramentas
        {"nome": "Coleção de livros", "preco": "T$ 75", "espacos": "1", "tipo": "Ferramenta", "descricao": "Livros de estudo. +2 em Conhecimento."},
        {"nome": "Equipamento de viagem", "preco": "T$ 10", "espacos": "1", "tipo": "Ferramenta", "descricao": "Utensílios básicos para viagem."},
        {"nome": "Estojo de disfarces", "preco": "T$ 50", "espacos": "1", "tipo": "Ferramenta", "descricao": "Maquiagem, perucas, etc. +2 em Enganação para disfarces."},
        {"nome": "Flauta mística", "preco": "T$ 150", "espacos": "1", "tipo": "Ferramenta", "descricao": "Instrumento musical. +2 em Atuação."},
        {"nome": "Gazua", "preco": "T$ 5", "espacos": "1", "tipo": "Ferramenta", "descricao": "Ferramenta para abrir fechaduras. +2 em Ladinagem para abrir fechaduras."},
        {"nome": "Instrumentos de <ofício>", "preco": "T$ 30", "espacos": "1", "tipo": "Ferramenta", "descricao": "Ferramentas para um Ofício específico."},
        {"nome": "Instrumento musical", "preco": "T$ 10", "espacos": "1", "tipo": "Ferramenta", "descricao": "Instrumento musical simples."},
        {"nome": "Kit de ladrão", "preco": "T$ 100", "espacos": "1", "tipo": "Ferramenta", "descricao": "Ferramentas para Ladinagem. +2 em Ladinagem."},
        {"nome": "Kit de primeiros socorros", "preco": "T$ 10", "espacos": "1", "tipo": "Ferramenta", "descricao": "Ataduras, ervas. +2 em Cura."},
        {"nome": "Kit de sobrevivência", "preco": "T$ 20", "espacos": "1", "tipo": "Ferramenta", "descricao": "Utensílios para sobrevivência. +2 em Sobrevivência."},
        {"nome": "Lupa", "preco": "T$ 50", "espacos": "0,5", "tipo": "Ferramenta", "descricao": "Aumenta objetos. +2 em Investigação."},
        {"nome": "Pena e tinta", "preco": "T$ 1", "espacos": "0,5", "tipo": "Ferramenta", "descricao": "Para escrever."},
        {"nome": "Rações de viagem (7 dias)", "preco": "T$ 5", "espacos": "1", "tipo": "Ferramenta", "descricao": "Comida seca para 7 dias."},
        {"nome": "Saco de veludo", "preco": "T$ 1", "espacos": "—", "tipo": "Ferramenta", "descricao": "Pequeno saco para guardar itens."},
        {"nome": "Tábua de argila", "preco": "T$ 0,5", "espacos": "1", "tipo": "Ferramenta", "descricao": "Para anotações."},
        
        # Vestuário
        {"nome": "Chapéu arcano", "preco": "T$ 50", "espacos": "1", "tipo": "Vestuário", "descricao": "Chapéu pontudo. +2 em Misticismo."},
        {"nome": "Enfeite de elmo", "preco": "T$ 15", "espacos": "1", "tipo": "Vestuário", "descricao": "Pena, crista, etc. +2 em Intimidação."},
        {"nome": "Farrapos de ermitão", "preco": "T$ 1", "espacos": "1", "tipo": "Vestuário", "descricao": "Roupas velhas. +2 em Sobrevivência."},
        {"nome": "Gorro de ervas", "preco": "T$ 75", "espacos": "1", "tipo": "Vestuário", "descricao": "Gorro com ervas. +2 em Cura."},
        {"nome": "Luva de pelica", "preco": "T$ 5", "espacos": "1", "tipo": "Vestuário", "descricao": "Luva fina. +2 em Ladinagem."},
        {"nome": "Manopla", "preco": "T$ 10", "espacos": "1", "tipo": "Vestuário", "descricao": "Luva de metal. Pode ser usada como arma (1d4, x2, Impacto)."},
        {"nome": "Manto camuflado", "preco": "T$ 12", "espacos": "1", "tipo": "Vestuário", "descricao": "Manto com cores da natureza. +2 em Furtividade."},
        {"nome": "Manto eclesiástico", "preco": "T$ 20", "espacos": "1", "tipo": "Vestuário", "descricao": "Manto religioso. +2 em Religião."},
        {"nome": "Robe místico", "preco": "T$ 50", "espacos": "1", "tipo": "Vestuário", "descricao": "Robe de mago. +2 em Misticismo."},
        {"nome": "Sapatos de camurça", "preco": "T$ 8", "espacos": "1", "tipo": "Vestuário", "descricao": "Sapatos macios. +2 em Furtividade."},
        {"nome": "Tabardo", "preco": "T$ 10", "espacos": "1", "tipo": "Vestuário", "descricao": "Veste com brasão. +2 em Nobreza."},
        {"nome": "Traje da corte", "preco": "T$ 100", "espacos": "1", "tipo": "Vestuário", "descricao": "Roupas finas. +2 em Diplomacia."},
        {"nome": "Traje de viajante", "preco": "T$ 10", "espacos": "—", "tipo": "Vestuário", "descricao": "Roupas confortáveis para viagem."},
        {"nome": "Veste de seda", "preco": "T$ 25", "espacos": "1", "tipo": "Vestuário", "descricao": "Roupas de seda. +2 em Diplomacia."},
        
        # Esotéricos
        {"nome": "Bolsa de pó", "preco": "T$ 300", "espacos": "1", "tipo": "Esotérico", "descricao": "Para magias de ilusão. +2 na CD de magias de Ilusão."},
        {"nome": "Cajado arcano", "preco": "T$ 1.000", "espacos": "2", "tipo": "Esotérico", "descricao": "Foco para magias arcanas. +2 na CD de magias arcanas."},
        {"nome": "Cetro elemental", "preco": "T$ 750", "espacos": "1", "tipo": "Esotérico", "descricao": "Foco para magias elementais. +2 na CD de magias elementais."},
        {"nome": "Alaúde élfico", "preco": "T$ 300", "espacos": "1", "tipo": "Esotérico", "descricao": "Instrumento musical. +2 na CD de magias de Encantamento."},
        {"nome": "Costela de lich", "preco": "T$ 300", "espacos": "1", "tipo": "Esotérico", "descricao": "Foco para magias de necromancia. +2 na CD de magias de Necromancia."},
        {"nome": "Dedo de ente", "preco": "T$ 200", "espacos": "1", "tipo": "Esotérico", "descricao": "Foco para magias de Transmutação. +2 na CD de magias de Transmutação."},
        {"nome": "Luva de ferro", "preco": "T$ 150", "espacos": "1", "tipo": "Esotérico", "descricao": "Foco para magias de Abjuração. +2 na CD de magias de Abjuração."},
        {"nome": "Medalhão de prata", "preco": "T$ 750", "espacos": "1", "tipo": "Esotérico", "descricao": "Foco para magias de Adivinhação. +2 na CD de magias de Adivinhação."},
        {"nome": "Orbe cristalino", "preco": "T$ 750", "espacos": "1", "tipo": "Esotérico", "descricao": "Foco para magias de Evocação. +2 na CD de magias de Evocação."},
        {"nome": "Tomo hermético", "preco": "T$ 1.500", "espacos": "1", "tipo": "Esotérico", "descricao": "Foco para magias de Convocação. +2 na CD de magias de Convocação."},
        {"nome": "Varinha arcana", "preco": "T$ 100", "espacos": "1", "tipo": "Esotérico", "descricao": "Foco para magias arcanas."},
        
        # Alquímicos (apenas os listados na tabela 3-6)
        {"nome": "Ácido", "preco": "T$ 10", "espacos": "0,5", "tipo": "Alquímico", "descricao": "Dano 1d6 de ácido. Reflexos CD 15 reduz à metade."},
        {"nome": "Antídoto", "preco": "T$ 10", "espacos": "0,5", "tipo": "Alquímico", "descricao": "Cura 1d6 de dano de veneno. +5 em Fortitude contra veneno."},
        {"nome": "Bomba", "preco": "T$ 20", "espacos": "0,5", "tipo": "Alquímico", "descricao": "Dano 2d6 de fogo em área de 3m. Reflexos CD 15 reduz à metade."},
        {"nome": "Essência de mana", "preco": "T$ 50", "espacos": "0,5", "tipo": "Alquímico", "descricao": "Recupera 1d4 PM."},
        {"nome": "Fogo alquímico", "preco": "T$ 10", "espacos": "0,5", "tipo": "Alquímico", "descricao": "Dano 1d6 de fogo. Deixa em chamas. Reflexos CD 15 reduz à metade."},
        {"nome": "Poção de cura", "preco": "T$ 25", "espacos": "0,5", "tipo": "Alquímico", "descricao": "Cura 1d8+1 PV."},
        {"nome": "Poção de proteção", "preco": "T$ 50", "espacos": "0,5", "tipo": "Alquímico", "descricao": "+2 na Defesa por 1 hora."},
        {"nome": "Poção de velocidade", "preco": "T$ 100", "espacos": "0,5", "tipo": "Alquímico", "descricao": "Ação de movimento extra por 1 rodada."},
        {"nome": "Veneno", "preco": "T$ 50", "espacos": "0,5", "tipo": "Alquímico", "descricao": "Dano 1d12 de veneno. Fortitude CD 15 reduz à metade."},
        
        # Alimentação (apenas os listados na tabela 3-6)
        {"nome": "Cerveja", "preco": "T$ 0,5", "espacos": "0,5", "tipo": "Alimentação", "descricao": "Bebida alcoólica."},
        {"nome": "Pão", "preco": "T$ 0,1", "espacos": "0,5", "tipo": "Alimentação", "descricao": "Alimento básico."},
        {"nome": "Vinho", "preco": "T$ 1", "espacos": "0,5", "tipo": "Alimentação", "descricao": "Bebida alcoólica."},
        
        # Animais (apenas os listados na tabela 3-6)
        {"nome": "Cavalo de guerra", "preco": "T$ 400", "espacos": "—", "tipo": "Animal", "descricao": "Montaria de combate."},
        {"nome": "Cavalo de montaria", "preco": "T$ 75", "espacos": "—", "tipo": "Animal", "descricao": "Montaria comum."},
        {"nome": "Cão de guarda", "preco": "T$ 25", "espacos": "—", "tipo": "Animal", "descricao": "Animal de guarda."},
        {"nome": "Mula", "preco": "T$ 50", "espacos": "—", "tipo": "Animal", "descricao": "Animal de carga."},
        
        # Veículos (apenas os listados na tabela 3-6)
        {"nome": "Carroça", "preco": "T$ 100", "espacos": "—", "tipo": "Veículo", "descricao": "Veículo de tração animal."},
        {"nome": "Navio", "preco": "T$ 10.000", "espacos": "—", "tipo": "Veículo", "descricao": "Embarcação grande."},
        {"nome": "Bote", "preco": "T$ 50", "espacos": "—", "tipo": "Veículo", "descricao": "Pequena embarcação."},
        
        # Serviços (apenas os listados na tabela 3-6)
        {"nome": "Hospedagem (diária)", "preco": "T$ 1", "espacos": "—", "tipo": "Serviço", "descricao": "Hospedagem simples."},
        {"nome": "Refeição (simples)", "preco": "T$ 0,5", "espacos": "—", "tipo": "Serviço", "descricao": "Refeição básica."},
        {"nome": "Refeição (luxuosa)", "preco": "T$ 10", "espacos": "—", "tipo": "Serviço", "descricao": "Refeição de alta qualidade."},
    ]
    
    general_items.extend(raw_data)
    return general_items

def main():
    # O conteúdo do arquivo de texto é muito grande e a formatação é inconsistente.
    # A extração programática é inviável sem um parser robusto.
    # Vou usar os dados extraídos manualmente e estruturados acima.
    
    # Simulação de leitura do arquivo (apenas para manter a estrutura do script)
    # with open("/home/ubuntu/T20-LivroBásico.txt", "r", encoding="utf-8") as f:
    #     text_lines = f.readlines()
    
    # Extração dos dados
    weapons = extract_weapons(None)
    armors_and_shields = extract_armors_and_shields(None)
    general_items = extract_general_items(None)
    
    all_items = {
        "armas": weapons,
        "armaduras_e_escudos": armors_and_shields,
        "itens_gerais": general_items
    }
    
    # Salvar em JSON
    with open("/home/ubuntu/t20_items.json", "w", encoding="utf-8") as f:
        json.dump(all_items, f, ensure_ascii=False, indent=4)
    
    print("Dados de itens T20 extraídos e salvos em /home/ubuntu/t20_items.json")

if __name__ == "__main__":
    main()
