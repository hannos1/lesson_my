// import { reactive,effect } from "@vue/reactivity"
// const {reactive,effect} = require('@vue/reactivity')
import { reactive } from '../reactive'
import {effect} from '../effect'

// jest 提供api
describe('测试响应式', () => {
    // item 上一个测试用例
    it('测试',() => {
        // expect toBe 断言
        expect(1 + 2).toBe(3)
    })
    it('reactive 基本使用',() => {
        let obj = {num:0}
        // expect(1 + 2).toBe(3)
        const ret1 = reactive(obj)
        const ret2 = reactive(obj)
        let val
        effect(() => {
            val = ret.num
        }) // 收集依赖
        expect(val).toBe(0)
        // ret.num++
        // expect(val).toBe(1)
        // ret.num = 10
        // expect(val).toBe(10)
    })
})