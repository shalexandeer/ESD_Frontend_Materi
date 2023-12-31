function anakNakal(arrayNama) {
    const counter = {};
    for (let anak of arrayNama) {
        if (anak in counter) {
            counter[anak]++;
        } else {
            counter[anak] = 1;
        }
    }
    let urutan = Object.entries(counter).sort((a, b) => b[1] - a[1]);
    let maxCounter = urutan[0][1];
    let anakNakal = urutan.filter(([nama, frek]) => frek === maxCounter).map(([nama, frek]) => nama);
    let hasil;
    if (maxCounter === 1 && urutan.length > 1) {
        hasil = 'Semuanya anak baik';
    } else {
        hasil = anakNakal.length > 1 ? anakNakal.join(' dan ') + ' nackal' : anakNakal[0] + ' nackal';
    }

    return hasil;
  }
  
  const kasus1 = ["Bagas", "Dimas", "Bagas", "Bagas", "Indra", "Gilang", "Gilang", "Hana", "Fajar", "Fajar"];
  const kasus2 = ["Bagas", "Dimas", "Fajar", "Bagas", "Indra", "Gilang", "Gilang", "Bagas", "Fajar", "Fajar"];
  const kasus3 = ["Aisyah", "Bagas", "Dewi", "Dimas", "Eka", "Fajar", "Gilang", "Hana", "Indra", "Jihan"];
  
  console.log(anakNakal(kasus1));
  console.log(anakNakal(kasus2));
  console.log(anakNakal(kasus3));
  