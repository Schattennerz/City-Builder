class Worker {
  constructor(x, y, width, height, color, name) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.name = name;
    this.grid = [];
    
    // Hinzufügen von Typüberprüfungen
    this.validateProperties();
  }

  validateProperties() {
    if (typeof this.x !== 'number' || typeof this.y !== 'number') {
      throw new Error('x und y müssen Zahlen sein');
    }
    if (typeof this.width !== 'number' || typeof this.height !== 'number') {
      throw new Error('width und height müssen Zahlen sein');
    }
    if (typeof this.color !== 'string') {
      throw new Error('color muss ein String sein');
    }
    if (typeof this.name !== 'string') {
      throw new Error('name muss ein String sein');
    }
  }

  // Hier könnten weitere Methoden hinzugefügt werden
}

export default Worker;
