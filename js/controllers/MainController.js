app.controller('MainController', ['$scope', function($scope){
 	$scope.title = "top sellers in Books";
 	$scope.promo = "The most popular books this month.";
 	$scope.products = [
		{ 
			cover : 'img/the-book-of-trees.jpg',
	 		name : 'the Books of Trees',
	 		price : 19,
	 		pubdate: new Date('2015','07','30'),
			likes:0
	 	},
	 	{
	 		cover : 'img/program-or-be-programmed.jpg',
	 		name : 'the Books of Trees',
	 		price : 19,
	 		pubdate: new Date('2015','07','30'),
			likes:0
	 	}
 	];
 		$scope.plusone=function (index) {
		$scope.products[index].likes +=1;
	}
 }]);
