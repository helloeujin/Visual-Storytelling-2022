## CSS 란

CSS(Cascading Style Sheets)은 HTML 컨텐츠가 어떻게 웹페이지에 보여질지 결정한다. 기본적인 문서 스타일링을 제공한다. 이러한 CSS는 다음가 같이 HTML 요소에 직접 추가 가능하다. 이 방법은 HTML 파일을 복잡하게 만들 수 있다.

```
<p style="color: red; font-weight: 50px"> My Cat </p>
```

<br />

CSS 파일을 따로 만드는 것이 훨씬 스타일링을 정의하고 관리하는데 용이하다. 현재 CSS 파일은 resources 폴더 안에 들어있고, 이 파일은 HTML 파일의 `<head>` 안에 다음과 같이 추가될 수 있다.


```
<head>
  <link rel="stylesheet" href="./resources/styles.css">
</head>
```

<br />

## CSS Syntax

CSS 파일에서 

```
selector {
    property1: value1;
    property2: value2;
}
```

```
p {
    font-family: "Comic Sans MS";
    border: 3px dotted green;
}
```
