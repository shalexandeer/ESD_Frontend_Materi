function dekripsiPesan(pesan) {
    const huruf = 'abcdefghijklmnopqrstuvwxyz';
    let hasilDekripsi = '';
  
    for (let i = 0; i < pesan.length; i++) {
      const karakter = pesan[i];
      const hurufIndex = huruf.indexOf(karakter.toLowerCase());
      if (hurufIndex !== -1) {
        const indeksDekripsi = (hurufIndex - 5 + huruf.length) % huruf.length;
        const hurufDekripsi = karakter === karakter.toLowerCase() ?
          huruf[indeksDekripsi] : huruf[indeksDekripsi].toUpperCase();
  
        hasilDekripsi += hurufDekripsi;
      } else {
        hasilDekripsi += karakter;
      }
    }
    
    return hasilDekripsi;
  }
  
  const pesanTerenkripsi = "xfqfr bfmdz\ngjxtp lzj rfz ifkyfw jxi snm\ngwt, gjxtp qz rfz rfpfs in bfwlty lfp?\nfpz xfdfsl pfrz, rfz lfp ofin ufhfwpz\ndfsl pnwnr xynhpjw otrtp pz pnhp ifwn lwzu";
  console.log(dekripsiPesan(pesanTerenkripsi));
  