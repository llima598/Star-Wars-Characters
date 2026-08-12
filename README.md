# ⭐ Star Wars Characters

Catálogo interativo com todos os personagens do universo Star Wars, consumindo dados da [SWAPI](https://swapi.info). Navegue pelas páginas, clique em um personagem e veja seus detalhes em um modal.

🔗 **Demo:** _[adicione aqui o link do deploy — Vercel, Netlify ou GitHub Pages]_

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📸 Preview

_[adicione aqui um GIF ou screenshot do projeto em funcionamento — isso costuma ser o primeiro item que o recrutador olha]_

## ✨ Funcionalidades

- Listagem de personagens de Star Wars consumida diretamente da API pública [SWAPI](https://swapi.info)
- Paginação (10 personagens por página, com botões "Anterior" e "Próxima")
- Modal com detalhes do personagem ao clicar no card: altura, peso, cor dos olhos e ano de nascimento
- Tradução de dados da API (cores dos olhos, valores "unknown") para português
- Layout responsivo com cards ilustrados

## 🛠️ Tecnologias

- **HTML5** — estrutura da página
- **CSS3** — estilização e layout dos cards e modal
- **JavaScript (Vanilla)** — consumo da API, paginação e renderização dinâmica dos cards
- **[SWAPI](https://swapi.info)** — API pública com os dados dos personagens
- **Font Awesome** — ícones de redes sociais

## 🚀 Como executar localmente

```bash
# Clone o repositório
git clone https://github.com/llima598/Star-Wars-Characters.git

# Entre na pasta do projeto
cd Star-Wars-Characters

# Abra o arquivo index.html no navegador
# (recomendado: use a extensão "Live Server" do VS Code)
```

## 🧠 O que aprendi / desafios

- Consumo de API pública com `fetch` e tratamento de erros com `try/catch`
- Manipulação do DOM para criar elementos dinamicamente (`createElement`, `appendChild`)
- Lógica de paginação client-side, dividindo o array de personagens em páginas
- Criação de um modal simples de detalhes sem nenhuma biblioteca externa
- Conversão e formatação de dados vindos da API para exibição amigável ao usuário

## 📌 Possíveis melhorias futuras

- [ ] Adicionar campo de busca por nome de personagem
- [ ] Adicionar loading state enquanto os dados carregam
- [ ] Tornar o layout mais responsivo em telas muito pequenas
- [ ] Adicionar testes automatizados

## 👤 Autor

**Lucas Lima**

- GitHub: [@llima598](https://github.com/llima598)
- LinkedIn: [lucas-lima-231248191](https://www.linkedin.com/in/lucas-lima-231248191)

---

Desenvolvido como parte dos meus estudos em desenvolvimento Front-end 🚀
