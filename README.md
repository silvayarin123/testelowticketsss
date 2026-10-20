# Fábrica do Low Ticket

Landing page em HTML, CSS e JavaScript, com 3 seções, ilustrações 3D e ícones animados. Responsiva para celular e computador.

## Estrutura

```text
index.html         Página principal
styles.css         Estilos e animações CSS
script.js          Menu mobile, botão de checkout e interações
config.js          Configuração do link de pagamento
vercel.json        Configuração de publicação na Vercel
favicon.svg        Ícone do navegador
assets/            Imagens WebP da landing page
.gitignore         Arquivos que não devem ser publicados no Git
.nojekyll          Compatibilidade com GitHub Pages (opcional)
```

## Antes de publicar

Abra `config.js` e substitua a string vazia no campo `checkoutUrl` pelo **seu próprio link** HTTPS de pagamento.

```js
window.SITE_CONFIG = {
  checkoutUrl: 'https://exemplo.com/seu-checkout'
};
```

Enquanto o link estiver vazio, o botão final mostra um aviso de configuração. Não anuncie a página antes de colocar seu checkout real e testar o fluxo de compra.

## Subir no GitHub (pelo navegador)

1. Acesse <https://github.com/new> e crie um repositório, por exemplo `fabrica-do-low-ticket`.
2. Se usar o arquivo ZIP enviado, **extraia-o** antes de carregar. No repositório, clique em **Add file → Upload files**.
3. Arraste o conteúdo da pasta do projeto, incluindo `index.html`, os outros arquivos e a pasta `assets`. Todos devem ficar na **raiz do repositório**, e não dentro de uma pasta extra.
4. Clique em **Commit changes**.

Você pode usar o GitHub Desktop ou o Git CLI, caso prefira. Não é obrigatório.

## Publicar na Vercel

1. Acesse <https://vercel.com/new> e entre na sua conta.
2. Escolha **Import Git Repository** e autorize o acesso ao GitHub, se solicitado.
3. Selecione o repositório `fabrica-do-low-ticket`.
4. Em **Framework Preset**, use `Other` (ou detecção de site estático). Use a raiz do projeto como **Root Directory**.
5. Deixe **Build Command** e **Output Directory** sem configuração manual, pois o site é estático e tem `index.html` na raiz.
6. Clique em **Deploy**. Quando concluir, a Vercel mostrará a URL pública.

As próximas alterações feitas no repositório conectado poderão gerar novas publicações automaticamente.

## Observações

- Não há necessidade de `npm install`, React ou build.
- Para alterar títulos, textos, cores ou ícones, edite `index.html` e `styles.css`.
- As animações são CSS. As imagens são locais em `assets/` e são publicadas junto com a página.
- Esta landing page não inclui infraestrutura de pagamento. O checkout depende do link que você configurar.
