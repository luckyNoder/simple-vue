<template>
  <div>
    <slot></slot>
    <Menu width="auto" theme="dark">
        <template v-for="item in menuList">
            <!-- <Submenu v-if="item.children" :key="item.name" :name='item.name'>
                <MenuItem></MenuItem>
            </Submenu> -->
            <ReSubMenu :subMenu="item" v-if="item.children" :key="item.name" :name='item.name' :parent='item'></ReSubMenu>
            <MenuItem v-else  :key="item.name" :name='item.name'> 
                <Icon :type="item.icon" />
                {{item.title}}
            </MenuItem>
        </template>
    </Menu>
    <div class="muneDrop"></div>
  </div>
</template>

<script>
import ReSubMenu from "./ReSubMenu";
export default {
  components: {
    ReSubMenu
  },
  name: "SideMenu",
  props: {
    collapsible: {
      type: Boolean,
      default: false
    },
    menuList: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style>
</style>
