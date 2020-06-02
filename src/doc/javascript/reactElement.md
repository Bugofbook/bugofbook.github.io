# ReactElement

ReactElement說明

## Parameter

* Tag:React

## Content

### 什麽是ReactElement

Element在React中是一個特別的物件（ReactElement），是react用來告訴其他程式要如何產生畫面的Javascript物件，還要加上其他套件才能順利的做成其他程式語言能讀的程式碼。在網頁中是使用react-dom套件來生成DOM，而在移動裝置中是使用react-native來生成移動裝置專用的APP。

### JSX和ReacCtreate

ReactElement有二種使用方法，原生的ReacCtreate函式和JSX。嚴格來說，JSX會使用Babel再翻譯成ReacCtreate函式。而且官方建議是直接使用JSX+Babel  ，之後會只介紹JSX。

### JSX

JSX就像是javascript專用的XML，可以讓Babel轉換成React的ReactElementTree。但因為Babel和React本身的限制，在使用JSX時有一些設定和限制。一個JSX通常由以下三個部分所組成，這同時也是ReacCtreate函式的三個參數。

* 標籤名稱
* 標籤屬性
* 標籤內容
* 官方的說明文檔[https://reactjs.org/docs/jsx-in-depth.html]

#### 標籤名稱

JSX的標籤名稱看起來和XML的標籤名稱很像，但在React之中，標籤名稱是用來指向對應的Component的名稱，再從Component中獲取對應的ReactElementTree。理論上只要是合法的物件名稱，就會是合法的標籤名稱(因為Component也是一種物件)，但有一些限制和一些特別的使用方法。

* JSX的標籤名稱和Javascript的物件名稱相比之下只有一個限制，JSX的標籤名稱如果是以小寫英文開頭的話會使用React內部的預設ReactElement，而不是使用者自訂的Component。官方建議使用者自訂的JSX的標籤名稱使用大寫駝峰風格。
* 因為標籤名稱是用來連結到對應的Component名稱，所以標籤名稱可以指向變數或是函數的回傳值，只要最後能連結到某一個Component的名稱就可以了。通常用在動態標籤名稱，或是實做Component的工廠模式。
* 標籤名稱支援物件的點命名，但我個人是不太推這種用法就是了。

#### 標籤屬性

JSX的標籤屬性看起來和XML的標籤屬性很像，但在React之中，標籤屬性是用來指定連結到的Component的參數，而且所有的標籤屬性都會被解析成一個物件。和標籤名稱相同，有一些限制和一些特別的使用方法。

* 標籤屬性在等號左邊的部分是用來標明連結到的Component的參數名稱，右邊的部分是用來標明連結到的Component的參數的內容。因為babel本身解析程式碼的限制，等號左邊只能使用文字，右邊只能使用字串字面值(模板字串是javascript表達式)或是用大括號包起來的javascript表達式。
* 因為標籤屬性都會被解析成一個物件，所以JSX可以使用物件展開語法。通常用在動態標籤屬性。
* 標籤屬性的名稱幾乎沒有限定，只有javascript的關鍵字不能當做標籤屬性的名稱。（所以不能使用class要使用ClassName）

#### 標籤內容

JSX的標籤內容看起來和XML的標籤內容很像，但在React之中，標籤內容算是一種特別的標籤屬性(Childs)。和標籤屬性相同，有一些限制和一些特別的使用方法。

* 因為標籤內容也是一種標籤屬性，所以只能使用字串字面值(模板字串是javascript表達式)或是用大括號包起來的javascript表達式。
* 特點一：如果傳入的javascript表示式是Booleans、Null、與Undefined。React是不會顯示的。
* 特點二：如果傳入的javascript表示式是陣列。React會顯示成列表。

#### 實際的HTML元素

當標籤名稱是小寫開頭時，JSX會自動使用React內部的預設ReactElement，這些預設ReactElement最終會顯示成實際的HTML元素。但因為預設ReactElement還是會先使用Babel轉換成React的ReactElementTree後才顯示成實際的HTML元素。會有一些限制和一些特別的使用方法。

* 標籤屬性的內的值會等於實際的HTML元素的標籤屬性。但屬性值還是只能使用字串字面值(模板字串是javascript表達式)或是用大括號包起來的javascript表達式的回傳值。
* 因為標籤屬性會先解析成一個物件。所以標籤屬性的命名方式不能使用實際的HTML元素的標籤屬性的命名方式，要使用小寫駝峰風格。
* 所有能使用的標籤屬性[https://reactjs.org/docs/dom-elements.html]
