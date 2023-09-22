//제곱수 판별하기
// 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.

// 풀이
// Math.sqrt()로 n의 제곱근을 구한 뒤,
// Number.isInteger를 사용해서 제곱근이 정수인지 아닌지 판별
// 정수가 맞다면 n은 완전제곱수일 것이고 정수가 아니라면 완전제곱수가 아닐 것이다.
function solution(n) {
  if (Number.isInteger(Math.sqrt(n))) {
    return 1;
  } else {
    return 2;
  }
}

// 기억해 두고 싶은 다른 사람 풀이
// if문을 쓰지 않고 조건연산자를 써서 코드를 더 간소화 하였다.
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}
