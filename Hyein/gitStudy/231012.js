// 문제 - flag에 따라 다른 값 반환하기
// 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.

// 나의 풀이
// 삼항연산자를 사용하여 flag가 true 일 경우와 아닐경우 의도한 식을 반환하게 해준다.
function solution(a, b, flag) {
  return flag ? a + b : a - b;
}

const solution = (a, b, flag) => {
  return flag ? a + b : a - b;
};

//--------------------------------------------------

// 문제 - n 번째 원소까지
// 정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 n 번째 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// 나의 풀이
// splice() 함수를 사용해서 첫번째 원소([0])부터 n개의 원소를 포함하는 새 배열을 만들어준다.
function solution(num_list, n) {
  return num_list.splice(0, n);
}

//--------------------------------------------------

// 문제 - 마지막 두 원소
// 정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.

// 나의 풀이
// num_list의 'length'를 이용해서 배열의 마지막원소의 값과 그 이전 원소값을 알아내서 비교하고,
// 삼항연산자를 사용해 조건이 true일 때와 false일 때의 식을 달아준다.
// 이때 push()함수는 기존배열을 변화시키므로 num_list를 반환해준다.
function solution(num_list) {
  const last = num_list[num_list.length - 1];
  const secondLast = num_list[num_list.length - 2];
  last > secondLast ? num_list.push(last - secondLast) : num_list.push(last * 2);
  return num_list;
}

// 참고하고 싶은 풀이 - 1
// 배열의 구조분해 할당을 사용해서, 배열의 마지막 원소와 그 이전 원소를 한꺼번에 last와 prev라는 변수에 할당해주고,
// 삼항연산자를 사용해 마지막 원소와 그 이전 원소를 비교후 조건의 bool에 따라 값을 반환해준다.(이때, 스프레드 연산자를 사용해주었다.)
function solution(num_list) {
  const [last, prev] = [num_list[num_list.length - 1], num_list[num_list.length - 2]];

  return last > prev ? [...num_list, last - prev] : [...num_list, last * 2];
}

// 참고하고 싶은 풀이 - 2
// (오!! 했던 풀이 - 나도 이렇게 한번 더 생각해서 깔끔하게 코드 짜고 싶다고 생각들었다.)
// reverse() 함수를 사용하여 본래 배열의 맨 마지막 원소와 이전 원소를 각각 맨 첫번째 원소와 그 다음 원소로 만들어 구조분해 할당을 사용하여 각각 변수에 할당해 준 뒤,
// 배열의 스프레드 연산자를 활용하여 기존의 num_list를 펼쳐주고, 맨 뒤에 추가되는 원소는 삼항연산자를 사용하여 주어진 조건의 bool에 따른 식을 반환해 준다.
function solution(num_list) {
  const [a, b] = [...num_list].reverse();
  return [...num_list, a > b ? a - b : a * 2];
}
