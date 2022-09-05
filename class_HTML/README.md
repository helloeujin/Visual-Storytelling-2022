## HTML 이란


HTML(Hyper Text Markup Language)은 웹페이지에서 컨텐츠의 구조를 정의하는 마크업 언어이다. 이러한 구조는 태그에 의해서 이루어진다. 컨텐츠를 미리 정의한 태그로 감싸면, 그 컨텐츠의 속성이 정의가 된다. 즉, `<tag> contents </tag>`의 형태가 된다.


다음은 문단 태그인 `<p>`를 사용한 경우이다. 여기서 p는 paragraph를 뜻한다. 이 태그는 여는 태그(opening tag)인 `<p>`와 닫는 태그(closing tag)인 `</p>`로 이루어진다. 이 두 개의 태그안에 컨텐츠를 넣는다. 

```
<p> 고양이 </p>
```

<br/>

## HTML 문서의 구조

HTML 페이지가 어떻게 구성되었는지 보자.

```
<!DOCTYPE html>
<html>
  <head>
    <title>Page title</title>
  </head>
  <body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>
  </body>
</html>
```

- `<!DOCTYPE html>`: HTML document 라는 의미
- `<html>`: 페이지의 컨텐츠는 <html> 태그로 감싸진다
- `<head>`: 키워드, 페이지 설명 등의 meta data를 넣는 곳이다
- `<title>`: 페이지의 제목으로, tab 부분에 나타난다
- `<body>`: 페이지에 보여지는 컨텐츠를 넣는 곳이다
- `<h1>`: 가장 큰 문단 제목을 넣는 태그이다
- `<p>`: 문단을 넣는 태그이다

<br/>
<img width="480" alt="Screen Shot 2022-09-05 at 9 04 07 PM" src="https://user-images.githubusercontent.com/2341775/188446826-82374f05-27a8-4a83-b862-3adb6213a826.png">

  
  
<br/>

## 주요 HTML 요소들

- HTML 태그에 다음과 같은 형태로 속성(attribute)을 부여할 수 있다. `<tag attribute1="value1" attribute2="value2"> contents </tag>`. 자주 쓰이는 속성은 아래에 정리되어 있다. 
  
- 태그 안에 다른 태그를 넣을 수 있다. 예를 들어, 문단 태그에서 특정 단어를 강조하고 싶을 때 `<strong>`로 그 단어들을 감싼다. 
```
<p> <strong>First</strong> paragraph </p>
```
  

#### 1) 이미지
이미지 태그는 `<img>`로 표현되며, 대표적으로 이미지 파일의 경로를 나타내는 `src`와 이미지의 정보를 알려주는 `alt`의 속성을 가지고 있다. 이미지 태그의 경우는 다른 컨텐츠를 필요로 하지 않기 때문에 닫는 태그(closing tag)를 함께 가진다. 
  
```
<img src="images/firefox-icon.png" alt="My test image" />
```
  
#### 2) 문단 제목
문단 제목은 여섯 단계로 이루어 지며 (`<h1> - <h6>`), 미리 정해진 크기 대로 페이지에 보여진다.
```
<h1> H1 heading </h1>
<h2> H2heading </h2>
<h3> H3 heading </h3>
<h4> H4 heading </h4>
```
  
#### 3) 링크
구글로 연결되는 링크를 만들어보자. 이는 `<a>` 태그를 사용하며, 링크 주소는 `href` 속성에 넣어주면 된다.
```
<a href="https://www.google.com/"> Google </a>
```

#### 4) 목록 
순서 없는 목록은 `<ul>` 태그를 사용하고, 순서 있는 목록은 `<ol>`를 사용한다. 이 목록의 각 항복은 `<li>`로 나타낸다.

```
<ul>
  <li>technologists</li>
  <li>thinkers</li>
  <li>builders</li>
</ul>
```

#### 5) Div 
`<div>` 태그는 division의 약자로 HTML 페이지 내의 레이아웃 혹은 틀을 만들 때 사용된다.

```
<div>
  <h1>A section of grouped elements</h1>
  <p>Here’s some text for the section</p>
</div>
<div>
  <h1>Second section of grouped elements</h1>
  <p>Here’s some text</p>
</div>
```
  
  
<br/>

## 참고 자료들
- [W3Schools](https://www.w3schools.com/html/html_intro.asp)
- [Codecademy](https://www.codecademy.com/learn/learn-html/modules/learn-html-elements)
