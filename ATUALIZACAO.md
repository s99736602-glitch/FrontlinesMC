# Atualização do painel

1. Faça uma cópia de segurança do site atual.
2. Substitua os arquivos de código pelos deste ZIP, incluindo `public/permissions.js`.
3. Mantenha seu `.env` e a pasta `data` originais: este ZIP não inclui contas, imagens enviadas pelos jogadores nem configurações privadas.
4. Reinicie o servidor e recarregue o site.

O painel e as seções Visão geral, Universo, Conteúdo e Equipe permitem Owner, Criador e Administrador. Console e toda a área administrativa da Loja permitem apenas Owner e Criador. A loja pública permanece disponível aos jogadores.

Administrador pode visualizar a equipe; atribuir cargos continua exclusivo de Owner e Criador, com as proteções de hierarquia originais.

No primeiro reinício, cargos principais Support/Suporte/Mod passam a Membro, e esses cargos secundários são removidos. Contas, perfis e demais dados são preservados. Uma conta com outro cargo autorizado mantém o acesso correspondente.

Testes das regras: `node --test test/permissions.test.js`.

Verificado em uma cópia isolada com sessões de teste por cargo, acessos diretos às operações administrativas, proteção contra sessão administrativa antiga e menu aberto/recolhido nas larguras 1280, 970 e 390. Não instalado nem verificado no servidor original.

## Cadastro e cargo Criador
- O nome de usuário informado no cadastro é o nome exibido no site, preservando maiúsculas/minúsculas (exceto `Azrae`, padronizado exatamente assim).
- O nome de usuário é único sem diferenciar maiúsculas de minúsculas; o login continua aceitando qualquer combinação de caixa.
- A conta `Azrae` recebe automaticamente o cargo `Criador` no cadastro e contas existentes com esse nome são atualizadas na inicialização do servidor.
