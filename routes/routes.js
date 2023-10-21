//import express
import  express from "express";
//init express router
const router = express.Router();

router.get('/biodata/:nama/:tempat_lahir/:tanggal_lahir/:jenis_kelamin/:agama/:alamat/:telepon/:email/:hobi/:cita_cita',(req, res) => {
    var nama = req.params.nama;
    var tempat_lahir = req.params.tempat_lahir;
    var tanggal_lahir =req.params.tanggal_lahir;
    var jenis_kelamin =req.params.jenis_kelamin;
    var agama = req.params.agama;
    var alamat=req.params.alamat;
    var telepon=req.params.telepon;
    var email = req.params.email;
    var hobi = req.params.hobi;
    var cita_cita = req.params.cita_cita;
        res.send(
    'Nama:'  + nama + '<br>' +
    'tempat lahir: ' + tempat_lahir + '<br>' +
    'tanggal lahir :' + tanggal_lahir + '<br>' +
    'jenis kelamin :  '+ jenis_kelamin + '<br>' +
    'agama : '+ agama + '<br>' +
    'alamat : ' + alamat + '<br>' +
    'telepon : '+ telepon + '<br>' +
    'email : '+ email + '<br>' +
    'hobi :'+ hobi + '<br>' +
    'cita-cita: ' + cita_cita 
    
        );
    });
    router.get ('/aritmatika', (req, res) => {
        var bilangan1 = 10;
        var bilangan2 = 5;
        var tambah = bilangan1 + bilangan2
        var kurang = bilangan1 - bilangan2
        var pembagian = bilangan1 / bilangan2
        var perkalian = bilangan1 * bilangan2
    
        res.send(
            '<h3>penjumlahan</h3>' +
            'bilangan ke 1 :' + bilangan1 + '<br>' +
            'bilangan ke 2 :' + bilangan2 + '<br>' +
            'hasil :' + tambah + '<hr>' +
    
            '<h3>pengurangan </h3>'+
            'Bilangan ke 1 :' + bilangan1 + '<br>' +
            'bilangan ke 2 :' + bilangan2 + '<br>' +
            'hasil :' + kurang + '<hr>' +
    
            '<h3>pembagian </h3>'+
            'Bilangan ke 1 :' + bilangan1 + '<br>' +
            'bilangan ke 2 :' + bilangan2 + '<br>' +
            'hasil :' + pembagian + '<hr>' +
    
            '<h3>perkalian </h3>'+
            'Bilangan ke 1 :' + bilangan1 + '<br>' +
            'bilangan ke 2 :' + bilangan2 + '<br>' +
            'hasil :' + perkalian + '<hr>' 
     )
    });
    
    router.get('/bangun_datar',(req, res) => {
        var sisi1 = 2;
        var sisi2 = 2;
        var persegi = sisi1 * sisi2;
        var panjang = 4;
        var lebar  = 8;
        var pp = panjang * lebar;
        var set = 1/2;
        var alas = 3;
        var tinggi = 6;
        var segitiga = set * alas * tinggi;
        var phi=3.14;
        var jari= 9;
        var luas = phi * jari * jari;
    
    
        res.send(
            '<h3> luas Persegi </h3>'+
            'sisi ke 1 ='+ sisi1 +'<br>' +
            'sisi ke 2 ='+ sisi2 +'<br>' +
            'hasil =' + persegi + '<hr>' +
    
            '<h3> luas persegi panjang</h3>'+
            'panjang =' + panjang + '<br>' +
            'lebar  =' + lebar + '<br>' +
            'luas =' + pp + '<hr>' + 
    
             '<h3>LUAS SEGITIGA</h3>'+
             'setengah ='+ set + '<br>'+
             'alas ='+ alas + '<br>'+
             'tinggi ='+ tinggi + '<br>'+
             'luas =  '+ segitiga+ '<hr>'+
    
             '<h3> luas lingkaran</h3>'+
             'phi = '+ phi + '<br>'+
             'jari = '+ jari + '<br>'+
             'luas lingkaran =' + luas + '<hr>'
             
        )
    })
    
    router.get('/tes/:nama/:kelas/:pts/:pas', (req,res) => {
       var nama = req.params.nama;
       var kelas = req.params.kelas;
       var pts = parseInt(req.params.pts);
       var pas = parseInt(req.params.pas);
    
       var rapot = (pts + pas) / 2;
       if (rapot >= 90 && rapot <= 100 ) {
        var grade = 'Grade A';
       }  else if (rapot >= 80) {
        var grade = 'Grade B';
       } else if (rapot >= 70) {
        var grade = 'Grade C';
       } else if (rapot >= 60) {
        var grade = 'Grade D';
       }else if (rapot >= 50) {
        var grade = 'Grade e';
       }else if (rapot >= 0) {
        var grade = 'sing getol diajar!!!'
       } else {
        var grade = "nilai tidak valid" 
       }
       res.send(
        'nama :' + nama + '<br>'+
        'kelas :' + kelas + '<br>'+
        'pts :' + pts + '<br>'+
        'pas :' + pas + '<br>'+
        'rapot :' + rapot + '<br>'+
        'keterangan : ' + grade 
       )
    
    })
    
    router.get ('/bersarang/:nama/:jurusan/:kelas', (req, res)=> {
          var nama = req.params.nama;
          var jurusan = req.params.jurusan;
          var kelas = req.params.kelas;
    
           if (jurusan == 'RPL'){
            if (kelas == '10 rpl 2') {
                var  ket = "anda kelas 10 rpl";
            } else if (kelas == '11 RPL'){
                var ket = "anda kelas 11 RPL";
            } else if (kelas == '12 RPL'){
                var ket = "anda kelas 12 RPL";
            } else {
                var ket = "anda alumni cuyy!!!"
            }
           }else if (jurusan == 'TKRO'){
            if (kelas == '10 TKRO ') {
                var  ket = "anda kelas 10 TKRO";
            } else if (kelas == '11 TKRO'){
                var ket = "anda kelas 11 TKRO";
            } else if (kelas == '12 TKRO'){
                var ket = "anda kelas 12 TKRO";
            } else {
                var ket = "anda alumni cuyy!!!"
            }
           }else if (jurusan == 'TBSM'){
            if (kelas == '10 TBSM') {
                var  ket = "anda kelas 10 TBSM";
            } else if (kelas == '11 TBSM'){
                var ket = "anda kelas 11 TBSM";
            } else if (kelas == '12 TBSM'){
                var ket = "anda kelas 12 TBSM";
            } else {
                var ket = "anda alumni cuyy!!!"
            }
           }else {
            var ket = "jurusan tidak tersedia ";
           }
    
           res.send(
            'Nama :'+ nama + '<br>' +
            'jurusan :' + ket + '<br>' +
            'kelas :' + kelas
                   );
    });
    
    
    
    router.get('/latihan/:nama/:tanggal/:jenis/:pesanan/:jumlah', (req,res) => {
    
            var nama    = req.params.nama;
            var tanggal = req.params.tanggal;
            var jenis   = req.params.jenis;
            var pesanan = req.params.pesanan;
            var jumlah  = req.params.jumlah
             
        if (jenis == 'minuman') {
            if (pesanan == 'air mineral'){
                var harga = 10000;
            }else if (pesanan == 'jus'){
                var harga = 20000;
            }else if (pesanan == 'kopi'){
                var harga = 30000;
            }else {
                var harga = 'pesen nu bener'
            }
        }  if ( jenis == 'makanan'){
            if (pesanan == 'nasi goreng'){
                var harga = 20000;
            }else if (pesanan == 'mie goreng'){
                var harga = 30000;
            }else if (pesanan == 'ayam goreng'){
                var harga = 40000;
            }else {
                var harga = 'pesen nu bener'
            }
    
            var total = jumlah * harga
            if (total >= 100000) {
                var diskon =  total * 0.5
            }else {
                var diskon = 0
            }
            var total_pembayaran = total - diskon
            res.send(
                'nama pembeli      :' + nama +'<br>'+
                'tanggal           :' + tanggal + '<br>' +
                'jenis             :' + jenis   + '<br>' +
                'pesanan           :' + pesanan + '<br>' + 
                'harga             :' + harga + '<br>' +
                'jumlah            :' + jumlah + '<br>' +
                
    
                '----------------------------------' +'<br>' +
    
                'total             :' + total + '<br>' +
                'diskon            :' + diskon + '<br>' +
                'total pembayaran  :' + total_pembayaran
                        )
        }
         } );

         router.get('/sample', (req, res))
    

//export default router
export default router; 