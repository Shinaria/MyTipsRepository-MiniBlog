# go菜鸟教程超浓缩

## 基础语法

* 首行需要声明本文件代码属于哪个包
* 左大括号不能单独一行
* 分行不用分号做末尾

```go
package main   //这是一个可独立执行的文件代码
```

### 导入包

```go
import "fmt"   //fmt包用于格式化输入输出
```

### Go函数格式

```go
func function_name( [parameter list] ) [return_types] {
   函数体
}
```

### 基本数据类型

```go
bool
int
uint
float32
byte
rune
string
```

### 声明变量&初始化&赋值

```go
var a string = "string"
var b, c int = 1, 2
var d int
a, b, c, d = "STRING", 2, 3, 4
var e = 5.6 //会自动判定变量e的类型
f := false //跟上面一行类似, 但不可用于全局变量的声明和赋值
```

* 局部变量被声明后必须被使用,只赋值也不行.

### 访问控制修饰符

```java
private int a;
protected int b;
public int c;
int d;
```

### 循环的几种写法

```go
for i := 0; i <= 10; i++ {
   sum += i
}

sum := 1
for ; sum <= 10; {
   sum += sum
}

for sum <= 10{
   sum += sum
}

```

### 条件判断

```go
var a int = 25
if a == 25 {
   //code
} else if a < 25 {
   //code
} else {
   //code
}
```

* switch case语句
* case匹配成功后执行完直接跳出, 不用写break

```go
var grade string = "B"
var marks int = 90

switch marks {
   case 90: grade = "A"
   case 80: grade = "B"
   case 50,60,70 : grade = "C"   //多条件匹配
   default: grade = "D"  
}
```

### 声明数组变量

```go
var array_name [size]dataType
var int_numbersA = [5]int
var int_numbersB = [5]int{1, 2, 3, 4, 5}
int_numbersC := [5]int{1, 2, 3, 4, 5}
int_numbersD := [...]int{1, 2, 3}
int_numbersE := [5]int{1:3,3:7}
```

### 创建数组

```java
arrayC = new dataType[arraySizeInt];
dataType[] arrayD = new dataType[arraySizeInt];
dataType[] arrayE = {value0, value1, value2};
```

### Arrays类

* 提供方法操作数组变量

```java
import java.util.Arrays;

public static void fill(int[] a, int val)
public static void sort(Object[] a) 
public static int binarySearch(Object[] a, Object key)
public static boolean equals(long[] a, long[] a2)

Arrays.fill(aIntArray,5);  //填充数组
Arrays.sort(aIntArray,2,7);   //对数组内2到6的数组排序,默认从小到大排
```

## ArrayList类

* 和数组相比没有固定大小的限制.
* 需要import

```java
import java.util.ArrayList; // 引入 ArrayList 类
```

### 初始化

* 以下出现的泛型E必须是引用数据类型
* 因为ArrayList里面存的东西本质是对象而不是变量
* 举例想存int类型的变量就得写Integer

```java
ArrayList<E> arrayListA =new ArrayList<E>();　 // 初始化
```

### 增删改查

* ArrayList不能用中括号下标直接随机访问,必须使用get()和set().

```java
ArrayList<String> sites = new ArrayList<String>();
sites.add("Google");
sites.add("Bing");
sites.add("Bai");
sites.set(2,"Baidu");
sites.remove(1);
String site = sites.get(1);
int size = sites.size();

anArrayList.add(object); //末尾添加object
anArrayList.remove(4);   //移除第5个元素
Object aObject = anArrayList.get(1); //获取第2个元素
anArrayList.set(2,object); //修改第3个元素为object
int length = anArrayList.size();  //获取元素数量
ArrayList<String> anotherList = (ArrayList<String>)aStringList.clone();//拷贝,但是浅拷贝
anArrayList.toArray(anArray);//建议使用带参数的toArray(),不传参的话会返回Object[]
```

### 排序

* 需要引入Collections类

```java
import java.util.Collections;
Collections.sort(sites);

sites.sort(Comparator.naturalOrder());//也是排序

```

## Math类

```java
Math.min(intA,intB);
Math.max(intA,intB);
Math.sqrt(intA);
```

## Character类(用于对单个字符进行操作)

```java
char c = Character.toUpperCase('a');   //转大写
boolean b = Character.isDigit('c');    //字符是不是数字
```

## String(字符串相关)

### String类

#### 构造(新建)String类

```java
String s1 = "Runoob";              // String 直接创建
String s2 = "Runoob";              // String 直接创建
String s3 = s1;                    // 相同引用,s1 s2 s3指向公共池(意思是同一块数据区域)
String s4 = new String("Runoob");   // String 对象创建,单独存在,不同于s1 s2 s3
```

* String类不可直接改变内部值

#### String类常用操作

* String类常用方法

```java
String s = "www.runoob.com";

//String类支持的方法举例
int length = s.length();
char result = s.charAt(6);
boolean retVal = s.endsWith( "com" );
int index = s.indexOf("runoob"); 
int lastIndex = s.lastIndexOf("o");
String subStringA = s.substring(3);
String subStringB = s.substring(2,5);


//char[]转String
char[] Str1 = {'h', 'e', 'l', 'l', 'o', ' ', 'r', 'u', 'n', 'o', 'o', 'b'};
String Str2 = "";
Str2 = Str2.copyValueOf( Str1 );

//String 转char[]
char[] charArray = s.toCharArray();
```

### StringBuffer和StringBuilder类

* 修改字符串可以用到这两个类
* StringBuilder更快,StringBuffer支持线程安全

#### 构造(以StringBuffer为例)

```java
StringBuffer sBufferA = new StringBuffer(intLength);
StringBuffer sBufferB = new StringBuffer("a string");
```

#### 举例方法()

```java
StringBuilder sb = new StringBuilder(10);
sb.append("Runoob..");
sb.append("!");
sb.insert(8, "Java");
sb.delete(5,8);
```

