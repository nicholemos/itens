// ===== DADOS GLOBAIS (JSON EMBUTIDO) =====
// Não precisamos mais do fetch! Os dados estão aqui.
const t20Data = {
    "itens": [
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
            "descricao": "Faca afiada, ideal para furtividade. Pode ser usada com Destreza. Pode ser arremessada. (p. 146, 148)"
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
            "descricao": "Tipo mais comum de espada. (p. 148)"
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
            "descricao": "Pedaço de madeira. Preço é zero. (p. 149)"
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
            "descricao": "Versão do machado de lenhador para combate. (p. 149)"
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
            "descricao": "Arma típica de soldados e guerreiros. (p. 148)"
        },
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
            "descricao": "Arma de fogo mais comum. Proibida no Reinado. (p. 150)"
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
            "descricao": "Maior e mais pesada que a espada longa. Arma adaptável. (p. 148)"
        },
        {
            "nome": "Armadura acolchoada",
            "preco": "T$ 5",
            "bonus_defesa": "+1",
            "penalidade_armadura": "0",
            "espacos": "2",
            "categoria": "Armadura",
            "tipo": "Armadura Leve",
            "descricao": "A túnica mais leve, oferece +2 em Fortitude. (p. 154)"
        },
        {
            "nome": "Armadura de couro",
            "preco": "T$ 20",
            "bonus_defesa": "+2",
            "penalidade_armadura": "0",
            "espacos": "2",
            "categoria": "Armadura",
            "tipo": "Armadura Leve",
            "descricao": "Peitoral feito de couro curtido em óleo fervente. (p. 154)"
        },
        {
            "nome": "Brunea",
            "preco": "T$ 50",
            "bonus_defesa": "+5",
            "penalidade_armadura": "–2",
            "espacos": "5",
            "categoria": "Armadura",
            "tipo": "Armadura Pesada",
            "descricao": "Colete de couro com plaquetas de metal. (p. 154)"
        },
        {
            "nome": "Cota de malha",
            "preco": "T$ 150",
            "bonus_defesa": "+6",
            "penalidade_armadura": "–2",
            "espacos": "5",
            "categoria": "Armadura",
            "tipo": "Armadura Pesada",
            "descricao": "Longa veste de anéis metálicos interligados. (p. 154)"
        },
        {
            "nome": "Escudo leve",
            "preco": "T$ 5",
            "bonus_defesa": "+1",
            "penalidade_armadura": "–1",
            "espacos": "1",
            "categoria": "Escudo",
            "tipo": "Escudo Leve",
            "descricao": "Feito de madeira, amarrado no antebraço. Deixa a mão livre. (p. 154)"
        },
        {
            "nome": "Escudo pesado",
            "preco": "T$ 15",
            "bonus_defesa": "+2",
            "penalidade_armadura": "–2",
            "espacos": "2",
            "categoria": "Escudo",
            "tipo": "Escudo Pesado",
            "descricao": "Feito de aço, impede o uso da mão que o empunha. (p. 154)"
        },
        {
            "nome": "Água benta",
            "preco": "T$ 10",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Dano 2d10 de luz contra mortos-vivos ou abissais. (p. 161)"
        },
        {
            "nome": "Algemas",
            "preco": "T$ 15",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Equipamento de Aventura",
            "descricao": "Para criaturas Médias. Escapar CD 30 (Acrobacia) ou CD 25 (Força). (p. 161)"
        },
        {
            "nome": "Gazua",
            "preco": "T$ 5",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Ferramenta",
            "descricao": "Necessário para testes de Ladinagem para abrir fechaduras. (p. 164)"
        },
        {
            "nome": "Maleta de medicamentos",
            "preco": "T$ 50",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Ferramenta",
            "descricao": "Necessário para testes de Cura. (p. 164)"
        },
        {
            "nome": "Bálsamo restaurador",
            "preco": "T$ 10",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Cura 2d4 PV. (p. 160)"
        },
        {
            "nome": "Essência de mana",
            "preco": "T$ 50",
            "espacos": "0,5",
            "categoria": "Item Geral",
            "tipo": "Alquímico",
            "descricao": "Recupera 1d4 PM. (p. 160)"
        },
        {
            "nome": "Robe místico",
            "preco": "T$ 50",
            "espacos": "1",
            "categoria": "Item Geral",
            "tipo": "Vestuário",
            "descricao": "Manto de mago. Oferece +1 em Misticismo. (p. 159)"
        }
    ]
};

// ===== ESTADO GLOBAL =====
let allItems = [];
let filteredItems = [];
let currentCategory = 'todos';
let currentType = 'todos';
let searchTerm = '';

