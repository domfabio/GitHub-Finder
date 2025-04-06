<div align="center">
  <img src="https://img.shields.io/static/v1?label=React&message=framework&color=61DAFB&style=for-the-badge&logo=react"/>
  <img src="https://img.shields.io/static/v1?label=TypeScript&message=linguagem&color=3178C6&style=for-the-badge&logo=typescript"/>
  <img src="https://img.shields.io/static/v1?label=React%20Router&message=DOM&color=CA4245&style=for-the-badge&logo=reactrouter"/>
  <img src="https://img.shields.io/badge/Status-Concluído-green?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/License-MIT-2ecc71?style=for-the-badge&logo=open-source-initiative&logoColor=white"/>
</div>

<br>

<h1 align="center">🔍 GitHub Finder</h1>

### 🧭 Navegação Rápida

- 📝 [Sobre](#-sobre)
- ✅ [Funcionalidades](#-funcionalidades)
- 🚀 [UI e Deploy](#-ui-e-deploy)
- 🧩 [Principais Dependências](#-principais-dependências)
- ▶️ [Como Configurar o Projeto no VS Code](#️-como-configurar-o-projeto-no-vs-code)
- 🤝 [Contribuição](#-contribuição)

---

### 📝 Sobre

Projeto desenvolvido durante o curso **Formação Front-end - HTML, CSS, JavaScript, React e +**, utilizando **React com TypeScript**. A aplicação consome a **API pública do GitHub** para exibir informações detalhadas de usuários e seus repositórios.

Este projeto tem como foco a prática de consumo de APIs REST, manipulação de estado com React Hooks e uso do React Router para navegação entre páginas.

---

### ✅ Funcionalidades

Com essa aplicação é possível:

- 🔎 **Buscar usuários do GitHub**
- 👤 **Exibir detalhes do perfil** como avatar, localização, seguidores e seguindo
- 📦 **Visualizar os 5 repositórios mais populares** do usuário, ordenados por número de estrelas

---

### 🚀 UI e Deploy

<div align="center">
  
  <img src="./public/screen.png" width="430px"> 
  <br/>
  <a href="https://github-finder-liard-five.vercel.app/" target="_blank">→ Ver Projeto Online 🔗</a>
</div>


---

### 🧩 Principais Dependências

- **[React](https://reactjs.org/)** – Framework para construção da interface
- **[TypeScript](https://www.typescriptlang.org/)** – Tipagem estática
- **[React Router DOM](https://reactrouter.com/)** – Para navegação entre páginas
- **[Vite](https://vitejs.dev/)** – Bundler leve e rápido

Para a lista completa de dependências e versões, consulte o arquivo [`package.json`](./package.json).

---

## ▶️ Como Configurar o Projeto no VS Code:

### 📌 Pré-requisitos
Antes de prosseguir com a configuração, certifique-se de ter todos os pré-requisitos instalados corretamente para evitar erros durante a instalação e execução do projeto:

`Git 2.4+` `Node.js 12+` `Live Server` 


### ⚙️ Configurando o Projeto

1. Clone este repositório:
Abra o **VS Code**, pressione `Ctrl + Shift + P`, digite **"Git Clone"** e cole o link do repositório:
```sh
https://github.com/domfabio/GitHub-Finder.git
```
2. Instalar Dependências:
```sh
npm install
```
3. Inicie o servidor de desenvolvimento:
```sh
npm run dev
```
4. Acesse o projeto no navegador:<br>
No terminal, pressione `Ctrl + Clique` no link gerado:<br>
 ➜  Local:   http://localhost:5173/

---

## 🤝 Contribuição
**Se deseja contribuir, siga os passos:**
1. Fork o repositório
2. Crie uma branch: `git checkout -b feature-minha-feature`
3. Faça commit das suas mudanças: `git commit -m 'Minha nova funcionalidade'`
4. Faça push para a branch: `git push origin feature-minha-feature`
5. Abra um Pull Request

---

Este projeto é distribuído sob a [Open Source License - MIT](https://opensource.org/licenses/MIT). <br>Veja a documentação para mais detalhes.