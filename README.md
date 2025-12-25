# Fila com Prioridade (TDA em TypeScript)

## 📌 Curso
Análise e Desenvolvimento de Sistemas (ADS)

## 📘 Disciplina
Estrutura de Dados

## 👨‍🏫 Professor
**Jonathas Jivago**

## 👤 Autor
**Francisco Mailson da Silva Sousa**

---

## 📖 Descrição do Projeto

Este repositório apresenta a implementação de um **Tipo de Dado Abstrato (TDA)** que representa uma **fila com cinco níveis de prioridade**, escrita em **TypeScript**.

Prioridades suportadas:

1. Muito baixa  
2. Baixa  
3. Normal  
4. Alta  
5. Muito alta  

A estrutura respeita sempre a prioridade no momento da remoção, garantindo que elementos de maior prioridade sejam atendidos primeiro.

Também inclui:

- Capacidade máxima definida no construtor  
- Impedimento de inserção quando a fila está cheia  
- Métodos para verificar se está vazia ou cheia  
- Visualização do próximo elemento  
- Remoção ordenada por prioridade  
- Método para esvaziar toda a fila  

---

## 🏗️ Classe Principal: `FilaComPrioridade`

A classe usa **cinco vetores internos**, cada um representando uma fila separada por prioridade.  
A indexação funciona como `prioridade - 1`.

Métodos implementados:

- `enqueue(elemento, prioridade)` — adiciona um elemento com o nível correto de prioridade  
- `remover()` — remove sempre do nível mais prioritário disponível  
- `estaVazio()` — retorna se não há nenhum elemento  
- `estaCheia()` — retorna se atingiu a capacidade máxima  
- `tamanho()` — retorna quantos elementos existem no total  
- `verProximo()` — retorna o próximo elemento a ser removido  
- `limpar()` — esvazia completamente a estrutura  

---

## ▶️ Como Executar o Projeto

### 1. Instalar dependências (caso existam)
npm install

### 2. Compilar o TypeScript
npx tsc

### 3. Executar o arquivo de testes
node dist/index.js

---

## 🧪 Exemplo de Uso (index.ts)

import { FilaComPrioridade } from "./FilaComPrioridade";

const fila = new FilaComPrioridade(10);

fila.enqueue(100, 5); // muito alta
fila.enqueue(20, 2);  // baixa
fila.enqueue(50, 3);  // normal
fila.enqueue(200, 5); // muito alta

console.log("Próximo:", fila.verProximo());
console.log("Removido:", fila.remover());
console.log("Tamanho:", fila.tamanho());
console.log("Fila vazia?", fila.estaVazio());
