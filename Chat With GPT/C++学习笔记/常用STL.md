## C++的标准模板库还有哪些常用的类?

C++的标准模板库（STL）包含许多常用的类，主要包括容器类、算法和迭代器。以下是一些常用的STL类及其简要介绍：

### 容器类

1. **`vector`**：动态数组，可以动态调整大小。
   ```cpp
   #include <vector>
   std::vector<int> v;
   v.push_back(1); // 添加元素
   int x = v[0]; // 访问元素
   ```

2. **`list`**：双向链表，适合频繁插入和删除操作。
   ```cpp
   #include <list>
   std::list<int> l;
   l.push_back(1); // 添加元素
   l.push_front(2); // 在前面添加元素
   ```

3. **`deque`**：双端队列，可以在两端进行快速的插入和删除。
   ```cpp
   #include <deque>
   std::deque<int> d;
   d.push_back(1); // 添加元素到末尾
   d.push_front(2); // 添加元素到前端
   ```

4. **`set`**：有序集合，不允许重复元素，支持高效的查找、插入和删除。
   ```cpp
   #include <set>
   std::set<int> s;
   s.insert(1); // 插入元素
   bool found = s.find(1) != s.end(); // 查找元素
   ```

5. **`map`**：关联容器，存储键值对，键唯一。
   ```cpp
   #include <map>
   std::map<int, std::string> m;
   m[1] = "one"; // 插入键值对
   std::string value = m[1]; // 访问值
   ```

6. **`unordered_set`**：无序集合，不允许重复元素，基于哈希表实现。
   ```cpp
   #include <unordered_set>
   std::unordered_set<int> us;
   us.insert(1); // 插入元素
   bool found = us.find(1) != us.end(); // 查找元素
   ```

7. **`unordered_map`**：无序关联容器，存储键值对，键唯一，基于哈希表实现。
   ```cpp
   #include <unordered_map>
   std::unordered_map<int, std::string> um;
   um[1] = "one"; // 插入键值对
   std::string value = um[1]; // 访问值
   ```

### 算法

STL提供了大量的算法，可以在容器上进行操作，如排序、查找和修改。

1. **`sort`**：对范围内的元素进行排序。
   ```cpp
   #include <algorithm>
   #include <vector>
   std::vector<int> v = {3, 1, 4, 1, 5};
   std::sort(v.begin(), v.end()); // 对v进行排序
   ```

2. **`find`**：在范围内查找特定值。
   ```cpp
   #include <algorithm>
   #include <vector>
   std::vector<int> v = {1, 2, 3};
   auto it = std::find(v.begin(), v.end(), 2); // 查找值2
   ```

3. **`copy`**：将元素从一个范围复制到另一个范围。
   ```cpp
   #include <algorithm>
   #include <vector>
   std::vector<int> v1 = {1, 2, 3};
   std::vector<int> v2(3);
   std::copy(v1.begin(), v1.end(), v2.begin()); // 复制v1到v2
   ```

4. **`for_each`**：对范围内的每个元素执行指定操作。
   ```cpp
   #include <algorithm>
   #include <vector>
   #include <iostream>
   std::vector<int> v = {1, 2, 3};
   std::for_each(v.begin(), v.end(), [](int x) { std::cout << x << " "; }); // 输出每个元素
   ```

### 迭代器

迭代器用于遍历容器中的元素，类似于指针。

1. **`begin` 和 `end`**：返回指向容器开头和结尾的迭代器。
   ```cpp
   #include <vector>
   std::vector<int> v = {1, 2, 3};
   for(auto it = v.begin(); it != v.end(); ++it) {
       std::cout << *it << " "; // 输出每个元素
   }
   ```

2. **`rbegin` 和 `rend`**：返回指向容器逆序开头和结尾的迭代器。
   ```cpp
   #include <vector>
   std::vector<int> v = {1, 2, 3};
   for(auto it = v.rbegin(); it != v.rend(); ++it) {
       std::cout << *it << " "; // 逆序输出每个元素
   }
   ```

这些容器类和算法是C++标准模板库中最常用的部分，能够极大地提高编程效率和代码可读性。