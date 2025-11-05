# csharp

## 基础语法

```csharp
// 变量与类型
int x = 10;
double y = 3.14;
var z = "hello";  // 类型推断
const int MAX = 100;

// 控制流
if (condition) { }
else if (condition) { }
else { }

for (int i = 0; i < 10; i++) { }
while (condition) { }
do { } while (condition);

// 函数
int Add(int a, int b) => a + b;  // 表达式体方法
```

### 基础语法扩展

```csharp
// 属性和自动属性
public class Person {
    // 完整属性
    private string _name;
    public string Name {
        get => _name;
        set => _name = value ?? throw new ArgumentNullException();
    }
    
    // 自动属性
    public int Age { get; set; }
    public string Id { get; init; }  // 只初始化属性（C# 9）
    public DateTime Created { get; } = DateTime.Now;  // 只读自动属性
}

// 委托和事件
public delegate void MessageHandler(string message);
public event MessageHandler OnMessage;

// 触发事件
OnMessage?.Invoke("Hello Event!");  // 空条件运算符

// LINQ查询（语言集成查询）
var numbers = new List<int> {1, 2, 3, 4, 5, 6};

// 查询语法
var evenNumbers = from num in numbers
                  where num % 2 == 0
                  orderby num descending
                  select num * 2;

// 方法语法
var evenNumbers2 = numbers.Where(n => n % 2 == 0)
                          .OrderByDescending(n => n)
                          .Select(n => n * 2);

// 异步编程
public async Task<string> DownloadDataAsync() {
    using var client = new HttpClient();
    return await client.GetStringAsync("https://api.example.com/data");
}

// 调用异步方法
var data = await DownloadDataAsync();

// 模式匹配（C# 7+）
object obj = "hello";
if (obj is string s && s.Length > 3) {
    Console.WriteLine($"String length: {s.Length}");
}

// switch表达式（C# 8+）
var message = obj switch {
    string str => $"String: {str}",
    int i when i > 0 => $"Positive number: {i}",
    int i => $"Number: {i}",
    _ => "Unknown type"
};

// 记录类型（C# 9+）
public record PersonRecord(string FirstName, string LastName, int Age);
var person = new PersonRecord("John", "Doe", 30);
var (first, last, age) = person;  // 解构

// 顶级语句（C# 9+） - 不需要Main方法
Console.WriteLine("Hello Top-level statements!");

// 全局using（C# 10+）
global using System;
global using System.Collections.Generic;

// 文件范围的命名空间（C# 10+）
namespace MyNamespace;  // 不需要大括号

public class MyClass { }
```

## 面向对象与高级特性

```csharp
// 类定义
public class MyClass {
    // 字段和属性
    private int _privateField;
    public int PublicProperty { get; set; }
    public string ReadOnlyProperty { get; }
    
    // 自动属性
    public string Name { get; private set; }
    
    // 构造函数
    public MyClass(int value) {
        _privateField = value;
        ReadOnlyProperty = "Constant";
    }
    
    // 方法
    public virtual void Display() {
        Console.WriteLine(_privateField);
    }
}

// 继承
public class Derived : MyClass {
    public Derived(int value) : base(value) { }
    
    public override void Display() {
        Console.WriteLine("Derived class");
    }
}

// 接口
public interface IMyInterface {
    void DoWork();
}

// 泛型
public class GenericClass<T> {
    public T Value { get; set; }
}
```

## 常用集合和LINQ

```csharp
using System.Collections.Generic;
using System.Linq;

List<int> numbers = new List<int> {1, 2, 3};
Dictionary<string, int> scores = new Dictionary<string, int> {
    {"Alice", 95}, {"Bob", 87}
};

// LINQ查询
var highScores = scores.Where(pair => pair.Value > 90)
                       .Select(pair => pair.Key);
```

## 完整代码举例

```csharp
using System;
using System.Collections.Generic;
using System.Linq;

namespace CSharpExample {
    
    // 泛型类
    public class Calculator<T> where T : struct {
        public T Add(T a, T b) {
            dynamic da = a, db = b;
            return da + db;
        }
        
        public T Multiply(T a, T b) {
            dynamic da = a, db = b;
            return da * db;
        }
    }
    
    // 接口
    public interface IShape {
        double Area { get; }
        void Display();
    }
    
    // 抽象类
    public abstract class Shape : IShape {
        public double X { get; protected set; }
        public double Y { get; protected set; }
        
        protected Shape(double x, double y) {
            X = x;
            Y = y;
        }
        
        public abstract double Area { get; }
        
        public virtual void Display() {
            Console.WriteLine($"Shape at ({X}, {Y})");
        }
    }
    
    // 派生类
    public class Circle : Shape {
        public double Radius { get; private set; }
        
        public Circle(double x, double y, double radius) : base(x, y) {
            Radius = radius;
        }
        
        public override double Area => Math.PI * Radius * Radius;
        
        public override void Display() {
            Console.WriteLine($"Circle at ({X}, {Y}) with radius {Radius}, area: {Area:F2}");
        }
    }
    
    public class Rectangle : Shape {
        public double Width { get; private set; }
        public double Height { get; private set; }
        
        public Rectangle(double x, double y, double width, double height) : base(x, y) {
            Width = width;
            Height = height;
        }
        
        public override double Area => Width * Height;
        
        public override void Display() {
            Console.WriteLine($"Rectangle at ({X}, {Y}) {Width}x{Height}, area: {Area}");
        }
    }
    
    class Program {
        static void ProcessShapes() {
            // 集合初始化器
            List<Shape> shapes = new List<Shape> {
                new Circle(0, 0, 5),
                new Rectangle(1, 1, 4, 6)
            };
            
            // LINQ查询
            var largeShapes = shapes.Where(s => s.Area > 20);
            shapes.ForEach(s => s.Display());
            
            // 使用泛型
            Calculator<int> intCalc = new Calculator<int>();
            Calculator<double> doubleCalc = new Calculator<double>();
            Console.WriteLine($"5 + 3 = {intCalc.Add(5, 3)}");
            Console.WriteLine($"2.5 * 4.0 = {doubleCalc.Multiply(2.5, 4.0)}");
            
            // 属性使用
            Circle circle = new Circle(2, 3, 10);
            Console.WriteLine($"Circle area: {circle.Area}");
        }
        
        static void Main(string[] args) {
            Console.WriteLine("=== C# 完整示例 ===");
            ProcessShapes();
            
            // 匿名类型和var
            var person = new { Name = "Alice", Age = 25 };
            Console.WriteLine($"Anonymous type: {person.Name}, {person.Age}");
        }
    }
}
```
