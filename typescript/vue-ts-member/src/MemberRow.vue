<template>
    <tr>
        <td>
            <img :src="props.member.avatar_url" alt="" style="width:50px;height:50px;">
        </td>
        <td>{{ props.member.id }}</td>
        <td>{{ props.member.login }}</td>
    </tr>
</template>

<script setup lang="ts">
import { MemberEntity } from './model/memberEntity';
interface Props {
    member:MemberEntity
}

// member:{
    //     type:Object,
    //     default:{} as MemberEntity
    // }
const props = defineProps<Props>()


</script>

<style scoped>

</style>