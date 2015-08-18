var samePair = function(){
  var indexA = 0, indexB = 0, arrayA=[], arraryB=[], common = [];

  function compare(x, y) {
    if(x === y) {
      return 0;
    }else if(x < y) {
      return 1;
    }else{
      return -1;
    }
  }

  function loop() {
    if(indexA < arrayA.length && indexB < arraryB.length) {
      var result = compare(arrayA[indexA], arraryB[indexB]);

      switch (result) {
        case 0:
          common.push(arraryB[indexB]);
          ++indexA;
          ++indexB;
          break;
        case -1:
          ++indexB;
          break;
        case 1:
          ++indexA;
          break;
      }
      loop();
    }
  }

  function init(a, b) {
    arrayA = a;
    arraryB = b;
    loop();
    return common;
  }
  return {
    init: init
  };
}