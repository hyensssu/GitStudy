// 문제 - 문자열의 앞의 n글자
// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 앞의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

// 나의 풀이
// my_string을 배열로 푼 뒤,
// slice()함수를 사용해서 첫번째 인덱스부터 'n-1'인덱스까지의 원소만 남겨두는 배열을 만든 뒤,
// join()함수로 다시 문자열로 묶어주어 반환해 주었다.
function solution(my_string, n) {
  return [...my_string].slice(0, n).join('');
}

// 참고 하고 싶은 풀이 - 1
// slice() 함수를 배열에서만 썼어서 바보같이 배열로 전환해주고 slice를 사용했었는데 문자열에서도 사용 가능한 함수였다.
function solution(my_string, n) {
  return my_string.slice(0, n);
}
