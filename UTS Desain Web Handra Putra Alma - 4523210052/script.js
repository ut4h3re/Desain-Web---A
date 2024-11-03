// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik 
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}

// Toogle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
}

// klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function(e) {
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    
    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }

    if(!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});


// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    };
});

// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
}

// klik di luar modal
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
}

// pesan sekarang
document.querySelector('.calltoaction').onclick = (e) => {
    itemDetailModal.style.display = 'flex';  // Menampilkan modal detail item sebagai contoh
    e.preventDefault();
};

// menghapus item di shopping cart
// Menangani penghapusan item di shopping cart
document.querySelectorAll('.remove-item').forEach((button) => {
    button.onclick = (e) => {
        const cartItem = e.target.closest('.cart-item');  // Menemukan item terkait
        if (cartItem) {
            cartItem.remove();  // Menghapus item dari DOM
        }
        e.preventDefault();
    };
});

// Seleksi semua tombol "Tambah ke Keranjang"
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsContainer = document.querySelector('.shopping-cart');

// Menambahkan event listener untuk setiap tombol
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        const name = button.getAttribute('data-name');
        const price = button.getAttribute('data-price');
        const image = button.getAttribute('data-image');

        // Membuat elemen item cart baru
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${image}" alt="${name}">
            <div>
                <h3>${name}</h3>
                <p class="item-price">Rp${price}</p>
            </div>
            <span class="remove-item">Hapus</span>
        `;

        // Tambahkan elemen item cart ke shopping cart
        cartItemsContainer.appendChild(cartItem);

        // Event untuk menghapus item dari shopping cart
        cartItem.querySelector('.remove-item').addEventListener('click', () => {
            cartItem.remove();
        });
    });
});

