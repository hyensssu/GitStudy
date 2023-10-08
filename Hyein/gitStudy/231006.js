// 문제 -  문자열 바꿔서 찾기
// 문자 "A"와 "B"로 이루어진 문자열 myString과 pat가 주어집니다. myString의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중 pat이 있으면 1을 아니면 0을 return 하는 solution 함수를 완성하세요.

// 나의 풀이
// 먼저 myString으로 받은 문자열을 하나하나 배열의 원소로 풀어주고,
// 그 안에서 map을 돌려서 A는 B로, B는 A로 바꿔준 뒤,
// join함수를 사용하여 문자열로 합쳐준다.
// 이때 변환한 문자가 pat의 문자를 포함하고 있으면 1을 아니면 0을 return 하도록 삼항연산자를 사용하여 도출해 준다.

function solution(myString, pat) {
  return [...myString]
    .map(item => {
      if (item === 'A') {
        return 'B';
      } else {
        return 'A';
      }
    })
    .join('')
    .includes(pat)
    ? 1
    : 0;
}

// 참고 하고 싶은 풀이
// 화살표 함수로 함수를 표현해 주었고,
// 내가 작성한 코드에서 map함수 안의 if-else문도 삼항연산자로 작성해주었다.(내가 작성한것에서 크게 다르지 않아서 기분좋음:-))
// 그리고 함수 안에서 식이 하나뿐이므로 중괄호와 return을 써주지 않았다는 것이 포인트!!!

const solution = (myString, pat) =>
  [...myString]
    .map(v => (v === 'A' ? 'B' : 'A'))
    .join('')
    .includes(pat)
    ? 1
    : 0;

//--------------------------------------------------

// 문제 - 대문자로 바꾸기
// 알파벳으로 이루어진 문자열 myString이 주어집니다. 모든 알파벳을 대문자로 변환하여 return 하는 solution 함수를 완성해 주세요.

// 나의 풀이
// 함수를 화살표 함수로 셋팅해 준 뒤,
// 매개변수 myString을 toUpperCase()함수를 사용해서 대문자로 변환

const solution = myString => myString.toUpperCase();
