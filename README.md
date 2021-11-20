# AbeilleMobile

## Description 
Projet permettant de faire un journal de bord concernant un rucher sélectionné pendant un possible login concernant le rucher. Il sera possible de scanner les cadres avec le téléphone pour repérer la reine et compter le nombre de varroa sur une photo de la planche de récupération.



 ## Getting started
### Need to launch:

    expo (npm install --global expo-cli)

### Need to start :

$ npm i

If you want change the ip of the API you can go in /components/api.js and change the ip in "baseURL".

let connectAPI = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    timeout: 10000,
});
