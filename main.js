const navbarData = [
    { name: "Buscar", href: "#buscar" },
    { name: "Librerías", href: "#librerias" },
    { name: "Mi cuenta", href: "#cuenta" },
    { name: "Cesta", href: "#cesta" }
];

function createNavbar() {
    const navbar = document.createElement('nav');
    navbar.className = 'navbar';

    const logo = document.createElement('div');
    logo.className = 'logo';

    const img = document.createElement('img');
    img.src = 'https://www.casadellibro.com/img/cabecera/CDL-LogoSecundario-RGB.svg'; 
    img.alt = 'Logo';

    logo.appendChild(img);

    const navLinks = document.createElement('ul');
    navLinks.className = 'nav-links';

    navbarData.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.name;
        li.appendChild(a);
        navLinks.appendChild(li);
    });

    navbar.appendChild(logo);
    navbar.appendChild(navLinks);

    document.getElementById('navbar').appendChild(navbar);
}

createNavbar();


const products = [
    {
        line: '',
        name: 'LA ISLA DE LA MUJER DORMIDA',
        autor: 'ARTURO PEREZ REVERTE',
        discount: '22,90€',
        price: '21,75€',
        send: '¡ENVÍO GRATIS!',
        image: 'https://imagessl4.casadellibro.com/a/l/s7/34/9788410299634.webp'
    },
    {
        line: '',
        name: 'PECADOS 2. REY DE LA SOBERBIA',
        autor: 'ANA HUANG',
        discount: '23,95€',
        price: '22,75€',
        send: '¡ENVÍO GRATIS!',
        image: 'https://imagessl1.casadellibro.com/a/l/s7/61/9788408292661.webp'
      },
      {
        line: '',
        name: 'AHÍ FUERA GRITANDO',
        autor: 'JORDAN PEELE',
        discount: '19,95€',
        price: '18,95€',
        send: '¡ENVÍO GRATIS!',
        image: 'https://imagessl7.casadellibro.com/a/l/s7/47/9788445018347.webp'
      },
      {
        line: '',
        name: 'ME PIDEN QUE REGRESE',
        autor: 'ANDRES TRAPIELLO',
        discount: '22,90€',
        price: '21,75€',
        send: '¡ENVÍO GRATIS!',
        image: 'https://imagessl2.casadellibro.com/a/l/s7/52/9788423365852.webp'
      },
      {
        line: '',
        name: 'INTERMEZZO',
        autor: 'SALLY ROONEY',
        discount: '22,90€',
        price: '21,75€',
        send: '¡ENVÍO GRATIS!',
        image: 'https://imagessl0.casadellibro.com/a/l/s7/30/9788439744030.webp'
      },
      {
        line: '',
        name: 'EL CLAN',
        autor: 'CARMEN MOLA',
        discount: '21,90€',
        price: '20,80€',
        send: '¡ENVÍO GRATIS!',
        image: 'https://imagessl8.casadellibro.com/a/l/s7/68/9788408291268.webp'
      },
      { 
        line: '',
        name: 'EL NIÑO QUE PERDIÓ LA GUERRA',
        autor: 'JULIA NAVARRO',
        discount: '24,90€',
        price: '23,65€',
        send: '¡ENVÍO GRATIS!',
        image: 'https://imagessl0.casadellibro.com/a/l/s7/70/9788401027970.webp'
      },
      {
        line: '',
        name: 'BLACKWATER I.LA RIADA',
        autor: 'MICHAEL MCDOWELL',
        discount: '9,90€',
        price: '9,40€',
        send: '¡ENVÍO GRATIS!',
        image: 'https://imagessl2.casadellibro.com/a/l/s7/92/9788419654892.webp'
      },
      {
        line: '',
        name: 'QUEDARÁ EL AMOR',
        autor: 'ALICE KELLER',
        discount: '19,90€',
        price: '18,90€',
        send: '¡ENVÍO GRATIS!',
        image: 'https://imagessl5.casadellibro.com/a/l/s7/75/9788408291275.webp'
      },
      {
        line: '',
        name: 'LA BIBLIOTECA DE LA MEDIANOCHE',
        autor: 'MATT HAIG',
        discount: '11,50€',
        price: '10,92€',
        send: '¡ENVÍO GRATIS!',
        image: 'https://imagessl7.casadellibro.com/a/l/s7/07/9788410138407.webp'
      },
  ];


  function renderGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; 

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div>${product.line}</div>
            <h3>${product.name}</h3>
            <h4>${product.autor}</h4>
            <h6>${product.discount}</h6>
            <p>${product.price}</p>
            <h5>${product.send}</h5>
        `;

        gallery.appendChild(productDiv);
    });
}

renderGallery();