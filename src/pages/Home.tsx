import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Shield, Truck, Headphones } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="min-h-screen bg-cyber-dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 to-cyber-purple/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Explorando o
              <span className="block bg-cyber-gradient bg-clip-text text-transparent animate-glow">
                Universo da Tecnologia
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Descubra os melhores produtos tech do mercado. De periféricos gamers a componentes de alta performance, 
              temos tudo que você precisa para sua jornada tecnológica.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/produtos"
                className="group bg-cyber-gradient px-8 py-4 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-cyber-blue/30 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Explorar Produtos</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/contato"
                className="px-8 py-4 border-2 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-white rounded-xl font-semibold transition-all duration-300"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 animate-float">
          <div className="w-3 h-3 bg-cyber-blue rounded-full opacity-60" />
        </div>
        <div className="absolute top-1/3 right-16 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-2 h-2 bg-cyber-purple rounded-full opacity-40" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float" style={{ animationDelay: '4s' }}>
          <div className="w-4 h-4 bg-cyber-blue rounded-full opacity-30" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-cyber-gray/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Por que escolher a Tecnonauta?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Mais de uma década oferecendo os melhores produtos e experiências em tecnologia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: 'Garantia Estendida',
                description: 'Todos os produtos com garantia de qualidade e suporte técnico especializado.'
              },
              {
                icon: <Truck className="h-8 w-8" />,
                title: 'Entrega Rápida',
                description: 'Frete grátis para todo Brasil e entregas expressas nas principais capitais.'
              },
              {
                icon: <Headphones className="h-8 w-8" />,
                title: 'Suporte 24/7',
                description: 'Atendimento especializado disponível todos os dias da semana.'
              },
              {
                icon: <Cpu className="h-8 w-8" />,
                title: 'Tecnologia de Ponta',
                description: 'Sempre os lançamentos mais recentes e produtos de alta performance.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-cyber-dark p-6 rounded-xl border border-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-cyber-blue mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-gray-400 text-lg">
              Os mais vendidos e com melhor avaliação dos clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/produtos"
              className="inline-flex items-center space-x-2 bg-cyber-gradient px-8 py-4 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-cyber-blue/30 transition-all duration-300 group"
            >
              <span>Ver Todos os Produtos</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyber-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para sua próxima evolução tech?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Junte-se a milhares de clientes satisfeitos e descubra o futuro da tecnologia hoje.
          </p>
          <Link
            to="/produtos"
            className="inline-flex items-center space-x-2 bg-white text-cyber-dark px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 group"
          >
            <span>Começar Agora</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;