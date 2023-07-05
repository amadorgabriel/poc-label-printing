# Como incorporar meu arquivo de fonte ao meu pdf | [pesquisa]

## **Dúvidas**

### **Iniciais**

- O que siginifica ter uma fonte incorporada?
    - Impede a substituição da fonte e assegura que o texto inserido será exibido ou impresso na fonte original $^1$.
    - A incorporação de fonte é útil ao usar fontes não padrão, para exibir offline ou quando bloqueamos a edição. Geralmente usado para enviar docs para impressão.
- Um pdf pode ter fonte incorporada?
    - Sim
- Como saber de a fonte está incorporada no arquivo PDF?
    - É possível verificar no Acrobat PDF ou Corel Draw
- Como posso atrelar a fonte ao Arquivo PDF?
    - O adobe acrobat reader permite incorporação de fonte.

### **Procedentes**

- Como saber se uma fonte pode ser incorporada?
    - Você só pode incorporar fontes TrueType e, em seguida, somente se o licenciamento $^2$ permitir a incorporação  $^3$.
- Quais são os tipos de fontes? (Resp. na pesquisa)
- O que são conjuntos e subconjuntos de fontes?
    - Subconjuntos são um grupo limitado de caracteres de uma fonte. Geralmente usado para melhorar o carregamento da fonte. O subconjunto podem ser caractéres escolhidos, caracteres de idioma específicos etc.
    - O conjunto é sua totalidade.

## **Pesquisas**

### **1. Permissão de fontes**

Algumas fontes permitem incorporação para propósitos de impressão e visualização, mas não para edição; outras fontes podem não permitir a incorporação. As seguintes permissões de incorporação de fontes são respeitadas por CorelDRAW:

| Tipos | Definição |
| --- | --- |
| Editável  | Permite que as fontes sejam incorporadas em documentos eletrônicos e usadas pelos destinatários dos documentos para editar o texto. |
| Instalável  | Semelhante ao Editável. Além disso, essa é uma permissão para que as fontes sejam permanentemente instaladas em um computador do destinatário e usadas para criar novos documentos. |
| Sem incorporação  | Não permite que as fontes sejam incorporadas em documentos eletrônicos |
| Visualizar e imprimir  | Permite que as fontes sejam incorporadas a um documento eletrônico estritamente para visualização e impressão. Essas fontes não podem ser instaladas nem usadas para editar o documento em outros computadores. |

### **2. Licenciamento de fontes**

</br>
<aside>
⚠️ **Observação:** 
As fontes instaladas na pasta Fontes em seu computador são licenciadas de acordo com os respectivos contratos de licença do usuário fina (win professional, home, education…)

</aside>

</br>

Fontes da adobe, por exemplo, não permitem que as mesmas sejam transferidas/instaladas em outros computadores, portanto, a empresa ou indivíduo precisa ter sua própria licença para poder criar novos documentos.

Os termos de serviço da Adobe permitem que os dados das fontes sejam incorporados em PDFs e outros documentos digitais. Na maioria das vezes, criar um arquivo PDF é a maneira mais confiável e adequada de garantir a fidelidade tipográfica em documentos destinados à impressão.

### **3. Incorporação de Fontes**

A incorporação aumenta muito pouco o tamanho do arquivo, a menos que o documento use fontes CID, um formato de fonte usado normalmente para idiomas asiáticos.

É possível incorporar a fonte inteira ou apenas um subconjunto dos caracteres usados no arquivo. O subconjunto garante que as fontes e as métricas da fonte sejam usadas no momento da impressão, criando um nome de fonte personalizado

