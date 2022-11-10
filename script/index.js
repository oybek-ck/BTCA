const acardion = document.getElementsByClassName("card-texts__before");
for (i = 0; i < acardion.length; i++) {
  acardion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
// const summa = document.querySelectorAll('.suma-bottom__link')
// let  btca =  'BTCA'
// summa.forEach((Obsumma)=>{
//   console.log(Obsumma);
//   for (let i = 0; i <=; i++) {
//     console.log(i);
//   }
// });






























// const cursor = document.querySelectorAll(".link-hover"),
// itemCard = document.querySelector('.item-content'),
// ContentItem = document.querySelector('.content__item')
// cursor.forEach(el => {
//     const curs = el.getAttribute("data-symbol");
//      el.addEventListener("click", function () {
//         if (curs == "-") {
//             itemCard.classList.toggle('active')
//             console.log("hello");
//         } else {
//             ContentItem.classList.toggle('active')
//         }
//       });
// });

// const left = document.getElementById("left"),
//   right = document.getElementById("right"),
//   cardss = document.getElementById("cardss"),
//   centers = document.getElementById("centers"),
//   ends = document.getElementById("ends");
// console.log(ends );