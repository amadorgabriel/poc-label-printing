# Como as libs renderizam pdfs? (PDF/X-1A) | [pesquisa]

# Introdução

[PDF/X](https://en.wikipedia.org/wiki/PDF/X)

## **O que é PDF/X1-a?**

- Renderização profissional de alta resolução e
- PDF siguinifica (Portable document format)
- PDF / X são conjuntos de normas internacionais desenvolvidas para definir parâmetros para utilizção de arquivos em PDF.
- Todas as fontes precisam ser incorporadas e todas as imagens precisam ser CMYK ou cores exatas.
- Melhor opção para arquivos que serão impressos
- PDF / X- 1A é versão 1.3

</br>

> O PDF/X-1a **requer a incorporação de todas as fontes**, a especificação das máscaras e sangrias apropriadas e a exibição das **cores no modo CMYK**, cores especiais ou ambos. Arquivos compatíveis devem conter informações que descrevam a condição de impressão para a qual foram preparados.
> 

</br>

<aside>
⚠️ **Atenção**
1. Os tipos de mídia no `x-`namespace são considerados experimentais. 
2. Valores privados *[subtipo (Mime)]* (começando com "X-") podem ser definidos bilateralmente entre dois agentes cooperantes sem registro externo ou padronização. Tais valores não podem ser registrados ou padronizados.

</aside>

</br>

<aside>
⚠️ **IMPORTANTE:** a ferramenta entende arquivos de frente e verso de forma separada, então não envie arquivos em PDF/X-1a com mais de uma página. Separe suas artes em arquivos diferentes, caso ela possua frente e verso e envie separadamente, um arquivo para a frente e um arquivo para o verso.

</aside>

</br>

## Como as libs renderizam pdfs

- Renderizam pdfs em detrimento do HTML
- Renderizam pdfs em detrimento de screenshots.
- Renderizam pdfs em detrimento de componentes React.
- **Renderizam pdfs a partir do js**

# Estudo de Ferramentas

Complexidade, tamanho dos arquivos gerados, resolução e recursos.

## PDFKit

Uma das primeiras libs para Js

- Sai em camada CMYK
- Preserva gráficos vetoriais
- Tem flexibilidade
- Sai na versão 1.3
- Não permite configurar subtipo x1a para impressão
    - Podemos converter em seguida com **[Ghostscript](https://www.ghostscript.com/)** ou abstrações como **[press-ready](https://github.com/vibranthq/press-ready)**

| Avaliação | Obs |
| --- | --- |
| Works in Node and browser | △(a bit complicated) |
| Typings | ○(DefinitelyTyped) |
| Custom fonts | ○(Be careful when using this in a browser) |
| Easy to use | △(a bit complicated) |

[https://github.com/foliojs/pdfkit/issues/1024](https://github.com/foliojs/pdfkit/issues/1024)

## pdfmake

Wapper do PFKit

| Avaliação | Obs |
| --- | --- |
| Works in Node and browser | △(Be careful using Webpack) |
| Typings | ○(DefinitelyTyped) |
| Custom fonts | △(Need to build your own) |
| Easy to use | ○ |

## jsPDF

- Mais popular
- Gera documentos PDF do Zero. Bastante usado com o [Html2Canvas](https://html2canvas.hertzen.com/) (Lib que tira screenshot da web page) e salva em pdf
- Precisa codar elementos do zero
- Tira uma captura de tela do conteúdo do site para converter
- Embora não seja difícil, incorporar fontes requer um passo adicional: converter as fontes em arquivos TTF.

| Avaliação | Obs |
| --- | --- |
| Works in Node and browser | ○ |
| Typings | ○ |
| Custom fonts | ○(ttf files need to be converted) |
| Easy to use | △(a bit complicated) |

## html2pdf

Wrapper das libs jsPDF e Html2Canvas. Converte a webpage em pdf 

- Tira uma captura de tela do conteúdo do site para converter

## puppeteer

Não converte HTML em PDF. Automatiza e controla o browser pelo lado do servidor. Possibilita criar e exportar PDF

- Necessita de recursos do servidor
- É necessário iniciar o Puppeteer toda vez que você precisa criar um PDF, o que cria um pouco de sobrecarga. É lento.
- Fácil de se usar
- Gera arquivos de alta resolução com pequenos tamanhos
- É suportado somente para o Chrome

| Avaliação | Obs |
| --- | --- |
| Works in Node and browser | x |
| Typings | - |
| Custom fonts | ○(web fonts) |
| Easy to use | ? |

## pdf-lib

- Converte HTML em PDF. Permite editar documentos pdf com javascript.
- Mais complexo
- Implementado com Typescript
- Wapper do PDFKit

| Avaliação | Obs |
| --- | --- |
| Works in Node and browser | ○ |
| Typings | ○ |
| Custom fonts | ○ |
| Easy to use | △(a bit complicated, the layout needs to be calculated) |

## react-pdf

- Lib que constroi PDF do zero
- Se baseia no pdfkit

| Avaliação | Obs |
| --- | --- |
| Works in Node and browser | ○ |
| Typings | - |
| Custom fonts | ○ |
| Easy to use | - |

# Alternativas

## Ghostscript

Descreve comoo desenhar e exibir documentos 

- Imprimir documentos com alta qualidade, tamanho
- PDF é uma exrenção do postscript

Podemos usá-lo para processar ou modificar PDFs

![Untitled](Como%20as%20libs%20renderizam%20pdfs%20(PDF%20X-1A)%20%5Bpesquisa%5D%2093582d4b12d44b1e85c1fd2fc82cd059/Untitled.png)

# Indíce Temático

| Conceito | Siginificado | Mais |
| --- | --- | --- |
| Tipo MIME (Multipurpose Internet Mail Extensions) | Formato de um documento ou conjunto de byrtes Content-type (type/subtype) | Os browser usam tipo MIME e não extensão de arquivo para processar URLs. https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types. |
| Blob | Representa um objeto do tipo arquivo, com dados brutos imutáveis.  | Blobs representam dados que não estão necessariamente em um formato JavaScript nativo |
|  |  |  |