# 🚀 Portfólio Premium para Desenvolvedor Backend

Portfólio profissional, moderno e sofisticado desenvolvido especificamente para desenvolvedores backend.

## ✨ Características

- **Design Premium**: Interface minimalista, futurista e tecnológica
- **Dark Mode First**: Tema escuro como padrão com suporte completo a light mode
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Sofisticadas**: Microinterações elegantes e transições suaves
- **SEO Otimizado**: Meta tags, Open Graph e estrutura semântica
- **Acessibilidade**: Navegação por teclado, estados de foco, prefers-reduced-motion
- **Impressão Otimizada**: CSS específico para gerar currículo em PDF via impressão

## 🎨 Seções Incluídas

1. **Navbar** - Navegação fixa com efeito blur
2. **Hero** - Seção de abertura impactante com código animado
3. **Sobre** - História profissional e métricas
4. **Stack Tecnológica** - Tecnologias organizadas por categoria
5. **Experiência** - Timeline profissional completa
6. **Projetos** - Galeria com modais detalhados (case studies)
7. **Arquitetura** - Visualização de como você pensa sistemas
8. **Educação** - Timeline de formação acadêmica
9. **Conquistas** - Marcos e realizações profissionais
10. **Certificações** - Certificados e cursos
11. **Currículo** - Download e impressão
12. **Contato** - Formulário e métodos de contato
13. **Footer** - Informações finais

## 📂 Estrutura do Projeto

```
omniroute/
├── portfolio.html          # Arquivo principal do portfólio
├── data/
│   └── profile.ts         # Dados do perfil (para referência)
├── public/                # Crie esta pasta para seus arquivos
│   ├── avatar.jpg        # Sua foto (coloque aqui)
│   └── resume.pdf        # Seu currículo PDF (coloque aqui)
└── README.md             # Este arquivo
```

## 🚀 Como Usar

### 1. Abrir o Portfólio

Simplesmente abra o arquivo `portfolio.html` no seu navegador:

```bash
# Windows
start portfolio.html

# Mac
open portfolio.html

# Linux
xdg-open portfolio.html
```

### 2. Personalizar Suas Informações

**IMPORTANTE**: O portfólio contém dados de exemplo claramente marcados como **[EXEMPLO]**.

Abra `portfolio.html` em um editor de texto e personalize:

#### Informações Pessoais (Hero Section)
Localize e substitua:
- `Seu Nome` → Seu nome real
- `seu.email@exemplo.com` → Seu email real
- `https://github.com/seuusuario` → Seu GitHub
- `https://linkedin.com/in/seuusuario` → Seu LinkedIn

#### Seção "Sobre Mim"
Procure por `<section id="about">` e edite:
- Biografia
- Localização
- Métricas (projetos, tecnologias, anos de experiência)

#### Stack Tecnológica
Em `<section id="tech-stack">`, adicione/remova tecnologias conforme necessário:
```html
<div class="tech-item">Sua Tecnologia</div>
```

#### Experiência Profissional
Substitua os exemplos marcados com `[Nome da Empresa]` pelos seus dados reais:
- Nome da empresa
- Cargo
- Período
- Descrição
- Tecnologias
- Resultados

#### Projetos
Edite os 3 projetos de exemplo:
1. Localize `projectsData` no `<script>`
2. Substitua `project1`, `project2`, `project3` pelos seus projetos reais
3. Ou adicione/remova projetos conforme necessário

#### Educação
Substitua `[Nome da Instituição]` pelas suas instituições reais

#### Conquistas e Certificações
Edite as conquistas e certificações de exemplo com suas informações reais

### 3. Adicionar Sua Foto

1. Crie a pasta `public/` na raiz do projeto:
```bash
mkdir public
```

2. Coloque sua foto como `public/avatar.jpg`

3. Se quiser usar outro formato/nome, edite no HTML:
```html
<!-- Procure por: -->
<img src="/avatar.jpg" alt="Seu Nome">
<!-- E ajuste o caminho -->
```

### 4. Adicionar Seu Currículo PDF

1. Coloque seu currículo PDF como `public/resume.pdf`

2. Os botões já estão configurados para este caminho:
```html
<a href="/resume.pdf" download>Baixar Currículo</a>
```

### 5. Imprimir Currículo (Salvar como PDF)

O portfólio tem CSS otimizado para impressão:

1. Abra `portfolio.html` no navegador
2. Pressione `Ctrl+P` (Windows/Linux) ou `Cmd+P` (Mac)
3. Selecione "Salvar como PDF"
4. Clique em "Salvar"

O resultado será um currículo profissional em formato A4, sem elementos desnecessários.

## 🎨 Personalização Avançada

### Mudar a Cor de Destaque

Procure no `<style>` por:
```css
:root {
  --accent: #3B82F6;  /* Azul elétrico atual */
}
```

Troque por outra cor:
- Roxo: `#8B5CF6`
- Verde: `#10B981`
- Ciano: `#06B6D4`

### Adicionar/Remover Seções

Cada seção está claramente marcada:
```html
<!-- Experience Section -->
<section id="experience">
  ...
</section>
```

