1   npm init -y 
2   npm install --save-dev typescript ts-node @types/node
3   npx tsc -init  

<!-- Add below configuration in tsc configuration file -->


4



{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}



<!-- Add Below Project Structure -->

my-node-ts-app/
├── src/
│   └── index.ts
├── dist/
├── package.json
├── tsconfig.json





4   npm install express
5   npm install --save-dev typescript ts-node-dev @types/node @types/express



<!-- Watch Command -->

6   npm install --save-dev ts-node-dev


<!-- Add Below Script in script in .json -->


"dev": "ts-node-dev --respawn --transpile-only src/server.ts"








<!-- 
==================================================================
 -->



 1 npm init -y  
 2 npm install express  


<!-- We have install typescript as dev dependency -->
 3 npm i -D typescript   


<!-- Create a src folder -->  



Need to install Type Deinifation (DEV Depedency) packages

4  npm i -D  @types/express



Generate  a tsconfig.json file  

5 npx tsc --init



in tsconfig we made 2 change 

We set root dir as  ./src 
also outDir as      ./dist





Then Build a code using below command 

6  npx tsc --build 



Now we can run index.js File which is generated in  /dist folder





install nodemon as dev dependancy 

npm i -D nodemon


npm run start:dev   


it will crash as nodemon need tsnode 


npm i -D ts-node
