var endpointUrl = "https://crudcrud.com/api/b45d08826546434e86b6d4f941d6a4a5/wisata";
let konten = document.getElementById('content');
let modif = document.getElementById('modif');
let modif2 = document.getElementById('modif2');
let modiform = document.getElementById('modiform');

function validateTextarea() {
    const textarea = document.getElementById('deskripsi');
    const error = document.getElementById('error');
    
    if (textarea.value.includes('\n')) {
        textarea.value = textarea.value.replace('\n',''); // Menghapus karakter enter
        error.style.display = 'block'; // Menampilkan pesan error
    } else {
        error.style.display = 'none'; // Menyembunyikan pesan error jika valid
    }
}

function tambahWisata() {
    if (modif.style.display === 'none') {
        modif.style.display = 'flex';
        modif.style.justifyContent = 'center';
    } else {
        modif.style.display = 'none';
}}

function editWisata(endpoint,id,nama_wisata,linkgambar,htm,deskripsi) {
    if (modif2.style.display === 'none') {
        modif2.style.display = 'flex';
        modif2.style.justifyContent = 'center';
        modif2.style.color = 'black';
        modif2.innerHTML = `
        <div class="modiform">
            <h2>Form Edit Wisata</h2>
            <form action="" onsubmit="update_wisata(event)">
                <div>
                    <input type="hidden" id="edit_id" name="_id" value="${id}">
                </div>
                <div>
                    <label for="nama_id">Nama Tempat Wisata</label><br>
                    <input type="text" id="edit_nama_wisata" name="nama_wisata" value="${nama_wisata}" >
                </div>
                <div>
                    <label for="htm">Harga Tiket Masuk</label><br>
                    <input type="text" id="edit_htm" name="htm" value="${htm}">
                </div>
                <div>
                    <label for="linkgambar">Link Gambar Wisata</label><br>
                    <input type="text" id="edit_linkgambar" value="${linkgambar}" name="linkgambar" >
                </div>
                <div>
                    <label for="deskripsi">Deskripsi Wisata</label><br>
                    <textarea name="deskripsi" id="edit_deskripsi" cols="30" rows="10">${deskripsi}</textarea>
                </div>
                <div class="tombolform">
                    <button type="submit" value="update" id="tambah">Edit Wisata</button>
                </div>
            </form>
        </div>
        `;
    } else {
        modif2.style.display = 'none';
}}


fetch(endpointUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.length === 0) {
            konten.innerHTML = `
            <div>

            </div>
            <div class="empty-data">
                <b>
                    <p>Tidak terdapat data di dalam API</p>
                    <p>Silahkan Tekan Tombol di bawah ini untuk menambahkan data</p>
                </b>
                <hr>
                </div>
                <div>
                    
            </div>
            `;
        } else {
            data.forEach(element => {
                konten.innerHTML += `
                <div class="isicontent">
                    <div class="gambarisicontent">
                        <img src="${element.linkgambar}" alt="">
                    </div>
                    <div class="deskripsiisicontent">
                        <h2>${element.nama_wisata}</h2>
                        <h3>HTM : ${element.htm} / orang</h3>
                        <p>${element.deskripsi}</p>
                        <div class="tomboldetail">
                            <button type="button" id="tombol"><b>Detail Wisata</b></button>
                            </div>
                    </div>
                </div>
                
                `;
            });
            
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

    //buat tambah wisata
    function tambah_wisata(event) {
        event.preventDefault();
        const input_nama_wisata = document.getElementById("nama").value;
        const input_htm_wisata = document.getElementById("htm").value;
        const input_linkgambar = document.getElementById("linkgambar").value;
        const input_deskripsi = document.getElementById("deskripsi").value;
        fetch(endpointUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nama_wisata: input_nama_wisata,
                htm: input_htm_wisata,
                linkgambar: input_linkgambar,
                deskripsi: input_deskripsi
            })
        })
        .then(response => {
            console.log('Data berhasil dibuat:', response);
            alert('Data berhasil dibuat!');
            window.location.reload();
        })
        .catch(error => {
            document.querySelector(".error").innerText = 'Terjadi kesalahan, gagal menambahkan data';
        });
    }
    
    //buat edit wisata
    function update_wisata(event) {
        event.preventDefault();

        const input_nama_wisata = document.getElementById("edit_nama_wisata").value;
        const input_htm = document.getElementById("edit_htm").value;
        const input_linkgambar = document.getElementById("edit_linkgambar").value;
        const input_deskripsi = document.getElementById("edit_deskripsi").value;
        const input_edit_id = document.getElementById("edit_id").value;

        fetch(`${endpointUrl}/${input_edit_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nama_wisata: input_nama_wisata,
                htm: input_htm,
                linkgambar: input_linkgambar,
                deskripsi: input_deskripsi,
            })
        })
        .then(response => {
            alert('Data berhasil diupdate!');
            window.location.reload();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

//buat hapus wisata
function hapusWisata(url, id) {
    var options = {
        method: 'DELETE',
    };
    fetch(url + "/" + id, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log("Data dengan ID " + id + " telah berhasil dihapus");
            alert('Data berhasil dihapus!');
            location.reload(); 
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    };
