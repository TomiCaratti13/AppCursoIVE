
// let iconos = document.querySelectorAll('.icono');
// let inicio = document.querySelectorAll('.inicio');
// let nav = document.querySelector('.app');
// let back = document.querySelector('.back');
// let secInfo = document.querySelector('.info');
// let nombre = document.querySelector('.funcion');
// let compartir = document.querySelector('.compartir');
// let appUso;

// function abrirImagen(rutaImagen) {
//         window.open(rutaImagen, '_blank');
// }

// document.addEventListener("DOMContentLoaded", function () {
//     var introContainer = document.getElementById("intro-container");
//     introContainer.style.transition = "opacity 0.5s ease";
//     introContainer.style.opacity = "1";

//     var delayInMilliseconds = 1000;
//     var showIntroTimeout = setTimeout(function () {
//       introContainer.style.opacity = "0";
//       setTimeout(function () {
//         introContainer.classList.add("hidden");
//       }, 1000);
//     }, delayInMilliseconds);
//   });

// document.addEventListener("DOMContentLoaded", function() {
//     var el = document.documentElement;
//     var full = document.getElementById("full");

//     full.addEventListener("click", function() {
//       if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
//         // Entrar en pantalla completa
//         if (el.requestFullscreen) {
//           el.requestFullscreen();
//         } else if (el.mozRequestFullScreen) {
//           el.mozRequestFullScreen();
//         } else if (el.webkitRequestFullscreen) {
//           el.webkitRequestFullscreen();
//         } else if (el.msRequestFullscreen) {
//           el.msRequestFullscreen();
//         }
//         full.innerHTML = '<i class="fa-solid fa-compress"></i>';
//       } else {
//         if (document.exitFullscreen) {
//           document.exitFullscreen();
//         } else if (document.mozCancelFullScreen) {
//           document.mozCancelFullScreen();
//         } else if (document.webkitExitFullscreen) {
//           document.webkitExitFullscreen();
//         } else if (document.msExitFullscreen) {
//           document.msExitFullscreen();
//         }
//         full.innerHTML = '<i class="fa-solid fa-expand"></i>';
//       }
//     });
//   });

// iconos.forEach((icono) => {
//     icono.addEventListener('click', () => {
//         inicio.forEach((i) => {
//             i.classList.add('oculto');
//         })
//         nav.classList.remove('oculto');
//         const name = icono.querySelector('.nombre').textContent;
//         const app = name.toLowerCase();
//         appUso = document.querySelector(`.${app}`);
//         appUso.classList.remove('oculto');
//         nombre.innerHTML = name;
//     });
// });

// back.addEventListener('click', () => {
//     inicio.forEach((i) => {
//         i.classList.remove('oculto');
//     })
//     nav.classList.add('oculto');
//     if (appUso) {
//         appUso.classList.add('oculto');
//     }
// });

// document.addEventListener('DOMContentLoaded', function() {

//     const documentosArch = [
//         {
//           nombre: "Textos tomistas - Nivel inicial",
//           enlace: "https://drive.google.com/file/d/14KT2doIMljeQ2rg1gwto6ocoztD-LThA/view?usp=sharing",
//           imagen: "img/nivel_1.png"
//         },
//         {
//           nombre: "Textos tomistas - Nivel avanzado",
//           enlace: "https://drive.google.com/file/d/1l0u4sO9GasIwlCdDXXfnUTB4hIYU_2Mv/view?usp=sharing",
//           imagen: "img/nivel_2.png"
//         },
//         {
//           nombre: "Lumen Ecclesiae - Pablo VI",
//           enlace: "https://drive.google.com/file/d/1P6GSVOpeLtlwOkUCug0O3Iyftrxh4mpG/view?usp=sharing",
//           imagen: "img/lumen.png"
//         },
//         {
//           nombre: "Meditaciones",
//           enlace: "https://drive.google.com/file/d/10AVgJse8FVAis21F8wCg6FXReN53FZNT/view?usp=sharing",
//           imagen: "img/medit.png"
//         }
//     ];

//     // const documentosConf = [
//     //     {enlace: "https://www.youtube.com/embed/fPtuOeVDQZc?si=X86qhd_LOc03Ppgj"}, // video 1
//     //     {enlace: "https://www.youtube.com/embed/bXNYXWdvwFA?si=_Xq6QYIvRj3tnWjp"}, // video 2
//     //     {enlace: "https://www.youtube.com/embed/o_nzfHRi-v4?si=i2x3jZRLh6PzgoB_"}, // video 3
//     //     {enlace: "https://www.youtube.com/embed/QRICtJM_D4Y?si=AlrqeDuPN_iQ-pL7"}, // video 4
//     //     {enlace: "https://www.youtube.com/embed/r8OAcbvgsvc?si=pVijAe2SOYrp9KU7"}, // video 5
//     //     {enlace: "https://www.youtube.com/embed/TzrDKwovrnw?si=EXFJqxncscLfsBOd"}, // video 6
//     //     {enlace: "https://www.youtube.com/embed/o_nzfHRi-v4?si=i2x3jZRLh6PzgoB_"}, // video 7
//     //     {enlace: "https://www.youtube.com/embed/o_nzfHRi-v4?si=i2x3jZRLh6PzgoB_"}, // video 8
//     //     {enlace: "https://www.youtube.com/embed/o_nzfHRi-v4?si=i2x3jZRLh6PzgoB_"}, // video 9
//     //     {enlace: "https://www.youtube.com/embed/o_nzfHRi-v4?si=i2x3jZRLh6PzgoB_"}  // video 10
//     // ];

