// 문제 - 정수 찾기
// 정수 리스트 num_list와 찾으려는 정수 n이 주어질 때, num_list안에 n이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요.

// 나의 풀이
// find() 함수를 사용해서 num_list배열 안의 값들중에 n과 일치하는 원소가 있는지 찾고
// 그 값이 있다면 1을 return 값이 없어 undefined라면 0을 return되도록 삼항연산자를 사용하여 나타내줌
function solution(num_list, n) {
  return num_list.find(v => v === n) ? 1 : 0;
}

const solution = (num_list, n) => {
  return num_list.find(v => v === n) ? 1 : 0;
};

// 참고 하고 싶은 풀이 1.
// includes()함수를 사용해서 num_list배열이 n을 포함하고 있다면(true) 1을 포함하고 있지 않다면(false) 0을 리턴해준다.
function solution(num_list, n) {
  return num_list.includes(n) ? 1 : 0;
}

// 참고 하고 싶은 풀이 2.
// indexOf()함수를 사용해서 num_list 배열에서 n의 인덱스가 0 이상일 경우(즉 num_list에 n과 일치하는 원소가 있다), 1을 리턴, 그렇지 않다면 0을 리턴해줌.(신박)
function solution(num_list, n) {
  return num_list.indexOf(n) >= 0 ? 1 : 0;
}
