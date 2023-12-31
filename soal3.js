function cariTersangka(urutanKedatangan, kebiasaan, fotoKueUtuh) {
    let kueUtuh = true;
  
    for (let i = 0; i < urutanKedatangan.length; i++) {
      const tamu = urutanKedatangan[i];
      switch (tamu) {
        case 'Ningguang':
          if (kueUtuh) return 'Ningguang';
          break;
        case 'Hutao':
          break;
        case 'Xiao':
          break;
        case 'Childe':
          break;
      }
  
      if (tamu === 'Xiao') {
        kueUtuh = fotoKueUtuh;
      }
    }
    return 'Hutao';
  }

  const urutanKedatangan = ['Ningguang', 'Hutao', 'Xiao', 'Childe'];
  const kebiasaan = {
    'Ningguang': 'Memeriksa kue sebelum memberikan kado.',
    'Hutao': 'Langsung memberikan kado tanpa memperhatikan kue.',
    'Xiao': 'Memotret apa pun yang dia lihat pertama kali di ruangan.',
    'Childe': 'Membawa air mineral dan meletakkannya di meja sebelum memberikan kado.'
  };
  
  const fotoKueUtuh = true;
  const tersangka = cariTersangka(urutanKedatangan, kebiasaan, fotoKueUtuh);
  console.log(`Berdasarkan investigasi, tersangka yang paling mungkin mengambil kue adalah: ${tersangka}`);
  