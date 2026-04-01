## notas-atletas

Projeto de certificação desenvolvido durante o curso **DevStart**.

### Sobre o projeto

O sistema recebe uma lista de atletas com suas respectivas notas, realiza o processamento desses dados e calcula a média válida (desconsiderando a menor, e a maior) de cada atleta.

Para garantir maior justiça na avaliação, o programa:

* Ordena as notas em ordem crescente
* Remove automaticamente a **menor** e a **maior** nota
* Calcula a média das notas restantes
* Exibe os resultados no console

### Conceitos aplicados

* Laço de repetição (`for`)
* Manipulação de matrizes e objetos
* Ordenação com `.sort()`
* Fatiamento de arrays com `.slice()`
* Iteração com `.forEach()`
* Cálculo de média utilizando `.length`

### Tecnologias

* JavaScript (ES6+)

### Como executar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/notas-atletas
```

2. Acesse a pasta do projeto:

```bash
cd notas-atletas
```

3. Execute o arquivo com Node.js:

```bash
node notas-atletas.js
```

### O que se espera da saída

O programa irá exibir no console o nome do atleta, suas notas originais, e a média final.
