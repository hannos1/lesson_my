# 数组api
- Array:slice(start,end)
    - 从数组中截取任意个元素，返回结果为新的数组
    - 不改变原来的数组

- Array:splice(start,end,"element"...)
    - 从数组中删除任意个元素
    - 返回结果为被删除元素组成的新数组
    - 同时该方法会改变原数组,会将指定元素从数组中删除
    - 如果后面有新加元素,那么会在start加入这些元素

- Array:reverse()
    - 将数组倒置，返回一个数组

- Array:shift()
    - 返回原数组第一个值，并将其从原数组中删除

# 字符串api
- str:toLowerCase()
   - 将字符串的大写字母全部替换成小写字母
   
- str:split('e')
   - 将字符串用'e'切分成若干个数组元素，返回一个数组对象

- str:replace(正则,'e')
   - 将字符串中被正则表达式匹配到的所有元素用'e'替换


# 数组转字符串
- Array:join(e)
    - 将数组元素用字符e连接起来,返回一个新的字符串



# 字符串转数组
- str:split("element")
   - 将字符串按element切割成新的数组

