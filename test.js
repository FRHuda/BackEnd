var angkaNanti = 8784204;
var angka = angkaNanti;

divisible11 = (angka) => {
    var lengthAngka = 1;
    var count = 10;
    var array = [];
    var angkatampung = angka;

    function hitung() {
        if (angka - count > 0) {
            lengthAngka = lengthAngka + 1;
            count = count * 10;
            hitung();
        }
    }

    hitung()

    for (a=1;a<=lengthAngka;a++) {
        
        var tampung = angkatampung%10;
        angkatampung = angkatampung - tampung;
        angkatampung = angkatampung / 10;
        array.push(tampung);
    }
    return array;
}

var isi = divisible11(angka);
console.log(isi);

hitungHasil = () => {
    var hasil = isi[0];

    for (var b = 1; b<=isi.length;b++) {
        if (b/2 != 0) {
            hasil = hasil + isi[b];
        }
        else if (b/2 == 0) {
            hasil = hasil - isi[b];
        }
    }
    return hasil;
}

console.log(hitungHasil());