// ===== ELEMENTOS DO DOM =====
const searchInput = document.getElementById('searchInput');
const itemsGrid = document.getElementById('itemsGrid');
const itemModal = document.getElementById('itemModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModalBtn');
const categoryButtons = document.querySelectorAll('.filter-group .filter-btn[data-category]');
const specificFiltersContainer = document.getElementById('specificFilters');

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    loadItems(); // Carrega os itens da variável global
    setupEventListeners();
});

// ===== CARREGAR DADOS =====
// REMOVIDO o "async" e o "fetch". Carrega direto da variável.
function loadItems() {
    try {
        allItems = t20Data.itens; // Carrega da variável
        filteredItems = allItems;
        renderItems();
    } catch (error) {
        console.error('Erro ao carregar itens:', error);
        itemsGrid.innerHTML = '<div class="no-results">Erro ao carregar itens.</div>';
    }
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Busca
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        applyFilters();
    });

    // Filtros de categoria
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            currentType = 'todos'; // Reseta o sub-filtro
            updateSpecificFilters();
            applyFilters();
        });
    });

    // Modal
    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    itemModal.addEventListener('click', (e) => {
        if (e.target === itemModal) closeModal();
    });
    // Fechar com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && itemModal.classList.contains('active')) {
            closeModal();
        }
    });
}

// ===== FILTROS ESPECÍFICOS (SUB-CATEGORIAS) =====
function updateSpecificFilters() {
    specificFiltersContainer.innerHTML = '';
    if (currentCategory === 'todos') return;

    // Pega todos os 'tipos' únicos da categoria selecionada
    const types = [...new Set(allItems
        .filter(item => item.categoria === currentCategory)
        .map(item => item.tipo)
    )];

    if (types.length === 0) return;

    // Cria os botões de filtro
    const allBtn = createFilterButton('todos', 'Todos');
    allBtn.classList.add('active');
    specificFiltersContainer.appendChild(allBtn);

    types.sort().forEach(type => {
        if (type) { // Garante que não crie botão para 'undefined'
            const btn = createFilterButton(type, type);
            specificFiltersContainer.appendChild(btn);
        }
    });
}

// Helper para criar botões de filtro
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

    // 1. Filtro por Categoria Principal
    if (currentCategory !== 'todos') {
        filtered = filtered.filter(item => item.categoria === currentCategory);
    }

    // 2. Filtro por Tipo Específico (Sub-categoria)
    if (currentType !== 'todos') {
        filtered = filtered.filter(item => item.tipo === currentType);
    }

    // 3. Filtro por Busca (Termo Digitado)
    if (searchTerm) {
        filtered = filtered.filter(item =>
            item.nome.toLowerCase().includes(searchTerm) ||
            (item.descricao && item.descricao.toLowerCase().includes(searchTerm))
        );
    }

    filteredItems = filtered;
    renderItems();
}

// ===== RENDERIZAR ITENS =====
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
            </div>
            <div class="item-spaces">Espaços: ${item.espacos}</div>
        </div>
    `).join('');
}

// ===== MODAL =====
function openModal(index) {
    const item = filteredItems[index];
    
    document.getElementById('modalTitle').textContent = item.nome;
    document.getElementById('modalPrice').textContent = item.preco;

    const modalImage = document.getElementById('modalImage');
    const imagePath = getImagePath(item.nome); // Tenta buscar imagem
    
    if (imagePath) {
        modalImage.src = imagePath;
        modalImage.style.display = 'block';
    } else {
        modalImage.style.display = 'none';
    }

    // Badges
    const badgesContainer = document.getElementById('modalBadges');
    badgesContainer.innerHTML = `
        ${item.categoria ? `<span class="badge badge-cat">${item.categoria}</span>` : ''}
        ${item.tipo ? `<span class="badge badge-tipo">${item.tipo}</span>` : ''}
        ${item.empunhadura ? `<span class="badge badge-extra">${item.empunhadura}</span>` : ''}
    `;

    document.getElementById('modalDescription').textContent = item.descricao;

    // Estatísticas de Armas
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

    // Estatísticas de Armaduras/Escudos
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

    document.getElementById('modalSpaces').textContent = item.espacos;

    // Mostrar modal
    itemModal.classList.add('active');
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    itemModal.classList.remove('active');
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ===== MAPA DE IMAGENS (SIMPLIFICADO) =====
function getImagePath(itemName) {
    // CORREÇÃO: Links externos foram removidos pois são não confiáveis e quebram a imagem.
    // Para adicionar imagens, coloque-as em uma pasta (ex: 'img') e aponte o caminho.
    // Ex: 'Adaga': 'img/adaga.png',
    const imageMap = {
         'Adaga': 'https://png.pngtree.com/png-vector/20240913/ourmid/pngtree-dagger-png-image_13245837.png',
         // 'Espada longa': 'img/espada_longa.png',
         // 'Armadura completa': 'img/armadura_completa.png'
    };
    return imageMap[itemName] || null; // Retorna null se não encontrar
}