# CSS 란

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

# CSS Syntax

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

# CSS Selectors

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

<br />

여기서 동일한 HTML 요소를 가르키는 `selector`는 태그 이름인 `p`와 id인 `#my-email`이 된다. 그렇다면, 이 두 개의 `selector`에 다른 값을 넣으면 어떤 결과가 나타날까?
```
p {
  color: red;
}

#my-email {
  color: green;
}
```

<br />

결론은 `green`이 된다. 그 이유는 `selector`에 스타일링이 적용되는 데에 우선순위가 존재하기 때문인다. 가장 우선시 되는 것은 `id`, 그 다음은 `class`, 마지막으로 `tag name`이 된다. 

<br />

# Fonts
CSS에서 폰트는 `font-family`라는 속성으로 정의된다. 다음의 다섯가지 폰트가 기본적으로 제공된다. 

<img width="126" alt="Screen Shot 2022-09-12 at 8 30 41 PM" src="https://user-images.githubusercontent.com/2341775/189642772-9afdb780-a80b-4b56-9d4d-77d9edacbb5a.png" />

이 외에 좀 더 다양한 폰트 스타일을 사용하고 싶다면, [Google Fonts](https://fonts.google.com/)를 이용하는 방법이 있다. 링크 내에서 마음에 드는 폰트를 고른 후, `<head>` 안에 다음과 같이 링크를 포함시켜준다. 아래의 예제에서는 `Roboto` 폰트 패밀리가 추가가 되었다.

```
<head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
</head>
```

<br />

Id가 `my-email`인 HTML 요소의 폰트를 `Roboto`로 업데이트 해보자. 여기에 `Roboto` 이외에 `serif`가 추가된 것을 볼 수 있다. 이는 브라우저나 오퍼레이팅 시스템에 따라 `Roboto`가 지원이 되지 않을 경우를 대비해 다음 우선순위의 폰트를 정의한 것이다.
```
#head {
    font-family: 'Roboto', serif;
}
```

# CSS Box Model
다음은 CSS의 레이아웃을 보여준다. 

<img width="430" alt="Screen Shot 2022-09-12 at 8 54 08 PM" src="https://user-images.githubusercontent.com/2341775/189646916-654470c1-c250-4e89-b0b1-8535c92b399f.png">

<br />

위의 레이아웃이 실제로 어떻게 적용되는지 아래의 CSS를 적용해 살펴보자.
```
div {
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
}
```

<br />

# Width and Height
`width`와 `height` 는 HTML 요소의 너비와 높이를 결정한다.

```
div {
  height: 200px;
  width: 50%;
  background-color: powderblue;
}
```
여기에서 `div`의 높이는 200 pixels가 되고, 너비는 Parent element `width`의 50%가 된다는 것을 의미한다. CSS에는 길이를 정의하는 다양한 단위가 있는데, 자세한 내용은 [여기](https://www.w3schools.com/css/css_units.asp)에서 확인할 수 있다.


<br />

# Position
`position` 속성은 HTML 요소가 페이지 내에서 어떻게 위치해야하는 지를 정의하며, 다섯가지 종류가 있다.

- `static`: 기본 위치로 페이지의 흐름을 따른다
- `relative`: 기본 위치에 대한 상대적인 위치
- `absolute`: Parent 요소 혹은 `body`를 기준으로 절대적인 위치
- `fixed`: 웹페이지가 아닌 스크린이 보여지는 영역(viewport)을 기준으로 절대적인 위치, 스크롤이 되어도 움직이지 않는 고정된 위치를 갖는다
- `sticky`: 스크롤 위치에 따라 `relative` 혹은 `fixed`가 된다. Parent 요소를 기준으로 `relative` 위치이지만 Parent 요소가 viewport에서 벗어나기 시작하면 `fixed`가 된다

<br />

여기서 `absolute`와 `fixed` 같이 절대적인 위치를 하면, HTML 요소들이 겹치는 경우가 생긴다. 이때, 이 요소들의 겹치는 순서는 `z-index`로 결정할 수 있다.

```
img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}
```

<br />

# Inline vs Block


<br />

# Interaction

- Hover

<br />



# Animation
- Transform

<br />


# Responsive

```
@media screen and (min-width: 480px) {
  #leftsidebar {width: 200px; float: left;}
  #main {margin-left: 216px;}
}
```

<br />



