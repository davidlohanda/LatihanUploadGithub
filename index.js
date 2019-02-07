// // var orang = [
// //     {nama : "Andi", marga: "Hasibuan"},
// //     {nama : "Budi", marga: "Sinaga"},
// //     {nama : "Caca", marga: "Pasaribu"}
// //    ];
// //    function namaLengkap(item, index) {
// //     var fullname = [item.nama,item.marga].join(" ");
// //     return fullname;
// //    }
// //    function tesMap() {
// //    console.log(orang.map(namaLengkap));
// //     console.log(orang.map(namaLengkap)[0]);
// //     console.log(orang.map(namaLengkap)[1]);
// //     console.log(orang.map(namaLengkap)[2]);
// //    }
// //    tesMap()



// // let janji = new Promise(function(tepati,ingkari){ // di pake untuk get data dari API
// //     let dipenuhi = true;
// //     if(dipenuhi){
// //     tepati('Janji Kutepati.');
// //     } else {
// //     ingkari('Janji Kuingkari.');
// //     }
// //     });
// //     janji.then(function(janjiDitepati) { // then yang true
// //     console.log(janjiDitepati);
// //     }).catch(function(janjiDiingkari) { // catch yang false
// //     console.log(janjiDiingkari);
// //     })


// // let merk = 'Yamaha';
// // let tahun = 2015;
// // let mio = {
// //  merk: merk,
// //  prod: tahun
// // }
// // let vixion = { // kalo nama properti sama deangan nama variabel yang di assign maka bisa ditulis seperti di samping
// //  merk, tahun
// // }
// // console.log(mio);
// // console.log(vixion);

// // let mio = {
// //     kualitas: function(x){
// //     return `Mutu ${x}`;
// //     }
// //    }
// //    let vixion = {
// //     kualitas(x){
// //     return `Performa ${x}`;
// //     }
// //    }
// //    console.log(mio.kualitas('Oke banget!'));
// //    console.log(vixion.kualitas('Juara!'));

// // let nama = new Set();
// // nama.add('Adi').add('Budi').add('Adi');
// // console.log(nama);
// // console.log(nama.size);
// // nama.delete('Adi');
// // console.log(nama);
// // console.log(nama.size);
// // nama.clear();
// // console.log(nama);
// // console.log(nama.size);

// // let id = ['Ali','Bona','Ali'];
// // let nama = new Set(id);
// // console.log(nama);
// // console.log(nama.size);

let angka = [1,2,3,4,1,2,5,6];
console.log(angka);
let nomor = new Set(angka);
console.log(nomor);
console.log(...angka)


