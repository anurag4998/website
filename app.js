const database = firebase.database();
const rootRef = database.ref()

const preObject = document.getElementById('object');
var button1 = document.createElement('button');
var button2 = document.createElement('button');
var input = document.createElement('text')
var subtotal = document.createElement('text')




rootRef.orderByKey().on('value', snapshot => 
{

  let variable = snapshot.val();
  if(variable.rice_basket.Value == 1)  
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
        li.setAttribute('id', "productname");
        li.textContent = 'Daawat Rozana Super Basmati Rice';
        content2.appendChild(li);
        document.getElementById("productname").style.width = '412px';

        var li = document.createElement('li');

        li.setAttribute('id', "unitprice")
        li.textContent = '340';
        content2.appendChild(li);

        var li = document.createElement('li');
        li.setAttribute('id', "quantitybutton");
        button1.setAttribute('id', "increment");
        input.setAttribute('id', "input")
        button2.setAttribute('id', "increment");


        button1.innerText = '+'
        button2.innerText = '-'
        input.innerText = '1'
        content2.appendChild(li).appendChild(button1)
        content2.appendChild(li).appendChild(input)
        content2.appendChild(li).appendChild(button2)


        var li = document.createElement('li');
        content2.appendChild(li).appendChild(subtotal)
        subtotal.setAttribute('id', "subtotal");

        initialcartvalue()


  }
  
  
  if(variable.sugar_basket.Value == 1)
  {
     var div = document.createElement('div');
     div.setAttribute('id', "cartitem");
     const content = document.getElementById("cart")
     content.appendChild(div) 
    
     var ul = document.createElement('ul');
     ul.setAttribute('id', "cartrow");
      
     


  }
  
})  

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

}

