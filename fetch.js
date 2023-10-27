// const url = 'https://api.github.com/users'

// let rootElement = document.getElementById('root')
// async function details() {
//     try {
//         let response = await fetch(url)
//         let data = await response.json()
//        let del  = data.map((del)=>{
//        const div = document.createElement('div')
//        const name = document.createElement('p')
//        const img = document.createElement('img')
//        name.innerText = del.login
//        img.setAttribute('src', del.avatar_url)
//        div.append(name, img)
//        img.style.width = '190px';
//        img.style.height = '170px';
//        div.style.border = '2px solid black'
//        div.style.width = '200px'
//        return div;
//        })
      
//       del.forEach(div => {
//         rootElement.style.display = 'flex'
//         rootElement.style.flexWrap = 'wrap'
//         rootElement.style.gap = '30px'
//         rootElement.append(div)
//     });

//     } catch (error) {
//         console.log(error)
//     }
// }
// details()


// create a variable and name it your url assigning your url link to it
// create a variable that can help you get access to your HTML
// async and await 
