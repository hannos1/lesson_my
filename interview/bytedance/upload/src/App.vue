<script setup>
import {reactive} from 'vue'
const SIZE = 1 * 1024 * 1024 // 10MB
const state = reactive({
    file:null,
    data:[]
})
// ajax options 
const handleFileChange = (e) => {
    // 如果拿到文件对象
    const [file] = e.target.files  // 文件数组
    if(!file) return
    state.file = file
}

const uploadChunks = async () => {
    // [{file}] -> [{chunk:file, hash}] -> formData -> [request()] -> Promise.All 
    const requestList = state.data
        .map(({chunk, hash}) => {
            // ajax 可以阻止默认提交，因为是手动提交
            const formData = new FormData()
            formData.append("chunk", chunk)
            formData.append("hash", hash)
            // formData.append("filename", state.file.name)
            // formData.append("fileHash", state.file.hash)
            return {formData}
        })
        .map(({formData}) => request({
            url: "http://localhost:5000",
            data:formData
        }))
    await Promise.all(requestList)
}

const handlUpload = async () => {
    if(!state.file) return;
    const fileChunkList = createFileChunk(state.file)
    state.data = fileChunkList.map(({file}, index) => ({
        chunk:file,
        hash:state.file.name + '-' + index
    }))
    console.log(state.data,'加了id的文件列表')
    await uploadChunks()
}

const createFileChunk = (file, size = SIZE) => {// 箭头函数没有prototype
    console.log(file)
    const fileChunkList = []
    let cur = 0
    while(cur < file.size){
        fileChunkList.push({file:file.slice(cur,cur + size)})
        cur += size
    }
    console.log(fileChunkList,'切片的列表')
    return fileChunkList
}

const request = ({
    url,
    method = 'post',
    data,
    headers = {},
    // 显示进度条
    onProgress = e => e,
    // 文件切片
    requestList
}) => {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest()
        // ajax 上传文件  上传进度
        xhr.upload.onprogress = onProgress
        xhr.open(method, url)
        Object.keys(headers).forEach(key => xhr.setRequestHeader(key,headers[key]))
        xhr.send(data)
        xhr.onload = e => {
            resolve({
                data: e.target.response
            })
        }
    })
}
// request()
</script>

<template>
<div>
    <input type="file" @change="handleFileChange" multiple>
    <el-button @click="handlUpload">upload</el-button>
</div>
</template>

<style scoped>

</style>
