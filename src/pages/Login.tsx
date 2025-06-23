import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Cpu, ArrowRight } from 'lucide-react';

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular login/cadastro
    console.log(isLogin ? 'Login' : 'Cadastro', formData);
    // Aqui você implementaria a lógica de autenticação
  };

  return (
    <div className="min-h-screen bg-cyber-dark flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center space-x-2 group mb-8">
            <div className="p-3 bg-cyber-gradient rounded-xl group-hover:animate-glow transition-all duration-300 relative">
              <Cpu className="h-8 w-8 text-white" />
              <div className="absolute inset-0 bg-cyber-blue/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300" />
            </div>
            <span className="text-2xl font-bold bg-cyber-gradient bg-clip-text text-transparent">
              Tecnonauta
            </span>
          </Link>
          
          <h2 className="text-3xl font-bold text-white">
            {isLogin ? 'Faça seu Login' : 'Crie sua Conta'}
          </h2>
          <p className="mt-2 text-gray-400">
            {isLogin 
              ? 'Acesse sua conta para continuar explorando' 
              : 'Junte-se à comunidade Tecnonauta'
            }
          </p>
        </div>

        {/* Toggle Login/Register */}
        <div className="flex bg-cyber-gray rounded-xl p-1 border border-cyber-blue/20">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
              isLogin
                ? 'bg-cyber-gradient text-white shadow-lg shadow-cyber-blue/30'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
              !isLogin
                ? 'bg-cyber-gradient text-white shadow-lg shadow-cyber-blue/30'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Cadastrar
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2">
                Nome Completo
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required={!isLogin}
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-cyber-gray border border-cyber-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-cyber-blue focus:outline-none transition-colors duration-300"
                  placeholder="Seu nome completo"
                />
              </div>
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-white font-medium mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 bg-cyber-gray border border-cyber-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-cyber-blue focus:outline-none transition-colors duration-300"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-white font-medium mb-2">
              Senha
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-12 py-3 bg-cyber-gray border border-cyber-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-cyber-blue focus:outline-none transition-colors duration-300"
                placeholder="Sua senha"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyber-blue transition-colors duration-300"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="block text-white font-medium mb-2">
                Confirmar Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  required={!isLogin}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 bg-cyber-gray border border-cyber-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-cyber-blue focus:outline-none transition-colors duration-300"
                  placeholder="Confirme sua senha"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyber-blue transition-colors duration-300"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
          )}

          {isLogin && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-cyber-blue focus:ring-cyber-blue border-cyber-blue/30 rounded bg-cyber-gray"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-400">
                  Lembrar de mim
                </label>
              </div>
              <Link
                to="#"
                className="text-sm text-cyber-blue hover:text-white transition-colors duration-300"
              >
                Esqueceu a senha?
              </Link>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-cyber-gradient py-4 rounded-xl font-bold text-white hover:shadow-lg hover:shadow-cyber-blue/30 transition-all duration-300 flex items-center justify-center space-x-2 group"
          >
            <span>{isLogin ? 'Entrar' : 'Criar Conta'}</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </form>

        {/* Social Login */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-cyber-blue/20" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-cyber-dark text-gray-400">Ou continue com</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="w-full inline-flex justify-center py-3 px-4 border border-cyber-blue/30 rounded-lg bg-cyber-gray text-white hover:bg-cyber-light transition-all duration-300">
              <span className="text-sm font-medium">Google</span>
            </button>
            <button className="w-full inline-flex justify-center py-3 px-4 border border-cyber-blue/30 rounded-lg bg-cyber-gray text-white hover:bg-cyber-light transition-all duration-300">
              <span className="text-sm font-medium">GitHub</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}{' '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-cyber-blue hover:text-white transition-colors duration-300 font-medium"
            >
              {isLogin ? 'Cadastre-se' : 'Faça login'}
            </button>
          </p>
        </div>

        {/* Terms */}
        {!isLogin && (
          <div className="text-center">
            <p className="text-xs text-gray-400">
              Ao criar uma conta, você concorda com nossos{' '}
              <Link to="#" className="text-cyber-blue hover:text-white transition-colors duration-300">
                Termos de Uso
              </Link>{' '}
              e{' '}
              <Link to="#" className="text-cyber-blue hover:text-white transition-colors duration-300">
                Política de Privacidade
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;