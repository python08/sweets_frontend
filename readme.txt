
DATE: Sunday, May 28, 2023

project configured-----> TypeScript, Prettier, ESLint( Airbnb with typescript style ), Husky
reference ------> https://www.youtube.com/watch?v=sH93pQb9bWM

problems----->
 eslint not running acc to airbnb style config
reason ----->
 configurations were not properly installed
solution ----->
 git discussion thread - https://github.com/airbnb/javascript/issues/2233
npm install -g install-peerdeps install-peerdeps --dev eslint-config-airbnb

problem ---->
 esLint installed externally not working
reason -----> 
 Nextjs 11 comes with eslint installed
solution --->
 changed next to next-line:next-line in scripts package.json