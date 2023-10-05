// 문제 - n의 배수
//정수 num과 n이 매개 변수로 주어질 때, num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.

// 나의 풀이
// num이 n의 배수라면 n으로 나누었을 때 나머지는 0일 것이다.

function solution(num, n) {
  return num % n === 0 ? 1 : 0;
}

// 문제 - 뒤에서 5등 위로
// 정수로 이루어진 리스트 num_list가 주어집니다. num_list에서 가장 작은 5개의 수를 제외한 수들을 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// 나의 풀이
// 먼저 sort로 인자로 들어온 배열을 오름차순 배열로 만든 뒤, 5번째로 작은 수(인덱스4)부터 마지막까지의 수가 담긴 배열을 뽑아낸다.

function solution(num_list) {
  return num_list
    .sort((a, b) => {
      return a - b;
    })
    .slice(5);
}
