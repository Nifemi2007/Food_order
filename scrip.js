'use-strict'

const addCart = document.querySelector('.add-cart-btn')
const addCartBtn = document.querySelector('.add-to-cart')


addCart.addEventListener('mouseover', function(){
    addCart.classList.toggle('hidden')
    addCartBtn.classList.toggle('hidden')
}
)

addCartBtn.addEventListener('mouseout', function(){
    addCart.classList.toggle('hidden')
    addCartBtn.classList.toggle('hidden')
}
)

// const addCart = document.querySelectorAll('.add-cart-btn')
// const addCartBtn = document.querySelectorAll('.add-to-cart')


// for(let i = 0; i<addCart.length; i++){
    
//     console.log(i)
//     // addCart[i].addEventListener('mouseover', ()=>{
//     // })
// }

// addCartBtn.forEach((item)=>{
// let btn=''

//     addCart.forEach((ele)=>{
//         // console.log(ele)
//         btn = item
//         ele.addEventListener('mouseover', function(){
//             ele.classList.toggle('hidden')
//             console.log(btn);
            
//             btn.classList.toggle('hidden')
//         }
//         )
//         })
// })






// addCart.addEventListener('mouseover', function(ele){
    
//     // addCart.classList.toggle('hidden')
//     // addCartBtn.classList.toggle('hidden')
  
//     // addCartBtn.style.transition= '0.5s'
// }
// )

