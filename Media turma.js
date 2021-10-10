const nomes = [];

for (var i = 1; i <= 5; i++) {
    nomes.push (prompt("Digite o nome do aluno:")); 
}
nomes
const notas= [];
for (var i = 1; i <= 5; i++) {
    notas.push(prompt("Digite as notas de cada pessoa:"));
}
notas
const noTasB = notas[1].split(",");
noTasB
(3) ['4', '5', '6']
const noTasC = notas[2].split(",");
noTasC
(3) ['1', '3', '4']
const noTasD = notas[3].split(",");
noTasD
const noTasE = notas[4].split(",");
noTasE

var somaA = parseFloat (noTasA[0]) + parseFloat (noTasA[1]) + parseFloat (noTasA[2])
var mediaA = somaA / 3;
var somaB = parseFloat (noTasB[0]) + parseFloat (noTasB[1]) + parseFloat (noTasB[2])
var mediaB = somaB / 3;
var somaC = parseFloat (noTasC[0]) + parseFloat (noTasC[1]) + parseFloat (noTasC[2])
var mediaC = somaC / 3;
var somaD = parseFloat (noTasD[0]) + parseFloat (noTasD[1]) + parseFloat (noTasD[2])
var mediaD = somaD / 3;
var somaE = parseFloat (noTasE[0]) + parseFloat (noTasE[1]) + parseFloat (noTasE[2])
var mediaE = somaE / 3;

if (mediaA >= 5) {
    var situacaoA = "Aprovada";
} else {
    var situacaoA = "Reprovada";
}
situacaoA
'Aprovada'
if (mediaA >= 5) {
    var situacaoB = "Aprovada";
} else {
    var situacaoB = "Reprovada";
}
situacaoB
'Aprovada'
if (mediaC >= 5) {
    var situacaoC = "Aprovada";
} else {
    var situacaoC = "Reprovada";
}
situacaoC
'Reprovada'
if (mediaD >= 5) {
    var situacaoD = "Aprovada";
} else {
    var situacaoD = "Reprovada";
}
situacaoD
'Aprovada'
if (mediaE >= 5) {
    var situacaoE = "Aprovada";
} else {
    var situacaoE = "Reprovada";
}
situacaoE
'Aprovada'
alert (`${nomes [0]} está ${situacaoA}
${nomes [1]} está ${situacaoB}
${nomes [2]} está ${situacaoC}
${nomes [3]} está ${situacaoD}
${nomes [4]} está ${situacaoE}
`);