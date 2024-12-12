---
title: "WebDev"
date: 2024-10-04
draft: false
description: "Aprende a criar a tua própria página pessoal, de raiz!"
image: "./webdev/gigachad_pc.jpg"
---

# Workshop WebDev

Criado por [José Lopes](https://joselopes.dev)

Bem-vindo ao Workshop de WebDev! Este workshop tem como objetivo fornecer as bases necessárias para que qualquer participante possa desenvolver e lançar o seu site pessoal, completamente do zero!

## Informações

### Próxima Edição do Workshop

Sexta-feira, dia 13-12-2024 das 17:30h às 20h na sala v0.02.

Se não és membro da HackerSchool, inscreve-te **[aqui](https://docs.google.com/forms/d/e/1FAIpQLSer4uuX41y1gB4F9VDqCc7_KMUA2IQ5dZOWrSutj36B-HuoMw/viewform).**

### Objetivo

Ensinar como fazer uma página pessoal leve, portátil e (esperançosamente) bonita, mais ou menos como [esta](https://hackerschool.dev/workshops/webdev/example) (ok, seria bonita se fosse eu abençoado com ✨*graphic design skills*✨, tu farás melhor). Durante o WS muitas liberdades serão tomadas e o produto final será algo construído passo a passo, em conjunto. Foca-se maioritariamente em desenvolvimento Frontend. No final, cada participante será capaz de desenvolver a sua página web e lançá-la na plataforma de hosting do Técnico!

### Temas Abordados

1. HTML
2. CSS
3. JavaScript (muito levemente 🏌️)
4. HTTP requests
5. Deploy no Sigma, by Técnico

### Recursos

1. [Repositório com Site Exemplo](https://github.com/HackerSchool/WS-WebDev-2024)
2. [Site Exemplo](https://hackerschool.dev/workshops/webdev/example), um exemplo de produto final.

#### Segue-se o guia do Workshop!

## 1. HTML

Da Wikipedia: "HTML (abreviação para a expressão inglesa HyperText Markup Language, que significa: "Linguagem de Marcação de Hipertexto") é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores."

Principais Características:

1. Define a estrutura básica de uma página web
2. Utiliza "tags" para marcar diferentes tipos de conteúdo
3. Permite criar links, inserir imagens, parágrafos, títulos, e muito mais!

### Começamos pelo "boilerplate"

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- isto é um comentário -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>HackerSchool 2024!</title>
        <link href="css/style.css" rel="stylesheet">
        <link rel="icon" href="favicon.ico" type="image/x-icon">
    </head>
    <body>
        <!-- Conteúdo da página vai aqui -->
    </body>
</html>
```

Aqui é possível definir a língua, o título da página, importar outros recursos e definir um icon.

### Tags HTML Fundamentais

#### Tags de Cabeçalho
```html
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<h3>Subtítulo Menor</h3>
```

#### Tags de Texto
```html
<p>Parágrafo normal</p>
<strong>Texto em negrito</strong>
<em>Texto em itálico</em>
```

#### Tags de Links e Imagens
```html
<a href="https://hackerschool.dev">Link para o site</a>
<img src="imagem.jpg" alt="Descrição da imagem">
```

#### Tags Semânticas
```html
<header>Cabeçalho da página</header>
<nav>Menu de navegação</nav>
<main>Conteúdo principal</main>
<footer>Rodapé</footer>
```

## 2. CSS

### O que é CSS?
Cascading Style Sheets (CSS) é a linguagem utilizada para ✨tornar bonitos✨ elementos escritos em HTML.

### Formas de Aplicar CSS

1. CSS Inline
```html
<p style="color: blue; font-size: 16px;">Texto azul</p>
```

2. Tag `<style>` no HTML
```html
<style>
    p {
        color: blue;
        font-size: 16px;
    }
</style>
```

3. Arquivo CSS Externo (Recomendado)
```css
/* style.css */
p {
    color: blue;
    font-size: 16px;
}
```

### Seletores Principais
```css
/* Por tag */
p { }

/* Por classe */
.texto-azul { }

/* Por ID */
#meu-paragrafo { }

/* Seletor de atributo */
input[type="text"] { }
```

## 3. JavaScript

### Introdução Básica
JavaScript permite adicionar interatividade à página web.

```javascript
// Exemplo simples
function mudaCor() {
    document.body.style.backgroundColor = 'blue';
}

// Adicionar evento a um botão
document.getElementById('meuBotao').addEventListener('click', mudaCor);
```

## 4. A Web e HTTP

### O que é HTTP?
Protocolo de transferência de hipertexto, base da comunicação de dados na web. Sei como funciona? Não. Mas tu também não precisas. Só precisas de saber os diferentes tipos de requests:

1. GET: Obter dados
1. POST: Enviar dados
1. PUT: Atualizar dados
1. DELETE: Remover dados

E que existem códigos de status úteis:

1. 200 OK: The standard "everything is fine" response
2. 201 Created: Successfully created a new resource
3. 204 No Content: Successful request with no content to return
4. 301 Moved Permanently: Page has been permanently relocated
5. 400 Bad Request: Server couldn't understand the request
6. 401 Unauthorized: Authentication is required
7. 403 Forbidden: Server understands the request but refuses to authorize it
8. 404 Not Found: The requested resource doesn't exist
9. 500 Internal Server Error: Generic server error message
10. 503 Service Unavailable: Server is temporarily overloaded or down

## 5. Deploy no Sigma

### Acesso ao Servidor
O servidor Sigma pode ser acedido via SSH (Secure Shell) usando o endereço:

```
istid@sigma.tecnico.ulisboa.pt
```
- Utiliza a mesma palavra-passe que o sistema Fénix
- Permite acesso remoto seguro ao seu diretório web

### Métodos de Deploy

Para dar deploy do site é só preciso copiar os ficheiros para o diretório `~/web` no servidor.

#### Opção 1: Deploy via rsync
```bash
# Comando básico de deploy, usando rsync para copiar
rsync -avz ./meu-site/ istid@sigma.tecnico.ulisboa.pt:web

# Parâmetros:
# -a: modo arquivo (preserva permissões)
# -v: verbose (mostra detalhes da transferência)
# -z: comprime dados durante a transferência
```

#### Opção 2: FileZilla (Interface Gráfica)
1. Instala o [FileZilla](https://filezilla-project.org/)
2. Configurações de conexão:
   - Protocolo: SFTP
   - Servidor: sigma.tecnico.ulisboa.pt
   - Porta: 22
   - Tipo de autenticação: Palavra-passe normal
   - Utilizador: istId
   - Palavra-passe: Credenciais do Fénix

3. Copia o teu site para o diretório `~/web` 
4. Profit

### Verificação
- Site acessível em: https://web.tecnico.ulisboa.pt/istid/

## Passos Seguintes

Fantástico! Deténs agora uma poderosa ferramenta de expressão e exploração criativa.

Se quiseres avançar para sites mais complexos talvez penses em explorar frameworks. Sugerimos que dês uma olhada no [HUGO](https://gohugo.io/), bastante simples mas eficaz, é o que usamos no site da HackerSchool ahahaha.

O mundo espera pelas tuas criações,

Hackers Out
