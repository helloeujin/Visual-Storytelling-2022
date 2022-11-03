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
- 


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

# 참고 자료들
- https://www.w3schools.com/js/default.asp
