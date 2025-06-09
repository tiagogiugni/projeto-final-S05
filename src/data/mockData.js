export const mockEvents = [
  {
    id: 1,
    titulo: "Conferência de Tecnologia Inatel 2025",
    data: "2025-07-15",
    hora: "09:00",
    local: "Auditório Principal - Inatel",
    descricao: "Conferência anual sobre as últimas tendências em tecnologia",
    preco: 150.00,
    capacidade: 500,
    vagasRestantes: 120,
    categoria: "Tecnologia",
    imagem: "/api/placeholder/300/200"
  },
  {
    id: 2,
    titulo: "Workshop de Desenvolvimento Mobile",
    data: "2025-07-22",
    hora: "14:00",
    local: "Laboratório de Informática - Inatel",
    descricao: "Workshop prático sobre desenvolvimento de aplicações móveis",
    preco: 80.00,
    capacidade: 30,
    vagasRestantes: 8,
    categoria: "Workshop",
    imagem: "/api/placeholder/300/200"
  },
  {
    id: 3,
    titulo: "Seminário de Inteligência Artificial",
    data: "2025-08-05",
    hora: "10:00",
    local: "Centro de Convenções - Inatel",
    descricao: "Seminário sobre aplicações práticas de IA na indústria",
    preco: 200.00,
    capacidade: 300,
    vagasRestantes: 45,
    categoria: "Seminário",
    imagem: "/api/placeholder/300/200"
  },
  {
    id: 4,
    titulo: "Hackathon Inatel 2025",
    data: "2025-08-12",
    hora: "08:00",
    local: "Campus Inatel",
    descricao: "Competição de programação de 48 horas",
    preco: 50.00,
    capacidade: 100,
    vagasRestantes: 25,
    categoria: "Competição",
    imagem: "/api/placeholder/300/200"
  },
  {
    id: 5,
    titulo: "Palestra: Futuro das Telecomunicações",
    data: "2025-08-20",
    hora: "19:00",
    local: "Auditório Central - Inatel",
    descricao: "Palestra sobre as tendências futuras em telecomunicações",
    preco: 30.00,
    capacidade: 200,
    vagasRestantes: 80,
    categoria: "Palestra",
    imagem: "/api/placeholder/300/200"
  }
];

export const mockTickets = [
  {
    id: 1,
    eventoId: 1,
    status: "ativo",
    dataEmissao: "2025-06-01",
    codigoQR: "QR123456789",
    favorito: true,
    evento: {
      titulo: "Conferência de Tecnologia Inatel 2025",
      data: "2025-07-15",
      local: "Auditório Principal - Inatel"
    }
  },
  {
    id: 2,
    eventoId: 3,
    status: "ativo",
    dataEmissao: "2025-06-05",
    codigoQR: "QR987654321",
    favorito: false,
    evento: {
      titulo: "Seminário de Inteligência Artificial",
      data: "2025-08-05",
      local: "Centro de Convenções - Inatel"
    }
  },
  {
    id: 3,
    eventoId: 4,
    status: "ativo",
    dataEmissao: "2025-06-08",
    codigoQR: "QR456789123",
    favorito: true,
    evento: {
      titulo: "Hackathon Inatel 2025",
      data: "2025-08-12",
      local: "Campus Inatel"
    }
  }
];

export const mockUser = {
  id: 1,
  email: "usuario@inatel.br",
  nomeCompleto: "João Silva",
  papel: "participante"
};

export const mockPaymentMethods = [
  {
    id: 1,
    tipo: "pix",
    nome: "PIX",
    icone: "🔄",
    descricao: "Pagamento instantâneo"
  },
  {
    id: 2,
    tipo: "cartao",
    nome: "Cartão de Crédito",
    icone: "💳",
    descricao: "Visa, Mastercard, Elo"
  },
  {
    id: 3,
    tipo: "boleto",
    nome: "Boleto Bancário",
    icone: "🧾",
    descricao: "Vencimento em 3 dias úteis"
  }
];