Você pode remover seções inteiras ou adicionar novas seguindo o mesmo padrão.

### Modificar Animações

Para desativar/modificar animações, procure por:
```css
@keyframes float { ... }
@keyframes scroll { ... }
```

## 🌐 Publicar Online

### Opção 1: GitHub Pages (Grátis)

1. Crie um repositório no GitHub
2. Faça upload do `portfolio.html` renomeado como `index.html`
3. Vá em Settings → Pages
4. Selecione a branch `main` e salve
5. Seu site estará em: `https://seuusuario.github.io/nome-repo/`

### Opção 2: Netlify (Grátis)

1. Vá em [netlify.com](https://netlify.com)
2. Arraste a pasta do projeto para o upload
3. Pronto! Site publicado

### Opção 3: Vercel (Grátis)

1. Instale Vercel CLI: `npm i -g vercel`
2. Na pasta do projeto: `vercel`
3. Siga as instruções
4. Site publicado!

## 📱 Formulário de Contato

**IMPORTANTE**: O formulário atualmente apenas mostra um alerta.

Para fazer funcionar de verdade, você tem 3 opções:

### Opção 1: Formspree (Mais Fácil)

1. Vá em [formspree.io](https://formspree.io)
2. Crie uma conta grátis
3. Pegue seu endpoint
4. No HTML, localize `<form class="contact-form" onsubmit="handleFormSubmit(event)">`
5. Substitua por:
```html
<form class="contact-form" action="https://formspree.io/f/SEU_ID" method="POST">
  <!-- Mantenha os campos -->
  <input type="text" name="nome" class="form-input" placeholder="Seu nome" required>
  <input type="email" name="_replyto" class="form-input" placeholder="seu@email.com" required>
  <textarea name="mensagem" class="form-textarea" placeholder="Sua mensagem..." required></textarea>
  <button type="submit" class="btn btn-primary form-submit">Enviar Mensagem</button>
</form>
```

### Opção 2: EmailJS

1. Vá em [emailjs.com](https://emailjs.com)
2. Configure seu serviço
3. Use a biblioteca EmailJS no seu HTML

### Opção 3: Backend Próprio

Crie uma API backend que receba os dados do formulário e envie o email.

## 🔧 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada com custom properties, grid, flexbox
- **JavaScript Vanilla** - Interatividade sem dependências
- **Google Fonts** - Tipografia (Inter + JetBrains Mono)

## ✅ Checklist de Personalização

- [ ] Substituir nome, email, links sociais
- [ ] Atualizar biografia e localização
- [ ] Editar métricas (projetos, anos de experiência)
- [ ] Adicionar/remover tecnologias da stack
- [ ] Substituir experiências profissionais de exemplo
- [ ] Editar projetos (mínimo 3, máximo quantos quiser)
- [ ] Atualizar educação
- [ ] Personalizar conquistas
- [ ] Adicionar certificações reais
- [ ] Colocar sua foto em `public/avatar.jpg`
- [ ] Adicionar currículo PDF em `public/resume.pdf`
- [ ] Configurar formulário de contato (Formspree/EmailJS)
- [ ] Testar responsividade (mobile, tablet, desktop)
- [ ] Testar impressão do currículo
- [ ] Publicar online (GitHub Pages/Netlify/Vercel)

## 📝 Notas Importantes

1. **Projetos de Exemplo**: Os 3 projetos incluídos são **EXEMPLOS FICTÍCIOS** para demonstração da interface. Substitua-os pelos seus projetos reais.

2. **Dados Pessoais**: Todos os dados marcados com `[EXEMPLO]` ou placeholders como `[Nome da Empresa]` devem ser substituídos.

3. **Links**: Certifique-se de que todos os links (GitHub, LinkedIn, projetos) estejam funcionando.

4. **Performance**: O portfólio é otimizado e não usa bibliotecas pesadas, garantindo carregamento rápido.

5. **Acessibilidade**: O site segue boas práticas de acessibilidade, mas teste com leitores de tela se possível.

## 🐛 Solução de Problemas

### Fontes não carregam
- Verifique sua conexão com a internet
- As fontes vêm do Google Fonts (CDN)

### Imagens não aparecem
- Verifique se criou a pasta `public/`
- Confirme os nomes dos arquivos: `avatar.jpg` e `resume.pdf`
- Caminhos devem começar com `/` (ex: `/avatar.jpg`)

### Animações não funcionam
- Verifique se o navegador suporta CSS animations
- Confira se `prefers-reduced-motion` não está ativado no sistema

### Formulário não envia
- O formulário precisa de backend (veja seção "Formulário de Contato")
- Use Formspree, EmailJS ou crie seu próprio backend

## 📞 Suporte

Se tiver dúvidas ou problemas:
1. Leia este README completamente
2. Verifique o console do navegador (F12) para erros
3. Teste em diferentes navegadores

## 📄 Licença

Este portfólio foi criado para você. Use, modifique e distribua como quiser.

---

**Desenvolvido com ⚡ por Claude Code**

Boa sorte com seu portfólio! 🚀
