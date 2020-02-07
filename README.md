# aws-lambda-nodejs

Aplicação para testes de cold start lambda



1 chamada por vez apresenta lentidão na primeira
![alt text](https://github.com/ViniciusCassales/vcassales-lambda-s3/blob/master/tests/results/1a1.png)

10 chamadas simultaneas, apresentam lentidão em todas as 10
![alt text](https://github.com/ViniciusCassales/vcassales-lambda-s3/blob/master/tests/results/10x.png)

Fonte: https://medium.com/hackernoon/im-afraid-you-re-thinking-about-aws-lambda-cold-starts-all-wrong-7d907f278a4f
