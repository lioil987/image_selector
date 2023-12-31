var box = document.querySelector('div.box')
var button = box.querySelector('button')
var imgBox = box.querySelector('div.img')

var text = box.querySelector('div.name h3')



button.addEventListener('click',(event)=>{

  let input;
  input = document.createElement('input');
  input.type = 'file';
  input.accept="image/*"
  input.onchange = _ => {
            let file =   Array.from(input.files)[0];
            if(file){
              var svg = box.querySelector('svg')
              var img = box.querySelector('img')
              text.innerHTML = file["name"]
              text.setAttribute('title',file["name"])
              imgBox.style.backgroundColor='transparent'
              svg.style.display = 'none'
              img.style.display = 'flex'
              img.src = URL.createObjectURL(file)
              img.onload = ()=>{
                let width = img.clientWidth
                let height = img.clientHeight
                if (img.clientWidth>img.clientHeight)
                {  
                  console.log(width/height);
                  img.style.width = "100%"
                  img.style.height = "auto";
                }
                else{
                  img.style.height = "100%"
                  img.style.width = "auto"
                }
              }
              
              img.style.opacity = "1"


            }

        };
  input.click();
    
})
