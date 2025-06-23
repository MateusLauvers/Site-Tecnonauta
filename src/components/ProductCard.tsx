import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-cyber-gray rounded-xl overflow-hidden border border-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-500 group hover:shadow-lg hover:shadow-cyber-blue/20 animate-fade-in">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {product.featured && (
          <div className="absolute top-3 left-3 bg-cyber-gradient px-2 py-1 rounded-full">
            <span className="text-xs font-bold text-white">Destaque</span>
          </div>
        )}
        
        {!product.inStock && (
          <div className="absolute inset-0 bg-cyber-dark/80 flex items-center justify-center">
            <span className="text-white font-bold bg-red-600 px-3 py-1 rounded-full">Esgotado</span>
          </div>
        )}
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-white font-semibold text-sm group-hover:text-cyber-blue transition-colors duration-300 line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center space-x-1 flex-shrink-0 ml-2">
            <Star className="h-3 w-3 text-yellow-400 fill-current" />
            <span className="text-xs text-gray-400">4.8</span>
          </div>
        </div>

        <p className="text-gray-400 text-xs line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-cyber-blue text-lg font-bold">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            <span className="text-gray-500 text-xs block">
              ou 12x de R$ {(product.price / 12).toFixed(2).replace('.', ',')}
            </span>
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="bg-cyber-gradient p-2 rounded-lg hover:shadow-lg hover:shadow-cyber-blue/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group/btn"
          >
            <ShoppingCart className="h-4 w-4 text-white group-hover/btn:scale-110 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;