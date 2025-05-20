

# HSSite-2024
### Website da HackerSchool

Este site foi criado com a framework [Hugo](https://github.com/gohugoio/hugo). Esta framework permite, por exemplo, reutilizar partes do código HTML entre páginas.

![image](https://github.com/user-attachments/assets/9a0e2ec6-3aa4-441a-94ba-3104b410a937)


---

## 🎯 Objetivos do Projeto 2024

| Objetivo                  | Status   |
|---------------------------|----------|
| Novo site para 2024       | ✅ Concluído |
| Templating da página inicial | ✅ Concluído |
| Páginas de projetos        | ✅ Concluído |
| Páginas de workshops       | ✅ Concluído |
| Popup de membros           | ⏳ Em andamento |

---


## 🚀 Como Gerar o Site Final para Upload

1. Execute o comando:
   ```bash
   hugo --minify
   ```
2. O site ficará pronto na pasta `./public`.

---

## 🔄 Desenvolvimento

> **🔧 Nota:** O desenvolvimento deve ser realizado na branch `develop`. A branch `main` é utilizada apenas para o código de produção.

Para iniciar um servidor local e modificar o site em tempo real, execute:
```bash
git checkout develop
hugo server -D
```



---

## ✏️ Como Modificar o Conteúdo

### 📝 Modificar o FAQ
- Editar o ficheiro: `data/faq.yml`

### 👥 Modificar a Lista de Membros
- Editar o ficheiro: `data/membros.yml`

### 📁 Modificar a Lista de Projetos
- Editar ficheiros na pasta: `content/projetos`

---

## 🛠️ Modificar Páginas

Todas as páginas derivam de `themes/dot/layouts/_default/baseof.html`, onde o conteúdo de cada página aparecerá na linha:

```html
{{- block "main" . }}{{- end }}
```

- O conteúdo da página principal está em `layouts/index.html`.

### ➕ Para Criar uma Nova Página

1. Criar um ficheiro `content/nomeDaPagina.md` com o seguinte conteúdo:
   ```markdown
   ---
   title: "TITULO"
   date: 2019-05-02T11:07:53+01:00
   type: "page"
   layout: "nomeDaPagina"
   ---
   ```
2. Criar um ficheiro HTML correspondente em `layouts/page/nomeDaPagina.html` (siga o exemplo das outras páginas presentes).

---

## 🎠 Modificar o Carrossel

1. Coloque as imagens novas na pasta `static/images/carousel`.
2. Adicione o nome da imagem à lista presente no `config.toml`.

---

## 🛠️ Estrutura Geral do Projeto

| Diretório/Ficheiro        | Função                                     |
|---------------------------|--------------------------------------------|
| `data/faq.yml`            | Contém o conteúdo do FAQ                   |
| `data/membros.yml`        | Lista dos membros                          |
| `content/projetos`        | Ficheiros de projetos                      |
| `themes/dot/layouts`      | Layout principal e templates de páginas    |
| `layouts/index.html`      | Página principal                           |
| `static/images/carousel`  | Imagens do carrossel                       |
| `config.toml`             | Configurações do site                      |

---

### 📚 Referências e Links Úteis

- [Documentação Hugo](https://gohugo.io/documentation/)
- [Hugo no GitHub](https://github.com/gohugoio/hugo)
