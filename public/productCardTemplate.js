(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['productCard'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section class=\"product-card\">\r\n  <div class = \"center\">\r\n    <div class=\"name-container\">\r\n        "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\r\n    </div>\r\n    <div class=\"img-container\">\r\n        <img class=\"product-photo-img\" src="
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + ">\r\n    </div>\r\n    <div class=\"rating-container\">\r\n        "
    + alias4(((helper = (helper = helpers.rating || (depth0 != null ? depth0.rating : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rating","hash":{},"data":data}) : helper)))
    + "\r\n    </div>\r\n    <div class=\"quantity-container\">\r\n        "
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "\r\n    </div>\r\n    <div class=\"price-container\">\r\n        "
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "\r\n    </div>\r\n    <div class=\"description-container\">\r\n        <p class=\"product-description\">\r\n        "
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\r\n        </p>\r\n    </div>\r\n  </div>\r\n    <button type=\"button\" id=\"edit-product-button\">\r\n      <i class=\"fas fa-pencil-alt\"></i>\r\n    </button>\r\n</section>\r\n";
},"useData":true});
})();