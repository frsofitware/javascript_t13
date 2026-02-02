# 📚 Exercícios Complementares: JavaScript - Operadores e Lógica

[cite_start]Esta lista contém exercícios práticos para aprofundar o conhecimento em variáveis, entrada/saída de dados e operadores aritméticos em JavaScript[cite: 2].

> **📝 Instruções de Estudo:**
> [cite_start]* Utilize o VS Code para desenvolver os algoritmos[cite: 4].
> * Observe com atenção os desenhos e diagramas para facilitar a compreensão[cite: 13, 14].
> [cite_start]* Valide seu código comparando com as tabelas de **Entrada** e **Saída** esperadas[cite: 12, 29, 30].

---

## 🛠️ Lista de Desafios

### 01. 💵 Conversor de Moedas
Elabore um algoritmo que leia um valor em Reais (BRL) e a cotação atual do Dólar (USD). Exiba o valor convertido para dólares.

**Fluxo Lógico:**
```mermaid
graph LR
    A([Início]) --> B[/Leia Valor Real/]
    B --> C[/Leia Cotação/]
    C --> D[dolares = real / cotacao]
    D --> E[/Exibe Valor USD/]
    E --> F([Fim])
ENTRADASAÍDAReal: 50.00Valor em USD: 10.00Cotação: 5.0002. ⚖️ Calculadora de IMCCrie um algoritmo que receba o peso (kg) e a altura (m) de uma pessoa e exiba o seu Índice de Massa Corporal (IMC) na tela.Fórmula: $IMC = peso / (altura * altura)$ENTRADASAÍDAPeso: 80.0IMC: 24.69Altura: 1.8003. 🌡️ Conversor de TemperaturaDesenvolva um algoritmo que leia uma temperatura em graus Celsius e a converta para Fahrenheit.Fórmula: $F = (Celsius \cdot 1.8) + 32$ENTRADASAÍDACelsius: 30.0Fahrenheit: 86.004. 🏷️ Cálculo de Desconto ProgressivoLeia o preço de um produto e a porcentagem de desconto. Exiba o valor do desconto em reais e o novo preço final do produto.ENTRADASAÍDAPreço: 200.00Novo Preço: 170.00Desconto: 15%05. 🚗 Autonomia do VeículoCrie um algoritmo que receba a distância total percorrida (km) e o total de combustível gasto (litros). Exiba o consumo médio do veículo.ENTRADASAÍDADistância: 450.0Consumo Médio: 10.0 km/lCombustível: 45.006. ⏱️ Conversor de Tempo para SegundosElabore um algoritmo que leia três valores: horas, minutos e segundos. Converta tudo para o total de segundos transcorridos.ENTRADASAÍDAHoras: 1, Minutos: 10, Segundos: 30Total em segundos: 423007. ⭕ Área do CírculoLeia o valor do raio de um círculo e calcule sua área. Considere $\pi = 3.14159$.Fórmula: $area = \pi \cdot raio^{2}$ENTRADASAÍDARaio: 2.0Área: 12.5608. 🍽️ Divisor de Conta com GorjetaLeia o valor total de uma conta de restaurante e o número de pessoas na mesa. Calcule o valor final considerando 10% de taxa de serviço e divida igualmente entre os participantes.ENTRADASAÍDAConta: 100.00Valor por pessoa: 55.00Pessoas: 209. 📅 Idade em DiasCrie um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e exiba a idade total apenas em dias (considere o ano com 365 dias e o mês com 30 dias).ENTRADASAÍDAAnos: 20, Meses: 2, Dias: 10Total de dias: 737010. 🔄 Troca de Valores (Lógica de Variáveis)Leia dois valores para as variáveis A e B. Efetue a troca dos valores de forma que a variável A passe a possuir o valor da variável B e vice-versa.ENTRADASAÍDAA: 5A: 10B: 10B: 5Estes exercícios foram baseados na estrutura pedagógica da Generation Brasil para fortalecer o pensamento computacional.