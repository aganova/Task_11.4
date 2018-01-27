function Phone(brand, color, price, price_reduction, phone_stored) {
	this.brand = brand;
	this.color = color;
	this.price = price;
	this.price_reduction = price_reduction;
	this.phone_stored = phone_stored;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", the color is " + this.color + ", the price is " + this.price + " zł.");
};

Phone.prototype.addBargainInfo = function() {
	console.log("What a bargain! On Black Friday the prices of all " + this.brand + "'s phones are up to " + this.price_reduction*100 + "%" + " lower!!!");
};

Phone.prototype.checkHowManyLeft = function() {
	if (this.phone_stored === 0) {
		console.log("Sorry, all items are sold out!!! :(");
	} else if (this.phone_stored > 0 && this.phone_stored < 6)  {
		console.log("Hurry up! There have been only " + this.phone_stored + " items left in the store.");
	} else {
		console.log("Don't worry. There are still many items in the store.");
	}
};

var samsungGalaxyS6 = new Phone("Samsung", "black", 1600, 0.4, 0);
var iPhone6s = new Phone("Apple", "silver", 2200, 0.2, 10);
var samsungGalaxyA8 = new Phone("Samsung", "golden", 2100, 0.4, 15);
var nokia5 = new Phone("Nokia", "black", 780, 0.3, 0);
var huaweiP10 = new Phone("Huawei", "silver", 1750, 0.5, 50);
var iPhoneX = new Phone("Apple", "black", 5000, 0.2, 2);

var phoneArray = [samsungGalaxyS6, iPhone6s, samsungGalaxyA8, nokia5, huaweiP10, iPhoneX];
var phoneQuantity = phoneArray.length; 

for (var i = 0; i < phoneQuantity; i++) {
	phoneArray[i].printInfo();
	phoneArray[i].addBargainInfo();
	phoneArray[i].checkHowManyLeft();
}
