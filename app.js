const database = firebase.database();
const rootRef = database.ref('rice_basket')
const rootRef1 = database.ref('sugar_basket')

const preObject = document.getElementById('object');



const content1 = document.getElementById("cartitem")

         
      rootRef.orderByKey().on('value', snapshot => 
      {
        
        let variable = snapshot.val();
        
        if(variable.Value == 1)  
        {
          checkrice()
        }
        else if(variable.Value != 1)
        {
          document.getElementById("cart").innerHTML = ``
        }
      });
       //// //////////////////////////////////////////////////////////////////////////
        rootRef1.orderByKey().on('value', snapshot => 
        {
          let variable = snapshot.val();
        if(variable.Value == 1)
        {
            checksugar()  
            
        }
        else if(variable.Value != 1)
        {
          document.getElementById("cart").innerHTML = ``
        }       
      });

    
        var button = document.getElementById("checkout")
        button.addEventListener('click', e=>
        {
          rootRef.set
          ({
           Value:0,
           ID:'ri'
         })
         rootRef1.set({
          Value:0,
          ID:'su'
        })
        })
       
 

/////////////////////////////////////////////////////////////////////////////////////
function checkrice()
{
  var div = document.createElement('div');
        div.setAttribute('id', "cartitem");
        const content = document.getElementById("cart")
        content.appendChild(div) 
    

        var ul = document.createElement('ul');
        const content1 = document.getElementById("cartitem")
        content1.appendChild(ul) 
        ul.setAttribute('id', "cartrow");
        
        var li = document.createElement('li');
        const content2 = document.getElementById("cartrow");
        li.style.width = '412px'
        li.textContent = 'Daawat Rozana Super Basmati Rice';
        content2.appendChild(li);
       

        var li = document.createElement('li');

        li.setAttribute('id', "unitprice")
        li.textContent = '340';
        content2.appendChild(li);

        var li = document.createElement('li');
        li.setAttribute('id', "quantitybutton");
        var button1 = document.createElement('button');
        var input = document.createElement('text')
        var button2 = document.createElement('button');
      
        
        input.setAttribute('id', "input")
        


        button1.innerText = '+'
        button2.innerText = '-'
        input.innerText = '1'
        content2.appendChild(li).appendChild(button1)
        content2.appendChild(li).appendChild(input)
        content2.appendChild(li).appendChild(button2)


        var li = document.createElement('li');
        var subtotal = document.createElement('text')

        content2.appendChild(li).appendChild(subtotal)
        subtotal.setAttribute('id', "subtotal");

        initialcartvalue()
        button1.addEventListener('click',incrementvalue)
        button2.addEventListener('click',decrementvalue)
        
        
        
        function initialcartvalue()
        {
          document.getElementById("subtotal").innerText = parseInt(document.getElementById("input").innerText) * parseInt(document.getElementById("unitprice").innerText)
        }
        function incrementvalue(event)
        {
          var button = event.target
          var value = parseInt(document.getElementById("input").innerText)
          value = value + 1
          document.getElementById("input").innerText = value
          total()
        }
        
        function decrementvalue(event)
        {
          var button = event.target
          var value = parseInt(document.getElementById("input").innerText)
          if(value==0)
          {
            document.getElementById("input").innerText = 0
        
          }
          else
          {
            value = value-1;
            document.getElementById("input").innerText = value
          }
          total()
        }
        
        function total()
        {
          var product = parseInt(document.getElementById("input").innerText) * parseInt(document.getElementById("unitprice").innerText)
          document.getElementById("subtotal").innerText = product
          a = product;
        }
        
        

}
///////////////////////////////////////////////////////////////////////////////////

function checksugar()
{
  const content = document.getElementById("cart")
    var div = document.createElement('div');
    div.setAttribute('id', "cartitem");
    content.appendChild(div)

    var ul = document.createElement('ul');

    content.appendChild(div).appendChild(ul)

    var li =  document.createElement('li');
    li.innerText = 'Parry Brown Sugar'
    li.style.width = '412px'
    content.appendChild(div).appendChild(ul).appendChild(li)

    var li =  document.createElement('li');
    li.setAttribute('id', "unitprice1")
    li.innerText = '100';
    content.appendChild(div).appendChild(ul).appendChild(li)

    var button1 = document.createElement('button');
    var input = document.createElement('text')
    var button2 = document.createElement('button');
    var li = document.createElement('li');
    
    input.setAttribute('id', "input1")


        button1.innerText = '+'
        button2.innerText = '-'
        input.innerText = '1'

        content.appendChild(div).appendChild(ul).appendChild(li).appendChild(button1)
        content.appendChild(div).appendChild(ul).appendChild(li).appendChild(input)
        content.appendChild(div).appendChild(ul).appendChild(li).appendChild(button2)

        var li = document.createElement('li');
        var subtotal = document.createElement('text')

        content.appendChild(div).appendChild(ul).appendChild(li).appendChild(subtotal)
        subtotal.setAttribute('id', "subtotal1");

        initialcartvalue()
        button1.addEventListener('click',incrementvalue)
        button2.addEventListener('click',decrementvalue)
        
        
        
        function initialcartvalue()
        {
          document.getElementById("subtotal1").innerText = parseInt(document.getElementById("input1").innerText) * parseInt(document.getElementById("unitprice1").innerText)
        }
        function incrementvalue(event)
        {
          var button = event.target
          var value = parseInt(document.getElementById("input1").innerText)
          value = value + 1
          document.getElementById("input1").innerText = value
          total()
        }
        
        function decrementvalue(event)
        {
          var button = event.target
          var value = parseInt(document.getElementById("input1").innerText)
          if(value==0)
          {
            document.getElementById("input1").innerText = 0
        
          }
          else
          {
            value = value-1;
            document.getElementById("input1").innerText = value
          }
          total()
        }
        
        function total()
        {
          var product = parseInt(document.getElementById("input1").innerText) * parseInt(document.getElementById("unitprice1").innerText)
          document.getElementById("subtotal1").innerText = product
          b = product;
        }
        
        
}
