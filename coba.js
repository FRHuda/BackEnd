var jumlahsegitiga = 5;

renderAngkaGanjil = (angka) => {
    var tampung = [];
    for ( var b=1;b<=angka;b++) {
        if (b%2 !== 0) {
            tampung.push(b);
        }
    }
    return tampung;
}

renderSegitiga = () => {
    var jumlahsegitiga = 5;

    var angka = renderAngkaGanjil(100);

    
    var output = '';
    for (var a=0; a<jumlahsegitiga; a++) {
        for (var spasi=jumlahsegitiga;spasi>a;spasi--) {
            output += ' '
        }

        for (var b=0;b<=a;b++) {
            output +=angka[a+b];
            output += ' ';
        }
        output += '\n';
    }
    return output;
}

console.log(renderSegitiga())