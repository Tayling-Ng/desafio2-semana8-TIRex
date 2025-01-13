

# Desafio 2 - Semana 08

## 📋 Descrição do Projeto

Este projeto foi desenvolvido para o desafio 2 - semana 08 da trilha PB Front-end (React) da Compass.Uol, onde o objetivo foi recriar uma ferramenta de produtividade utilizando **React**, **TypeScript**, **TailwindCSS**, e outras tecnologias modernas para gestão de tarefas. O foco principal é a criação de uma aplicação web responsiva e funcional, conforme as especificações fornecidas.

## 💻 Tecnologias Utilizadas
- **React**
- **TypeScript**
- **TailwindCSS**
- **Clerk** (para autenticação de usuários)
- **React Router** (para criação de rotas - necessário proteger as rotas)
- **JSON Server** (para simulação de banco de dados)
- **HTML ou CSS** se necessário.

## 📚 Requisitos obrigatórios do Projeto

- Validações de formulários feitas manualmente (sem bibliotecas).
- Responsividade total (desktop, tablet, mobile).
- Uso de loading spinners para requisições assíncronas.

### 📍 Requisitos por Página/Componente

###  Navbar
- Botões com hover conforme Figma.
- A barra de pesquisa e o botão About não fazem nada nesse momento.
- O botão “Home” deve redirecionar para a tela principal e deslogar o usuário.
- O botão “Settings” vai pra página de configurações do usuário logado no momento
- O botão “Profile” vai pro perfil do usuário logado no momento


### Home
- O botão de login deve levar para a página de login
- O botão “Get Started” deve levar para o cadastro
- Os botões “Learn More” e “View All” não precisam levar para nenhum lugar
- O formulário precisa ter as seguintes validações:
    - Somente aceitar e-mails válidos.
    - Somente aceitar nomes a partir de 2 caracteres e sem números.
    - Subscribe, deve abrir um MODAL informando que o usuário se cadastrou na Newsletter.***NÃO utilize alerts.***



### Login
- Validação de e-mail (com e-mail válido) e senha com 8 caracteres, caracteres especiais e no mínimo 1 número e uma letra maiúscula.
- Caso os dados estejam inválidos adicionar uma validação na tela.
- Botões de Facebook e Google configurados com Clerk.
- Sign up leva para a página de registro.

### Registrar
- Validação de todos os campos (nome, sobrenome, e-mail, cargo, senha).
    - primeiro nome e o sobrenome precisa ter mais de 2 caracteres e não ter números
    - email válido e senha precisa ter mais de 8 caracteres, conter caracteres especiais, no mínimo 1 número e uma letra maiúscula.
- O cargo deve ter no mínimo 5 caracteres, não aceitando números.
- Botões de redes sociais configurados com Clerk.
- Dados inválidos adicionar validação em tela.
- Texto "Log in" deve levar apágina Login

### Kanban
#### 1. Zoom da Área:

- A área marcada por uma “grade” PRECISA constar um zoom (como uma área arrastável, assim como o Miro funciona)
- **Desktop:** scroll do mouse.
- **Tablet/Mobile:** gesto de pinçar.

#### 2. Área "In this project":
- Botão de **fixar** ou **desafixar** para ajustar o tamanho da grade.
  - Ao desafixar, a grade ocupa toda a largura da tela.

#### 3. Colunas dos Cards:
- **3 colunas** com scroll vertical e indicador de número de tarefas.
- Botão "+" para criar novas tarefas.

#### 4. Cards:
- Cada card possui:
  - Prioridade, título, barra de progresso e integrantes.
  - Ícones de comentários e tarefas concluídas.
  - Imagens (opcionais).
  - Indicador de prioridade (Mid, Low, High)

#### 5. Área Azul - Informações do Projeto:
- Exibe **membros** e **métricas** de tarefas.
- É necessário mostrar pelo menos 3 pessoas cadastradas na lista de membros e em métricas, será necessário contabilizar a quantidade de tarefas em cada categoria e o tempo estimado delas
- Ao clicar em um nome, é necessário redirecionar para a página de perfil do respectivo usuário.
- Botão de fixar aparece como ícone azul no canto superior direito.

#### 6. Modal - Kanban
- O modal é aberto ao clicar no botão "+" de qualquer coluna do Kanban, ocupando o espaço da grade e com fundo opaco.
- Validações dos campos:
  - **Título:** mínimo de 5 caracteres.
  - **Status:** escolha de apenas 1, com cores de acordo com a coluna (to do: azul, in progress: laranja, done: verde).
  - **Descrição:** até 300 caracteres.
  - **Data Inicial:** pode ser anterior ou posterior à data atual.
  - **Data Final:** deve ser igual ou posterior à data atual.
  - **Imagem:** até 5GB.
  - **Prioridade:** escolha de apenas 1 (low: azul, mid: laranja, high: vermelho).
- Ao clicar em "Create", um novo card é adicionado na coluna selecionada.
- O botão "X" fecha o modal.

#### 7.  Configurações
- Exibe a imagem do usuário ou um placeholder.
- **Informações básicas:** 
  - Nome e sobrenome: mínimo de 2 caracteres.
  - E-mail válido.
- **Imagem de perfil:** upload de imagem conforme padrões definidos.
- **Comunicação:** armazena preferências de comunicação e as mantém ao voltar à página.
- **Informações sociais:** atualiza redes sociais conforme o JSON.
- O botão principal atualiza o JSON de usuário e recarrega a página com as novas informações.

#### 8. Perfil
- Exibe informações de nome, usuário, contato e detalhes do usuário.
- **Última atividade:** informações estáticas de atividades.
- **Relatório semanal:** tarefas associadas ao usuário e tempo total.

###  Página não encontrada
- Caso o usuário acesse uma página inexistente, exibe uma tela de erro.
- O link “Go back to home” redireciona para a tela inicial.

###  Página bloqueada
- Se o usuário não estiver autenticado e tentar acessar o Kanban, é exibida uma tela de bloqueio.
- O link “Log in” redireciona para a página de login.

### Footer 
- Links de redes sociais precisam estar redirecionadas para seus respectivos endereços, hover igual ao figma

## 🔄 Funcionalidades

- **Autenticação de Usuário**: Utilizando Clerk para login, registro e autenticação.
- **Gerenciamento de Tarefas**: Adição, edição, e remoção de tarefas em tempo real.
- **Responsividade**: Layout adaptado para múltiplos dispositivos.
- **Validações Customizadas**: Implementação manual de validações de formulários.
  
## 👥 Membros do Grupo

- **Heberton Geaovane** - [GitHub](https://github.com/HebertonGeovane)
- **Gabriel Golin** - [GitHub](https://github.com/Gabriel-GGC)
- **Gabriel Ruiz** - [GitHub](https://github.com/Gruiiz)
- **Paula Borges** - [GitHub](https://github.com/paulagmborges)
- **Tayling Martins Ng** - [GitHub](https://github.com/Tayling-Ng)
- **Thiago Rocha Gomes** - [GitHub](https://github.com/thiago-rgomes)
 


## 🛠 Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone git@github.com:Tayling-Ng/desafio2-semana8-TIRex.git
   ```

2. Instale as dependências:
   ```bash
   npm i
   ```  

3. Inicie a aplicação:
   ```bash
   npm run dev
   ```  


