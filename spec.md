# Especificação funcional e técnica do chatbot informativo

## 1. Título

Especificação funcional e técnica do chatbot informativo

## 2. Visão geral do projeto

Este documento define a especificação funcional e técnica para adicionar um chatbot informativo ao website institucional já desenvolvido no projeto de extensão acadêmica em Engenharia de Software.

A nova funcionalidade deve evoluir o site existente por meio de um componente flutuante de chatbot, disponível nas páginas públicas, com o objetivo de ajudar visitantes a encontrar informações institucionais essenciais de forma mais rápida e acessível.

O chatbot deve atuar como um guia de atendimento inicial, apresentando perguntas frequentes predefinidas e respostas aprovadas pela instituição parceira. A primeira versão deve manter escopo controlado, seguro e de baixo custo operacional, sem uso de IA generativa irrestrita.

## 3. Descrição do problema

Visitantes do website institucional podem ter dificuldade para encontrar rapidamente informações básicas, especialmente em dispositivos móveis ou em situações em que não conhecem a estrutura do site.

Entre as informações mais procuradas podem estar serviços oferecidos, horários de funcionamento, canais de contato, localização, documentos necessários, formas de atendimento e orientações institucionais comuns.

Essa dificuldade pode gerar dúvidas repetitivas, aumento da demanda por atendimento manual e barreiras de acesso para membros da comunidade que buscam informações objetivas.

## 4. Objetivo

O objetivo do chatbot informativo é melhorar o acesso da comunidade às informações institucionais, reduzir perguntas repetitivas e orientar visitantes para canais oficiais de contato quando a dúvida não puder ser resolvida pelas respostas predefinidas.

A solução deve apoiar o propósito extensionista do projeto ao facilitar a comunicação entre a instituição parceira e a comunidade atendida, promovendo acesso mais simples, organizado e inclusivo às informações públicas.

## 5. ODS aderentes

O projeto se vincula principalmente ao ODS 9 - Indústria, inovação e infraestrutura, por propor melhoria tecnológica no website institucional e ampliar o acesso digital às informações públicas da instituição parceira.

Também pode se relacionar ao ODS 10 - Redução das desigualdades, caso a instituição parceira atenda público em situação de vulnerabilidade ou caso o chatbot facilite o acesso de pessoas com menor familiaridade tecnológica às informações institucionais.

A meta específica dos Objetivos de Desenvolvimento Sustentável deverá ser selecionada após validação do contexto da instituição parceira, considerando o problema identificado, o público beneficiado e o tipo de impacto esperado com a implantação do chatbot.

## 6. Escopo

O escopo da primeira versão inclui:

* Botão flutuante do chatbot nas páginas do website.
* Janela de conversa com interface simples e responsiva.
* Mensagem inicial de boas-vindas.
* Opções de FAQ predefinidas.
* Respostas predefinidas aprovadas pela instituição parceira.
* Possibilidade de retornar ao menu inicial de perguntas.
* Redirecionamento opcional para WhatsApp, e-mail ou página de contato oficial.
* Comportamento responsivo para desktop e dispositivos móveis.
* Noções básicas de acessibilidade, incluindo navegação por teclado, contraste adequado, texto alternativo quando aplicável e uso de atributos ARIA.
* Suporte à internacionalização usando a estrutura de locales já existente no projeto.

## 7. Fora do escopo

Estão explicitamente fora do escopo da primeira versão:

* Chatbot de IA com entrada livre de texto.
* Integração com OpenAI, API de LLM ou qualquer serviço de IA generativa na primeira versão.
* Persistência em banco de dados.
* Autenticação de usuários.
* Painel administrativo.
* Armazenamento de dados pessoais.
* Coleta de histórico individual de conversas.
* Tomada de decisão automatizada.
* Orientações médicas, jurídicas, financeiras ou sensíveis.
* Atendimento emergencial.
* Substituição dos canais oficiais de comunicação da instituição.

## 8. Usuários-alvo

Os usuários-alvo da funcionalidade são:

* Visitantes da comunidade em geral.
* Colaboradores e equipe da instituição parceira.
* Pessoas buscando informações institucionais básicas.
* Visitantes usando dispositivos móveis.
* Usuários que precisam localizar rapidamente serviços, horários, contatos, endereço ou documentos.

## 9. Requisitos funcionais

