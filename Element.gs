class Element {
  constructor(name, id, status) {
      this.name = name;
      this.id = id;
      this.status = status;
  }

  build() {
    var jsonData = "{ ";
    jsonData += "\"name\": " + "\"" + this.name + "\", ";
    jsonData += "\"id\": " +  this.id + ", ";
    jsonData += "\"status\": " + this.status + " ";
    jsonData += "}"

    return jsonData;
  }

  static parse(raw) {
    let json = JSON.parse(raw);
    return new Element(json["name"], json["id"], json["status"]);
  }

  static build(elems) {
    let jsonData = "{\n"
    for (let i = 0; i < elems.length; i++) {
      jsonData += ' "' + i + '": ' + elems[i].build() + (i != elems.length - 1 ? ", \n" : "\n");
    }
    jsonData += "}"

    return jsonData;
  }
}
