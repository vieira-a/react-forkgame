# Jogo da Forca

## Como funciona
Ao iniciar um novo jogo, uma nova palavra é gerada a partir de uma lista de palavras;
O app mostra a quantidade de letras que compôem a palavra por meio de marcações. 

Exemplo:

Para a palavra **DESENVOLVEDOR**, que possui 13 letras, o app mostra 13 espaços, cada um correspondente a uma letra:
**_ _ _ _ _ _ _ _ _ _ _ _ _**

O jogador precisa acertar a palavra proposta. Para tanto, escolhe uma letra por vez.
Caso a letra escolhida faça parte da palavra, o espaço da letra é preenchida com a mesma.

Exemplo:

Usuário escolhe a letra **E**

**_ E _ E _ _ _ _ _ E _ _ _** 

Neste caso, a letra E ocorre por 3 vezes na palavra sorteada.

## Tecnologias utilizadas

- HTML5
- CSS3
- Bootstrap
- Javascript
- React JS
## Etapas do desenvolvimento

Será um single app com todas as funções centralizadas.

- [x] Entender o funcionamento da aplicação
- [x] Construir o plano de desenvolvimento
    
### Componentes

**Estrutura básica dos componentes**

- [x] Header com título e breve apresentação
- [x] Main
    - [x] Seção aonde serão carregados os espaços correspondentes às letras da palavra sorteada
    - [x] Seção aonde o jogador escolherá a letra
    - [x] Seção para exibir as mensagens da aplicação

**Conteúdo base de componentes**

- [ ] Criar conteúdo para os componentes
    - [x] ForkHeader (Componente de cabeçalho)
    - [ ] ForkMain (Componente principal, que faz a leitura dos demais)
        - [ ] ForkLoadingWord (Componente que carrega a palavra sorteada)
        - [ ] ForkPlayerActions (Componente que contem as ações jogador)
        - [ ] ForkMessages (Componente que contém as mensagens de interação com o jogador)

**Javascript**

**Carregar a palavra sorteada**

- [x] Construir lista com as palavras que serão sorteadas
- [x] Construir função para sortear uma palavra aleatoriamente
- [x] Fazer contagem das letras que compôem a palavra
- [x] Exibir um indicativo da quantidade de letras

**Validações**

- [ ] O jogador só poderá escolher uma letra por vez.
- [ ] As letras devem ser maiúsculas e não levar em conta acentuação, independentemente do que o jogador escolher.

**Implementação das regras**

**Escolha de uma letra**

- [ ] Criar função ler a letra escolhida e verificar se a mesma está contida na palavra
- [ ] Tratamento para **caso contenha a letra**
    - [ ] Preencher o espaço correspondente da letra
- [ ] Tratamento para **caso não contenha a letra**
    - [ ] Informar ao usuário que a letra não existe na palavra

### Regras para organização de commits

Para facilitar a manutenção, e melhor visualização do andamento do projeto

**Título da mensagem**

- Uma sigla indicativa da ação deverá preceder a mensagem de commit, conforme abaixo:

> ADD - Adicionar nova implementação

> UPD - Atualização de implementação

> DEL - Exclusão de implementação

> BUG - Informar mau funcionamento de uma implementação

> FIX - Correção de implementação

- Além da sigla, a descrição do commit deve conter o título da seção em **negrito** + descrição do componente ou função implementada;
- Novos commits serão adicionados a cada nova implementação ou breakpoint significativo do projeto, com base na lista de tarefas deste README;
- A mensagem deverá ser o mais descritiva possível: curta, direta e de fácil entendimento;
- Utilizar referências da lista de tarefas para composição da mensagem.

Exemplo:

"ADD Conteúdo base ForkHeader"