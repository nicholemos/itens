import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";
import { APP_TITLE } from "@/const";

interface Item {
  nome: string;
  preco: string;
  espacos: string;
  tipo?: string;
  categoria?: string;
  empunhadura?: string;
  descricao: string;
  dano?: string;
  critico?: string;
  alcance?: string;
  tipo_dano?: string;
  bonus_defesa?: string;
  penalidade_armadura?: string;
}

interface ItemsData {
  armas: Item[];
  armaduras_e_escudos: Item[];
  itens_gerais: Item[];
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  const [selectedType, setSelectedType] = useState<string>("todos");
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);

  // Carregar dados dos itens
  useEffect(() => {
    const loadItems = async () => {
      try {
        const response = await fetch("/data/items.json");
        const data: ItemsData = await response.json();
        const allItems = [
          ...data.armas,
          ...data.armaduras_e_escudos,
          ...data.itens_gerais,
        ];
        setItems(allItems);
        setFilteredItems(allItems);
      } catch (error) {
        console.error("Erro ao carregar itens:", error);
      } finally {
        setLoading(false);
      }
    };
    loadItems();
  }, []);

  // Filtrar itens
  useEffect(() => {
    let filtered = items;

    // Filtro por busca
    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.nome.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtro por categoria
    if (selectedCategory !== "todos") {
      filtered = filtered.filter((item) => {
        if (selectedCategory === "armas") {
          return item.categoria === "Simples" || item.categoria === "Marcial" || item.categoria === "Exótica" || item.categoria === "De Fogo";
        }
        if (selectedCategory === "armaduras") {
          return item.tipo?.includes("Armadura");
        }
        if (selectedCategory === "escudos") {
          return item.tipo?.includes("Escudo");
        }
        if (selectedCategory === "itens_gerais") {
          return !item.categoria && !item.tipo?.includes("Armadura") && !item.tipo?.includes("Escudo");
        }
        return true;
      });
    }

    // Filtro por tipo específico
    if (selectedType !== "todos") {
      filtered = filtered.filter((item) => {
        if (selectedType === "simples") return item.categoria === "Simples";
        if (selectedType === "marcial") return item.categoria === "Marcial";
        if (selectedType === "exotica") return item.categoria === "Exótica";
        if (selectedType === "fogo") return item.categoria === "De Fogo";
        if (selectedType === "leve_armadura") return item.tipo === "Armadura Leve";
        if (selectedType === "pesada_armadura") return item.tipo === "Armadura Pesada";
        if (selectedType === "leve_escudo") return item.tipo === "Escudo Leve";
        if (selectedType === "pesado_escudo") return item.tipo === "Escudo Pesado";
        return true;
      });
    }

    setFilteredItems(filtered);
  }, [searchTerm, selectedCategory, selectedType, items]);

  const getImagePath = (itemName: string): string => {
    const imageMap: { [key: string]: string } = {
      "Adaga": "/items/adaga.png",
      "Espada longa": "/items/espada_longa.png",
      "Cimitarra": "/items/cimitarra.png",
      "Machado de batalha": "/items/machado_batalha.png",
      "Maça": "/items/maça.png",
      "Armadura de couro": "/items/armadura_couro.png",
      "Cota de malha": "/items/cota_malha.png",
      "Armadura completa": "/items/armadura_completa.png",
      "Escudo leve": "/items/escudo_leve.png",
      "Escudo pesado": "/items/escudo_pesado.png",
    };
    return imageMap[itemName] || "/items/default.png";
  };

  const getCategoryColor = (category: string): string => {
    if (category === "Simples") return "bg-blue-100 text-blue-800";
    if (category === "Marcial") return "bg-purple-100 text-purple-800";
    if (category === "Exótica") return "bg-red-100 text-red-800";
    if (category === "De Fogo") return "bg-orange-100 text-orange-800";
    if (category?.includes("Leve")) return "bg-green-100 text-green-800";
    if (category?.includes("Pesada")) return "bg-red-100 text-red-800";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <header className="bg-slate-950 border-b border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-white mb-2">{APP_TITLE}</h1>
          <p className="text-slate-400">Consulta rápida de itens do Sistema T20</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Filtros */}
        <div className="mb-8 space-y-4">
          {/* Busca */}
          <div className="relative">
            <Search className="absolute left-3 top-3 text-slate-400" size={20} />
            <Input
              placeholder="Buscar por nome do item..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-800 border-slate-700 text-white placeholder-slate-500"
            />
          </div>

          {/* Filtros por Categoria */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            <Button
              variant={selectedCategory === "todos" ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory("todos");
                setSelectedType("todos");
              }}
              className="text-sm"
            >
              Todos
            </Button>
            <Button
              variant={selectedCategory === "armas" ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory("armas");
                setSelectedType("todos");
              }}
              className="text-sm"
            >
              Armas
            </Button>
            <Button
              variant={selectedCategory === "armaduras" ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory("armaduras");
                setSelectedType("todos");
              }}
              className="text-sm"
            >
              Armaduras
            </Button>
            <Button
              variant={selectedCategory === "escudos" ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory("escudos");
                setSelectedType("todos");
              }}
              className="text-sm"
            >
              Escudos
            </Button>
            <Button
              variant={selectedCategory === "itens_gerais" ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory("itens_gerais");
                setSelectedType("todos");
              }}
              className="text-sm"
            >
              Itens Gerais
            </Button>
          </div>

          {/* Filtros Específicos */}
          {selectedCategory === "armas" && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <Button
                variant={selectedType === "todos" ? "secondary" : "outline"}
                onClick={() => setSelectedType("todos")}
                size="sm"
              >
                Todas
              </Button>
              <Button
                variant={selectedType === "simples" ? "secondary" : "outline"}
                onClick={() => setSelectedType("simples")}
                size="sm"
              >
                Simples
              </Button>
              <Button
                variant={selectedType === "marcial" ? "secondary" : "outline"}
                onClick={() => setSelectedType("marcial")}
                size="sm"
              >
                Marcial
              </Button>
              <Button
                variant={selectedType === "exotica" ? "secondary" : "outline"}
                onClick={() => setSelectedType("exotica")}
                size="sm"
              >
                Exótica
              </Button>
              <Button
                variant={selectedType === "fogo" ? "secondary" : "outline"}
                onClick={() => setSelectedType("fogo")}
                size="sm"
              >
                De Fogo
              </Button>
            </div>
          )}

          {selectedCategory === "armaduras" && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <Button
                variant={selectedType === "todos" ? "secondary" : "outline"}
                onClick={() => setSelectedType("todos")}
                size="sm"
              >
                Todas
              </Button>
              <Button
                variant={selectedType === "leve_armadura" ? "secondary" : "outline"}
                onClick={() => setSelectedType("leve_armadura")}
                size="sm"
              >
                Leves
              </Button>
              <Button
                variant={selectedType === "pesada_armadura" ? "secondary" : "outline"}
                onClick={() => setSelectedType("pesada_armadura")}
                size="sm"
              >
                Pesadas
              </Button>
            </div>
          )}

          {selectedCategory === "escudos" && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <Button
                variant={selectedType === "todos" ? "secondary" : "outline"}
                onClick={() => setSelectedType("todos")}
                size="sm"
              >
                Todos
              </Button>
              <Button
                variant={selectedType === "leve_escudo" ? "secondary" : "outline"}
                onClick={() => setSelectedType("leve_escudo")}
                size="sm"
              >
                Leves
              </Button>
              <Button
                variant={selectedType === "pesado_escudo" ? "secondary" : "outline"}
                onClick={() => setSelectedType("pesado_escudo")}
                size="sm"
              >
                Pesados
              </Button>
            </div>
          )}
        </div>

        {/* Grid de Itens */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-slate-400">Carregando itens...</p>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-400">Nenhum item encontrado.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredItems.map((item, index) => (
              <Card
                key={index}
                className="bg-slate-800 border-slate-700 cursor-pointer hover:border-slate-500 transition-colors"
                onClick={() => setSelectedItem(item)}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-white">{item.nome}</CardTitle>
                  <CardDescription className="text-slate-400">
                    {item.preco}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {item.categoria && (
                    <Badge className={getCategoryColor(item.categoria)}>
                      {item.categoria}
                    </Badge>
                  )}
                  {item.tipo && (
                    <Badge className={getCategoryColor(item.tipo)}>
                      {item.tipo}
                    </Badge>
                  )}
                  <div className="text-sm text-slate-400">
                    <p>Espaços: {item.espacos}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>

      {/* Modal de Detalhes */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl bg-slate-800 border-slate-700 max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-start justify-between">
              <div>
                <CardTitle className="text-2xl text-white">{selectedItem.nome}</CardTitle>
                <CardDescription className="text-slate-400 mt-2">
                  {selectedItem.preco}
                </CardDescription>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-slate-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Imagem */}
              <div className="bg-slate-700 rounded-lg p-4 flex items-center justify-center h-64">
                <img
                  src={getImagePath(selectedItem.nome)}
                  alt={selectedItem.nome}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {selectedItem.categoria && (
                  <Badge className={getCategoryColor(selectedItem.categoria)}>
                    {selectedItem.categoria}
                  </Badge>
                )}
                {selectedItem.tipo && (
                  <Badge className={getCategoryColor(selectedItem.tipo)}>
                    {selectedItem.tipo}
                  </Badge>
                )}
                {selectedItem.empunhadura && (
                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                    {selectedItem.empunhadura}
                  </Badge>
                )}
              </div>

              {/* Descrição */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Descrição</h3>
                <p className="text-slate-300">{selectedItem.descricao}</p>
              </div>

              {/* Informações de Armas */}
              {selectedItem.dano && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-700 rounded p-3">
                    <p className="text-slate-400 text-sm">Dano</p>
                    <p className="text-white font-semibold">{selectedItem.dano}</p>
                  </div>
                  <div className="bg-slate-700 rounded p-3">
                    <p className="text-slate-400 text-sm">Crítico</p>
                    <p className="text-white font-semibold">{selectedItem.critico}</p>
                  </div>
                  {selectedItem.alcance && (
                    <div className="bg-slate-700 rounded p-3">
                      <p className="text-slate-400 text-sm">Alcance</p>
                      <p className="text-white font-semibold">{selectedItem.alcance}</p>
                    </div>
                  )}
                  {selectedItem.tipo_dano && (
                    <div className="bg-slate-700 rounded p-3">
                      <p className="text-slate-400 text-sm">Tipo de Dano</p>
                      <p className="text-white font-semibold">{selectedItem.tipo_dano}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Informações de Armaduras */}
              {selectedItem.bonus_defesa && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-700 rounded p-3">
                    <p className="text-slate-400 text-sm">Bônus de Defesa</p>
                    <p className="text-white font-semibold">{selectedItem.bonus_defesa}</p>
                  </div>
                  <div className="bg-slate-700 rounded p-3">
                    <p className="text-slate-400 text-sm">Penalidade de Armadura</p>
                    <p className="text-white font-semibold">{selectedItem.penalidade_armadura}</p>
                  </div>
                </div>
              )}

              {/* Espaços */}
              <div className="bg-slate-700 rounded p-3">
                <p className="text-slate-400 text-sm">Espaços Ocupados</p>
                <p className="text-white font-semibold text-lg">{selectedItem.espacos}</p>
              </div>

              {/* Botão Fechar */}
              <Button
                onClick={() => setSelectedItem(null)}
                className="w-full"
                variant="outline"
              >
                Fechar
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
