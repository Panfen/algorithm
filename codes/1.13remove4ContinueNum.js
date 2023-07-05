/**
 * 描述：数组中存储着多个0-9的数字，若存在连续大于等于4个相同的数字，则将其消除；
 * 若消除后，依然存在连续个数大于等于4的数字，则继续消除。返回最终消除完毕后的数组。
 * 
 * 例子：
 * [1, 1, 1, 1, 2] => [2]
 * [1, 1, 1, 1, 1, 2] => [2]
 * [2, 1, 1, 1, 1, 2, 2, 2] => []
 * [1, 1, 1, 0, 0, 0, 0, 0, 1, 2, 2, 3, 3, 3, 3] => [2, 2]
 */

function eliminate(arr) {
  const stack = []

  let i = 0
  while (i < arr.length) {
    const { length } = stack

    // 空栈，压入
    if (!length) {
      stack.push({ item: arr[i], num: 1 })
      i++
    } else if (stack[length - 1].item === arr[i]) {
      // 相同数字，计数+1
      stack[length - 1].num++
      i++
    } else {
      // 不同数字，判断栈顶计数，大于等于4，出栈
      if (stack[length - 1].num >= 4) {
        stack.pop()
        // 这里的i并没有加1，因为当前不一样的那个元素还要继续与下一个栈顶的元素进行比较
        // 比如[1, 1, 1, 2, 2, 2, 2, 1]，当栈顶元素2与最后一个1比较，栈弹出2后，最后一个1还得跟新栈顶元素1进行比较
      } else {
        stack.push({ item: arr[i], num: 1 })
        i++
      }
    }
  }

  // 最后还需要判断一次栈顶
  if (stack.length && stack[stack.length - 1].num >= 4) {
    stack.pop()
  }

  // 返回数据
  return stack.reduce((acc, val) => {
    acc.push(...new Array(val.num).fill(val.item))
    return acc
  }, [])
}

eliminate([1, 1, 1, 1, 1, 2])