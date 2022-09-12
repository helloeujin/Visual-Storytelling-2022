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

다음은 `xxx.css` 파일안에서 CSS가 어떠한 규칙으로 스타일링을 하는지 보자. CSS는 `selector`, 즉 스타일링할 HTML 요소를 먼저 지정한다. 그리고 `{}` 중괄호 안에 어떤 속성에 어떤 값을 부여할지 정의한다. 

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

HTML 요소는 다음과 같은 규칙으로 CSS `selector` 로 정의된다.
| | HTML 요소 | CSS selector |
|-------------| ------------- | ------------- |
| Tag names| `<p>` | `p`  |
| IDs| `id="my-email"`  | `#my-email`  |
| Classes | `class="emails"`  | `.emails` |
  

<br />

다음의 HTML 요소를 스타일링 해보자.
```
<p id="my-email">
    my@email.com
</p>
```

여기서 동일한 HTML 요소를 가르키는 `selector`는 태그 이름인 `p`와 id인 `#my-email`이 된다. 그렇다면, 이 두 개의 `selector`에 다른 값을 넣으면 어떤 결과가 나타날까?
```
p {
  color: red;
}

#my-email {
  color: green;
}
```
결론은 `green`이 된다. 그 이유는 `selector`에 스타일링이 적용되는 데에 우선순위가 존재하기 때문인다. 가장 우선시 되는 것은 `id`, 그 다음은 `class`, 마지막으로 `tag name`이 된다. 

