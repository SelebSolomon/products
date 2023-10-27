// function getWeather() {
//     return new Promise(function(resolve, reject){
//  resolve('Sunny')
//     })
// }

// const Promise = getWeather()
// Promise.then(function (data) {
//     console.log(data)
// })

const url  = 'https://dummyjson.com/products'
const rootElement = document.getElementById('root')

async function product() {
   try {
    let response = await fetch(url)
    let data = await response.json()
   console.log(data);
   let products = data.products.map((product)=>{
    const div = document.createElement('div')
    const wrapDiv = document.createElement('div')
    let img = document.createElement('img')
    let Name = document.createElement('p')
    let price = document.createElement('p')
    let stock = document.createElement('p')
    let btn = document.createElement('button')
    let btnboss = document.createElement('div')
    let starDiv = document.createElement('div')
    let discountPercentage = document.createElement('p')
    let percent = document.createElement('p')
    let percentDiv = document.createElement('div')
    
   
    btn.innerText = 'Purchase Here'
    img.setAttribute('src', product.images[0])
    Name.innerText = `Name: ${product.brand}`
    price.innerText = `Price: ${product.price}`
    stock.innerText = `Stock: ${product.stock}`
    let newPrice = Number((product.price) * (product.discountPercentage) / 100)
    discountPercentage.innerText =  `${product.price - newPrice}`
    percent.innerText = `${product.discountPercentage}%`
    
    div.classList.add('sm:w-50', 'md:w-80', 'mt-15', 'mb-15', 'shadow', 'mt-8', 'my-7', 'rounded-xl',  )
    btn.classList.add('border', 'border-green-700', 'rounded-full', 'py-3', 'px-8', 'animate-bounce', 'hover:bg-green-400', 'text-black')
    img.classList.add('w-max', 'rounded-sm')
    price.classList.add('line-through')
    btnboss.classList.add('flex', 'justify-center', 'my-8', 'font-bold')
    wrapDiv.classList.add('text-xl', 'font-bold', 'pl-5', 'mt-4')
    percent.classList.add('bg-yellow-200', 'rounded-2xl', 'py-2', 'px-2' )
    
    percentDiv.append(discountPercentage, percent)
    wrapDiv.append(Name, price, percentDiv, stock)
    btnboss.append(btn)
    percentDiv.classList.add('flex', 'gap-2', 'items-center')
    starDiv.classList.add('flex', 'bg-slate-50')
    div.append(img, wrapDiv, starDiv, btnboss)
    
   for(let i = 1; i < product.rating; i++){
      let star = document.createElement('img')
      star.setAttribute('src', '../img/star.avif')
      star.classList.add('w-10')
      starDiv.append(star)
   }
    return div;
      
   
    
   });


   products.forEach(div => {
    rootElement.classList.add('flex', 'flex-wrap', 'justify-center', 'gap-5') 
    
   
    rootElement.append(div)
   });
   } catch (error) {
   //  console.log(error);
   }
}
product()

// const hamburger = document.getElementById('hamburger')
// const navlist = document.getElementById('navlist')
// addEventListener('Onclick', () =>{
//    if (hamburger.className == 'hidden') {
//       hamburger.classList.remove('hidden')
//       navlist.classList.toggle('navlist')
//    } else{

//    }
// })

// const url  = 'https://dummyjson.com/products';

// const fetchProduct = async () =>{
//    const res = await fetch(url)
//    const data = await res.json()
  
//    const products = data.product.map((product) =>{
//       let div = document.createElement('div')
//       let img = document.createElement('div')
//       let title = document.createElement('h1')
//       let price = document.createElement('p')
//       let discountPrice = document.createElement('p')


      
//       title.textContent = product.title
//       price.textContent = product.price
//       const newPrice = (Number(product.price) * Number(product.discountPrice)) / 100
//       discountPrice.textContent = Number(product.price) - Number(newPrice)
//       price.classList.add('ling-through', 'text- text-[#313133]');
//       div.classList.add('shadow', 'text-[#313133]')
//       div.append(title, price, discountPrice)
//       return div;

//    })

//    products
// }

// for (let i = 1 ; i < products.rating; i++) {
      
//    let star = product[products.rating];
//    star.setAttribute('src', 'star.avif')
//    console.log(star)
// }