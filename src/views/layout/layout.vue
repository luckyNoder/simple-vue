<template>
  <div class="layout_warpper">
    <Layout class="layout_warpper_autho">
      <Sider collapsible v-model="collapsible" hide-trigger breakpoint="sm">
        <SideMenu :collapsible = "collapsible" :menuList = "menuList">
          <div class="logoContent">JS 米饭</div>
        </SideMenu>
      </Sider>
      <Layout>
        <Header class="header_wrapper">
           <Icon :class="collType" @click.native="handleColl" type="md-menu" size="32"></Icon>
        </Header>
        <Content class="content_wrapper">
          <Card shadow bordered class="content_pages">
            //
           <router-view/>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import SideMenu from '../../components/SideMenu'
export default {
  components:{
    SideMenu
  },
  data(){
    return{
      collapsible:false,
      menuList:[
        {
          title:'Button',
          name:'menu1',
          icon:"logo-javascript"
        },
        {
          title:'Icon',
          name:'menu11',
          icon:"logo-javascript"
        },
        {
          title:'Java米饭',
          name:'menu2',
          icon:"ios-school",
          children:[
            {
              title:'JavaScript',
              name:'menu2_sub1',
              icon:"ios-rainy"
            }
          ]
        }
      ]
    }
  },
  computed:{
    collType(){
      return [
        "collIcon",
        this.collapsible? 'rotale':''
      ]
    }
  },
  methods:{
    handleColl(){
      this.collapsible = !this.collapsible
    }
  }
}
</script>

<style lang="less">
@import url("./layout.less");

</style>

