let cursor = document.querySelector('.cursor');
let cursor_outline = document.querySelector('.cursor-outline');

document.addEventListener('mousemove', (e) => {

  const poseX = e.clientX;
  const poseY = e.clientY;

  cursor.style.left = `${poseX}px`;
  cursor.style.top = `${poseY}px`;

  cursor.animate({
    left: `${poseX}px`,
    top: `${poseY}px`
  }, { duration: 500, fill: "forwards" });
})



// document.addEventListener('click', () => {

//   cursor.classList.add("expand");

//   setTimeout(() => {
//     cursor.classList.remove("expand")
//   }, 500)
// })


// function backColor() {
//   let back = document.querySelector('.btn-back');
//   let body = document.querySelector('#body');
//   body.style.backgroundColor = 'black';
// }