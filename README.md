![image](https://www.developpez.net/forums/attachments/p289604d1/a/a/a)

> **Feito por:** [Alexandre Gromboni](https://github.com/alexandregromboni)

## Índice

* [Passo a Passo](#passo-a-passo)
* [Primeiros passos](#primeiros-passos)
* [Estrutura](#estrutura)

## Passo a Passo

* *About* - Para que você possa descrever o objetivo do seu evento.

*OBS 1: Não há integração com nenhum sistema de inscrição e/ou pagamento. Por conta disso, indicamos o [Eventick](http://eventick.com.br/).*

*OBS 2: Por enquanto ainda não conseguimos desenvolver uma solução altamente automatizada e customizável para formulários de contato. Por conta disso, indicamos o [Wufoo](http://wufoo.com/).*

## Primeiros passos

Pré-requisitos: Instale o [Git](http://git-scm.com/downloads) e o [NodeJS](http://nodejs.org/download/), caso você não os tenha ainda.

1. Instale [Git](http://git-scm.com/downloads) e [NodeJS](http://nodejs.org/download/), caso você não os tenha ainda.

2. Clone o repositório:

    ```sh
    $ git clone git://github.com/braziljs/conf-boilerplate.git
    ```
3. Vá para pasta do projeto:

    ```sh
    $ cd conf-boilerplate
    ```

## Estrutura

A estrutura básica do projeto se dá na seguinte forma:

```
.
|-- out/
|-- src/
|   |-- documents
|   |-- layouts
|   |-- partials
|-- docpad.js
|-- package.json
```

### out/

É onde os arquivos gerados são armazenados, uma vez que o DocPad tenha sido rodado. Porém, esse diretório se torna desnecessário no versionamento, por isso está ignorado ([.gitignore](https://github.com/braziljs/conf-boilerplate/blob/master/.gitignore)).

### [src/documents](https://github.com/braziljs/conf-boilerplate/blob/master/src/documents)

Contém o arquivo responsável por importar todas as seções da aplicação. Além disso contém o tema com todos seus arquivos como imagens, arquivos CSS e JS.

### [src/layouts](https://github.com/braziljs/conf-boilerplate/tree/master/src/layouts)

Contém o template padrão da aplicação.

### Informações básicas sobre a conferência

Quer alterar o nome, data, endereço, cidade ou preço do evento? É só mudar.

```
conf:
    name: "Conference name"
    description: "Conference description"
    date: "November 15"
    price: "$100"
    address: "Boulevard Kukulcan, 30, México"
    venue: "Coco Bongo"
    city: "Cancún"
```

### Informações básicas sobre o site

Quer mudar a imagem de capa, código do Google Analytics ou o favicon? Vá em frente!

```
site:
    theme: "yellow-swan"
    url: "http://braziljs.github.io/conf-boilerplate/"
    googleanalytics: "UA-33656081-1"
```

### Seções ativas

Ainda não definiu a programação completa do evento? Não tem problema, basta comentar a linha `schedule` (usando `#`).

Ainda não sabe quem irá palestrar? Tudo bem, basta comentar a linha `speakers` (usando `#`).

E por aí vai.

```
sections: [
  "about"
  "location"
  #"speakers"
  #"schedule"
  "sponsors"
  "partners"
  "contact"
]
```

Você ainda pode trocar a order em que eles aparecem na página e na navegação ao trocar a order das linhas também!

### Lista de Palestrantes

Para incluir/alterar/excluir um palestrante também é igualmente simples, basta recorrer ao `schedule`.

```
schedule: [
    name: "Chuck Norris"
    photo: "http://f.cl.ly/items/2A3p1N0C3c0n3N3R1w2B/speaker.jpg"
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
    company: "Delta Command"
    twitter: "littlechuck"
    presentation:
        title: "How to kill a elephant with one finger"
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
        time: "13h00"
]
```

Quer listar mais algum atributo do palestrante que não está ali? Tudo bem, é só adicionar no `docpad.js` e depois exibí-lo com `<%= speaker.seuNovoAtributo %>` no [speakers.html.eco](https://github.com/braziljs/conf-boilerplate/blob/master/src/partials/section/speakers.html.eco).

### Lista de outros itens da Agenda

Para alterar os horários de check-in, almoço e coffee-break, é só recorrer as variáveis de `schedule`.

```
schedule: [
    name: "Check-in / Breakfast"
    time: "9h00"
]
```

Mas se você quiser adicionar mais um coffee-break ou qualquer outro tipo de item na agenda do evento, é só acrescentar mais um item nessa lista.

### Lista de Patrocinadores/Apoio

Para adicionar qualquer patrocinador ou apoio no evento, é só recorrer as variáveis `sponsors` e `partners`.

```
partners: [
    name: "BrazilJS"
    logo: "http://f.cl.ly/items/2N3i2W0X2f3c2g2Z2N0f/Untitled-1.png"
    url: "http://braziljs.org"
]
```

### Domínio personalizado

Caso você não queira utilizar o domínio do GitHub, é possível usar seu próprio com alguns passos.

1. Crie um arquivo `CNAME` na pasta `src/files` do seu projeto e preencha com o nome do seu domínio: `seuevento.com`.
2. Altere o DNS do seu domínio seguindo as [instruções do GitHub](https://help.github.com/articles/setting-up-a-custom-domain-with-pages).

## Showcase

URLs:

* [DevFest](http://www.devfest.com.br/2013/)

Criou um site usando o ConfBoilerplate? Nos avise =D

## Contribuindo

Se quiser enviar um pull request, por favor faça-o na branch `dev`.

* `master` contém a versão estável disso.
* `dev` contém as funcionalidades que estão em desenvolvimento.


**Criado por**:

* [Alexandre Gromboni](http://github.com/alexandregromboni)

teste 123 fadsfds asfdsf dasf asfsafs fdsf asf asf dsaf asf  sd
