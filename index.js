function badel(){
    femele= ["AngryFemel.jfif","ConfusedFemel.jpg","HappyFemel.jpg","SadFemel.png"];
    male = ["AngyMale.jpg","ConfusedeMale.jpg",'HappyMale.jpg','SadMale.jpg'];
    color =["red","yellow","pink","green"];
    b= Math.floor(Math.random() * 4);
    a= document.getElementsByName('aziz');
    c=document.getElementById('des')
    img = document.getElementById('image')
    for(i = 0; i < a.length; i++) {
        if(a[i].checked){
            if(a[i].value=='male'){
                img.src=male[b]
                switch(b){
                    case 0:c.innerHTML='angy';
                        c.style.backgroundColor=color[b];   break;
                    case 1:c.innerHTML='consused';
                         c.style.backgroundColor=color[b];  break;
                    case 2:c.innerHTML='happy';
                         c.style.backgroundColor=color[b];  break;
                    case 3:c.innerHTML='sad';
                         c.style.backgroundColor=color[b];  break;
                }
            }
            else if(a[i].value=="femele"){
                img.src=femele[b]
                switch(b){
                    case 0:c.innerHTML='angy';
                         c.style.backgroundColor=color[b];  break;
                    case 1:c.innerHTML='consused';
                         c.style.backgroundColor=color[b];  break;
                    case 2:c.innerHTML='happy';
                         c.style.backgroundColor=color[b];  break;
                    case 3:c.innerHTML='sad';
                         c.style.backgroundColor=color[b];  break;
                }
            }
        }
    }
    if(c.innerHTML=='what?'){
        c.innerHTML='select gender'
    }
    
}
