# JavaScript 란

> JavaScript Can Change HTML Content

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
DOM 특정 요소(element) 찾기

### 1) 태그
`<p>`, `<div>`, `<h2>` 등과 같이 HTML 태그들을 선택할 수 있다. 다만 이런 태그는 같은 태그가 어려번 사용되므로 아래와 같이 순서로서 특정 태그를 선택해 줄 수 있다. 

```
document.getElementsByTagName(태그)[순서];
```






<br />

# 참고 자료들
- https://www.w3schools.com/js/default.asp
