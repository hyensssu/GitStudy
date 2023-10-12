// 문제 -문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.

// 나의 풀이
// 먼저 원소가 'k'개인 배열을 생성한 뒤,
// 원소의 값을 임의로 지정해준다('0')
// map()함수르 사용하여 만들어진 배열을 'k'번 순회하며 my_string이 'k'번 들어간 배열을 생성해 준다.
// 마지막으로 join()함수를 사용해서 배열로 'k'번 묶인 my_string을 문자열로 합쳐준다.

function solution(my_string, k) {
  return Array(k)
    .fill(0)
    .map(v => my_string)
    .join('');
}

// 참고 하고 싶은 풀이 - 1
// 나는 'k'개의 원소가 들어있는 배열을 생성한 뒤, 임의의 값을 넣어주고 map()함수를 사용해서 그 자리를 my_string으로 채워 넣어 줬는데(바보같음 ㅠㅠ)
// 애초에 fill(my_string)을 해줬으면 더 간단할 일이었다.

function solution(my_string, k) {
  return Array(k).fill(my_string).join('');
}

// 참고 하고 싶은 풀이 - 2
// repeat()함수를 사용해서 주어진 문자열 'my_string'을 옵션의 count 'k'만큼 반복하여 새로운 문자열로 반환하였다.
function solution(my_string, k) {
  return my_string.repeat(k);
}

// 참고 하고 싶은 풀이 - 3
// 가장 고전적인 방법이면서 기초가 되는 for문을 사용한 풀이이다.
// k번을 순회하면서 my_string을 문자열 + 문자열 = 문자열로 연결해 준 뒤 반환해주었다.
function solution(my_string, k) {
  var answer = '';

  for (let i = 0; i < k; i++) {
    answer += my_string;
  }

  return answer;
}
