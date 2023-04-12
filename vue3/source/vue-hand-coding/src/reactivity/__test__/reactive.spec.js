// import { reactive,effect } from "@vue/reactivity"
// const {reactive,effect} = require('@vue/reactivity')
import { reactive,shallowReactive } from '../reactive'
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
        const ret = reactive(obj)
        let val
        effect(() => {
            val = ret.num
        }) // 收集依赖
        expect(val).toBe(0)
        ret.num++
        expect(val).toBe(1)
        // ret.num = 10
        // expect(val).toBe(10)
    })
    test('一个reactive 对象的属性在多个effect中',() => {
        const ret = reactive({num:0})
        let val,val2
        effect(() => {
            val = ret.num
        })
        effect(() => {
            val2 = ret.num
        })
        expect(val).toBe(0)
        expect(val).toBe(0)
        ret.num++
        expect(val).toBe(1)
        expect(val2).toBe(1)
    })
    test('深层代理',() => {
        const ret = reactive({
            hobby:{value:'打球'}
        })
        let val
        effect(() => {
            val = ret.hobby.value
        })
        expect(val).toBe('打球')
        ret.hobby.value = '睡觉'
        expect(val).toBe('睡觉')
    })
    test('shalldowReactive基本使用',() => {
        const ret = shallowReactive({num:0})
        let val
        effect(() => {
            val = ret.num
        })
        expect(val).toBe(0)
        ret.num++
        expect(val).toBe(1)
    })
    test('shallowReactive浅层响应式',() => {
        const ret = shallowReactive({
            name:'玩转vue3',
            info:{
                price:129,
                type:'f2e'
            }
        })
        let price 
        effect(() => {
            price = ret.info.price
        })
        expect(price).toBe(129)
        ret.info.price = 130
        expect(price).toBe(129)
    })
})