// 문제 - 조건에 맞게 수열 변환하기 1
// 정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱합니다. 그 결과인 정수 배열을 return 하는 solution 함수를 완성해 주세요.

// 나의 풀이
// map함수를 사용해서 배열을 순회하며 조건에 맞는 원소들을 조작하여 재구성한 배열을 반환하여 주었다.
function solution(arr) {
  return arr.map(v => {
    if (v >= 50 && v % 2 === 0) {
      return v / 2;
    } else if (v < 50 && v % 2 === 1) {
      return v * 2;
    } else {
      return v;
    }
  });
}

// 참고 하고 싶은 풀이 - 1
// 삼항연산자를 사용하여 나타내어 주었고,
// && 연산자를 사용할 때, n이 짝수일 때, 홀수일 때를 true false로 미리 생각하고 !를 사용하여 나타내어 주었다.
function solution(arr) {
  return arr.map(n => (n >= 50 && !(n % 2) ? n / 2 : n < 50 && n % 2 ? n * 2 : n));
}
