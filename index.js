let NomeDoHeroi = "Ruan"
let xp = 5670
let NivelHeroi = " "


if (xp <=1000) {NivelHeroi ="ferro"}
else if (xp >=1001 && xp <=2000) {NivelHeroi ="bronze"}
else if (xp >= 2001 && xp <=5000) {NivelHeroi="prata"}
else if (xp >= 5001 && xp <= 7000) {NivelHeroi= "ouro"}
else if (xp >= 7001 && xp <= 8000) {NivelHeroi= "platina"}
else if (xp >= 8001 && xp <= 9000) {NivelHeroi= "ascendente"}
else if (xp >= 9001 && xp <= 10000) {NivelHeroi= "imortal"}
else if (xp >=10001) {NivelHeroi="radiante"}
console.log("O herói de nome "+NomeDoHeroi+ " está no nível de "+ NivelHeroi)


