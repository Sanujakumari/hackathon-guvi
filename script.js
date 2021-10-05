

function foo(){
    let cc=document.getElementById("cname").value;
    console.log(cc);
    async function foo1(){
            let data=await fetch(`https://cataas.com/api/cats?tags=${cc}`);
            let result=await data.json();
            
            console.log(result);
            document.body.append(data);
        
     

    
    for(var i in result){
        var compute=result[i].tags
       var div=document.createElement('div');
       div.innerHTML=`${compute}`;
       document.body.append(div);
    }
     
    }
    foo1();
    
}

var h1=document.createElement('h1')

h1.innerHTML="HELLO WELCOME TO CATS WORLD";
document.body.append(h1)


var button=document.createElement('button')
button.innerHTML="Click Me";
button.addEventListener('click',foo)
document.body.append(button);

function catimg(){
    let cc=document.getElementById("cname").value;
    console.log(cc);
    async function cat(){
       

       
    let data=await fetch(`https://cataas.com/cat${cc}`);
    let result=await data.json();
    console.log(result);
    document.body.append(data);

       
    

    
    for(var i in result){
        var compute=result[i].tags
       var div=document.createElement('div');
       div.innerHTML=`${compute}`;
       document.body.append(div);
    }
     
    }
    cat();
}


img.src=`https://cataas.com/cat${cc}`
document.body.append(img)