* `FR-001`: O sistema deve exibir um botão flutuante do chatbot nas páginas públicas do website.
* `FR-002`: O sistema deve permitir abrir e fechar a janela do chatbot.
* `FR-003`: O sistema deve exibir uma mensagem inicial de boas-vindas ao abrir o chatbot.
* `FR-004`: O sistema deve apresentar opções predefinidas de perguntas frequentes.
* `FR-005`: O sistema deve exibir a resposta correspondente após o usuário selecionar uma opção.
* `FR-006`: O sistema deve permitir retornar ao menu inicial de perguntas.
* `FR-007`: O sistema deve fornecer redirecionamento para canais oficiais de contato previamente validados pela instituição parceira, preferencialmente centralizados em arquivo de configuração ou nos dados do FAQ.
* `FR-008`: O sistema deve oferecer suporte a traduções usando a estrutura de locale já existente.
* `FR-009`: O sistema deve funcionar corretamente em mobile e desktop.
* `FR-010`: O sistema não deve coletar, armazenar ou solicitar dados pessoais dos usuários.

## 10. Requisitos não funcionais

* Performance: o chatbot deve ser leve, carregar rapidamente e não prejudicar a experiência de navegação do website.
* Acessibilidade: a interface deve permitir uso por teclado, foco visível, contraste adequado, rótulos acessíveis e estrutura semântica apropriada.
* Segurança: a primeira versão deve evitar entrada livre de texto e não deve processar dados sensíveis enviados por usuários.
* Privacidade: a solução não deve coletar dados pessoais, armazenar conversas ou criar perfis de visitantes.
* Manutenibilidade: perguntas e respostas devem ser organizadas de forma simples, versionada e fácil de revisar pela equipe do projeto.
* Baixo custo operacional: a implementação deve funcionar sem serviços pagos obrigatórios, sem APIs externas de IA e sem infraestrutura adicional.
* Compatibilidade: a solução deve ser compatível com a estrutura atual do projeto em Next.js App Router, TypeScript, middleware de locale e arquivos de mensagens.
* Internacionalização: textos visíveis ao usuário devem estar disponíveis para `pt`, `en` e `es`, respeitando a estrutura existente em `src/messages`.
* Confiabilidade: as respostas devem ser revisadas e aprovadas pela instituição parceira antes da publicação.

## 11. Arquitetura sugerida

Recomenda-se manter o chatbot dentro do mesmo repositório do website, integrado ao App Router do Next.js e à estrutura de internacionalização já existente.

Estrutura sugerida:

```txt
src/
  components/
    chatbot/
      Chatbot.tsx
      ChatbotButton.tsx
      ChatbotWindow.tsx
      ChatbotMessage.tsx
      ChatbotOptions.tsx
  data/
    chatbotFaq.ts
  messages/
    pt/
      chatbot.json
    en/
      chatbot.json
    es/
      chatbot.json
```

Responsabilidades sugeridas:

* `Chatbot.tsx`: componente principal, responsável por controlar estado de abertura, seleção de opção e navegação entre menus.
* `ChatbotButton.tsx`: botão flutuante usado para abrir e fechar o chatbot.
* `ChatbotWindow.tsx`: contêiner visual da janela de conversa.
* `ChatbotMessage.tsx`: componente para renderizar mensagens do chatbot.
* `ChatbotOptions.tsx`: componente para renderizar botões de perguntas frequentes.
* `chatbotFaq.ts`: arquivo com os identificadores das perguntas, chaves de tradução e metadados de redirecionamento.
* `chatbot.json`: arquivos de mensagens com textos traduzidos para cada locale.

## 12. Modelo de dados

A primeira versão deve usar um modelo simples de item de FAQ, suficiente para representar pergunta, resposta, categoria e eventual ação de contato.

```ts
type ChatbotFaqItem = {
  id: string;
  question: string;
  answer: string;
  category?: string;
  action?: {
    label: string;
    href: string;
  };
};
```

Quando o projeto usar arquivos de tradução separados por idioma, o arquivo `chatbotFaq.ts` pode armazenar apenas identificadores técnicos e chaves de tradução, mantendo os textos visíveis nos arquivos `chatbot.json`.

## 13. Conteúdo inicial do FAQ

O conteúdo definitivo deverá ser fornecido ou validado pela instituição parceira. A primeira versão poderá partir dos seguintes placeholders, sem inventar dados reais:

