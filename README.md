# Caio Music

Site vitrine em **React + Vite** para apresentar cursos de música, galeria e contato.

## Páginas

| Rota | Conteúdo |
|------|----------|
| `/` | Início — hero, destaques e sobre |
| `/cursos` | Catálogo com filtros por instrumento e nível |
| `/galeria` | Galeria de estilos e momentos |
| `/contato` | Formulário (abre o e-mail) e informações |

## Rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço que o terminal mostrar (geralmente `http://localhost:5173`).

## Build de produção

```bash
npm run build
npm run preview
```

A pasta `dist/` contém os arquivos prontos para publicar.

---

## Deploy — passo a passo

### Opção A: Vercel (recomendado, gratuito)

1. Crie uma conta em [vercel.com](https://vercel.com) e conecte o GitHub.
2. Envie o projeto para um repositório no GitHub (se ainda não estiver):
   ```bash
   git init
   git add .
   git commit -m "Site vitrine Caio Music"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/music-school.git
   git push -u origin main
   ```
3. No painel da Vercel: **Add New Project** → importe o repositório.
4. Deixe as configurações padrão:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Clique em **Deploy**. Em alguns minutos você recebe uma URL (`seu-projeto.vercel.app`).
6. O arquivo `vercel.json` já redireciona rotas como `/cursos` para o React Router funcionar.

### Opção B: Netlify (gratuito)

1. Conta em [netlify.com](https://netlify.com) e projeto no GitHub (mesmos passos 2 do item acima).
2. **Add new site** → **Import an existing project** → escolha o repositório.
3. Configuração:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. **Deploy site**. O arquivo `public/_redirects` cuida das rotas da SPA.

**Deploy manual (arrastar pasta):**

```bash
npm run build
```

No Netlify: **Sites** → **Deploy manually** → arraste a pasta `dist`.

### Opção C: GitHub Pages

1. Instale a dependência de deploy (uma vez):
   ```bash
   npm install -D gh-pages
   ```
2. No `package.json`, adicione `"homepage": "https://SEU-USUARIO.github.io/NOME-DO-REPO"` e scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. No `vite.config.js`, defina `base: '/NOME-DO-REPO/'`.
4. Execute `npm run deploy` e ative **GitHub Pages** nas configurações do repositório (branch `gh-pages`).

---

## Personalizar conteúdo

| Arquivo | O que editar |
|---------|----------------|
| `src/data/courses.js` | Cursos, níveis, textos e datas |
| `src/data/gallery.js` | Itens da galeria |
| `src/data/site.js` | E-mail, LinkedIn, textos gerais |
| `src/assets/` | Logo e fotos opcionais (use `image: null` nos dados ou importe `.jpg` no curso) |

## Tecnologias

- React 19
- React Router
- Vite
- CSS Modules

## Autor

**Caio Victor Santos Valentim**  
📧 caio.victor.santos12@gmail.com  
💼 [LinkedIn](https://www.linkedin.com/in/caio-victor-santos-valentim/)
