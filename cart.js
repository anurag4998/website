
       var addtocart = document.getElementsByClassName('shopitembutton')
       for(var i = 0; i< addtocart.length ;i++)
       {
           var button = addtocart[i]
           button.addEventListener('click',addtocartclicked)

       }

       function addTocartclicked(event) 
       {
           var button = event.target
           console.log('click')
       }


   


