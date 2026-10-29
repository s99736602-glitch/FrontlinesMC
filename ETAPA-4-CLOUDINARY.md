# Etapa 4 — Integração Cloudinary

## O que está implementado neste pacote
- SDK oficial `cloudinary` incluído nas dependências.
- Uploads de imagens nos endpoints de comunidade, avatar, chat e painel administrativo enviados ao Cloudinary.
- Configuração aceita `CLOUDINARY_URL` ou as três variáveis `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY` e `CLOUDINARY_API_SECRET`.
- Validadores aceitam URLs seguras do Cloudinary para imagens armazenadas, além de caminhos locais antigos.
- O gerador de notícias pode obter imagens do Cloudinary, validando o host, o tipo de conteúdo e os limites de tamanho.
- Nenhuma credencial real está incluída no repositório.

## Configuração na Vercel
Em Settings → Environment Variables, configure em Production (e Preview se necessário):
- `CLOUDINARY_CLOUD_NAME` = seu Cloud name
- `CLOUDINARY_API_KEY` = sua API Key
- `CLOUDINARY_API_SECRET` = sua API Secret

Alternativamente, configure somente `CLOUDINARY_URL` com a URL fornecida pelo painel do Cloudinary. Não configure as duas opções com valores divergentes.

Após salvar as variáveis, faça um novo deploy para que elas entrem em vigor.

## Limites conhecidos
- Este pacote ainda contém o banco SQLite (`node:sqlite`) do projeto original. Não representa uma migração completa para PostgreSQL/Neon.
- A conexão real ao Cloudinary só pode ser confirmada depois de configurar as credenciais na Vercel e executar um upload de teste.
- Como uma API Secret foi compartilhada em uma conversa, gere uma nova API Secret no painel do Cloudinary antes de usar em produção e atualize a variável na Vercel. Não use a chave exposta.
