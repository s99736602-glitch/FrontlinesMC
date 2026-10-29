# Frontline MC

Site público e painel do servidor Frontline MC, feito com Node.js, Express e SQLite.

## Iniciar

Requer Node.js 22.5 ou superior.

```bash
npm install
npm start
```

Abra `http://localhost:3000`. O painel fica em `http://localhost:3000/admin`. O banco SQLite e as imagens enviadas ficam na pasta local `data/` (não publique essa pasta em repositório ou hospedagem estática).

## Contas e permissões

Jogadores podem criar conta, trocar senha e recuperar o acesso usando o nome de usuário e a resposta do animal ou nome da mãe informada no cadastro. Senhas e respostas são armazenadas com scrypt. A recuperação tem limite de tentativas e tokens temporários. A conta `Azrae` recebe o cargo de funder automaticamente.

Cargos na ordem de hierarquia: Membro, Mod, Adm, Owner, Nações Unidas e Funder. O painel só é mostrado para contas mod ou superiores e a API também verifica essa permissão. A gestão de cargos é restrita ao usuário Azrae com cargo funder.

## Conteúdo e comunidade

O painel permite cadastrar/editar nações com regras, descrição e até cinco imagens; criar uma nação publica automaticamente uma notícia datada. Notícias aceitam rascunho/publicação, data e hora, até cinco imagens, enquadramento e uma prévia obrigatória antes de salvar. As imagens aceitas são PNG, JPEG e WebP, até 5 MB por arquivo.

A comunidade privada oferece busca de contas, pedidos e aceite de amizade, conversas diretas, grupos e mensagens persistidas com atualização em tempo real via SSE. O perfil aceita foto. Chamadas diretas de áudio/vídeo e compartilhamento de tela usam WebRTC e permissões do navegador. Chamadas funcionam em HTTPS ou localhost; esta instalação usa STUN público, então uma infraestrutura TURN deverá ser configurada para dar confiabilidade entre redes restritas. Chamadas em grupo não estão habilitadas.

## Status do Minecraft

O site lê apenas `MINECRAFT_HOST`, `MINECRAFT_PORT`, `RCON_HOST` e `RCON_CONFIG_PATH` do `.env` do bot, consulta `server.properties` e host/porta de `discord-rcon.json`; a senha RCON nunca é enviada ao navegador. O protocolo Java mostra online/offline, latência e jogadores e atualiza a cada 30 segundos. Configure um IP público quando o servidor estiver pronto.

Para hospedar: configure `NODE_ENV=production`, `PORT`, armazenamento persistente e HTTPS. Se precisar criar o primeiro administrador, defina também `SETUP_KEY` antes do primeiro acesso ao painel. O convite padrão do Discord é `https://discord.gg/WfwQ76gyGD`.
## Proteções adicionais e imagens no chat

Os nomes de conta são únicos sem diferenciar maiúsculas de minúsculas. O cadastro bloqueia uma lista mantida no servidor com nomes públicos conhecidos, identificadores políticos e nomes/termos nazistas ou extremistas. A lista pode ser ajustada em `server.js`. O usuário `Azrae` recebe o cargo Funder no cadastro; contas existentes com esse nome também recebem o cargo na inicialização.

Mensagens privadas podem levar até cinco imagens PNG, JPEG ou WebP. Os arquivos são enviados ao servidor e suas referências são salvas no SQLite. As telas de conta e recuperação usam o tema escuro, e a recuperação apresenta duas etapas: confirmação da identidade e definição da nova senha.
### Gerador de notícias com Gemini

O assistente usa o modelo multimodal gratuito `gemini-3.5-flash-lite` pela Gemini Developer API para analisar até cinco imagens e gerar três propostas estruturadas. A chave fica apenas em `.env` (`GEMINI_API_KEY`) no servidor, nunca no navegador. Briefings fora do escopo do Frontline são recusados; o chat de escolha aceita somente 1, 2 ou 3. Imagens e briefing só são enviados ao Gemini quando o administrador solicita a geração. Configure outro modelo compatível em `GEMINI_NEWS_MODEL`.

### Loja e pedidos

Pedidos, preços no momento da compra, nomes informados, aceite dos termos, confirmação de pagamento e entrega são registrados em `data/frontline.sqlite`. O checkout requer uma conta do site para manter o histórico individual. O painel de compras e os endpoints de gestão são exclusivos para Owner/Criador. A integração Pix está em desenvolvimento: o QR é apenas um placeholder e não gera cobrança. Receita só conta após um Owner/Criador confirmar que recebeu o pagamento fora do site.
