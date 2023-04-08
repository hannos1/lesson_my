<template>
    <div>
        <div class="container">
            <div class="handel-box">
                <el-select v-model="query.address">
                    <el-option key="1" label="广东省" value="广东省"></el-option>
                    <el-option key="2" label="湖南省" value="湖南省"></el-option>
                </el-select>
                <el-input v-model="query.name" placeholder="用户名" class="handle-input mr10"></el-input>
                <el-button type="primary" :icon="Search" @click="handleSearch">搜索</el-button>
                <el-button type="primary" :icon="Plus">新增</el-button>
            </div>
            <el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class="table-header">
                <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
                <el-table-column prop="name" label="用户名"></el-table-column>
                <el-table-column label="账户余额">
                    <template #default="scope">￥{{ scope.row.money }}</template>
                </el-table-column>
                <el-table-column label="头像(查看大图)" align="center">
                    <template #default="scope">
                        <el-image class="table-td-thumb" :src="scope.row.thumb" :z-index="10"
                            :preview-src-list="[scope.row.thumb]" preview-teleported>
                        </el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
                <el-table-column label="状态" align="center">
                    <template #default="scope">
                        <el-tag :type="scope.row.state === '成功' ? 'success' : scope.row.state === '失败' ? 'danger' : ''">
                            {{ scope.row.state }}
                        </el-tag>
                    </template>
                </el-table-column>

                <el-table-column prop="date" label="注册时间"></el-table-column>
                <el-table-column label="操作" width="220" align="center">
                    <template #default="scope">
                        <el-button text :icon="Edit" @click="handleEdit(scope.$index, scope.row)" v-permiss="15">
                            编辑
                        </el-button>
                        <el-button text :icon="Delete" class="red" @click="handleDelete(scope.$index)" v-permiss="16">
                            删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination 
                background 
                layout="total,priv,pager,next" 
                :current-page="query.pageIndex"
                :page-size="query.pageSize"
                :total="pageTotal"
                @current-change="handlePageChange"
                ></el-pagination>
            </div>
        </div>
        <el-dialog title="编辑" v-model="editVisible" width="30%">
            <el-form label-width="70px">
                <el-form-item label="用户名"> 
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="地址"> 
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-font">
                    <el-button @click="editVisible=false">取消</el-button>
                    <el-button type="primary" @click="saveEdit">更新</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import { Search, Plus, Edit, Delete } from '@element-plus/icons-vue';
import { fetchData } from '../api/index';
import { ElMessage,ElMessageBox } from 'element-plus';

interface TableItem {
    id: number;
    name: string;
    money: string;
    state: string;
    date: string;
    address: string;
}
const pageTotal = ref(0)

// 模块化 
const query = reactive({
    address: '',
    name: '',
    pageIndex: 1,
    pageSize: 2
})

const getData = async () => {
    const res = await fetchData()
    tableData.value = res.data.list
    pageTotal.value = res.data.pageTotal || 50
}

const handleSearch = () => {
    query.pageIndex = 1;
    getData();
}

const handlePageChange = (val:number) => {
    query.pageIndex = val;
    getData()
}

const tableData = ref<TableItem[]>([])

const multipleTable = ref(null)
const editVisible = ref(false)
let form = reactive({
    name:'',
    address:''
})
let idx:number = -1
const handleEdit = (index:number,row:TableItem) => {
    idx = index
    form.name = row.name
    form.address = row.address
    editVisible.value = true
}

const handleDelete = (index:number) => {
    ElMessageBox.confirm('确定要删除吗？','提示',{
        type:'warning'
    })
    .then(() => {
        ElMessage.success('删除成功')
        tableData.value.splice(index,1)
    })
}

const saveEdit = () => {
    editVisible.value = false;
    ElMessage.success(`修改第${idx + 1}行成功`)
    tableData.value[idx].name = form.name
    tableData.value[idx].address = form.address
}


onMounted(() => {
    getData();
})

</script>

<style scoped>
.handle-box {
margin-bottom: 20px;
}
.handle-select {
width: 120px;
}
.handle-input {
width: 300px;
}
.table {
width: 100%;
font-size: 14px;
}
.red {
color: #F56C6C;
}
.mr10 {
margin-right: 10px;
}
.table-td-thumb {
display: block;
margin: auto;
width: 40px;
height: 40px;
}
</style>