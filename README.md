# 🧡 Pedido de Namoro - Para Larissa

Este é um projeto especial criado para um momento único e inesquecível: um pedido de namoro para Larissa, minha princesa, após uma jornada emocional intensa e transformadora.

## 📖 Sobre o Projeto

Uma apresentação interativa e emocionante que conta a história de amor desde o primeiro encontro na cafeteria, passando pelas 17 cartas que formavam "QUER NAMORAR COMIGO?", até o momento do pedido oficial de namoro. A apresentação foi projetada para ser exibida em um telão durante um piquenique romântico, culminando no pedido ao vivo com flores laranjas e aliança.

## ✨ Características

- **26 slides narrativos** contando a história completa do casal
- **Momentos reais:** Primeiro beijo surpresa, acidente de carro, Athena, xadrez, medicina, arte
- **As 17 cartas:** Explicação do conceito genial (cada letra formava "QUER NAMORAR COMIGO?")
- **Animações cinematográficas** suaves e elegantes
- **Design responsivo** otimizado para telões (1920x1080)
- **Cor laranja** como tema principal (cor favorita dela)
- **Navegação intuitiva** por clique, botões ou teclado
- **Barra de progresso** visual
- **Tipografia elegante** com Google Fonts (Playfair Display + Montserrat)
- **Imagens integradas** (Athena, hobbies, momentos especiais)
- **Funciona offline** após primeiro carregamento
- **Duração estimada:** 3-5 minutos

## 🚀 Como Usar

### Opção 1: Abrir Diretamente (Mais Simples)

1. Baixe todos os arquivos do projeto
2. Certifique-se de que os arquivos estão na mesma pasta:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Clique duas vezes no arquivo `index.html` para abrir no navegador
4. Pressione **F11** para modo tela cheia (recomendado)
5. Use as setas do teclado, os botões na tela, ou clique no slide para navançar

### Opção 2: Servidor Local (Mais Profissional)

Se você tiver Python instalado:

```bash
# Python 3
python -m http.server 8000

# Ou Python 2
python -m SimpleHTTPServer 8000
```

Depois acesse: `http://localhost:8000`

### Opção 3: Visual Studio Code (Para Desenvolvedores)

1. Instale a extensão "Live Server"
2. Clique com botão direito no `index.html`
3. Selecione "Open with Live Server"

## 🎮 Controles de Navegação

- **Clique no slide:** Avança para o próximo
- **Seta → / Espaço:** Próximo slide
- **Seta ←:** Slide anterior
- **Botões na tela:** Navegação manual
- **F11:** Modo tela cheia (recomendado)

## 🎨 Personalização

### Editar os Textos

Todos os textos estão no arquivo `index.html`, organizados por seções (`<section class="slide">`). Cada seção tem um ID e comentários explicativos.

**Exemplo:**
```html
<!-- SEÇÃO 2: O COMEÇO -->
<section class="slide" id="slide-2">
    <div class="content">
        <h2>Há Um Mês e Meio...</h2>
        <p class="narrative">
            Começou algo que eu nunca esperei...
        </p>
    </div>
</section>
```

### Adicionar Música de Fundo (Opcional)

1. Adicione um arquivo de áudio chamado `music.mp3` na mesma pasta
2. No `index.html`, descomente estas linhas (remova `<!--` e `-->`):

```html
<audio id="backgroundMusic" loop>
    <source src="music.mp3" type="audio/mpeg">
</audio>
```

3. No `script.js`, descomente as linhas relacionadas à música (procure por "OPCIONAL: Música")

### Mudar Cores

No arquivo `styles.css`, no topo, você encontra as variáveis de cor:

```css
:root {
    --primary-orange: #FF8C42;  /* Cor principal (laranja) */
    --orange-light: #FFB067;     /* Laranja claro */
    --orange-dark: #E67326;      /* Laranja escuro */
    /* ... outras cores ... */
}
```

### Ajustar Velocidade das Animações

No `styles.css`:

```css
:root {
    --transition-smooth: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
```

Reduza o valor (ex: `0.5s`) para animações mais rápidas, ou aumente (ex: `1.2s`) para mais lentas.

