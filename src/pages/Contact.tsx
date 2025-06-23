import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-cyber-dark py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Entre em <span className="bg-cyber-gradient bg-clip-text text-transparent">Contato</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estamos sempre prontos para ajudar você com suas dúvidas e necessidades tecnológicas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Fale Conosco</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Nossa equipe especializada está pronta para atender você com o melhor suporte técnico 
                e comercial. Entre em contato através dos canais abaixo ou utilize nosso formulário.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-cyber-gradient p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <p className="text-gray-400">contato@tecnonauta.com.br</p>
                  <p className="text-gray-400">suporte@tecnonauta.com.br</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-cyber-gradient p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Telefone</h3>
                  <p className="text-gray-400">(11) 9999-9999</p>
                  <p className="text-gray-500 text-sm">Segunda à Sexta: 8h às 18h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-cyber-gradient p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Endereço</h3>
                  <p className="text-gray-400">Rua da Tecnologia, 123</p>
                  <p className="text-gray-400">Vila Tech - São Paulo, SP</p>
                  <p className="text-gray-400">CEP: 01234-567</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-cyber-gray rounded-xl p-6 border border-cyber-blue/20">
              <h3 className="text-white font-semibold mb-4">Horário de Atendimento</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Segunda à Sexta</span>
                  <span className="text-white">8h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sábado</span>
                  <span className="text-white">9h às 15h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Domingo</span>
                  <span className="text-red-400">Fechado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-cyber-gray rounded-xl p-8 border border-cyber-blue/20">
            <h2 className="text-2xl font-bold text-white mb-6">Envie sua Mensagem</h2>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-green-400">Mensagem enviada com sucesso! Retornaremos em breve.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cyber-dark border border-cyber-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-cyber-blue focus:outline-none transition-colors duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cyber-dark border border-cyber-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-cyber-blue focus:outline-none transition-colors duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Assunto *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cyber-dark border border-cyber-blue/30 rounded-lg text-white focus:border-cyber-blue focus:outline-none transition-colors duration-300"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="duvida-produto">Dúvida sobre produto</option>
                  <option value="suporte-tecnico">Suporte técnico</option>
                  <option value="pedido">Informações sobre pedido</option>
                  <option value="troca-devolucao">Troca ou devolução</option>
                  <option value="parceria">Parcerias comerciais</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cyber-dark border border-cyber-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-cyber-blue focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Descreva sua dúvida ou solicitação..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyber-gradient py-4 rounded-xl font-bold text-white hover:shadow-lg hover:shadow-cyber-blue/30 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;