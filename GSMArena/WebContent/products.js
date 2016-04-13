var app = angular.module('store-directives', []);

app.directive("descriptions", function() {
  return {
    restrict: 'E',
    templateUrl: "descriptions.html"
  };
});

app.directive("reviews", function() {
  return {
    restrict: 'E',
    templateUrl: "reviews.html",
    controller: function(){
	    this.review = {};
	    this.addReview = function(product){
	      this.review.createdOn = Date.now();
	      product.reviews.push(this.review);
	      this.review = {};
	    };

	 },
	 controllerAs: 'reviewCtrl'
  };
});

app.directive("specs", function() {
  return {
    restrict: 'E',
    templateUrl: "specs.html"
  };
});


app.directive("productTabs", function() {
  return {
    restrict: 'E',
    alert:"loaded",
    templateUrl: "product-tabs.html",
    controller: function() {
      this.tab = 1;
      this.isSet = function(checkTab) {
        return this.tab === checkTab;
      };

      this.setTab = function(activeTab) {
        this.tab = activeTab;
      };
    },
    controllerAs: 'tabCtrl'
  };
});

