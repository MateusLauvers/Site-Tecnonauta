import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Cart: React.FC = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-cyber-dark py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <ShoppingBag className="h-24 w-24 text-cyber-blue mx-auto mb-6 opacity-50" />
            <h2 className="text-3xl font-bold text-white mb-4">Seu carrinho está vazio</h2>
            <p className="text-gray-400 mb-8">
              Que tal explorar nossos produtos incríveis?
            </p>
            <Link
              to="/produtos"
              className="inline-flex items-center space-x-2 bg-cyber-gradient px-8 py-4 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-cyber-blue/30 transition-all duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Continuar Comprando</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyber-dark py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Seu <span className="bg-cyber-gradient bg-clip-text text-transparent">Carrinho</span>
          </h1>
          <Link
            to="/produtos"
            className="inline-flex items-center space-x-2 text-cyber-blue hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Continuar Comprando</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-cyber-gray rounded-xl p-6 border border-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full sm:w-24 h-32 sm:h-24 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-white font-semibold">{item.name}</h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-300 p-1 transition-colors duration-300"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="p-1 rounded-lg bg-cyber-dark border border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue hover:text-white transition-all duration-300"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        
                        <span className="text-white font-semibold w-8 text-center">
                          {item.quantity}
                        </span>
                        
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-lg bg-cyber-dark border border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue hover:text-white transition-all duration-300"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-cyber-blue font-bold">
                          R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                        </div>
                        <div className="text-gray-400 text-sm">
                          R$ {item.price.toFixed(2).replace('.', ',')} cada
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-cyber-gray rounded-xl p-6 border border-cyber-blue/20 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-6">Resumo do Pedido</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>R$ {getTotalPrice().toFixed(2).replace('.', ',')}</span>
                </div>
                
                <div className="flex justify-between text-gray-300">
                  <span>Frete</span>
                  <span className="text-green-400">Grátis</span>
                </div>
                
                <div className="border-t border-cyber-blue/20 pt-4">
                  <div className="flex justify-between text-xl font-bold text-white">
                    <span>Total</span>
                    <span className="text-cyber-blue">
                      R$ {getTotalPrice().toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <button className="w-full bg-cyber-gradient py-4 rounded-xl font-bold text-white hover:shadow-lg hover:shadow-cyber-blue/30 transition-all duration-300">
                  Finalizar Compra
                </button>
                
                <button
                  onClick={clearCart}
                  className="w-full border-2 border-red-400 text-red-400 py-3 rounded-xl font-semibold hover:bg-red-400 hover:text-white transition-all duration-300"
                >
                  Limpar Carrinho
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;