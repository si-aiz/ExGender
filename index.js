function badel(){
    femele= ["AngryFemel.jfif","ConfusedFemel.jpf","HappyFemel.jpg","SadFemel.png"];
    male = ["AngyMale.jpg","ConfusedeMale.jpg",'HappyMale.jpg','SadMale.jpg'];
    b= Math.floor(Math.random() * 4);
    a= document.getElementsByName('aziz');
    c=document.getElementById('des')
    img = document.getElementById('image')
    for(i = 0; i < a.length; i++) {
        if(a[i].checked){
            if(a[i].value=='male'){
                img.src=male[b]
                switch(b){
                    case 0:c.innerHTML='angy';break;
                    case 1:c.innerHTML='consused';break;
                    case 2:c.innerHTML='happy';break;
                    case 3:c.innerHTML='sad';break;
                }
            }
            else if(a[i].value=="femele"){
                img.src=femele[b]
                switch(b){
                    case 0:c.innerHTML='angy';break;
                    case 1:c.innerHTML='consused';break;
                    case 2:c.innerHTML='happy';break;
                    case 3:c.innerHTML='sad';break;
                }
            }
        }
    }
    if(c.innerHTML=='what?'){
        c.innerHTML='select gender'
    }
    
}
