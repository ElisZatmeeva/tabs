window.addEventListener('DOMContentLoaded', function(){
    
    'use strict';

    function foo (elemClassInfo, elemClassTab, elemClassTabContent){

        let info = document.querySelector(`.${elemClassInfo}`),
            tab = document.querySelectorAll(`.${elemClassTab}`),
            tabContent = document.querySelectorAll(`.${elemClassTabContent}`);

            console.log(info);
            console.log(tab);
            console.log(tabContent);            
    

    function hideTabContent(a){
        for( let i =a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    } 

    hideTabContent(1);
    
    function showTabContent(b){
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        if(event.target && event.target.classList.contains(`${elemClassTab}`)){
            for ( let i = 0; i < tab.length; i++){
                if(event.target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
}

foo (`info-header`, `info-header-tab`, `info-tabcontent`); // please, insert your names classes.

});