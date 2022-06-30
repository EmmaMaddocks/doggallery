var images;


images = ['https://source.unsplash.com/KsdgjODuJQE/400x600', 'https://source.unsplash.com/KaZmCqgirSY/400x600', 'https://source.unsplash.com/Ntm4C2lCWxQ/400x600', 'https://source.unsplash.com/Sg3XwuEpybU/400x600', 'https://source.unsplash.com/JK8w20Zantg/400x600', 'https://source.unsplash.com/ejxFIxygOww/400x600'];
let element_dogimage = document.getElementById('dogimage');
element_dogimage.setAttribute("src", 'https://source.unsplash.com/HAtT_dqRiNI/400x400');


document.getElementById('next').addEventListener('click', (event) => {
  images.push(images[0]);
  let element_dogimage2 = document.getElementById('dogimage');
  element_dogimage2.setAttribute("src", images.shift());

});

document.getElementById('previous').addEventListener('click', (event) => {
  images.unshift(images.pop());
  let element_dogimage3 = document.getElementById('dogimage');
  element_dogimage3.setAttribute("src", images.slice(-1)[0]);

});