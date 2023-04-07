let app1 = document.querySelector('#app1');
let API = 'https://pokeapi.co/api/v2/pokemon/'


async function Pokemon(a=API) {
  let res = await fetch(a);
  let data = await res.json();
  app1.innerHTML = ""
  data.results.forEach((elem,index) => {
    app1.innerHTML += `
    <button  onclick="Pokemo(${index})">${elem.name}</button>
    `;
  });
}
Pokemon(API);





let more =  document.querySelector('.more')



    async function Pokemo(index) {
        more.style.display ='block'
        let res1 = await fetch(API)
        let  data1 = await res1.json();
       let res2 = await fetch(data1.results[index].url);
       let data2 = await res2.json();
console.log(data2);
        more.innerHTML=''
            more.innerHTML +=`
            <ul>
            <li> Вес ${data2.weight}</li>
            <li> Рост  ${data2.height }</li>
            <li> Тип ${data2.types[0].type.name }</li>
             <img src=" ${data2.sprites.front_default }" alt=""></ul> `

    
      }



      
      let prev = document.querySelector('.previous')
      let next = document.querySelector('.nex')



    


      next.addEventListener('click',Nexpage)
        
async function Nexpage(){
    
    let res = await fetch(API);
    let data = await res.json()

    API = data.next ;
    Pokemon(API);
}

      prev.addEventListener('click',prePage)
        
async function prePage(){
    
    let res = await fetch(API);
    let data = await res.json()
console.log(data.previous)
    API = data.previous ;
    Pokemon(API);
}




