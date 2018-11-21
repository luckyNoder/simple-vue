<template>
    <Submenu :name="parent.name">
        <template slot="title">
            <Icon :type="parent.icon" />
            {{parent.title}}
         </template>
        <template v-for="item in parent.children">
            <!-- <ReSubMenu :subMenu="item" v-if="item.children" :key="item.name" :name="item.name" :parent='item'></ReSubMenu> -->
            <MenuItem   :key="item.name" :name='item.name'> <Icon :type="item.icon" />{{item.title}}</MenuItem>
        </template>
    </Submenu>
</template>

<script>
export default {
    name:'ReSubMenus',
    props:{
        parent:{
            type:Object,
            default:() =>({})
        }
    }
}
</script>

<style>

</style>
