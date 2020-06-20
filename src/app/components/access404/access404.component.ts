import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access404',
  templateUrl: './access404.component.html',
  styleUrls: ['./access404.component.css']
})
export class Access404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
function withoutVowels(string) {

  var withoutVowels = "";
  for (var i = 0; i < string.length; i++) {
      if (!isVowel(string[i])) {
        withoutVowels += string[i];
      }
    }
    return withoutVowels;
}
function vowelsToNumbers(string) {

  var withoutVowels = "";
  for (var i = 0; i < string.length; i++) {
      if (!isVowel(string[i])) {
        withoutVowels += string[i];
      }else{
        withoutVowels += changeVowel(string[i])
      }
    }
    return withoutVowels;
}

function isVowel(char) {
  return 'aeiou'.includes(char);
}
function changeVowel(char) {
  console.log(char)
  if (char == 'a') {
    return '4'
  } else if (char == 'e') {
    return '3'
  }else if (char == 'i') {
    return '1'
  }else if (char == 'o') {
    return '0'
  }else{
    return 'ū'
  }
}

console.log(vowelsToNumbers('Hello World!'));
