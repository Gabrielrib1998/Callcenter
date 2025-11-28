## Teste analista junior

Neste teste você dispõe de um cenário fictício, onde há um painel de monitoramento de ramais que contem alguns bugs que precisam ser corrigidos. Este painel também deverá ser melhorado, o minimo de melhorias que deverá ser acrescentado serão 3. Abaixo uma relação dos itens que deverão ser corrigidos:

- Os ramais offiline não são exibidos corretamente no painel, para corrigir você deverá exibir os ramais indisponiveis, fazendo com que o card do painel fique cinza e traga um icone circular no canto superior direito com a cor cinza mais escura. 
- Os ramais que estão em pausa no grupo de callcenter não estão sendo exibidos corretamente, para corrigir você deverá exibir os ramais que estão com com status de pausa, trazendo um icone circular no canto superior direito com a cor laranja.
- Os card deverão exibir os nomes dos agentes que estão no grupo de callcenter SUPORTE (arquivo lib\filas)

### MELHORIAS  
Após a correção destes itens, você deverá aplicar ao menos 3 (três) melhorias neste sistema.

### OBRIGATÓRIO  
O teste também contará com algumas atividades obrigatórias:
- Transformar o arquivo lib\ramais.php em uma classe e utiliza-lo neste sistema. Após a criação da classe o arquivo lib\ramais.php não deverá ser mais utilizado.
- Apesar dos registros serem estaticos, deverá ser criada uma base de dados utilizando mysql ou mariadb para armazenar as informações de cada ramal, como numero, nome, IP,  status do ramal no grupo de callcente (disponivel, pausa, offiline, etc).
- As informações da tela devem ser atualizadas a cada 10 segundos utilizando ajax e estas informações devem ser atualizadas na base de dados. Para verificar se está sendo atualizado na base de dados você poderá alterar as informações dos arquivos  lib\filas e lib\ramais

### IMPORTANTE
0. Você não podera utilizar frameworks, o código terá de ser 100% seu.
1. O arquivo lib\filas simula as informações de um grupo de callcenter  
2. O arquivo lib\ramais simula as informações dos ramais  
3. Estes arquivos se completam  
4. Estes arquivos NÃO devem unidos em um só arquivo  
5. Estes arquivos poderão ser alterados apenas para teste do AJAX  
6. Ao concluir o teste, deverá ser encaminhado um arquivo .zip contendo todo o código, dump da base de dados e instruções de instalação e a lista das melhorias aplicadas.  

---

## 📋 INSTRUÇÕES DE INSTALAÇÃO

### Pré-requisitos
- XAMPP (Apache e MySQL/MariaDB)
- Navegador web moderno (Chrome, Firefox, Edge)
- PHP 7.4 ou superior

### Passo 1: Configurar o Ambiente
1. Certifique-se de que o XAMPP está instalado em `C:\xampp\`
2. Extraia os arquivos do projeto em `C:\xampp\htdocs\programador_junior-master\`

### Passo 2: Criar o Banco de Dados
1. Inicie o Apache e MySQL no painel de controle do XAMPP
2. Acesse o phpMyAdmin: `http://localhost/phpmyadmin`
3. Crie um novo banco de dados chamado `callcenter`
4. Importe o arquivo SQL fornecido (`database/callcenter.sql`) ou execute o script abaixo:

```sql
CREATE DATABASE IF NOT EXISTS callcenter;
USE callcenter;

CREATE TABLE ramais (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    numeroramal VARCHAR(20) NOT NULL,
    IPramal VARCHAR(50),
    statusramal VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Inserir dados de exemplo
INSERT INTO ramais (nome, numeroramal, IPramal, statusramal) VALUES
('Chaves', '7000', '181.219.125.7', 'available'),
('Kiko', '7001', '181.219.125.7', 'ring'),
('Chiquinha', '7002', '(Unspecified)', 'UNKNOWN'),
('Nhonho', '7003', '(Unspecified)', 'UNKNOWN'),
('Godines', '7004', '181.219.125.7', 'paused');
```

### Passo 3: Configurar a Conexão com o Banco
1. Abra o arquivo `lib/db_ramais.php`
2. Verifique as configurações de conexão (já configuradas para localhost):
   - **Servidor:** localhost
   - **Usuário:** root
   - **Senha:** (vazio)
   - **Banco:** callcenter

