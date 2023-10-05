// 문제 - 첫 번째로 나오는 음수
//정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 음수가 없다면 -1을 return합니다.

// 나의 풀이
// num_list배열을 돌면서 가장 첫번째로 만나는 음수를  find함수를 사용해서 찾아, targetNum변수로 선언해준 뒤,
// targetNum가 true(배열 내 음수가 있으면) targetNum의 인덱스를 찾아서 반환 하고 targetNum가 false(배열 내 음수가 없으면) -1을 반환 한다.
function solution(num_list) {
  const targetNum = num_list.find(item => item < 0);
  return targetNum ? num_list.indexOf(targetNum) : -1;
}

// 참고 하고 싶은 풀이
// 우선 함수를 화살표 함수로 간단히 작성하였다.
// findIndex를 사용하여 num_list배열을 돌면서 첫번째로 만나는 음수의 인덱스 값을 반환한다.(이때, findIndex에서 찾는 음수값이 배열안에 없을 경우(undefined일 경우), findIndex는 -1을 반환한다.)
const solution = num_list => num_list.findIndex(v => v < 0);
