import {VNodeFlags,ChildrenFlags} from '../flags' 
export const Fragment = Symbol()  // key  唯一的
export const Portal = Symbol()

export function h(tag,data = null,children = null){
    let flags = null
    if(typeof tag === 'string'){// html / svg
        flags = tag === 'svg' ? VNodeFlags.ELEMENT_SVG : VNodeFlags.ELEMENT_HTML
    }else if(tag === Fragment){
        flags = VNodeFlags.FRAGMENT
    }else if(tag === Portal){
        flags = VNodeFlags.PORTAL
        tag = data && data.target
    }else{
        if(tag !== null && typeof tag === 'object'){ // 类式组件
            flags = tag.functional
                    ? VNodeFlags.COMPONENT_FUNCTIONAL
                    : VNodeFlags.COMPONENT_STATEFUL_NORMAL 
        }else if(typeof tag === 'function'){
            flags = tag.prototype && tag.prototype.render 
                    ? VNodeFlags.COMPONENT_STATEFUL_NORMAL
                    : VNodeFlags.COMPONENT_FUNCTIONAL
        }
    }

    let childFlags = null
    if(Array.isArray(children)){
        const { length } = children
        if(length === 0){
            childFlags = ChildrenFlags.NO_CHILDREN
        }else if(length === 1){
            childFlags = ChildrenFlags.SINGLE_VNODE
            children = children[0]
        }else {
            // 2个以上
            childFlags = ChildrenFlags.KEYED_VNODES
            children = normalizeVNodes(children)
        }
    }else if(children == null){
        childFlags = ChildrenFlags.NO_CHILDREN
    }else if(children._isVNode){
        childFlags = ChildrenFlags.SINGLE_VNODE
    }else{
        // 纯文本
        childFlags = ChildrenFlags.SINGLE_VNODE
        children = createTextVNode(children+'')
    }

    return {
        tag,
        _isVNode:true, // 区别于其他对象 普通对象 响应式对象...
        el:null,
        flags,
        data,
        children,
        childFlags
    }
}

function normalizeVNodes(children){
    const newChildren = []
    for(let i = 0,len = children.length;i < len;i++){
        const child = children[i]
        if(child.key == null){
            child.key = '|' + i
        }
        newChildren.push(child)
    }
    return newChildren
}

function createTextVNode(text){
    return {
        _isVNode:true,
        flags:VNodeFlags.TEXT,
        tag:null,
        children:text,
        childFlags:ChildrenFlags.NO_CHILDREN
    }
}