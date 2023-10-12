// 문제 - 공배수
// 정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.

// 나의 풀이
// 먼저 number이 n, m의 배수라면 n,m으로 나누었을 때, 나머지가 0, 즉 나누어 떨어져야 한다.
// 삼항 연산자를 사용하여 조건문을 간단하게 나태내 주었다.

function solution(number, n, m) {
  return number % n === 0 && number % m === 0 ? 1 : 0;
}

const solution = (number, n, m) => {
  return number % n === 0 && number % m === 0 ? 1 : 0;
};
