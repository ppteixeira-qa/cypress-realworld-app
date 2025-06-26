# 🔍 Real World App – Testes Automatizados com BDD

Este projeto simula testes automatizados para as funcionalidades de Login e Registro de Usuário da aplicação fictícia Real World App utilizando a metodologia BDD com a sintaxe Gherkin.

## 🧰 Tecnologias e Ferramentas Utilizadas

✅ Cypress

✅ Yarn

✅ JavaScript 

✅ Node.js

✅ Git e GitHub

## 🧪 Casos de Teste em BDD (Gherkin)

### ✅ Feature: Funcionalidade de Login
Como um usuário registrado quero poder acessar minha conta para utilizar os serviços do sistema.

Cenário: Login com sucesso
    
    Início: página de login
    
      E preenchimento do campo de email com "Judah_Dietrich50"
      
      E preenchimento do campo senha com "s3cret"
    
    Quando: ao clicar no botão de login
    
    Então: redirecionamento para a página inicial

Cenário: Login inválido
    
    Início: página de login
      
     E preenchimento do campo de email com "judah_50"
      
      E preenchimento do campo senha com "s3cret"
    
    Quando: ao clicar no botão de login
    
    Então: mensagem de erro informando "Username or password is invalid"



#### 📄 Licença

Este projeto é apenas para fins educacionais e não possui uma licença comercial.
