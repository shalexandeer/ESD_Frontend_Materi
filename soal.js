function cek(kata){
    const kata = kata.replace(/^A-Za-z/g, '').toLowerCase();
    const reversed = kata.split('').reverse().join('');

    if (kata === reversed){
        return "eureeka!";
    } else{
        return "suka blyat"
    }
}

console.log(cek("kasur empuk"));