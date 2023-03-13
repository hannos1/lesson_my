console.log('  .... . -.--   .--- ..- -.. .  '.trim().split(' '))

let arr = '  .... . -.--   .--- ..- -.. .  '.trim().split(' ');
console.log(arr[3],'///')
let str = '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011';
// console.log('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'.length)

// 0010 1110 .
// 0010 1101 -
// 0010 0000 空格

// 1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011
for(let i = 0;i<str.length - 3;i+=4){
   let s = str.substring(i,i+4);
  //  console.log(s);
  switch(s){
    case '1100':console.log('1100','.');break;
    case '0000':console.log('0000',' ');break;
    case '1111':console.log('1111','-');break;
  }
}


// 1100 .  注意最后一个可能只有 11
// 000000 空格
// 111111 -
// 00000000000000 3个空格

// 11 .
// 111111 -
// 00 是空字符
// 000000 是空格
// 00000000000000 是三个空格


var decodeBits = function(bits){
  // ToDo: Accept 0's and 1's, return dots, dashes and spaces
  // bits.replace('111', '-').replace('000', ' ').replace('1', '.').replace('0', '')
  console.log(bits)
  let tempbits = bits;
  let speedset = new Set(tempbits.split('0'));
  let speedarr = [];
  let speed = 0;
  for(let item of speedset){
    if(item.length != 0){
       speedarr.push(item.length)
    }
  }
  speedarr.sort();
  if(speedarr.length==1){
    speed = speedarr[0]
  }else{
    speed = speedarr[1]/3
  }
  
  console.log(speedarr,'///')
  let str = '';
  for(let i = 0;i<bits.length;){
      if(bits[i] == '1'){
        let index = bits.indexOf('0',i);
        if(index == i+speed){
          str += '.';
          i += speed;
          continue;
        }else if(index == i+speed*3){
          str += '-';
          i += speed*3;
          continue;
        }else{
          if((bits.length - i)/speed == 3){
            str += '-';
          }else{
            str += '.';
          }
          break;
        }
      }else{
        let index = bits.indexOf('1',i);
        if(index == i+speed){
          i += speed;
          continue;
        }else if(index == i+speed*3){
          str += ' ';
          i += speed*3;
          continue;
        }else{
          str += '   ';
          i += speed*7;
          continue;
        }
      }
  }
  console.log(str)
  return str;
}

var decodeMorse = function(morseCode){
  // ToDo: Accept dots, dashes and spaces, return human-readable message
  // morseCode.replace('.', MORSE_CODE['.']).replace('-', MORSE_CODE['-']).replace(' ', '')
let arr = morseCode.trim().split(' ');
console.log(arr)
let str = '';
for(let i = 0;i<arr.length;i++){
  if(MORSE_CODE[arr[i]]){
    str += MORSE_CODE[arr[i]]
  }else{
    str += " ";
    i++;
  }
}
return str;
}


let se = new Set('11001100110011000000'.split('1'))
// console.log(se)
for(let item of se){
  console.log(item.length)
}

let speedarr = [];
    for(let item of se){
      if(item.length != 0){
         speedarr.push(item.length)
      }
    }
    console.log(speedarr)

