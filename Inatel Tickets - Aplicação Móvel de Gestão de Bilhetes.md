# Inatel Tickets - Aplicação Móvel de Gestão de Bilhetes

Uma aplicação móvel responsiva desenvolvida em React para compra e gestão de bilhetes de eventos do Instituto Nacional de Telecomunicações (Inatel).

## 🚀 Funcionalidades Principais

### 📱 Design Mobile-First
- Interface otimizada para dispositivos móveis
- Navegação inferior intuitiva com 3 abas principais
- Paleta de cores azul moderna e profissional
- Layout responsivo e acessível

### 🎫 Gestão de Eventos
- **Lista de Eventos**: Visualização de todos os eventos disponíveis
- **Filtros por Categoria**: Tecnologia, Workshop, Seminário, Competição, Palestra
- **Pesquisa**: Busca por título ou local do evento
- **Informações Detalhadas**: Data, hora, local, preço e vagas disponíveis
- **Alertas de Disponibilidade**: Notificações para últimas vagas e eventos esgotados

### 💳 Sistema de Pagamento
- **Múltiplas Opções**: PIX, Cartão de Crédito e Boleto Bancário
- **PIX Copia e Cola**: Código PIX gerado automaticamente
- **Formulário de Cartão**: Campos para número, validade, CVV e nome
- **Boleto Bancário**: Geração com vencimento em 3 dias úteis
- **Fluxo Completo**: Simulação realista do processo de compra

### 🎟️ Gestão de Bilhetes
- **Lista Personalizada**: Todos os bilhetes do utilizador
- **QR Codes**: Códigos únicos para cada bilhete
- **Sistema de Favoritos**: Marcar bilhetes como favoritos
- **Filtros Avançados**: Todos, Favoritos, Ativos, Próximos
- **Estatísticas**: Contadores de total, favoritos e ativos
- **Status de Bilhetes**: Indicação visual do estado (Ativo/Inativo)

### 👤 Perfil do Utilizador
- **Informações Pessoais**: Nome, email e contacto
- **Estatísticas**: Bilhetes comprados e favoritos
- **Menu de Configurações**: Acesso a definições da aplicação
- **Informações da App**: Versão e créditos do Inatel

## 🛠️ Tecnologias Utilizadas

- **React 18**: Framework principal com hooks modernos
- **Tailwind CSS**: Framework de CSS utilitário para estilização
- **Lucide React**: Biblioteca de ícones SVG
- **shadcn/ui**: Componentes de UI pré-construídos
- **Context API**: Gestão de estado global da aplicação
- **Vite**: Bundler e servidor de desenvolvimento

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- pnpm (recomendado) ou npm

### Passos para Execução

1. **Navegar para o diretório do projeto**:
   ```bash
   cd inatel-tickets
   ```

2. **Instalar dependências** (se necessário):
   ```bash
   pnpm install
   # ou
   npm install
   ```

3. **Iniciar servidor de desenvolvimento**:
   ```bash
   pnpm run dev --host
   # ou
   npm run dev -- --host
   ```

4. **Aceder à aplicação**:
   - Abrir navegador em `http://localhost:5173`
   - Para acesso externo: `http://[IP_DO_SERVIDOR]:5173`

### Scripts Disponíveis

- `pnpm run dev`: Inicia servidor de desenvolvimento
- `pnpm run build`: Gera build de produção
- `pnpm run preview`: Pré-visualiza build de produção
- `pnpm run lint`: Executa linting do código

## 📱 Como Usar a Aplicação

### 1. Página de Eventos
- Navegue pela lista de eventos disponíveis
- Use os filtros para encontrar eventos por categoria
- Pesquise por título ou local na barra de pesquisa
- Clique em "Comprar" para iniciar o processo de compra

### 2. Processo de Compra
- Escolha o método de pagamento (PIX, Cartão ou Boleto)
- Preencha as informações necessárias
- Confirme a compra para adicionar o bilhete à sua conta

### 3. Gestão de Bilhetes
- Acesse a aba "Bilhetes" para ver todos os seus bilhetes
- Use os filtros para organizar por status ou favoritos
- Clique no coração para marcar/desmarcar favoritos
- Visualize o QR code de cada bilhete

### 4. Perfil
- Veja suas informações pessoais e estatísticas
- Acesse configurações da aplicação
- Consulte informações sobre a versão

## 🎨 Design e UX

### Paleta de Cores
- **Azul Principal**: #1e40af (blue-800)
- **Azul Secundário**: #3b82f6 (blue-500)
- **Azul Claro**: #60a5fa (blue-400)
- **Cinza**: #6b7280 (gray-500)
- **Branco**: #ffffff

### Componentes Principais
- **EventCard**: Cartão de evento com informações completas
- **TicketCard**: Cartão de bilhete com QR code e favoritos
- **PaymentModal**: Modal de pagamento com múltiplas opções
- **BottomNavigation**: Navegação inferior com 3 abas
- **Header**: Cabeçalho com logótipo Inatel

## 📊 Dados Mock

A aplicação utiliza dados simulados para demonstração:

- **5 Eventos**: Diferentes categorias e preços
- **3 Bilhetes**: Exemplos de bilhetes já comprados
- **1 Utilizador**: Perfil de exemplo (João Silva)
- **3 Métodos de Pagamento**: PIX, Cartão e Boleto

## 🔧 Estrutura do Projeto

```
inatel-tickets/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── BottomNavigation.jsx
│   │   ├── EventCard.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   ├── PaymentModal.jsx
│   │   └── TicketCard.jsx
│   ├── context/            # Contexto global
│   │   └── AppContext.jsx
│   ├── data/               # Dados mock
│   │   └── mockData.js
│   ├── pages/              # Páginas principais
│   │   ├── EventsPage.jsx
│   │   ├── ProfilePage.jsx
│   │   └── TicketsPage.jsx
│   ├── App.css            # Estilos globais
│   ├── App.jsx            # Componente principal
│   └── main.jsx           # Ponto de entrada
├── public/                # Arquivos públicos
├── package.json          # Dependências e scripts
└── README.md            # Este arquivo
```

## 🚀 Próximos Passos

Para uma implementação completa em produção, considere:

1. **Backend Integration**: Conectar com APIs reais
2. **Autenticação**: Sistema de login/registo
3. **Pagamentos Reais**: Integração com gateways de pagamento
4. **Push Notifications**: Notificações para eventos
5. **Offline Support**: Funcionalidade offline com Service Workers
6. **Analytics**: Tracking de uso e conversões

## 📄 Licença

© 2025 Instituto Nacional de Telecomunicações (Inatel)

---

**Desenvolvido com ❤️ para o Inatel**

