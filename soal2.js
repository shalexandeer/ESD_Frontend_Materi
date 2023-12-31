function cekPalindrom(kata) {
  const newKata = kata.replace(/[^A-Za-z]/g, '').toLowerCase();
  const reversedKata = newKata.split('').reverse().join('');
  
  if (newKata === reversedKata) {
    return "eureeka!";
  } else {
    return "suka blyat";
  }
}

let listKata = [
  "Angsa",
  "KataK",
  "kasur empuk",
  "Aku Suka Kamu",
  "Ibu Ratna antar ubi"
];
for (let i = 0; i < listKata.length; i++) {
  console.log(cekPalindrom(listKata[i]));
}