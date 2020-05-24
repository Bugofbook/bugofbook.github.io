# React學習

如何學習React

## Parameter

* Tag:React

## Content

### 學習資源

通常學習React最好最完整的地方就是[官方網站](https://zh-hant.reactjs.org/)了。

### React的中心理念和學習前的必要知識

React有二大理念

1. 一切都是Javascript：正常網頁上會有的HTML和CSS在React中都會由Javascript來負責，壞處是關注點不分離。好處是程式碼不但可以在網頁上顯示，也可以在不是網頁的地方顯示。
2. 使用函數式程式設計：雖然Javascript本來就可以使用函數式程式設計，但在ES6之前不是設計的主流，一直到ES6的大改造後，使用函數式設計才方便了許多。

#### 必要知識

1. 函數式程式設計：因為React比較進階的HOC用法是以函數式程式設計為前提來使用的，如果不清楚函數式程式設計的理念，會無法使用HOC
2. 新興的ES語法：理論上React可以不使用ES6之後的語法，官方網站也有對應的教學。但因為大多數使用React的人都至少有ES6~7的知識，建議學習React前還是要先知道新興的ES語法

### React的組成

學習React有二大重點，Compoment和Element。所有的React程式都是這二者的組合

#### Element

Element是React的一個特別的Javascript-Object，用來描述螢幕上實際出現內容。有原生的React.create寫法或是JSX寫法。

``` javascript
let HalloWorld = <div>Hallo World</div>
```

#### Component

一個用來控制Element的Javascript-Function。有傳統的Class寫法和新興的Hook寫法。

``` javascript
import React from "react";
import {useEffect,useState} from "react";

export App = () => {
    const [post,setPost] = useState("")
    useEffect(()=> {
        setPost("Hallo World!")
    },[])
    return (
        <div>{post}</div>
    )
}
```
