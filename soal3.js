function cariPencuri() {
  const kedatangan = ["Ningguang", "Hutao", "Xiao", "Childe"];
  let kueUtuh = true;
  const kebiasaan = {
    Ningguang: "memeriksa kue",
    Hutao: "memberikan kado",
    Xiao: "memotret",
    Childe: "meletakkan air mineral",
  };
  kedatangan.forEach((x) => {console.log(`${x} masuk ruang jamu istana`);
    if (x === "Xiao" && kueUtuh === true) {
      kue = true;
      console.log("Xiao memotret ruang jamu, foto menunjukkan kue utuh");
    }else if (x === "Xiao" && kueUtuh === false){
      kue = false;
      console.log("Foto xiao menunjukkan kue sudah tidak utuh");
    }else{
      console.log(`Setelah itu ${x} ${kebiasaan[x]}`);
    }
  });
  if (!kueUtuh){console.log("Berdasarkan informasi, yang mungkin mengambil kue adalah Ningguang");} 
  else {console.log("Berdasarkan bukti kejadian, yang paling mungkin mengambil kue adalah Childe")}
}
console.log("Reka Ulang Kejadian:")
cariPencuri();