### Passo 4: Acessar o Sistema
1. Abra o navegador e acesse: `http://localhost/programador_junior-master/`
2. O painel de monitoramento será carregado automaticamente
3. Os dados são atualizados automaticamente a cada 10 segundos

### Passo 5: Testar a Atualização Automática
1. Mantenha o painel aberto no navegador
2. Acesse o phpMyAdmin
3. Altere o status de um ramal na tabela `ramais`
4. Aguarde até 10 segundos e veja a atualização no painel

---

## ✨ MELHORIAS APLICADAS

### 1. **Sistema de Pesquisa em Tempo Real**
- **Descrição:** Implementação de barra de pesquisa que filtra ramais por nome ou número em tempo real
- **Funcionalidade:** Ao digitar na barra de pesquisa, os cards são filtrados instantaneamente sem necessidade de clicar em botões
- **Benefício:** Facilita a localização rápida de ramais específicos em ambientes com muitos agentes

### 2. **Filtro por Status**
- **Descrição:** Sistema de filtro dropdown que permite visualizar ramais por status específico
- **Opções disponíveis:** 
  - Todos os Status
  - Disponível
  - Ocupado
  - Chamando
  - Em Pausa
  - Offline
- **Benefício:** Permite aos supervisores visualizar rapidamente agentes em determinado estado (ex: ver apenas quem está pausado)

### 3. **Dashboard de Estatísticas em Tempo Real**
- **Descrição:** Painel resumido mostrando contadores de ramais por status
- **Informações exibidas:**
  - Total de ramais
  - Quantidade de ramais disponíveis
  - Quantidade de ramais ocupados
  - Quantidade de ramais em pausa
  - Quantidade de ramais offline
- **Atualização:** Atualiza automaticamente junto com os cards a cada 10 segundos
- **Benefício:** Visão geral instantânea da situação da equipe sem necessidade de contar manualmente

### 4. **Interface Visual Moderna e Responsiva**
- **Descrição:** Redesign completo da interface com design moderno e profissional
- **Características:**
  - Gradiente de fundo elegante (roxo)
  - Cards com sombras e efeitos hover
  - Ícones Font Awesome para melhor visualização
  - Layout responsivo (adaptável a mobile, tablet e desktop)
  - Animações suaves de transição
  - Badges coloridos para status
- **Benefício:** Interface mais agradável e profissional, melhor experiência do usuário

### 5. **Indicadores Visuais Aprimorados**
- **Descrição:** Sistema de cores e animações para status dos ramais
- **Características:**
  - Verde pulsante: Disponível
  - Vermelho piscante: Ocupado
  - Laranja piscante: Chamando/Tocando
  - Amarelo piscante: Em Pausa
  - Cinza escuro: Offline
  - Cards offline com fundo cinza claro
- **Benefício:** Identificação visual imediata do status de cada ramal

### 6. **Feedback Visual de Atualização**
- **Descrição:** Mensagem indicando que o sistema atualiza automaticamente
- **Benefício:** Usuário sabe que não precisa recarregar a página manualmente

### 7. **Tratamento de Erros Aprimorado**
- **Descrição:** Mensagens amigáveis quando não há resultados ou ocorrem erros
- **Benefício:** Melhor experiência do usuário em situações de erro ou sem resultados

---

## 🛠️ CORREÇÕES REALIZADAS

### ✅ Ramais Offline
- Implementado exibição correta de ramais offline
- Cards com fundo cinza claro
- Ícone circular cinza escuro no canto superior direito

### ✅ Ramais em Pausa
- Corrigida a detecção de ramais pausados
- Ícone circular laranja/amarelo piscante
- Badge de status "Em Pausa"

### ✅ Nomes dos Agentes
- Exibição correta dos nomes dos agentes do grupo de callcenter SUPORTE

### ✅ Classe PHP
- Arquivo `lib/ramais.php` transformado em classe orientada a objetos
- Implementação do padrão de arquitetura adequado

### ✅ Banco de Dados
- Criação de banco de dados MySQL
- Tabela `ramais` com todos os campos necessários
- Sistema de atualização automática do banco

### ✅ Atualização AJAX
- Implementado sistema de atualização automática a cada 10 segundos
- Dados sincronizados com o banco de dados
- Funcionamento sem frameworks externos

---
