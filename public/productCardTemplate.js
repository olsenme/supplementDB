(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['productCard'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section class=\"product-card\">\r\n    <div class=\"img-container\">\r\n        <img src="
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + ">\r\n    </div>\r\n    <div class=\"info-container\">\r\n        <div class=\"name-container\">\r\n          <p>name</p>\r\n          <p id=name>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\r\n         </div>\r\n        <div class=\"quantity-container\">\r\n          <p>quantity: "
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "</p>\r\n        </div>\r\n        <div class=\"price-container\">\r\n          <p>price: "
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</p>\r\n         </div>\r\n         <div class=\"vote-container\">\r\n            <h1 id=\"vote\">0</h1>\r\n          </div>\r\n          <div class=\"button-container\">\r\n            <!--<button type=\"button\" id=\"vote-button\">\r\n               Vote\r\n            </button>-->\r\n          </div>\r\n      </div>\r\n\r\n      <!--<div class=\"description-container\">\r\n          <p class=\"product-description\">\r\n           description: "
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\r\n          </p>\r\n      </div>-->\r\n    <!--<div class=\"bottom\">-->\r\n     <!--<div class=\"buttons\">\r\n        <button type=\"button\" id=\"edit-product-button\">\r\n          <i class=\"fas fa-pencil-alt\"></i>\r\n       </button>\r\n      <button type=\"button\" id=\"delete-product-button\">\r\n          <i class=\"fas fa-trash-alt\"></i>\r\n      </button>\r\n    </div>-->\r\n\r\n  <!--</div>-->\r\n</section>\r\n";
},"useData":true});
})();