//     const secArch = document.querySelector('.archivos');
//     if (secArch) {
//         for (const documento of documentosArch) {
//             secArch.insertAdjacentHTML('beforeend', `
//                 <div class="documento">
//                     <a href="${documento.enlace}" rel="noopener noreferrer">
//                         <img src="${documento.imagen}" alt="">
//                     </a>
//                     <button class="descarga">
//                         <a href="${documento.enlace}" download="${documento.nombre}">
//                             <i class="fa-solid fa-download fa-xl"></i>
//                         </a>
//                     </button>
//                     <span>${documento.nombre}</span>
//                 </div>
//             `);
//         }
//     } else {
//         console.error('secArch no encontrada.');
//     }

//     // const  secConf= document.querySelector('.conferencias');
//     // if (secConf) {
//     //     for (const documento of documentosConf) {
//     //         secConf.insertAdjacentHTML('beforeend', `
//     //             <iframe width="560" height="315" src="${documento.enlace}"
//     //             title="YouTube video player"
//     //             frameborder="0"
//     //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//     //             allowfullscreen>
//     //             </iframe>
//     //         `);
//     //     }
//     // } else {
//     //     console.error('secConf no encontrada.');
//     // }

// });

// compartir.addEventListener('click', () => {
//     const url = window.location.href;
//     const input = document.createElement('input');
//     input.value = url + '\n ¡Echa un vistazo a esta increíble aplicación!';
//     document.body.appendChild(input);
//     input.select();
//     document.execCommand('copy');
//     document.body.removeChild(input);
//     alert('¡La URL se ha copiado al portapapeles\n' + url + '\nPuedes pegarla y compartila por mensaje!');
// });






const iconos = document.querySelectorAll('.icono');
const inicio = document.querySelectorAll('.inicio');
const nav = document.querySelector('.app');
const back = document.querySelector('.back');
const secInfo = document.querySelector('.info');
const nombre = document.querySelector('.funcion');
const compartir = document.querySelector('.compartir');
let appUso;

function abrirImagen(rutaImagen) {
  window.open(rutaImagen, '_blank');
}

document.addEventListener("DOMContentLoaded", function () {
  const introContainer = document.getElementById("intro-container");
  introContainer.style.transition = "opacity 0.5s ease";
  introContainer.style.opacity = "1";

  const delayInMilliseconds = 1000;
  const showIntroTimeout = setTimeout(function () {
    introContainer.style.opacity = "0";
    setTimeout(function () {
      introContainer.classList.add("hidden");
    }, 1000);
  }, delayInMilliseconds);
});

document.addEventListener("DOMContentLoaded", function () {
  const el = document.documentElement;
  const full = document.getElementById("full");

  full.addEventListener("click", function () {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      // Entrar en pantalla completa
      if (el.requestFullscreen) {
        el.requestFullscreen();
      } else if (el.mozRequestFullScreen) {
        el.mozRequestFullScreen();
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      } else if (el.msRequestFullscreen) {
        el.msRequestFullscreen();
      }
      full.innerHTML = '<i class="fa-solid fa-compress"></i>';
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      full.innerHTML = '<i class="fa-solid fa-expand"></i>';
    }
  });
});

iconos.forEach((icono) => {
  icono.addEventListener('click', () => {
    inicio.forEach((i) => {
      i.classList.add('oculto');
    });
    nav.classList.remove('oculto');
    const name = icono.querySelector('.nombre').textContent;
    const app = name.toLowerCase();
    appUso = document.querySelector(`.${app}`);
    appUso.classList.remove('oculto');
    nombre.innerHTML = name;
  });
});

back.addEventListener('click', () => {
  inicio.forEach((i) => {
    i.classList.remove('oculto');
  });
  nav.classList.add('oculto');
  if (appUso) {
    appUso.classList.add('oculto');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const secArch = document.querySelector('.archivos');
  if (secArch) {
    const documentosArch = [
      {
        nombre: "Textos tomistas - Nivel inicial",
        enlace: "https://drive.google.com/file/d/14KT2doIMljeQ2rg1gwto6ocoztD-LThA/view?usp=sharing",
        imagen: "img/nivel_1.png"
      },
      {
        nombre: "Textos tomistas - Nivel avanzado",
        enlace: "https://drive.google.com/file/d/1l0u4sO9GasIwlCdDXXfnUTB4hIYU_2Mv/view?usp=sharing",
        imagen: "img/nivel_2.png"
      },
      {
        nombre: "Lumen Ecclesiae - Pablo VI",
        enlace: "https://drive.google.com/file/d/1P6GSVOpeLtlwOkUCug0O3Iyftrxh4mpG/view?usp=sharing",
        imagen: "img/lumen.png"
      },
      {
        nombre: "Meditaciones",
        enlace: "https://drive.google.com/file/d/10AVgJse8FVAis21F8wCg6FXReN53FZNT/view?usp=sharing",
        imagen: "img/medit.png"
      }
    ];
    for (const documento of documentosArch) {
      secArch.insertAdjacentHTML('beforeend', `
                <div class="documento">
                    <a href="${documento.enlace}" rel="noopener noreferrer">
                        <img src="${documento.imagen}" alt="">
                    </a>
                    <button class="descarga">
                        <a href="${documento.enlace}" download="${documento.nombre}">
                            <i class="fa-solid fa-download fa-xl"></i>
                        </a>
                    </button>
                    <span>${documento.nombre}</span>
                </div>
            `);
    }
  } else {
    console.error('secArch no encontrada.');
  }
});

compartir.addEventListener('click', () => {
  const url = window.location.href;
  const input = document.createElement('input');
  input.value = `${url}\n ¡Echa un vistazo a esta increíble aplicación!`;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
  alert(`La URL se ha copiado al portapapeles\n${url}\nPuedes pegarla y compartirla por mensaje!`);
});
