        	function addtocartclicked(event) 
        {
			var button = event.target
            var shopitem = button.parentElement.parentElement.parentElement
            var product_name = shopitem.getElementsByClassName('productname')[0].innerText
            var product_price = shopitem.getElementsByClassName('productcost')[0].innerText
            var productquantity = shopitem.getElementsByClassName('productquantity')[0].innerText

            localStorage.setItem("name",product_name)
            localStorage.setItem("price",product_price)
            localStorage.setItem("quantity",productquantity)
            
		}

		
			let addtocart = document.getElementsByClassName("shopitembutton");
            for (b of addtocart) 
            {
				b.addEventListener('click',addtocartclicked)
			}
		
