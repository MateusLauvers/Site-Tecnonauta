import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Heart, Share2, Truck, Shield, CreditCard, Plus, Minus } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-cyber-dark flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Produto não encontrado</h2>
          <Link
            to="/produtos"
            className="inline-flex items-center space-x-2 bg-cyber-gradient px-6 py-3 rounded-lg text-white hover:shadow-lg hover:shadow-cyber-blue/30 transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar aos Produtos</span>
          </Link>
        </div>
      </div>
    );
  }

  // Simular múltiplas imagens do produto
  const productImages = [
    product.image,
    product.image,
    product.image
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    // Feedback visual
    const button = document.getElementById('add-to-cart-btn');
    if (button) {
      button.textContent = 'Adicionado!';
      setTimeout(() => {
        button.textContent = 'Adicionar ao Carrinho';
      }, 2000);
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/carrinho');
  };

  return (
    <div className="min-h-screen bg-cyber-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <Link to="/" className="hover:text-cyber-blue transition-colors duration-300">
            Início
          </Link>
          <span>/</span>
          <Link to="/produtos" className="hover:text-cyber-blue transition-colors duration-300">
            Produtos
          </Link>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl bg-cyber-gray border border-cyber-blue/20">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-cyber-dark/80 flex items-center justify-center">
                  <span className="text-white font-bold bg-red-600 px-4 py-2 rounded-full">Esgotado</span>
                </div>
              )}
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index
                      ? 'border-cyber-blue'
                      : 'border-cyber-blue/20 hover:border-cyber-blue/50'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-3xl font-bold text-white">{product.name}</h1>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    isFavorite
                      ? 'text-red-400 bg-red-400/20'
                      : 'text-gray-400 hover:text-red-400 hover:bg-red-400/10'
                  }`}
                >
                  <Heart className={`h-6 w-6 ${isFavorite ? 'fill-current' : ''}`} />
                </button>
              </div>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-400 text-sm ml-2">(4.8) • 127 avaliações</span>
                </div>
              </div>

              <span className="inline-block bg-cyber-blue/20 text-cyber-blue px-3 py-1 rounded-full text-sm font-medium">
                {product.category}
              </span>
            </div>

            {/* Price */}
            <div className="bg-cyber-gray p-6 rounded-xl border border-cyber-blue/20">
              <div className="flex items-baseline space-x-2 mb-2">
                <span className="text-3xl font-bold text-cyber-blue">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-gray-400 line-through">
                  R$ {(product.price * 1.2).toFixed(2).replace('.', ',')}
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                ou 12x de R$ {(product.price / 12).toFixed(2).replace('.', ',')} sem juros
              </p>
              <p className="text-green-400 text-sm font-medium mt-1">
                💳 5% de desconto no PIX
              </p>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-white font-medium">Quantidade:</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 rounded-lg bg-cyber-gray border border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue hover:text-white transition-all duration-300"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-white font-semibold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 rounded-lg bg-cyber-gray border border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue hover:text-white transition-all duration-300"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleBuyNow}
                  disabled={!product.inStock}
                  className="flex-1 bg-cyber-gradient py-4 rounded-xl font-bold text-white hover:shadow-lg hover:shadow-cyber-blue/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Comprar Agora
                </button>
                <button
                  id="add-to-cart-btn"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 border-2 border-cyber-blue text-cyber-blue py-4 rounded-xl font-bold hover:bg-cyber-blue hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Adicionar ao Carrinho</span>
                </button>
              </div>

              <div className="flex items-center justify-center space-x-4 pt-4">
                <button className="flex items-center space-x-2 text-gray-400 hover:text-cyber-blue transition-colors duration-300">
                  <Share2 className="h-4 w-4" />
                  <span>Compartilhar</span>
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-cyber-gray rounded-lg border border-cyber-blue/20">
                <Truck className="h-5 w-5 text-cyber-blue" />
                <div>
                  <p className="text-white text-sm font-medium">Frete Grátis</p>
                  <p className="text-gray-400 text-xs">Todo o Brasil</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-cyber-gray rounded-lg border border-cyber-blue/20">
                <Shield className="h-5 w-5 text-cyber-blue" />
                <div>
                  <p className="text-white text-sm font-medium">Garantia</p>
                  <p className="text-gray-400 text-xs">12 meses</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-cyber-gray rounded-lg border border-cyber-blue/20">
                <CreditCard className="h-5 w-5 text-cyber-blue" />
                <div>
                  <p className="text-white text-sm font-medium">Parcelamento</p>
                  <p className="text-gray-400 text-xs">Até 12x s/ juros</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-16">
          <div className="bg-cyber-gray rounded-xl p-8 border border-cyber-blue/20">
            <h2 className="text-2xl font-bold text-white mb-6">Descrição do Produto</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                {product.description}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Este produto representa o que há de mais moderno em tecnologia, oferecendo performance excepcional 
                e durabilidade comprovada. Ideal para profissionais e entusiastas que buscam qualidade superior.
              </p>
              <h3 className="text-xl font-semibold text-white mb-3">Características Principais:</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Design ergonômico e moderno</li>
                <li>• Tecnologia de ponta para máxima performance</li>
                <li>• Compatibilidade universal</li>
                <li>• Garantia estendida de 12 meses</li>
                <li>• Suporte técnico especializado</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">Produtos Relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/produto/${relatedProduct.id}`}
                  className="bg-cyber-gray rounded-xl overflow-hidden border border-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-300 group"
                >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-cyber-blue font-bold">
                      R$ {relatedProduct.price.toFixed(2).replace('.', ',')}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;