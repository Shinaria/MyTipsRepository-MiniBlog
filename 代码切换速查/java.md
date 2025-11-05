# java

## 基础语法

```java
// 变量与类型
int x = 10;
double y = 3.14;
final int MAX = 100;  // 常量

// 控制流
if (condition) { }
else if (condition) { }
else { }

for (int i = 0; i < 10; i++) { }
while (condition) { }
do { } while (condition);

// 函数
int add(int a, int b) { return a + b; }
```

### 基础语法扩展

```java
// 增强的for循环（foreach）
List<String> names = List.of("Alice", "Bob", "Charlie");
for (String name : names) {
    System.out.println(name);
}

// 接口的默认方法和静态方法
public interface Vehicle {
    void start();  // 抽象方法
    
    // 默认方法
    default void honk() {
        System.out.println("Beep beep!");
    }
    
    // 静态方法
    static boolean isValidSpeed(int speed) {
        return speed >= 0 && speed <= 200;
    }
}

// 函数式接口和Lambda表达式
@FunctionalInterface
public interface Calculator {
    int calculate(int a, int b);
}

// Lambda使用
Calculator add = (a, b) -> a + b;
Calculator multiply = (a, b) -> a * b;
System.out.println(add.calculate(5, 3));  // 输出8

// 方法引用
List<String> words = Arrays.asList("a", "b", "c");
words.forEach(System.out::println);        // 实例方法引用
words.forEach(String::toUpperCase);        // 特定对象的实例方法引用

// Stream API
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Stream操作链
int sum = numbers.stream()
    .filter(n -> n % 2 == 0)           // 过滤偶数
    .map(n -> n * 2)                   // 每个元素乘2
    .reduce(0, Integer::sum);          // 求和

// 收集器
Map<Boolean, List<Integer>> partitioned = numbers.stream()
    .collect(Collectors.partitioningBy(n -> n % 2 == 0));

List<String> collected = numbers.stream()
    .map(Object::toString)
    .collect(Collectors.toList());

// Optional（空安全）
public Optional<String> findNameById(int id) {
    return id > 0 ? Optional.of("Name" + id) : Optional.empty();
}

// Optional使用
String result = findNameById(5)
    .map(String::toUpperCase)
    .orElse("DEFAULT");

findNameById(5).ifPresent(name -> 
    System.out.println("Found: " + name)
);

// 记录类（Java 14+预览，16正式）
public record Person(String name, int age) {
    // 紧凑构造函数
    public Person {
        if (age < 0) throw new IllegalArgumentException("Age cannot be negative");
    }
    
    // 可以添加方法
    public boolean isAdult() {
        return age >= 18;
    }
}

// 使用记录类
Person person = new Person("Alice", 25);
System.out.println(person.name());  // 访问器方法
System.out.println(person);         // 自动生成toString

// 文本块（Java 13+预览，15正式）
String json = """
    {
        "name": "Alice",
        "age": 25,
        "hobbies": ["reading", "swimming"]
    }
    """;

// 密封类和接口（Java 15+预览，17正式）
public sealed class Shape 
    permits Circle, Rectangle, Triangle {  // 明确指定子类
}

public final class Circle extends Shape { }
public final class Rectangle extends Shape { }
public final class Triangle extends Shape { }

// 模式匹配instanceof（Java 16+）
Object obj = "hello";
if (obj instanceof String s && s.length() > 3) {
    System.out.println(s.toUpperCase());  // s自动转换为String类型
}

// switch表达式（Java 14+）
int days = switch (month) {
    case 1, 3, 5, 7, 8, 10, 12 -> 31;
    case 4, 6, 9, 11 -> 30;
    case 2 -> isLeapYear ? 29 : 28;
    default -> throw new IllegalArgumentException("Invalid month");
};

// yield返回值
int result = switch (operation) {
    case "add" -> {
        int sum = a + b;
        yield sum;  // 使用yield返回值
    }
    case "multiply" -> a * b;
    default -> throw new IllegalArgumentException();
};
```

## 面向对象与高级特性

