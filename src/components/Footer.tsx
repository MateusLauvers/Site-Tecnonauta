import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, CreditCard, Smartphone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-dark border-t border-cyber-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre a Tecnonauta */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Tecnonauta</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Explorando o universo da tecnologia há mais de 10 anos. Oferecemos os melhores produtos tech com qualidade garantida e preços competitivos.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              {['Sobre Nós', 'Produtos', 'Ofertas', 'Blog', 'FAQ', 'Suporte'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors duration-300 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-cyber-blue" />
                <span className="text-gray-400 text-sm">contato@tecnonauta.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-cyber-blue" />
                <span className="text-gray-400 text-sm">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-cyber-blue" />
                <span className="text-gray-400 text-sm">São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Formas de Pagamento */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Formas de Pagamento</h3>
            <div className="flex flex-wrap gap-2">
              <div className="bg-cyber-gray p-2 rounded flex items-center justify-center">
                <CreditCard className="h-4 w-4 text-cyber-blue" />
              </div>
              <div className="bg-cyber-gray p-2 rounded flex items-center justify-center">
                <Smartphone className="h-4 w-4 text-cyber-blue" />
              </div>
            </div>
            <p className="text-gray-400 text-xs">
              Cartão de crédito, débito, PIX e boleto bancário
            </p>
          </div>
        </div>

        <div className="border-t border-cyber-blue/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Tecnonauta. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors duration-300 text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors duration-300 text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;