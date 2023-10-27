// 문제 - 정수부분
// 실수 flo가 매개 변수로 주어질 때, flo의 정수 부분을 return하도록 solution 함수를 완성해주세요.

// 나의 풀이
// Math.trunc 함수를 사용해서 소수점 이하를 다 제거한 정수 부분만 반환하여 주었다.
function solution(flo) {
  return Math.trunc(flo);
}

// 참고하고 싶은 풀이 - 1
// Math.floor() 함수를 사용하여 flo 소수점 이하 수를 내림한 정수를 반환하여 주었다.(이 때, flo가 0이상의 수만 들어가는 전제 조건이 있음으로 사용가능하다. 음수의 내림은 소숫점 자리가 사라지는 형태가 아님 ex)Math.floor(-3.3) => -4)
function solution(flo) {
  return Math.floor(flo);
}

// 참고하고 싶은 풀이 - 2
// 개인적으로 깔끔한 풀이는 아니라고 생각하지만 함수 공부가  될 것 같아 적어둔다.
// flo를 toString()을 사용하여 문자열로 바꿔준 뒤,
// split('.')를 사용해서 소숫점을 기준으로 정수 부분과 소수자리수 부분을 원소로 갖는 배열을 생성해 준다.
// 이때, 배열의 인덱스[0] 원소는 정수부분(문자열)이므로 찾아준뒤,
// parseInt()를 사용하여 문자열에서 수로 바꾸어 준다.
function solution(flo) {
  return parseInt(flo.toString().split('.')[0]);
}
