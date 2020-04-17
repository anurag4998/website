const database = firebase.database();
const rootRef = database.ref()

const preObject = document.getElementById('object');


rootRef.orderByKey().on('value', snapshot => 
{

  let variable = snapshot.val();
  
  console.log(variable);
  let id = variable.rice_basket.ID;
  console.log(id);
 
  

})

