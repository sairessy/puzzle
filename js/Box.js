class Box {
  constructor(id, x, y) {
    this.correctPos = new p5.Vector(x, y);
    this.pos = new p5.Vector(x, y);
    this.id = id;
    this.img = img.get(this.pos.x, this.pos.y, bW, bH);
    this.div = createButton("");
    this.div.style('font-size', '16px');
    this.div.style('color', 'red');
    this.div.class("peace");
    this.div.id(this.id);
    this.div.position(this.pos.x, this.pos.y);
  }

  updatePos() {
    this.div.position(this.pos.x, this.pos.y);

  }

  show() {
    noFill()
    stroke(255)
    rect(this.pos.x, this.pos.y, bW, bH); 
    image(this.img, this.pos.x, this.pos.y, bW, bH);
  }
}