* `[Informar horário de funcionamento]`
* `[Informar endereço oficial]`
* `[Informar canais de atendimento]`
* `[Informar serviços disponíveis]`
* `[Informar documentos necessários, se houver]`
* `[Informar formas de agendamento, se houver]`
* `[Informar público atendido pela instituição]`
* `[Informar como acessar atividades, projetos ou serviços]`
* `[Informar canal para dúvidas não previstas no FAQ]`
* `[Informar redes sociais ou página oficial, se houver]`

Nenhuma informação deve ser publicada sem validação prévia da instituição parceira.

## 14. Internacionalização

A implementação deve usar a estrutura de locales já existente:

* `src/messages/pt`
* `src/messages/en`
* `src/messages/es`
* `src/i18n`
* `middleware.ts`

Todos os textos exibidos no chatbot devem ser traduzíveis, incluindo:

* Rótulo do botão flutuante.
* Mensagem de boas-vindas.
* Perguntas frequentes.
* Respostas.
* Botões de retorno.
* Botões de contato.
* Textos de acessibilidade, como `aria-label`.

As perguntas podem manter os mesmos identificadores técnicos em todos os idiomas, variando apenas os textos exibidos.

Caso a instituição parceira aprove inicialmente apenas a versão em português, a estrutura técnica deve permanecer preparada para tradução futura em inglês e espanhol, respeitando o padrão já existente no projeto.

## 15. Governança do conteúdo do FAQ

Como a primeira versão deve ser segura e controlada, o conteúdo do FAQ deve seguir um fluxo de aprovação:

1. Levantamento das principais dúvidas com a instituição parceira.
2. Redação das respostas pela equipe do projeto.
3. Revisão pela instituição parceira.
4. Aprovação formal do conteúdo.
5. Implementação nos arquivos de mensagens.
6. Validação no website.

As respostas devem ser objetivas, institucionais e não devem prometer serviços, prazos ou condições que não tenham sido confirmadas pela instituição parceira.

## 16. Dados e privacidade

A primeira versão não deve armazenar conversas, nomes, telefones, e-mails, documentos ou qualquer outro dado pessoal.

O chatbot deve funcionar apenas com cliques em opções predefinidas. Caso exista redirecionamento para canais oficiais, o usuário deve ser encaminhado para ambientes externos ou páginas já existentes, como WhatsApp institucional, e-mail oficial ou página de contato.

Não deve haver banco de dados, cookies específicos do chatbot, analytics individual de conversa ou integração com serviços de terceiros para processamento de linguagem natural.

## 17. Considerações de segurança

A restrição a perguntas predefinidas reduz riscos de:

* Exposição de dados sensíveis.
* Respostas incorretas geradas automaticamente.
* Injeção de prompt.
* Conteúdo ofensivo ou inadequado.
* Dependência de serviços externos.
* Custos variáveis por uso.

Links externos devem usar URLs oficiais aprovadas pela instituição. Caso sejam abertos em nova aba, devem usar atributos seguros como `rel="noopener noreferrer"`.

O chatbot não deve solicitar CPF, telefone, endereço, dados de saúde, dados jurídicos, dados financeiros ou qualquer informação sensível. Caso o usuário precise enviar informações pessoais, isso deve ocorrer apenas por canais oficiais externos e mediante ação consciente do próprio usuário.

## 18. Considerações de acessibilidade e IHC

A interface deve considerar princípios de Interação Humano-Computador:

* Linguagem simples e direta.
* Opções visíveis e fáceis de tocar em dispositivos móveis.
* Feedback claro após a seleção de uma pergunta.
* Possibilidade de fechar a janela sem bloquear a navegação.
* Botões com tamanho adequado para toque.
* Foco visível para navegação por teclado.
* Hierarquia visual clara entre mensagem, opções e ações.
* Uso de botões semânticos para opções do FAQ.
* `aria-label` no botão flutuante.
* Rótulo acessível no botão de fechar.
* Nenhuma informação deve depender apenas de cor.

O chatbot deve ser um apoio à navegação, não uma barreira. Ele não deve ocultar conteúdo importante da página nem exigir interação obrigatória.

## 19. Alinhamento ao PDCA

A evolução do website com o chatbot deve ser conduzida conforme o ciclo PDCA:

* Plan: identificar dúvidas frequentes, definir escopo, aprovar perguntas e respostas com a instituição parceira e planejar a implementação.
* Do: desenvolver o componente no website, criar os arquivos de tradução, integrar o chatbot às páginas e configurar redirecionamentos oficiais.
* Check: testar funcionamento em desktop e mobile, validar acessibilidade básica, revisar conteúdo com a instituição parceira e coletar feedback.
* Act: ajustar perguntas, respostas, layout e fluxos com base nos testes e no retorno institucional.

