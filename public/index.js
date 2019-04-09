/*Creates the structure for the product card*/
function createProductCard(name, photoURL, rating, quantity, price, description)
{

    var productCardSection = document.createElement('section');
    productCardSection.classList.add('product-card');

    var nameContainerDiv = document.createElement('div');
    nameContainerDiv.classList.add('name-container');
    nameContainerDiv.textContent = name;
    productCardSection.appendchild(nameContainerDiv);

    var imgContainerDiv = document.createElement('div');
    imgContainerDiv.classList.add('img-container');
    productCardSection.appendchild(imgContainerDiv);

    var img = document.createElement('img');
    img.classList.add('product-photo-img');
    img.src=photoURL;
    imgContainerDiv.appendchild(img);

    var ratingContainerDiv = document.createElement('div');
    nameContainerDiv.classList.add('rating-container');
    nameContainerDiv.textContent = rating;
    productCardSection.appendchild(ratingContainerDiv);

    var quantityContainerDiv = document.createElement('div');
    nameContainerDiv.classList.add('quantity-container');
    nameContainerDiv.textContent = quantity;
    productCardSection.appendchild(quantityContainerDiv);

    var priceContainerDiv = document.createElement('div');
    nameContainerDiv.classList.add('price-container');
    nameContainerDiv.textContent = price;
    productCardSection.appendchild(priceContainerDiv);

    var priceContainerDiv = document.createElement('div');
    nameContainerDiv.classList.add('price-container');
    nameContainerDiv.textContent = price;
    productCardSection.appendchild(priceContainerDiv);

    var descriptionContainerDiv = document.createElement('div');
    nameContainerDiv.classList.add('description-container');
    productCardSection.appendchild(descriptionContainerDiv);

    var p = document.createElement('p');
    p.classList.add('product-description');
    p.textContent = description;
    descriptionContainerDiv.appendchild(p);

    return productCardSection;
}
/*Populates the info for the supplement card*/
function handleModalAcceptClick()
{
    //get all the inputs from the handlebars
    var name = document.getElementById('supplement-name-input').value.trim();
    var url = document.getElementById('supplement-url-input').value.trim();
    var rating = document.getElementById('supplement-rating-input').value.trim();
    var quantity = document.getElementById('supplement-quantity-input').value.trim();
    var price = document.getElementById('supplement-price-input').value.trim();
    var description = document.getElementById('supplement-description-input').value.trim();
    //make sure all fields are filled in
    if(!name || !url || !rating || !quantity || !price || !description)
    {
        alert("You must fill in all fields!");
    }
    else
    {
        var postRequest = newXMLHttpRequest();
        var requestURL = '/' + name + '/addSupplement';
        postRequest.open('POST',requestURL);

        var requestBody = JSON.stringify({
            name: name,
            url:url,
            rating:rating,
            quantity:quantity,
            price: price,
            description:description
        });
        //populate request to send to server
        postRequest.addEventListener('load', function(event){
            if(event.target.status === 200){
                var productCardTemplate = Handlebars.templates.productCard;
                var productCardHTML = productCardTemplate ({
                    name:name,
                    url:url,
                    rating:rating,
                    quantity:quantity,
                    price:price,
                    description:description
                });
                 var productCardContainer = document.querySelector('.product-card-container');
                 productCardContainer.insertAdjacentHTML('beforeend',productCardHTML);

            }
            else {
                    alert('Error storing supplement' + event.target.response);
                }
            });

            postRequest.setRequestHeader('Content-Type', 'application/json');
            postRequest.send(requestBody);
            hideModal();

        // console.log(productCardHTML);

     }
}
/*Shows modal*/
function showModal()
{
    var modal = document.getElementById('add-product-modal');
    var modalBackdrop = document.getElementById('modal-backdrop');
    modal.classList.remove('hidden');
    modalBackdrop.classList.remove('hidden');
}
/*Hides Modal*/
function hideModal(){
    var modal = document.getElementById('add-product-modal');
    var modalBackdrop = document.getElementById('modal-backdrop');
    modal.classList.add('hidden');
    modalBackdrop.classList.add('hidden');
    clearModalInputs();
}
/*Clears modal inputs*/
function clearModalInputs(){
    var modalInputs = document.querySelectorAll('#add-product-modal input');
    for(var i=0; i<modalInputs.length; i++){
        modalInputs[i].value = '';
    }
}
/*hooks up UI elements*/
window.addEventListener('DOMContentLoaded', function() {
    var addProductButton = document.getElementById('add-product-button');
    addProductButton.addEventListener('click',showModal);
    var modalAcceptButton = document.getElementById('modal-accept');
    modalAcceptButton.addEventListener('click',handleModalAcceptClick);
    var modalHideButtons = document.getElementsByClassName('modal-hide-button');

    for(var i=0;i<modalHideButtons.length;i++)
    {
        modalHideButtons[i].addEventListener('click',hideModal);
    }
});
