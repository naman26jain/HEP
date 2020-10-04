var weightInPounds;
var weightInKilograms
var heightFeet;
var heightInches;
var heightInchesTotal
var age;
var gender;

age = 33;
weightInPounds = 157;
heightFeet = 5;
heightInches = 7;
gender = "female";

if (gender == "female") {
  $('div #men-cal-display').hide();
} else {
  $('div #men-cal-display').show();
  $('div #women-cal-display').hide();
};

weightInKilograms = (weightInPounds / 2.2);
/*$('.weight-in-kilograms').html(weightInKilograms);*/

/*convert height to centimeters*/
feetToInches = (heightFeet * 12);
totalInches = (feetToInches + heightInches);
heightInCentimeters = (totalInches / 0.39370);

/*$('.height-inches-total').html(totalInches);
$('.height-cm-total').html(heightInCentimeters);*/

/*
Mifflin - St Jeor Formula

Men
10 x weight (kg) + 6.25 x height (cm) - 5 x age (y) + 5

Women
10 x weight (kg) + 6.25 x height (cm) - 5 x age (y) - 161.

*/

men = ((10 * weightInKilograms) + (6.25 * heightInCentimeters) - (5 * age) + 5);

women = ((10 * weightInKilograms) + (6.25 * heightInCentimeters) - (5 * age) - 161);

$('.cals-for-men').html(men.toFixed());
$('.cals-for-women').html(women.toFixed());


dailySugar = (men * .05) 

angular.module('formExample', [])
  .controller('ExampleController', ['$scope', function($scope) {
    $scope.master = {};

    $scope.update = function(user) {
      $scope.master = angular.copy(user);
    };

    $scope.reset = function() {
      $scope.user = angular.copy($scope.master);
    };

    $scope.reset();
  }]);