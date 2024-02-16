const cards = document.querySelectorAll('.card')

let productCount = 1
let totalPrice = 0


for(let card of cards){
    card.addEventListener('click', function(){

        // card title set
        const cardTittle = card.querySelector('h3')
        
        const cardTittleText = cardTittle.innerText
        const titleContainer = document.getElementById('title-container')
        const p = document.createElement('p')
        titleContainer.appendChild(p)
        p.innerText = productCount + '. ' + cardTittleText
        productCount++


        //    find product price
        const productPrice = card.querySelector('.product-price')
        const price =  productPrice.innerText
        const priceOnly = parseFloat(price.split(' ')[1])


         //  set total price
         const totalPriceDisplay = document.getElementById('totalPrice')
         // totalPriceDisplay.innerText =  priceOnly
         //  totalPriceDisplay.innerText = totalPriceDisplay + priceOnly
          const totalPriceCalcu = parseFloat(totalPriceDisplay.innerText) 
          totalPrice = totalPrice + priceOnly
         //  console.log(totalPrice.toFixed(2))
          totalPriceDisplay.innerText = totalPrice.toFixed(2)


          
          
          
        })
        
    }
    
    
    // promo code apply btn function
        
        function applyBtn(){
            const inputField = document.getElementById('input-field')
            const value = inputField.value
            const inputValue = 'SELL200'
            
            
            if(totalPrice >= 200){
                if(value == inputValue ){
                    const discountPrice =  totalPrice * 0.2
                    const discountDisplay = document.getElementById('discountPrice')
                    discountDisplay.innerText = discountPrice.toFixed(2)
                    const total = totalPrice - discountPrice
                    const totalDisplay = document.getElementById('total')
                    totalDisplay.innerText = total
                    inputField.value = ''
                 
                  }else{
                      alert('provide the valid promo code!')
                  }
            }
            else{
                alert('vai 200 er beshi khoros koren!')
            }
        } 

        function goHome(){
            document.querySelector('dialog').removeAttribute('id','my_modal_4')
        }
    
    