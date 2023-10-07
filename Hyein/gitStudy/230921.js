// 프로그래머스 - 모음 제거

function solution(my_string) {
  return Array.from(my_string)
    .filter(t => {
      return !'aeiou'.includes(t);
    })
    .join('');
}
