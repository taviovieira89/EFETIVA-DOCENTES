# 🔧 Configuração do Sistema de Simulados EFETIVA DOCENTES

## 📋 Funcionalidades Implementadas

### ✅ Sistema Completo de Autenticação
1. **Login/Registro** - Criação de contas e autenticação
2. **Configuração do Simulado** - Tema, dificuldade, modo, etc.
3. **Confirmação** - Resumo antes de iniciar
4. **Quiz** - Simulado propriamente dito
5. **Resultados** - Com analytics detalhados

### ✅ Múltiplos Modos de Acesso
- **Usuário Registrado**: Login com email/senha
- **Modo Visitante**: Acesso sem registro (opcional)
- **Controle de Acesso**: Códigos para grupos específicos

### ✅ Integração Firebase
- Controle de acesso por usuário
- Armazenamento de dados dos usuários
- Salvamento dos resultados dos simulados
- Modo offline (fallback automático)

### ✅ API Google Gemini
- Geração dinâmica de questões
- Sistema de cache inteligente
- Fallback para questões estáticas

## 🚀 Como Configurar

### 1. Firebase (Opcional - para controle de acesso)

#### Passo 1: Criar Projeto Firebase
1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Clique em "Adicionar projeto"
3. Siga o assistente de criação

#### Passo 2: Configurar Firestore
1. No console do projeto, vá em "Firestore Database"
2. Clique em "Criar banco de dados"
3. Escolha "Modo de produção" ou "Modo de teste"

#### Passo 3: Obter Configurações
1. Vá em "Configurações do projeto" → "Configuração do SDK"
2. Copie as configurações e cole no código:

```javascript
// Linha 17-24 do index.html
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_PROJETO.firebaseapp.com",
    projectId: "SEU_PROJETO_ID",
    storageBucket: "SEU_PROJETO.appspot.com",
    messagingSenderId: "123456789",
    appId: "SUA_APP_ID"
};
```

#### Passo 4: Configurar Autenticação
1. No console Firebase, vá em "Authentication"
2. Clique em "Começar"
3. Na aba "Sign-in method", habilite "Email/senha"

#### Passo 5: Configurar Coleções Firestore
O sistema criará automaticamente as seguintes coleções:

- `users` - Perfis dos usuários registrados
- `accessCodes` - Códigos de acesso válidos (opcional)
- `userSessions` - Sessões de usuários visitantes
- `quizResults` - Resultados dos simulados

### 2. Google Gemini API (Opcional - para questões dinâmicas)

#### Passo 1: Obter API Key
1. Acesse [Google AI Studio](https://makersuite.google.com/)
2. Crie uma nova API key
3. Copie a key

#### Passo 2: Configurar no Código
```javascript
// Linha 593 do index.html
const GEMINI_CONFIG = {
    apiKey: 'SUA_GEMINI_API_KEY_AQUI',
    baseURL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent'
};
```

## 🎯 Modos de Funcionamento

### Modo Completo (Firebase + Gemini)
- ✅ Controle de acesso por usuário
- ✅ Questões dinâmicas geradas por IA
- ✅ Armazenamento de resultados no Firebase
- ✅ Analytics avançados

### Modo Híbrido (Apenas Firebase OU Apenas Gemini)
- ✅ Uma funcionalidade ativa, outra em fallback
- ✅ Sistema funciona normalmente
- ⚠️ Algumas funcionalidades limitadas

### Modo Offline (Sem configurações)
- ✅ Funciona com questões estáticas
- ✅ Dados salvos localmente (localStorage)
- ✅ Não requer configuração
- ⚠️ Sem controle de acesso
- ⚠️ Sem geração dinâmica

## 📱 Como Usar

### Para Administradores
1. Configure Firebase e/ou Gemini (opcional)
2. Adicione códigos de acesso no Firestore (se necessário)
3. Distribua o link do simulado

### Para Usuários

#### Opção 1: Usuário Registrado
1. Acesse o simulado
2. **Faça login** ou **crie uma conta**
3. Configure o simulado (tema, dificuldade, etc.)
4. Confirme e inicie
5. Responda as questões
6. Visualize os resultados (salvos automaticamente)

#### Opção 2: Modo Visitante
1. Acesse o simulado
2. Clique em **"Pular Login (Modo Visitante)"**
3. Preencha nome e email
4. Digite código de acesso (se fornecido)
5. Configure o simulado
6. Complete o simulado (dados salvos localmente)

## 🛡️ Controle de Acesso

### Níveis de Acesso
1. **Livre** - Sem código de acesso (qualquer usuário)
2. **Restrito** - Com código de acesso (usuários autorizados)

### Configurar Códigos de Acesso
No Firestore, crie documentos na coleção `accessCodes`:

```javascript
// Documento ID: "CODIGO123"
{
    isActive: true,
    description: "Turma de Janeiro 2024",
    createdAt: timestamp,
    validUntil: timestamp (opcional)
}
```

## 📊 Dados Coletados

### Informações do Usuário
- Nome completo
- Email
- Código de acesso usado
- Timestamp da sessão

### Resultados do Quiz
- Configuração escolhida (tema, dificuldade, etc.)
- Respostas de cada questão
- Tempo gasto por questão
- Pontuação final
- Analytics detalhados

## 🔧 Personalização

### Temas Disponíveis
- Didática Geral
- História da Educação
- Metodologias Ativas
- Psicologia Educacional
- Avaliação Educacional
- Legislação Educacional

### Níveis de Dificuldade
- Básico
- Intermediário
- Avançado

### Modos de Geração
- **Dinâmico**: Questões geradas por IA
- **Estático**: Questões pré-definidas

## 🚨 Solução de Problemas

### Firebase não funcionando
- Verifique as configurações no código
- Confirme se o projeto está ativo
- Verifique as regras do Firestore

### Gemini não funcionando
- Verifique se a API key está correta
- Confirme se há cota disponível
- Sistema usará questões estáticas automaticamente

### Erro de validação de usuário
- Verifique se o código de acesso existe
- Confirme conexão com internet
- Sistema permite continuar em modo offline

## 📞 Suporte

Para problemas técnicos:
1. Verifique o console do navegador (F12)
2. Confirme as configurações
3. Teste em modo offline primeiro
4. Entre em contato com o desenvolvedor

---

**Desenvolvido para EFETIVA DOCENTES**  
*Sistema de Simulados Interativos com IA*
