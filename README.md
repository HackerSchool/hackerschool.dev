# Site-2019
Website da HackerSchool

Este site foi criado com a framework Hugo(https://github.com/gohugoio/hugo). Este permite por exemplo, reutilizar partes do código HTML entre páginas.

### Para gerar o site final para fazer upload
Correr o comando ```hugo``` e o site ficará pronto na pasta ./public

Para ir modificando o site pode criar-se um servidor local com o comando
```hugo server -D```

### Modificar o FAQ
Editar o ficheiro data/faq.yml

### Modificar a lista de membros
Editar o ficheiro data/membros.yml

### Modificar a lista de projetos
Editar ficheiros na pasta content/projetos

## Modificar páginas
Todas as páginas derivam de themes/dot/layouts/_default/baseof.html, onde o conteudo de cada página aparecerá na linha
> {{- block "main" . }}{{- end }}

O conteudo da pagina principal está em layouts/index.html

### Para criar uma página
Criar um ficheiro content/nomeDaPagina.md
```
---
title: "TITULO"
date: 2019-05-02T11:07:53+01:00
type: "page"
layout: "nomeDaPagina"
---
```
E criar um ficheiro HTML com o nome layouts/page/nomeDaPagina.html  (seguir exemplo de outras páginas lá)
