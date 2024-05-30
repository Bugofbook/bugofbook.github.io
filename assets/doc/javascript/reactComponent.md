# ReactComponent

ReactComponent說明

## Parameter

* Tag:React

## Content

### 什麽是ReactComponent

Component在React中是指可以產生ReactElement的物件。現在一共有二種建構方法，第一種是以Javascript的Class語法為基礎的建構方法，第二種是以Javascript的Hook模式為基礎的建構方法。

#### ClassComponent

React的ClassComponent簡單來說就是利用Class語法，讓component來繼承 React.component 這個類別。

* 因為Class在使用方法時要先bind和call函式，Class版的Component當然也要做同樣的事情。
* 因為Class在改變內部狀態時要呼叫方法才能改變內部狀態，這也產生了ClassComponent特有的生命週期。目的是在ClassComponent產生ReactElement的前後再穿插一些小行程來改變內部狀態。

#### HookComponent

React的HookComponent簡單來說就是利用Hook模式，讓Javascript的函式也能有內部狀態。

* HookComponent運行的原理就像是利用Hook模式，把原本要存在函式的內部狀態移動到函式之外用陣列之類的方式存儲，要產生新的ReactElement時就檢查存儲內部狀態的物件，取出產生新的ReactElement所需要的內部狀態。如果要修改內部狀態，就呼叫對應的修改內部狀態用的函式。
* 因為每次要產生新的ReactElement時都會把設定的hook全都跑一次，而且會根據hook設定的條件決定是否改變內部狀態，所以不需要像ClassComponent一樣要有生命週期來穿插一些小行程。
