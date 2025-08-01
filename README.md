********************************************************************************
💻 PROJETO: ADP Automation Challenge
********************************************************************************

Automação de testes utilizando **Playwright** + **TypeScript**, com geração de dados via **Faker**  
e logs customizados salvos automaticamente durante a execução dos testes.

********************************************************************************
✅ PRÉ-REQUISITOS
********************************************************************************

- Node.js (v18 ou superior)
- Git instalado na máquina

********************************************************************************
📦 INSTALAÇÃO DO PROJETO
********************************************************************************

1. Clonar o repositório:
   ➤ `git clone https://github.com/azevedomello/adp-automation-challenge.git`

2. Acessar a pasta:
   ➤ `cd adp-automation-challenge`

3. Instalar as dependências:
   ➤ `npm install`

4. Instalar os navegadores para testes:
   ➤ `npx playwright install`

********************************************************************************
🧪 COMO EXECUTAR OS TESTES COM RELATÓRIO NATIVO
********************************************************************************

1. Executar todos os testes com geração de relatório HTML:
   ➤ `npx playwright test --reporter=html`

2. Após a execução, abrir o relatório no navegador:
   ➤ `npx playwright show-report`

* O relatório exibirá os testes executados, status (pass/fail), tempo de execução e erros.

********************************************************************************
🗂️ ONDE ENCONTRAR OS LOGS
********************************************************************************

Todos os logs personalizados são salvos automaticamente no caminho:

📁 `logs/applog.log`

Esse arquivo contém:
- Cada passo executado pelos testes
- Falhas capturadas
- Informações úteis para análise e depuração
