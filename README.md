
# Site Institucional – Comunidade Quilombola Urbana João Borges Vieira
<img width="1893" height="758" alt="Captura de tela 2025-08-07 155440" src="https://github.com/user-attachments/assets/62aeb1dc-46fc-43af-bbe5-e5837aaab28f" />

> [English Version (en-US)](README.en.md)

---

## Sobre o projeto

Site institucional desenvolvido como **Projeto de Extensão II – Engenharia de Software** em parceria com a **Associação da Comunidade Quilombola Urbana João Borges Vieira**, localizada em Uruaçu-GO.  
A aplicação fortalece a presença digital da comunidade, divulga ações culturais e sociais, incentiva doações e amplia a transparência perante associados, apoiadores e poder público.

 **ODS atendidos:** •10 – Redução das Desigualdades •11 – Cidades e Comunidades Sustentáveis •16 – Paz, Justiça e Instituições Eficazes.

---

## Índice

- [Tecnologias e Ferramentas](#tecnologias-e-ferramentas)
- [Objetivos do Projeto](#objetivos-do-projeto)
- [Principais Funcionalidades](#principais-funcionalidades)
- [Deploy e CI/CD](#deploy-e-cicd)
- [Performance](#performance)
- [Futuras Melhorias](#futuras-melhorias)
- [Contato](#contato)

---

## Tecnologias e Ferramentas

| Stack | Versão |
|-------|--------|
| **Next.js** | 15.2.7 |
| **TypeScript** | 5.8.3 |
| **Tailwind CSS** | 4.1.3 |
| **next-intl** (i18n) | 4.1.0 |
| **GSAP + ScrollTrigger** (animações) | 3.12.7 |
| **Zod** (validação) | 3.24.2 |
| **Nodemailer** (e-mail) | 6.10.0 |
| **Vercel** (deploy) | – |
| **Figma & GIMP** (UI / assets) | – |

---

## Objetivos do Projeto

- **Visibilidade:** criar um canal oficial que concentre história, notícias e frentes de atuação da associação.
- **Transparência:** facilitar prestação de contas e divulgação de projetos à comunidade e patrocinadores.
- **Captação de recursos:** disponibilizar seção de doações e contatos para parcerias.
- **Inclusão digital:** conteúdo em pt-BR com estrutura preparada para as páginas em Inglês e Espanhol. 
- **Aprendizado prático:** aplicar conceitos de Engenharia de Software, DevOps e UX em um cenário real.

---

## Principais Funcionalidades

| | Descrição |
|----|-----------|
| **Página Home dinâmica** | Destaques de notícias, carrossel de fotos, CTA de doação. |
| **Internacionalização** | Middleware Next.js + `next-intl`; detecção automática de idioma. |
| **Contato seguro** | Formulário validado por Zod, envio via Nodemailer e reCAPTCHA v3. |
| **Animações performáticas** | GSAP + ScrollTrigger para transições suaves sem impactar LCP. |
| **SEO avançado** | Metadados estruturados (`<meta>` / OpenGraph), otimização de imagens, sitemap automático. |
| **Acessibilidade** | Paleta AAA, navegação por teclado, contraste verificado com Lighthouse. |
| **CI com GitHub Actions** | Lint, Type-check e preview build a cada PR. |

---

## Deploy e CI/CD

| Etapa | Serviço | Descrição |
|-------|---------|-----------|
| **Preview** | Vercel | Cada push/PR gera uma URL única. |
| **Produção** | Vercel | Deploy gatilhado via GitHub Action `main -> production`. |
| **Domínio** | Hostinger | DNS apontado para Vercel. |
| **Monitoramento** | Vercel Analytics + Lighthouse CI | Rastreamento de desempenho e erros. |

---

## Performance

<img width="1073" height="820" alt="Captura de tela 2025-08-07 154737" src="https://github.com/user-attachments/assets/7b8ea201-4219-4daa-9c7d-4cd37f143116" />

<img width="1038" height="806" alt="Captura de tela 2025-08-07 153836" src="https://github.com/user-attachments/assets/cf8eeb45-3f44-4820-8993-3f64e3342b77" />

---

## Futuras Melhorias

- Integração com **CMS headless** (ex.: Sanity) para gestão de conteúdo pela equipe.
- Alcancar pelo menos a pontuação 96 para o quesito acessibilidade do site.
---

## Contato
🔹 **Autor:** Rafael Oliveira Lopes  
🔹 **Email:** rafaellopes.dev@email.com  
🔹 **LinkedIn:** [LinkedIn](https://www.linkedin.com/in/rafael-lopes-desenvolvedor-fullstack/)  
🔹 **Site:** [rafaellopes.dev](https://rafaellopes.dev)  
