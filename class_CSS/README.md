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

CSS는 `selector`, 즉 스타일링할 HTML 요소를 먼저 지정한다. 그리고 `{}` 중괄호 안에 어떤 속성에 어떤 값을 부여할지 정의한다. 

```
selector {
    property1: value1;
    property2: value2;
}
```

아래는 HTML에서 스타일링할 요소인 `<p>`를 선택하고, `color`에는 `red`를 그리고 `font-weight`에는 `50px`를 부여한 것이다.
```
p {
  color: red;
  font-weight: 50px;
}
```


<br />

## CSS Selectors

이러한 `selector`로는 HTML 요소나, `id` 혹은 `class` 같은 HTML 속성이 될 수도 있다. 아래의 HTML 문서를 살펴보자. 여기서 HTML 요소는 `<p>` 이고, 속성으로는 `id`인 `my-email`과 `class`인 `emails`가 정의되어 있다. 

```
<p id="my-email" class="emails">
    brenners@newschool.edu
</p>
```

위의 
    border: 3px dotted green;
