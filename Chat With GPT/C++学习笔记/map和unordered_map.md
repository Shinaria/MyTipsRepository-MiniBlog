## map和unordered_map有什么区别?

`map` 和 `unordered_map` 都是 C++ 标准模板库中的关联容器，但它们在内部实现和使用场景上有显著区别。

### `map`

1. **内部实现**：
   - 基于红黑树等平衡二叉搜索树实现。
   - 元素按键值有序排列。

2. **时间复杂度**：
   - 查找、插入、删除操作的时间复杂度为 O(log n)。

3. **迭代顺序**：
   - 按键值的升序迭代。

4. **内存使用**：
   - 一般来说，`map` 的内存开销较大，因为需要维护平衡树的结构。

#### 适用场景：
- 需要按键值有序访问元素时。
- 需要按区间迭代元素时。

### `unordered_map`

1. **内部实现**：
   - 基于哈希表实现。
   - 元素无序排列。

2. **时间复杂度**：
   - 查找、插入、删除操作的平均时间复杂度为 O(1)，最坏情况为 O(n)。

3. **迭代顺序**：
   - 无特定顺序，取决于哈希函数和内部哈希表的状态。

4. **内存使用**：
   - 一般来说，`unordered_map` 的内存开销较小，因为不需要维护树结构，但由于哈希冲突，可能会导致空间浪费。

#### 适用场景：
- 需要快速查找、插入和删除操作时。
- 不关心元素的顺序时。

### 示例代码对比

#### `map` 示例：

```cpp
#include <iostream>
#include <map>

int main() {
    std::map<int, std::string> m;
    m[1] = "one";
    m[2] = "two";
    m[3] = "three";

    for (const auto& pair : m) {
        std::cout << pair.first << ": " << pair.second << std::endl;
    }
    return 0;
}
```

输出：
```
1: one
2: two
3: three
```

#### `unordered_map` 示例：

```cpp
#include <iostream>
#include <unordered_map>

int main() {
    std::unordered_map<int, std::string> um;
    um[1] = "one";
    um[2] = "two";
    um[3] = "three";

    for (const auto& pair : um) {
        std::cout << pair.first << ": " << pair.second << std::endl;
    }
    return 0;
}
```

输出顺序不固定，可能是：
```
1: one
3: three
2: two
```

### 总结

- 使用 `map` 时，选择有序性和较慢但稳定的 O(log n) 操作。
- 使用 `unordered_map` 时，选择无序性和更快的 O(1) 操作（平均情况下）。