TODO::

Features:
Upload de Arquivo

Refatorar:
Melhorar Error Handle
    -> Atualmente não existe um padrão, apenas try/catch

Melhorar Autenticação
    -> Revisar e refatorar, atualmente está muito genérico

Melhorar Controllers do Express
    -> Acredito que seja necessário mais uma layer entre as functions e o controller, visto que nas functions não podemosn dar return res.status

Padronizar Configs/Instancias
    -> Atualmente as criações de instancias do Prisma e toda a parte de configuração (ex: secret do jwt) estão muito splitdas no código, seria legal uma pasta "config" para agrupar tudo isso

Para Prod:
Dockerizar
Script de build e start