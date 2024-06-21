let tds = document.querySelectorAll('td');

for(const td of tds){
    if(td.className == "navigation"){console.log("navigation");}
    else{
        let texte = td.querySelector('.a-cacher');
        td.addEventListener('mouseover',function(){
            texte.style.opacity=1;

        });

        td.addEventListener('mouseout',function(){
            texte.style.opacity=0;

        });
    }
}