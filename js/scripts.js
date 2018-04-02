function Phone(brand, color, display, resolution, camera, price) {
	this.brand = brand;
  this.color = color;
  this.display = display;
  this.resolution = resolution;
  this.camera = camera;
  this.price = price;
}

Phone.prototype.printInfo = function() {
  console.log("The phone brand is " + this.brand + ", color is " + this.color + ". " + "It's display is " + this.display + " inch " + "with " + this.resolution + " resolution " + "and " + this.camera +" megapixel camera." + " The price is " + this.price + ".");
}


var SamsungGalaxyS6 = new Phone("Samsung", "black", 4.7, "1334x2560", 16, 1111);
var iPhone6S = new Phone("Apple", "silver", 4.7, "1334x750", 12, 2250);
var OnePlusOne = new Phone("OnePlus", "white", 4.7, "1920x1080", 13,  2222);

SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();