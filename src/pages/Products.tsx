import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-cyber-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos <span className="bg-cyber-gradient bg-clip-text text-transparent">Produtos</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore nossa seleção completa de produtos tecnológicos de alta qualidade.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-cyber-gray rounded-xl p-6 mb-8 border border-cyber-blue/20">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-cyber-dark border border-cyber-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-cyber-blue focus:outline-none transition-colors duration-300"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-cyber-dark border border-cyber-blue/30 rounded-lg text-white focus:border-cyber-blue focus:outline-none transition-colors duration-300 appearance-none"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-cyber-gradient text-white shadow-lg shadow-cyber-blue/30'
                  : 'bg-cyber-gray text-gray-300 hover:bg-cyber-light hover:text-white border border-cyber-blue/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">Nenhum produto encontrado</h3>
            <p className="text-gray-400">
              Tente ajustar os filtros ou buscar por outros termos.
            </p>
          </div>
        )}

        {/* Results Count */}
        {filteredProducts.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Mostrando {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} 
              {selectedCategory !== 'Todos' && ` na categoria "${selectedCategory}"`}
              {searchTerm && ` para "${searchTerm}"`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;