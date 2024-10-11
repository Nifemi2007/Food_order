"use-strict";

const addCart = document.querySelectorAll(".add-cart-btn");
const addCartBtn = document.querySelectorAll(".add-to-cart");
const animation = document.querySelectorAll(".box");
const quantity = document.querySelectorAll('.quantity')
const increaseOrder = document.querySelectorAll('.increment')
const dereaseOrder = document.querySelectorAll('.decrement')



quantity.forEach(numb=>{
numb.textContent = 0

dereaseOrder.forEach(i=>{
    i.addEventListener('click', ()=>{
        if(numb.textContent > 0){
            numb.textContent--
        } else {
            numb.textContent = 0
        }
    })
})

increaseOrder.forEach(entry=>{
    entry.addEventListener('click',()=>{
        numb.textContent++
    })
})
})
    


addCart.forEach(el=>{
    el.addEventListener('mouseover', ()=>{
       el.classList.add('hidden')
       el.classList.remove('fade')
    })

    addCartBtn.forEach(entry=>{
        entry.addEventListener('mouseout', ()=>{
            el.classList.remove('hidden')
            el.classList.add('fade')
        })
    })
})






const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
animation.forEach((el) => observer.observe(el));



