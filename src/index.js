module.exports = function toReadable (number) {
  var dig = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  var tn = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen', 'eighteen','nineteen'];
  var ty = ['twenty','thirty','forty','fifty','sixty','seventy','eighty', 'ninety'];
  var hun = 'hundred';

  var numArray = Array.from(number.toString()).map(Number);

  if (numArray.length == 3){
    if (numArray[1] == 1){
      return dig[numArray[0]] + ' ' + hun + ' ' + tn[numArray[2]];
    } else if(numArray[1] == 0 && numArray[2] == 0){
      return dig[numArray[0]] + ' ' + hun;
    } else if(numArray[1] == 0){
      return dig[numArray[0]] + ' ' + hun + ' ' + dig[numArray[2]];
    } else if(numArray[2] == 0){
      return dig[numArray[0]] + ' ' + hun + ' ' + ty[numArray[1]-2];
    } else {
      return dig[numArray[0]] + ' ' + hun + ' ' + ty[numArray[1]-2] + ' ' + dig[numArray[2]];
    }
  } else if(numArray.length == 2){
    if (numArray[0] == 1){
      return tn[numArray[1]];
    } else if (numArray[1] == 0){
      return ty[numArray[0]-2];
    } else {
      return ty[numArray[0]-2] + ' ' + dig[numArray[1]];
    }
  } else if (numArray.length == 1){
    return dig[numArray[0]];
  } else {

  }
}
