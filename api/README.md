## STACK DO PROJETO

1. Nodejs
2. Yarn
3. Typescript
4. Eslint
5. Express
6. ts-node
7. nodemon
8. docker ( mongoDB )
9. mongoose

## INICIALIZAR O PACKAGE.JSON

```
yarn init -y

yarn add typescript -D
```

## CONFIGURAÇÃO DO TSCONFIG

1. `yarn tsc --init`
2. Habilita diretiva "outDir" como "dist"
3. Indicar a pasta "dist" no gitignore

## SCRIPTS DO PROJETO

```
"scripts": {
    "build": "tsc",
    "dev": "nodemon src/index.ts"
}
```

## CONFIGS DE LINTER E FORMATAÇÃO

1. Instalar extenção do Editorconfig no vscode
2. Instalar a extenção do eslint no vscode
3. Instalar o Eslint na aplicação
`npm init @eslint/config`

## CONFIGURAÇÕES DO EXPRESS

1. Instalar o express
```
yarn add express
```

2. Instalar a tipagem do express e do nodejs

```
yarn add -D @types/express

yarn add -D @types/node
```

## CONFIGS DOCKER / MONGODB

`docker run --name mongo -p 27017:27017 -d mongo`

