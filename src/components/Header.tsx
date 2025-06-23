import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, Cpu } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const location = useLocation();
  
  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Produtos', href: '/produtos' },
    { name: 'Contato', href: '/contato' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-cyber-dark/95 backdrop-blur-md border-b border-cyber-blue/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-cyber-gradient rounded-lg group-hover:animate-glow transition-all duration-300 relative">
              <Cpu className="h-6 w-6 text-white" />
              <div className="absolute inset-0 bg-cyber-blue/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300" />
            </div>
            <span className="text-xl font-bold bg-cyber-gradient bg-clip-text text-transparent">
              Tecnonauta
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-cyber-blue ${
                  isActive(item.href)
                    ? 'text-cyber-blue border-b-2 border-cyber-blue pb-1'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search & Cart */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-300 hover:text-cyber-blue transition-colors duration-300">
              <Search className="h-5 w-5" />
            </button>
            
            <Link
              to="/carrinho"
              className="relative p-2 text-gray-300 hover:text-cyber-blue transition-colors duration-300"
            >
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-cyber-blue text-cyber-dark text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-300 hover:text-cyber-blue transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-cyber-blue/20">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                    isActive(item.href)
                      ? 'text-cyber-blue bg-cyber-blue/10'
                      : 'text-gray-300 hover:text-white hover:bg-cyber-gray'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;