let name = "Django";
let xp = 0;
let rank;

while (xp <= 11000) {
  if (xp <= 1000) {
    rank = "Iron";
  } else if (xp <= 2000) {
    rank = "Bronze";
  } else if (xp <= 5000) {
    rank = "Silver";
  } else if (xp <= 7000) {
    rank = "Gold";
  } else if (xp <= 8000) {
    rank = "Platinum";
  } else if (xp <= 9000) {
    rank = "Ascendant";
  } else if (xp <= 10000) {
    rank = "Immortal";
  } else {
    rank = "Radiant";
  }

  console.log(`The Hero named ${name} is at the ${rank} level`);
  console.log(`This check was executed with xp equal to ${xp}`);
  xp += 500;
}