| Tipo de Fontes | Descrição | Extensão |
| --- | --- | --- |
| TrueType (Apple/Microsoft) | São baseadas em outlines (contornos) então ter ser fator de escala definido para qualquer tamanho.É possível envia-las para qualquer dispositivo de saída.São recomendadas quando é preciso uma fonte leve, mas que imprima bem e tenha uma boa qualidade em monitores.A favor do True Type vem a sua capacidade de se apresentar melhor em equipamentos de baixa resolução, principalmente em tela (72/96 dpi). | .ttf |
| OpenType | Tem as mesmas características de seu antecessor e mais algumas vantagens; ele pode incorporar uma extensão maior do conjunto de caracteres, dá suporte a várias linguagens num só arquivo e possibilita tratamentos tipográficos complexos de algumas linguagens, como ligaduras entre caracteres. É recomendado quando é necessário abranger um certo idioma e uma tipografia mais detalhada | .otf |
| PostScript (Adobe) | Usadas para imprimir documentos complexos em impressoras digitais, atualmente são suportadas por quase todas as impressoras laser.São recomendadas para impressões de alta qualidade, como revistas e publicações. Type 1 (.pfb e .pfm) (Depreciado). No windows: O arquivo com extensão“.PFB” são os dados vetoriasi(outline) da fonte. O arquivo com extensão “.PFM” contém os dados das métricas. Limitações: Não são cross-plataform (precisa de conversão). Aceita poucos gliphys, bem menos que CID fonts Embora as fontes Type 1 não sejam suportadas em muitas plataformas modernas, navegadores da web e sistemas operacionais móveis, elas ainda são suportadas em alguns dos sistemas operacionais | “.afm”, “.pfb”, “.pfm” e “.inf”. |
| Learn More | https://docs.fileformat.com/font/ |  |

</br>

# Referências
- [http://product.corel.com/help/CorelDRAW/540227992/Main/BR/Documentation/wwhelp/wwhimpl/common/html/wwhelp.htm#href=CorelDRAW-Embedding-fonts.html&single=true](http://product.corel.com/help/CorelDRAW/540227992/Main/BR/Documentation/wwhelp/wwhimpl/common/html/wwhelp.htm#href=CorelDRAW-Embedding-fonts.html&single=true)
- [https://support.microsoft.com/pt-br/office/benefícios-da-incorporação-de-fontes-personalizadas-cb3982aa-ea76-4323-b008-86670f222dbc](https://support.microsoft.com/pt-br/office/benef%C3%ADcios-da-incorpora%C3%A7%C3%A3o-de-fontes-personalizadas-cb3982aa-ea76-4323-b008-86670f222dbc)
- [https://support.microsoft.com/pt-br/office/fontes-inseridas-em-uma-publicação-para-garantir-sua-disponibilidade-644449b9-22ab-4c80-9ffe-a7ddc183a650](https://support.microsoft.com/pt-br/office/fontes-inseridas-em-uma-publica%C3%A7%C3%A3o-para-garantir-sua-disponibilidade-644449b9-22ab-4c80-9ffe-a7ddc183a650)
- [https://helpx.adobe.com/br/fonts/using/font-licensing.html](https://helpx.adobe.com/br/fonts/using/font-licensing.html)
- [https://helpx.adobe.com/br/fonts/using/package-font-files.html](https://helpx.adobe.com/br/fonts/using/package-font-files.html)
- [https://support.microsoft.com/pt-br/office/benefícios-da-incorporação-de-fontes-personalizadas-cb3982aa-ea76-4323-b008-86670f222dbc](https://support.microsoft.com/pt-br/office/benef%C3%ADcios-da-incorpora%C3%A7%C3%A3o-de-fontes-personalizadas-cb3982aa-ea76-4323-b008-86670f222dbc)
- [https://helpx.adobe.com/br/acrobat/using/pdf-fonts.html?mv=product&mv2=acrobat#accessing_and_embedding_fonts_using_distiller](https://helpx.adobe.com/br/acrobat/using/pdf-fonts.html?mv=product&mv2=acrobat#accessing_and_embedding_fonts_using_distiller)
- [https://designculture.com.br/o-que-sao-fontes-truetype-opentype-e-postscript/](https://designculture.com.br/o-que-sao-fontes-truetype-opentype-e-postscript/)
- [https://desenvolvimentoparaweb.com/miscelanea/melhore-o-tempo-de-carregamento-com-subconjuntos-de-fontes/](https://desenvolvimentoparaweb.com/miscelanea/melhore-o-tempo-de-carregamento-com-subconjuntos-de-fontes/)