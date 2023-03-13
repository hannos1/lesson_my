<script setup lang="ts">
import MemberHeader from './MemberHeader.vue'
import {ref,onMounted,Ref} from 'vue'
import {MemberEntity} from './model/memberEntity'
import { fetchMembersAsync } from './api/index'
// import {members} from './api/member'
import MemberRow from './MemberRow.vue'

const membersRef:Ref<MemberEntity[]> = ref([])
onMounted(async () => {
  const data = await fetchMembersAsync()
    // .then(items => {
    //   membersRef.value = items
    // })
  membersRef.value = data
})
</script>

<template>
<div class="row">
  <h2>Members Page</h2>
  <table class="table">
    <thead>
      <MemberHeader />
    </thead>
    <tbody>
      <MemberRow
      v-for="member in membersRef" 
      :key="member.id"
      :member="member"
      />
      <!-- <tr v-for="member in membersRef" :key="member.id">
        <td>
          {{ member.avatar_url }}
          <img :src="member.avatar_url" alt="" style="width:50px;height:50px;">
        </td>
        <td>
          {{ member.id }}
        </td>
        <td>
          {{ member.login }}
        </td>
      </tr> -->
    </tbody>
  </table>
</div>
</template>

<style>

</style>
