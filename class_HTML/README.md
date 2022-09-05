# HTML


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
    <title>html page</title>
  </head>
  <body>
    <h1>First Heading</h1>
    <p>First paragraph</p>
  </body>
</html>
```

- `<!DOCTYPE html>`: HTML document 라는 의미
- `<html>`: 페이지의 컨텐츠는 <html> 태그로 감싸진다
- `<head>`: 키워드, 페이지 설명 등의 meta data를 넣는 곳이다
- `<title>`: 페이지의 제목으로, tab 부분에 나타난다
- `<body>`: 페이지에 보여지는 컨텐츠를 넣는 곳이다
- `<h1>`: 가장 큰 헤딩을 넣는 태그이다
- `<p>`: 문단을 넣는 태그이다



<br/>

## 주요 HTML 요소들

HTML 태그에 다음과 같이 속성(attribute)을 부여할 수 있다.
  
```
  <tag attribute1="value1" attribute2="value2"> contents </tag>
```
  
  
#### 1) 이미지
이미지 태그는 `<img>`로 표현되며, 대표적으로 이미지 파일의 경로를 나타내는 `src`와 이미지의 정보를 알려주는 `alt`의 속성을 가지고 있다. 이미지 태그의 경우는 다른 컨텐츠를 필요로 하지 않기 때문에 닫는 태그(closing tag)를 함께 가진다. 
  
```
<img src="images/firefox-icon.png" alt="My test image" />
```
  
#### 2) 링크
