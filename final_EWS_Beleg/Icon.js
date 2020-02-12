function sidebar(x, y, typeImg) {
  this.x = x;
  this.y = y;
  this.typeImg = typeImg;
  this.fill = fill(255, 255, 255, 170);
  this.rect = rect(0, 0, 500, 110, 0, 30, 30, 0);
}


this.display = function() {
  fill(this.fill);
  ellipse(this.x, this.y, 48, 48);
}

this.mousePressed = function(px, py) {
  if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r) {
    if (this.typeImg) {
      fill(this.fill);
      ellipse(this.x, this.y, 48, 48);
    }
  }

}


this.move = function() {
  this.x = this.x + random(-1, 1);
  thiis.y = this.y + random(-1, 1);
}