function createProductCard(name,photoURL, rating, quantity,price,description)
{

    var productCardSection = document.createElement('section');
    productCardSection.classList.add('product-card');

    var nameContainerDiv = document.createElement('div');
    nameContainerDiv.classList.add('name-container');
    nameContainerDiv.textContent = name;
    productCardSection.appendchild(nameContainerDiv);

    var imgContainerDiv = document.createElement('div');
    imgContainerDiv.classList.add('img-container');
    productCardSection.appendchild('imgContainerDiv);

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
window.addEventListener('DOMContentLoaded',function(){
    var addProductButton = document.getElementById('add-product-button');

}
function addNewSupplement(){
    

}
