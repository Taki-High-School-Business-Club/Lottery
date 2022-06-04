function main() {
  
}

function test_element_build() {
  let elem = new Element("hoge", 1, Status.unMarked);
  console.log(elem.build());
  let elem2 = new Element("fuga", 2, Status.marked);
  let elem3 = new Element("piyo", 3, Status.excluded);
  let elems = [elem, elem2, elem3];
  let json = Element.build(elems);
  console.log(json);
}

function test_element_parse() {
  const json = '{ "name": "hoge", "id": 1, "status": 1 }';
  console.log(json);
  let elem = Element.parse(json);
  console.log(elem.name);
  let build = elem.build();
  console.log(build);
  let parsed = Element.parse(build);
  console.log(parsed.name);
  console.log(parsed.id);
  console.log(parsed.status);

  if (json == build) {
    console.log("passed");
  } else {
    console.log("error");
  }
}

function test_lot() {
  let elem = new Element("hoge", 1, Status.unMarked);
  let elem4 = new Element("hoge2", 5, Status.unMarked);
  let elem5 = new Element("hoge3", 17, Status.unMarked);
  let elem2 = new Element("fuga", 2, Status.unMarked);
  let elem3 = new Element("piyo", 3, Status.excluded);

  let elems = [elem, elem2, elem3, elem4, elem5];

  let lot = new Lot(elems);

  let res = lot.getRandomElements(3);

  for (let i = 0; i < res.length; i++) {
    console.log(res[i].name);
  }
}