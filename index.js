let nome = "Django";
let xp = 1000;
let rank;

while (xp <= 11000) {
  if (xp <= 1000) {
    rank = "Ferro";
    console.log(`O Herói de nome ${nome} está no nível de ${rank}`);
  } else if (xp >= 1001 && xp <= 2000) {
    rank = "Bronze";
    console.log(`O Herói de nome ${nome} está no nível de ${rank}`);
  } else if (xp >= 2001 && xp <= 5000) {
    rank = "Prata";
    console.log(`O Herói de nome ${nome} está no nível de ${rank}`);
  } else if (xp >= 5001 && xp <= 7000) {
    rank = "Ouro";
    console.log(`O Herói de nome ${nome} está no nível de ${rank}`);
  } else if (xp >= 7001 && xp <= 8000) {
    rank = "Platina";
    console.log(`O Herói de nome ${nome} está no nível de ${rank}`);
  } else if (xp >= 8001 && xp <= 9000) {
    rank = "Ascendente";
    console.log(`O Herói de nome ${nome} está no nível de ${rank}`);
  } else if (xp >= 9001 && xp <= 10000) {
    rank = "Imortal";
    console.log(`O Herói de nome ${nome} está no nível de ${rank}`);
  } else {
    rank = "Radiante";
    console.log(`O Herói de nome ${nome} está no nível de ${rank}`);
  }
  console.log(
    `Esta verificação foi executada com a variável xp equivalente a ${xp}`
  );
  xp += 500;
}
