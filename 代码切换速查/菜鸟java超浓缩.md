# java菜鸟教程超浓缩

## 基础语法

### Java常用导入包

```java
import java.util.Arrays;
import java.util.*;  //*通配符
```

### Java注释

```java
/* 
这是一个
多行注释的示例
*/
// 这是单行注释的示例
/* 这个也是单行注释的示例 */

```

### 基本数据类型

```java
boolean bool;
byte by;
char ch;
double d;
float f;
int i;
long l;
short sh;
String str;//这个其实是个类,不是变量
```

### 访问控制修饰符

```java
private int a;
protected int b;
public int c;
int d;
```

### 循环

```java
for (int i = 0; i < 10; i++) { }
while (condition) { }
do { } while (condition);
```

* 增强型for循环

```java
String [] names ={"James", "Larry", "Tom", "Lacy"};
for( String name : names ) {
    System.out.print( name );
    System.out.print(",");
}
```

### 条件判断

```java
if (condition) { }
else if (condition) { }
else { }
```

* switch case语句

```java
int i = 1;
switch(i){
    case 0:
    System.out.println("0"); break;
    case 1:
    System.out.println("1"); break;
    default:
    System.out.println("default");
}
```

### Java枚举

* 例如，我们为果汁店设计一个程序，它将限制果汁为小杯、中杯、大杯。这就意味着它不允许顾客点除了这三种尺寸外的果汁。

```java
class FreshJuice {
   enum FreshJuiceSize{ SMALL, MEDIUM , LARGE }
   FreshJuiceSize size;
}
 
public class FreshJuiceTest {
   public static void main(String[] args){
      FreshJuice juice = new FreshJuice();
      juice.size = FreshJuice.FreshJuiceSize.MEDIUM  ;
   }
}
```

## Math类

```java
Math.min(a,b);
Math.max(a,b);
Math.sqrt(a);
```

## Character类

```java
char c = Character.toUpperCase('a');   //转大写
boolean b = Character.isDigit('c');    //字符是不是数字
```

## String类

### 构造(新建)String类

```java
String s1 = "Runoob";              // String 直接创建
String s2 = "Runoob";              // String 直接创建
String s3 = s1;                    // 相同引用,s1 s2 s3指向公共池(意思是同一块数据区域)
String s4 = new String("Runoob");   // String 对象创建,单独存在,不同于s1 s2 s3
```

* String类不能直接改

### String类常用操作

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

## 数组

### 声明和创建数组

```java
double[] aDoubleArray;   //声明数组变量
aDoubleArray = new double[100]   //创建长度100的数组
int[] aIntArray = new int[50]
int[] anotherIntArray = new int{0,1,2,3};//其他几种创建数组的方式;
```

### 一些常见的操作数组的方式

```java
import java.util.Arrays;

Arrays.fill(aIntArray,5);  //填充数组
Arrays.sort(aIntArray,2,7);   //对数组内2到6的数组排序,默认从小到大排
```

## ArrayList

* 如何导入和初始化

```java
import java.util.ArrayList; // 引入 ArrayList 类

ArrayList<E> anArrayList =new ArrayList<>();  // 初始化,<E>的E是引用数据类型, 开头大写的那些
```

* 因为ArrayList 中的元素实际上是对象,所以E如果想用int,double这些类型, 必须是基本类型的包装类.

### ArrayList的常见操作方式

```java
anArrayList.add(object); //末尾添加object
anArrayList.remove(4);   //移除第5个元素
Object aObject = anArrayList.get(1); //获取第2个元素
anArrayList.set(2,object); //修改第3个元素为object
int length = anArrayList.size();  //获取元素数量
ArrayList<String> anotherList = (ArrayList<String>)aStringList.clone();//拷贝,但是浅拷贝
anArrayList.toArray(anArray);//建议使用带参数的toArray(),不传参的话会返回Object[]
```

### ArrayList的排序

```java
import java.util.Collections; // 需要引入Collections类
Collections.sort(anArrayList);
```
