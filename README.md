# Preparação Ubuntu
- Como é um processo que será necessário permissão de administrador diversas vezes, utilize o comando `sudo su` para que não seja necessário conceder permissão a cada comando.
---

## Instalando o Curl
- No terminal, digite o insira o seguinte comando:
```
apt-get install curl
```
- Verifique se a instalação ocorreu com sucesso com o comando:
```
dpkg -l | grep curl
```
---
<br>

## Instalar o NVM e Node
- No terminal, digite o insira o seguinte comando (atente-se ao valor da versão do nvm, utilizamos a `0.39.7` mas isso pode se alterar. Para consultar a versão acesse o respositória do nvm no github [clicando aqui](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)):
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v{VERSION}/install.sh | bash
```
- Em seguida instale a versão `20.11.0` do Node:
```
nvm install v20.11.0
```
- Por fim, deifna a versão a ser utilizada:
```
nvm use v20.11.0
```
- Você verá algo parecido com `now using node v20.11.0 (npm v10.2.4)`
---
<br>

## Instalando e configurando o Redis
- Para instalar o Redis no ubuntu, siga os passos listados no [site oficial](https://redis.io/docs/install/install-redis/install-redis-on-linux/). Estamos utilizando a versão `6.0.16`.

- Após seguir os passos de instalação você pode verificar o status do servidor assim como o host/porta com: 
```
systemctl status redis
```
- Caso não retorne algo como `active (running)`, você pode iniciar o servidor com:
```
systemctl start redis-server
```
---
<br>

