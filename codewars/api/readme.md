- Array:slice(start,end)
    从数组中截取任意个元素，返回结果为新的数组
    不改变原来的数组

- Array:splice(start,end,"element"...)
    - 从数组中删除任意个元素
    - 返回结果为被删除元素组成的新数组
    - 同时该方法会改变原数组,会将指定元素从数组中删除
    - 如果后面有新加元素,那么会在start加入这些元素

- str:split("element")
   - 将字符串按element切割成新的数组

- str:join(e)
    将数组元素用字符e连接起来,返回一个新的数组