import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Teclado Mecânico RGB Gamer',
    price: 299.99,
    image: 'https://images.pexels.com/photos/5616981/pexels-photo-5616981.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Periféricos',
    description: 'Teclado mecânico com switches azuis, iluminação RGB personalizável e design anti-ghosting.',
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Mouse Gamer 12000 DPI',
    price: 189.99,
    image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Periféricos',
    description: 'Mouse gamer de alta precisão com sensor óptico, 12 botões programáveis e RGB.',
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'SSD NVMe 1TB',
    price: 459.99,
    image: 'https://images.pexels.com/photos/163143/hard-disk-hard-drive-reading-head-storage-medium-163143.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Armazenamento',
    description: 'SSD de alta velocidade com interface PCIe 4.0, ideal para games e aplicações profissionais.',
    inStock: true,
    featured: true
  },
  {
    id: '4',
    name: 'Headset Gamer 7.1',
    price: 249.99,
    image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Áudio',
    description: 'Headset com som surround 7.1, microfone removível e drivers de 50mm.',
    inStock: true,
    featured: true
  },
  {
    id: '5',
    name: 'Placa-mãe B550 AMD',
    price: 689.99,
    image: 'https://images.pexels.com/photos/4316/technology-computer-lines-board.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Componentes',
    description: 'Placa-mãe para processadores AMD Ryzen, com suporte a PCIe 4.0 e WiFi 6.',
    inStock: true
  },
  {
    id: '6',
    name: 'Hub USB-C 7 em 1',
    price: 129.99,
    image: 'https://images.pexels.com/photos/4316/technology-computer-lines-board.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Acessórios',
    description: 'Hub multifuncional com portas USB 3.0, HDMI 4K, leitor de cartão e carregamento rápido.',
    inStock: true
  },
  {
    id: '7',
    name: 'Monitor Gamer 144Hz',
    price: 899.99,
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Monitores',
    description: 'Monitor 27" Full HD com taxa de atualização de 144Hz e tecnologia FreeSync.',
    inStock: true
  },
  {
    id: '8',
    name: 'Cabo HDMI 4K 2m',
    price: 39.99,
    image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cabos',
    description: 'Cabo HDMI 2.1 compatível com resolução 4K@120Hz e HDR.',
    inStock: true
  }
];

export const categories = [
  'Todos',
  'Periféricos',
  'Armazenamento',
  'Áudio',
  'Componentes',
  'Acessórios',
  'Monitores',
  'Cabos'
];