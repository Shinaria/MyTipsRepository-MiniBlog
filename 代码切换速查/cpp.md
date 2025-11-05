# cpp

## 基础语法

```cpp
// 变量与类型
int x = 10;
double y = 3.14;
auto z = "hello";  // 类型推断
const int MAX = 100;

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

```cpp
// 引用和指针（C++特色）
int value = 10;
int& ref = value;        // 引用，别名
int* ptr = &value;       // 指针，存储地址
*ptr = 20;               // 解引用

// 范围-based for 循环（C++11）
std::vector<int> vec = {1, 2, 3, 4, 5};
for (const auto& num : vec) {  // 只读遍历
    std::cout << num << " ";
}
for (auto& num : vec) {        // 可修改遍历  
    num *= 2;
}

// 结构化绑定（C++17）
std::pair<int, std::string> p = {1, "hello"};
auto [id, name] = p;  // 自动解包

// 智能指针（现代C++内存管理）
std::unique_ptr<MyClass> uptr = std::make_unique<MyClass>();
std::shared_ptr<MyClass> sptr = std::make_shared<MyClass>();
std::weak_ptr<MyClass> wptr = sptr;

// Lambda表达式
auto lambda = [](int x) -> int { return x * x; };
auto with_capture = [&value, id](int x) { return x + value + id; };

// 移动语义（C++11）
std::vector<int> v1 = {1, 2, 3};
std::vector<int> v2 = std::move(v1);  // v1现在为空，资源转移到v2

// 常量表达式（编译期计算）
constexpr int factorial(int n) {
    return (n <= 1) ? 1 : n * factorial(n - 1);
}
constexpr int fact_5 = factorial(5);  // 编译期计算

// 概念（C++20）
template<typename T>
concept Number = std::is_arithmetic_v<T>;

template<Number T>
T add(T a, T b) { return a + b; }
```

## 面向对象与高级特性

```cpp
// 类定义
class MyClass {
private:
    int privateVar;
protected:
    int protectedVar;
public:
    int publicVar;
    
    // 构造函数
    MyClass(int val) : privateVar(val) {}
    
    // 方法
    virtual void display() { cout << privateVar; }
    
    // 析构函数
    virtual ~MyClass() {}
};

// 继承
class Derived : public MyClass {
public:
    void display() override { cout << "Derived"; }
};

// 模板（泛型）
template<typename T>
T max(T a, T b) { return a > b ? a : b; }

// 智能指针
auto ptr = std::make_unique<MyClass>(10);
auto sharedPtr = std::make_shared<MyClass>(20);
```

## 常用STL容器

```cpp
#include <vector>
#include <map>
#include <string>
#include <algorithm>

std::vector<int> vec = {1, 2, 3};
std::map<std::string, int> scores = {{"Alice", 95}, {"Bob", 87}};
std::string str = "Hello";
```

## 一篇完整代码

```cpp
#include <iostream>
#include <vector>
#include <memory>
#include <algorithm>

// 模板函数
template<typename T>
class Calculator {
public:
    T add(T a, T b) { return a + b; }
    T multiply(T a, T b) { return a * b; }
};

// 基类
class Shape {
protected:
    double x, y;
public:
    Shape(double x, double y) : x(x), y(y) {}
    virtual double area() const = 0;
    virtual void display() const {
        std::cout << "Shape at (" << x << ", " << y << ")" << std::endl;
    }
    virtual ~Shape() = default;
};

// 派生类
class Circle : public Shape {
private:
    double radius;
public:
    Circle(double x, double y, double r) : Shape(x, y), radius(r) {}
    
    double area() const override {
        return 3.14159 * radius * radius;
    }
    
    void display() const override {
        std::cout << "Circle at (" << x << ", " << y << ") with radius " << radius 
                  << ", area: " << area() << std::endl;
    }
};

class Rectangle : public Shape {
private:
    double width, height;
public:
    Rectangle(double x, double y, double w, double h) 
        : Shape(x, y), width(w), height(h) {}
    
    double area() const override {
        return width * height;
    }
    
    void display() const override {
        std::cout << "Rectangle at (" << x << ", " << y << ") " << width 
                  << "x" << height << ", area: " << area() << std::endl;
    }
};

// 使用智能指针和STL
void processShapes() {
    std::vector<std::unique_ptr<Shape>> shapes;
    shapes.push_back(std::make_unique<Circle>(0, 0, 5));
    shapes.push_back(std::make_unique<Rectangle>(1, 1, 4, 6));
    
    // 使用算法
    std::for_each(shapes.begin(), shapes.end(), 
        [](const auto& shape) { shape->display(); });
    
    // 使用模板类
    Calculator<int> intCalc;
    Calculator<double> doubleCalc;
    std::cout << "5 + 3 = " << intCalc.add(5, 3) << std::endl;
    std::cout << "2.5 * 4.0 = " << doubleCalc.multiply(2.5, 4.0) << std::endl;
}

int main() {
    std::cout << "=== C++ 完整示例 ===" << std::endl;
    processShapes();
    return 0;
}
```
