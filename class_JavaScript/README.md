# JavaScript 란

웹페이지를 Dynamic하게 만들고 Interaction을 넣을 수 있는 것은 JavaScript 덕분이다

```
<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>
```

<br />

JavaScript 파일을 따로 만들어서 관리할 수 있다. 이 파일은 HTML 파일의 `<body>` 안에 다음과 같이 추가될 수 있다.

```
<script src="myScript.js"></script>
```


<br />


# 선택자
DOM 특정 요소(element) 선택하기

### 1) 태그
`<p>`, `<div>`, `<h2>` 등과 같이 HTML 태그들을 선택할 수 있다. 다만 이런 태그는 같은 태그가 여러번 사용되므로 아래와 같이 순서를 부여해 특정 요소를 선택 가능하다.

```
document.getElementsByTagName(태그)[순서];
```


### 2) 클래스
클래스도 위의 태그와 같이 여러 요소들을 선택할 수 있다. 아래와 같이 순서를 부여해 특정 요소를 선택 가능하다.

```
document.getElementsByClassName(클래스)[순서];
```


### 3) 아이디
아이디는 유일한 값이므로 하나만 선택 가능하다.

```
document.getElementById(아이디);
```



<br />


# HTML 내용 업데이트하기
- `<button>` 태그에서 `onclick`으로 click 이벤트를 만든다.
- `document.getElementById("demo")`를 통해 `demo`가 id인 요소를 선택한다.
- 여기에 `.innerHTML`으로 안의 내용을 업데이트 할 수 있다.

```
<!DOCTYPE html>
<html>
<body>

<h2>HTML 내용 업데이트 하기</h2>

<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>

</body>
</html>
```

<br />

# HTML 속성 업데이트하기
- `<button>` 태그에서 `onclick`으로 click 이벤트를 만든다.
- `document.getElementById("myImage")`를 통해 `myImage`가 id인 요소를 선택한다.
- 여기에 `.src`으로 속성 src를 업데이트 할 수 있다.

```
<!DOCTYPE html>
<html>
<body>

<h2>HTML 속성 업데이트하기</h2>

<p>Image 태그의 속성인 `src` 업데이트해서 파일을 바꾸기</p>

<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">불 켜키</button>

<img id="myImage" src="pic_bulboff.gif" style="width:100px">

<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">불 </button>

</body>
</html>

```

<br />

# HTML 스타일 업데이트하기

- Font size: 
`document.getElementById("demo").style.fontSize = "35px";`


- Display: 
`document.getElementById("demo").style.display = "none";`

<br />



# 이벤트
- `<button>` 태그에서 `onclick`으로 click 이벤트를 만든다.
- `document.getElementById("demo")`를 통해 `demo`가 id인 요소를 선택한다.
- 여기에 `.innerHTML`으로 내용을 업데이트 할 수 있다.
- `Date()` 함수를 이용해서 현재 시간을 구한다.


```
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript 이벤트</h2>
<p>버튼 클릭해서 시간 보여주기</p>

<button onclick="displayDate()">지금 시간은?</button>

<script>
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
</script>

<p id="demo"></p>

</body>
</html> 

```


<br />

# If Else 구문
If로 시작하는 조건문이다. `if` 뒤 괄호에 조건이 오고, 값이 조건에 맞으면 true로 if 문의 내용이 실행된다. if에 맞지 않고 `else if` 조건에 맞으면 else if 문의 내용이 실행된다. 이 외의 모든 경우에 `else` 문의 내용이 실행된다. 

```
<!DOCTYPE html>
<html>
<body>

<h2>If Else</h2>

<p>시간에 따른 인사:</p>

<p id="demo"></p>

<script>
const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.getElementById("demo").innerHTML = greeting;
</script>

</body>
</html>
```


<br />

# 참고 자료들
- https://www.w3schools.com/js/default.asp
