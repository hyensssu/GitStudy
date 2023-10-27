// 문제 - 가운데 글자 가져오기
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 나의 풀이
// s의 길이를 변수 len에 할당해 준 뒤,
// 삼항연산자를 사용하여 len이 짝수일 경우, 아닐경우(홀수일 경우)
// 각각 substr() 함수를 사용하여 가운데 값을 찾아 잘라내어 반환하여 주었다.

function solution(s) {
  const len = s.length;
  return !(len % 2) ? s.substr(len / 2 - 1, 2) : s.substr(Math.trunc(len / 2), 1);
}

// 참고 하고 싶은 풀이 - 1
// len을 따로 선언, 할당해주지 않고,
// 짝수일 경우와 홀수일 경우 substr()에서 시작인덱스를 ceil()함수를 사용하여 맞춰주고,
// 잘라내는 갯수를 삼항연산자 식을 써서 구해주었다.
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
