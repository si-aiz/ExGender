function badel(){
    femele =["AngryFemel.jfif","ConfusedFemel.jpg","HappyFemel.jpg","SadFemel.png"];
    male = ["AngyMale.jpg","ConfusedeMale.jpg",'HappyMale.jpg','SadMale.jpg'];
    color =["red","purple","yellow","blue"];
    des =["angry",'confused','happy','sad'];
    b= Math.floor(Math.random() * 4);
    a= document.getElementsByName('aziz');
    c=document.getElementById('des');
    img = document.getElementById('image')
    for(i = 0; i < a.length; i++) {
        if(a[i].checked){
            if(a[i].value=='male'){
                img.src=male[b];
                c.innerHTML=des[b];
                c.style.backgroundColor=color[b];
            }
            else{
                img.src=femele[b];
                c.innerHTML=des[b];
                c.style.backgroundColor=color[b];
            }
        }
    }
    if(c.innerHTML=='what?'){
        c.innerHTML='select gender'; 
    }
}


