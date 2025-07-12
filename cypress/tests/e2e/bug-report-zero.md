# 🐞 Bug Report - Real World App

## 🧾 Informações Gerais

Título do Bug: "Envio de crédito com saldo zerado"

Data do Report: 02/07/2025

Reportado por: Patricia Teixeira

## 📝 Descrição do Bug

A transferência com valor 0,00 (zero) pode ser realizada.

## 🔄 Passos para Reproduzir o Erro

 Acessar o aplicativo "Real World App" com login e senha.

 Vá até "New"

 Clique para quem será realizada a transferência

 Preencha o valor (zero)

 Clique em "Pay"
 
 Observe que ainda que não haja saldo, a transferência foi realizada com sucesso.

## ✅ Resultado Esperado

Mensagem de erro por ausência de valor maior que 0,01.

## ❌ Resultado Obtido

Continuação da transferência.

## ⚙️ Ambiente de Teste

Navegador: Microsoft Edge

Sistema Operacional: Windows 10

Dispositivo:	Desktop

Tipo de Conexão:	Wi-Fi

## 🚨 Severidade e Prioridade

Severidade: Crítica 

Prioridade: Alta

## Justificativa:

O erro acomete a transferência de valores.

## 🔁 Bug Reproduzido?

Sempre
