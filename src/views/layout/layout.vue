<template>
  <div class="layout_warpper">
    <Layout class="layout_warpper_autho">
      <Sider collapsible v-model="collapsible" hide-trigger breakpoint="sm"></Sider>
      <Layout>
        <Header class="header_wrapper">
           <Icon :class="collType" @click.native="handleColl" type="md-menu" size="32"></Icon>
        </Header>
        <Content class="content_wrapper">
          <Card shadow bordered class="content_pages">
            //
            <!-- <router-view><router-view/> -->
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data(){
    return{
      collapsible:false
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
.layout_warpper,.layout_warpper_autho{
  height: 100%;
  .header_wrapper{
    background: #fff;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, .1);
    padding: 0 15px;
    .collIcon{
      cursor: pointer;
      transition: all .3s ease;
      &.rotale{
        transform:rotateZ(-90deg);
        transition: all .3s ease;
      }
    }
  }
  .content_wrapper{
    padding: 10px;
    .content_pages{
      min-height: calc(~"100vh - 84px")
    }
  }
}
</style>

