# typescript 业务点
- 登录业务
    interface loginInfo{
        username:string;
        password:string;
    }

    import type {FormInstance,FormRules} from 'element-plus'
    FormInstance 用于验证是否为表单
    FormRules 用于验证表单验证规则是否通过


- 权限深入定制方案
    - 登录 localStorage.getItem('ms_username')
        排除登录页本身
    - 角色 设置权限数组
        - permissStore 
            key 当前
            defaultList admin user
    - 路由守卫
        - document.title 
        - 登录拦截
        - 角色拦截
    