// 문제 - 소문자로 바꾸기
// 알파벳으로 이루어진 문자열 myString이 주어집니다. 모든 알파벳을 소문자로 변환하여 return 하는 solution 함수를 완성해 주세요.

// 나의 풀이
// 자바스크립트의 toLowerCase()함수를 사용하여 해당문자열을 소문자로 변경해 주었다.
function solution(myString) {
  return myString.toLowerCase();
}

const solution = myString => {
  return myString.toLowerCase();
};

//--------------------------------------------------

// 문제 - 문자열의 뒤의 n글자
// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

// 나의 풀이
// my_String을 스프레드로 풀어주고 배열로 묶어준뒤,
// reverse() 함수를 사용해서 배열의 원소를 거꾸로 배치해준다.
// splice() 함수를 사용해서 맨첫번째 원소부터 n개까지의 원소를 잘라주고,
// join() 함수를 사용해서 뽑아낸 배열을 문자화 시켜주었다.
function solution(my_String, n) {
  return [...my_String].reverse().splice(0, n).reverse().join('');
}

// 참고하고 싶은 풀이 - 1
// slice() 함수를 쓰되,  my_String의 -n번째 인덱스부터 마지막 원소까지 원소를 잘라내어 새 배열을 반환해준다.
const solution = (my_string, n) => my_string.slice(-n);