```java
// 类定义
public class MyClass {
    // 字段
    private int privateField;
    protected int protectedField;
    public int publicField;
    
    // 构造方法
    public MyClass(int value) {
        this.privateField = value;
    }
    
    // 方法
    public int getPrivateField() { return privateField; }
    public void setPrivateField(int value) { privateField = value; }
    
    // 重写toString
    @Override
    public String toString() {
        return "MyClass: " + privateField;
    }
}

// 继承
public class Derived extends MyClass {
    public Derived(int value) {
        super(value);
    }
    
    @Override
    public String toString() {
        return "Derived: " + getPrivateField();
    }
}

// 接口
public interface MyInterface {
    void doWork();
    default void defaultMethod() { System.out.println("Default"); }
}

// 泛型
public class GenericClass<T> {
    private T value;
    public T getValue() { return value; }
    public void setValue(T value) { this.value = value; }
}
```

## 常用集合类

```java
import java.util.*;

List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3));
Map<String, Integer> map = new HashMap<>();
map.put("Alice", 95);
map.put("Bob", 87);

// Stream API
List<String> names = map.entrySet().stream()
    .filter(entry -> entry.getValue() > 90)
    .map(Map.Entry::getKey)
    .collect(Collectors.toList());
```

## 完整代码举例

``` java
import java.util.*;
import java.util.stream.Collectors;

// 泛型类
class Calculator<T extends Number> {
    public double add(T a, T b) {
        return a.doubleValue() + b.doubleValue();
    }
    
    public double multiply(T a, T b) {
        return a.doubleValue() * b.doubleValue();
    }
}

// 接口
interface Shape {
    double getArea();
    void display();
}

// 抽象类
abstract class AbstractShape implements Shape {
    protected double x;
    protected double y;
    
    public AbstractShape(double x, double y) {
        this.x = x;
        this.y = y;
    }
    
    @Override
    public void display() {
        System.out.printf("Shape at (%.1f, %.1f)\n", x, y);
    }
}

// 具体类
class Circle extends AbstractShape {
    private double radius;
    
    public Circle(double x, double y, double radius) {
        super(x, y);
        this.radius = radius;
    }
    
    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
    
    @Override
    public void display() {
        System.out.printf("Circle at (%.1f, %.1f) with radius %.1f, area: %.2f\n", 
                         x, y, radius, getArea());
    }
    
    // Getter和Setter
    public double getRadius() { return radius; }
    public void setRadius(double radius) { this.radius = radius; }
}

class Rectangle extends AbstractShape {
    private double width;
    private double height;
    
    public Rectangle(double x, double y, double width, double height) {
        super(x, y);
        this.width = width;
        this.height = height;
    }
    
    @Override
    public double getArea() {
        return width * height;
    }
    
    @Override
    public void display() {
        System.out.printf("Rectangle at (%.1f, %.1f) %.1fx%.1f, area: %.1f\n", 
                         x, y, width, height, getArea());
    }
    
    public double getWidth() { return width; }
    public double getHeight() { return height; }
}

public class JavaExample {
    private static void processShapes() {
        // 集合框架
        List<Shape> shapes = Arrays.asList(
            new Circle(0, 0, 5),
            new Rectangle(1, 1, 4, 6)
        );
        
        // 使用Stream API
        shapes.stream()
              .filter(shape -> shape.getArea() > 20)
              .forEach(Shape::display);
        
        // 传统foreach
        for (Shape shape : shapes) {
            shape.display();
        }
        
        // 使用泛型类
        Calculator<Integer> intCalc = new Calculator<>();
        Calculator<Double> doubleCalc = new Calculator<>();
        System.out.printf("5 + 3 = %.1f\n", intCalc.add(5, 3));
        System.out.printf("2.5 * 4.0 = %.1f\n", doubleCalc.multiply(2.5, 4.0));
        
        // Map使用
        Map<String, Shape> shapeMap = new HashMap<>();
        shapeMap.put("circle", new Circle(0, 0, 3));
        shapeMap.put("rectangle", new Rectangle(2, 2, 5, 4));
        
        shapeMap.forEach((key, value) -> 
            System.out.printf("%s: %.2f\n", key, value.getArea()));
    }
    
    public static void main(String[] args) {
        System.out.println("=== Java 完整示例 ===");
        processShapes();
        
        // 匿名内部类
        Shape anonymousShape = new AbstractShape(1, 2) {
            @Override
            public double getArea() {
                return 42.0;
            }
        };
        anonymousShape.display();
    }
}
```