## 📱 Responsividade

O projeto é totalmente responsivo e funciona em:
- **Telões/TVs** (1920x1080 ou maior) - *Recomendado*
- **Desktops** (1366x768 ou maior)
- **Tablets** (adaptado)
- **Celulares** (adaptado)

## 🎯 Estrutura Narrativa (24 Slides)

1. **Abertura** - "Para Você, Larissa" - Minha princesa
2. **Capítulo 1** - Primeiro encontro na cafeteria (flores, carta, beijo surpresa!)
3. **O Acidente** - Bateu o carro voltando pra casa (ela me deixou aéreo)
4. **Capítulo 2** - A intensidade: todo fim de semana juntos
5. **Conhecendo Ela** - Xadrez invencível, medicina, arte, sushi, cozinhar
6. **A Athena** - A gatinha que grudou desde o primeiro dia
7. **Capítulo 3** - O segredo que eu estava preparando
8. **As 17 Cartas** - Artes lindas com ela e a Athena
9. **O Conceito Genial** - Cada letra formava "QUER NAMORAR COMIGO?"
10. **A Revelação** - Mostrei uma por uma, ela ficou emocionada mas não estava preparada
11. **Capítulo 4** - O medo dela
12. **Os Momentos** - Continuaram naturalmente
13. **"Eu Te Amo"** - ELA falou primeiro (e você nunca vai esquecer 😏)
14. **Capítulo 5** - Até que tudo mudou
15-19. **A Mensagem Dela** - Citações emocionantes (5 slides)
20. **A Transformação** - Ela perdeu o medo e ganhou certeza
21. **Capítulo 6** - A viagem se aproxima (1 mês longe)
22. **Mas Antes...** - Eu não posso ir sem saber
23. **O Momento** - "Nós já somos"
24. **O Que Eu Amo** - Esforçada, inteligente, linda, espontânea, carinhosa
25. **Pré-Final** - "Eu preciso te fazer uma pergunta"
26. **Preparação** - Momento para o pedido AO VIVO 🧡

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos, animações e responsividade
- **JavaScript (Vanilla)** - Navegação e interatividade
- **Google Fonts** - Tipografia elegante (Playfair Display + Montserrat)

## 🐛 Resolução de Problemas

### As fontes não carregam
- Certifique-se de estar conectado à internet no primeiro carregamento
- Após o primeiro carregamento, as fontes ficam em cache

### As animações estão lentas
- Feche outras abas/programas pesados
- Teste em outro navegador (recomendado: Chrome ou Edge)

### O som não toca automaticamente
- Navegadores modernos bloqueiam autoplay de áudio
- Clique uma vez na tela para permitir a reprodução

### A apresentação não fica em tela cheia
- Pressione **F11** no Windows/Linux
- Pressione **Cmd+Ctrl+F** no Mac

## 💡 Dicas para o Grande Momento

1. **Teste antes:** Rode a apresentação completa pelo menos uma vez
2. **Modo tela cheia:** Use F11 para experiência imersiva
3. **Volume:** Ajuste o volume da música antes (se usar)
4. **Iluminação:** Deixe a sala em meia-luz para melhor visualização
5. **Prepare-se:** Tenha a aliança em mãos para o final
6. **Respiração:** Respire fundo e aproveite o momento! 🧡

## 📝 Notas Importantes

- **O site NÃO faz a pergunta:** O último slide apenas prepara o momento para VOCÊ fazer o pedido ao vivo
- **Edite à vontade:** Todos os textos são personalizáveis
- **Teste no telão:** Teste uma vez no telão real antes do dia
- **Backup:** Tenha o projeto salvo offline caso a internet falhe

## ❤️ Mensagem Final

Este é o primeiro pedido de namoro de verdade que ela vai receber na vida. Você preparou algo lindo, emocionante e único. 

Ela vai se lembrar deste momento para sempre.

Boa sorte, e que vocês sejam muito felizes juntos! 🧡

---

**Criado com amor para um momento inesquecível**
*25 de novembro de 2025*
