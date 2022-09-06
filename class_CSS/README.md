## CSS 란

CSS(Cascading Style Sheets)은 HTML 컨텐츠가 어떻게 웹페이지에 보여질지 결정한다. 기본적인 문서 스타일링을 제공한다. 이러한 CSS는 다음가 같이 HTML 요소에 직접 추가 가능하다. 

```
<p style="color: red; font-weight: 50px"> My Cat </p>
```

실제로는 CSS를 하나의 파일로 만들어서, HTML 요소 혹은 속성에 따라 스타일링을 정의한다. 우리의 CSS 파일은 resources 폴더 안에 들어있다 (`./resources/styles.css`). 이 파일은 HTML 파일의 `<head>`안에 다음과 같이 추가될 수 있다.

```
<link rel="stylesheet" href="./resources/styles.css">
```