## 20. Relação com os tópicos do modelo de extensão

A funcionalidade contribui para os temas acadêmicos do projeto:

* Interação Humano-Computador: desenho de interface conversacional guiada, responsiva e acessível.
* Inteligência Artificial: aplicação conceitual de atendimento automatizado, com decisão deliberada de não usar IA generativa irrestrita na primeira versão por segurança e controle.
* Bancos de Dados: definição de não persistência na versão inicial, reduzindo complexidade e riscos de privacidade.
* Redes: uso de redirecionamentos para canais oficiais e operação dentro do website existente.
* Segurança da Informação: minimização de dados, ausência de armazenamento de informações pessoais e limitação de respostas a conteúdo aprovado.
* Fundamentos e Técnicas de Programação: construção de componentes, controle de estado, tipagem e organização modular.
* Testes e documentação: validação funcional, revisão de comportamento e registro técnico da solução.

## 21. Orientações para o relatório acadêmico

O relatório acadêmico deve registrar:

* Ação: evolução do website institucional com inclusão de chatbot informativo baseado em FAQ aprovado.
* Resultados: melhoria esperada no acesso a informações básicas, redução de dúvidas repetitivas e maior facilidade de navegação para a comunidade.
* Conclusão: avaliação sobre a contribuição da solução para o objetivo extensionista e para a comunicação institucional.
* Feedback institucional: retorno da instituição parceira sobre clareza das respostas, utilidade do chatbot, adequação visual e pontos de melhoria.

O relatório também deve destacar que a escolha por FAQ guiado foi uma decisão técnica e ética para manter baixo custo, segurança, previsibilidade e controle institucional das informações.

## 22. Critérios de aceite

A primeira versão será considerada concluída quando:

* O botão flutuante estiver visível e funcional.
* A janela do chatbot abrir e fechar corretamente.
* A mensagem de boas-vindas for exibida.
* As opções de FAQ forem apresentadas.
* Cada pergunta exibir uma resposta aprovada.
* O usuário puder retornar ao menu inicial.
* Os links de contato apontarem para canais oficiais.
* O componente funcionar em desktop e mobile.
* Os textos estiverem disponíveis em `pt`, `en` e `es`, ou a estrutura estiver preparada para esses idiomas caso a publicação inicial seja apenas em português.
* Nenhum dado pessoal for coletado ou armazenado.
* Nenhuma chamada externa para IA generativa ou API de LLM for realizada.
* A instituição parceira validar o conteúdo antes da publicação.
* O componente não alterar o funcionamento das páginas existentes.
* O componente não quebrar o roteamento por locale.
* O build do projeto executar sem erro.
* O lint do projeto executar sem erro.
* O typecheck do projeto executar sem erro, quando houver script disponível.

## 23. Orientações de implementação

A implementação deve priorizar simplicidade e integração com o projeto existente:

* Usar componentes React com TypeScript.
* Evitar dependências novas sem necessidade.
* Preferir estado local no componente para controlar abertura e seleção da pergunta.
* Usar os arquivos de mensagens existentes para tradução.
* Manter perguntas e respostas desacopladas da interface visual.
* Garantir que o componente possa ser incluído no layout do locale em `src/app/[locale]`.
* Realizar testes manuais em diferentes larguras de tela.
* Não modificar arquivos não relacionados ao chatbot.
* Não remover nem alterar o comportamento atual de internacionalização.
* Não alterar a rota existente `src/app/api/sendEmail/route.ts`, salvo se houver necessidade técnica comprovada e documentada.
* Preferir uma implementação pequena, determinística e fácil de revisar.
* Não adicionar novas dependências sem justificativa explícita.

## 24. Possíveis melhorias futuras

Em versões futuras, após validação institucional, o projeto poderá avaliar melhorias como:

* Busca por palavras-chave dentro do FAQ.
* Métricas agregadas sem identificação pessoal.
* Painel simples para manutenção de conteúdo.
* Expansão gradual do FAQ.
* Integração com página de contato já existente.
* Melhorias visuais após feedback dos usuários.
* Testes automatizados de componentes.

Em versões futuras, após validação institucional, o projeto poderá avaliar melhorias como busca por palavras-chave dentro do FAQ, métricas agregadas sem identificação pessoal ou painel simples para manutenção de conteúdo. Essas melhorias devem ser analisadas separadamente, com atenção a privacidade, segurança, custo e aprovação da instituição parceira.
