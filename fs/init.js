// Load Mongoose OS API
load('api_timer.js');
load('api_arduino_ssd1306.js');


// Initialize Adafruit_SSD1306 library (I2C)
let d = Adafruit_SSD1306.create_i2c(4 /* RST GPIO */, Adafruit_SSD1306.RES_128_32); /*smaller screen*/
// Initialize the display.
d.begin(Adafruit_SSD1306.SWITCHCAPVCC, 0x3c, true /* reset and use the 0.91 adress which is 0X3c  */);
d.display();
let i = 0;

let showStr = function(d, str) {
  d.clearDisplay();
  d.setTextSize(2);
  d.setTextColor(Adafruit_SSD1306.WHITE);
  d.setCursor(d.width() / 4, d.height() / 4);
  d.write(str);
  d.display();
};

Timer.set(1000 /* milliseconds */, Timer.REPEAT, function() {
  showStr(d, "i = " + JSON.stringify(i));
  print("i = ", i);
  i++;
}, null);

