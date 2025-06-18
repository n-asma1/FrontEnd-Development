

        const button=document.getElementById('my-button');
        const countDisplay=document.getElementById('count-display');
        let count=0;
        button.addEventListener("click",increaseCount);
        function increaseCount(){
            count++;
            countDisplay.innerText=count;
        }
   