import {MemberEntity} from '../model/memberEntity'

const baseURL:string = 'https://api.github.com/orgs/lemoncode'

// ts 在架构上为前端项目引入模型层
export const fetchMembersAsync = ():Promise<MemberEntity[]> => {
    const membersURL = `${baseURL}/members`
    return fetch(membersURL)    // 二进制response 不满足需要
            .then(response => response.json())  // any[]  不满足页面需要
            .then(mapToMembers)  // 后端的接口数据 满足页面model需要
}

const mapToMembers = (githubMembers:any[]):MemberEntity[] => { // githubMembers 有很多我们不要
    return githubMembers.map(mapToMember)
}

const mapToMember = (githubMember:any):MemberEntity => {
    return {
        id:githubMember.id,
        login:githubMember.login,
        avatar_url:githubMember.avatar_url
    }
}