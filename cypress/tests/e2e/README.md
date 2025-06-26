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

### ✅ Feature: Funcionalidade de Registro
Como um novo visitante quero criar uma conta no sistema para poder acessar e utilizar os serviços.

Cenário: Registro de novo usuário com sucesso
   
    Início: página de registro
      
      E preencho o campo nome com "Patricia Teixeira"
      
      E preencho o campo email com "novausuario@email.com"
      
      E preencho o campo senha com "senhaForte123"
    
    Quando: ao clicar no botão de registrar
    
    Então: devo ser redirecionado para a página inicial
      
      E devo ver uma mensagem de boas-vindas

Cenário: Registro com informações incompletas
    
    Início: página de registro
      
      E preencho apenas o campo email com "incompleto@email.com"
      
      E deixo os campos de nome e senha em branco
    
    Quando: ao clicar no botão de registrar
    
    Então: devo ver mensagens de erro indicando os campos obrigatórios


#### 📄 Licença

Este projeto é apenas para fins educacionais e não possui uma licença comercial.
