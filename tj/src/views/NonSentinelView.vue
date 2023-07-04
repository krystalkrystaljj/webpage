<template>
  <div>
    <!-- DEM-Assisted-Coregistration -->
    <div class="tj-car-card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-icon color="orange"><Sunny /></el-icon>
          <el-button class="button" text>DEM-Assisted-Coregistration</el-button>
        </div>
      </template>

      <span class="title">Digital Elevation Model：</span>
      <el-select 
          v-model="valueDEM" 
          class="m-2" 
          size="large" 
          clearable 
          placeholder="Select">
        <el-option
          v-for="item in DEMoptions"
          :key="item.valueDEM"
          :label="item.label"
          :value="item.valueDEM">
        </el-option>
      </el-select>
      <br/>

      <span class="title">DEM Resampling Method：</span>
      <el-select 
          v-model="valueDEMRM" 
          class="m-2" 
          size="large" 
          clearable 
          placeholder="Select">
        <el-option
          v-for="item in DEMRMoptions"
          :key="item.valueDEMRM"
          :label="item.label"
          :value="item.valueDEMRM">
        </el-option>
      </el-select>
      <br/>

      <span class="title">Resampling Type：</span>
      <el-select
          v-model="valueRT" 
          class="m-2" 
          size="large" 
          clearable 
          placeholder="Select">
        <el-option
          v-for="item in RToptions"
          :key="item.valueRT"
          :label="item.label"
          :value="item.valueRT">
        </el-option>
      </el-select>

    </el-card>
  </div>
  <el-divider />
  </div>
</template>

<script>
export default {
  date() {
    return {

      //DEM-Assisted-Coregistration
      DEMoptions:[
       {
          valueDEM: '选项1',
          label: 'CDEM (Auto Download)'
        }, {
          valueDEM: '选项2',
          label: 'Copernicus 30m Global dem (Auto Download)'
        }, {
          valueDEM: '选项3',
          label: 'Copernicus 90m Global dem (Auto Download)'
        }, {
          valueDEM: '选项4',
          label: 'GETASSE30 (Auto Download)'
        }, {
          valueDEM: '选项5',
          label: 'SRTM 1Sec Grid'
        },{
          valueDEM: '选项6',
          label: 'SRTM 1Sec HGT (Auto Download)'
        },{
          valueDEM: '选项7',
          label: 'SRTM 3Sec (Auto Download)'
        },{
          valueDEM: '选项8',
          label: 'External DEM'
        },
      ],
      DEMRMoptions: [
        {
          valueDEMRM: '选项1',
          label: 'NEAREST_NEIGHBOUR'
        }, {
          valueDEMRM: '选项2',
          label: 'BILINEAR_INTERPOLATION'
        }, {
          valueDEMRM: '选项3',
          label: 'CUBIC_CONVOLUTION'
        }, {
          valueDEMRM: '选项4',
          label: 'BISINC_5_POINT_INTERPOLATION'
        }, {
          valueDEMRM: '选项5',
          label: 'BISINC_11_POINT_INTERPOLATION'
        }, {
          valueDEMRM: '选项6',
          label: 'BISINC_21_POINT_INTERPOLATION'
        }, {
          valueDEMRM: '选项7',
          label: 'BICUBIC_INTERPOLATTON'
        }],
      RToptions: [
        {
          valueRT: '选项1',
          label: 'NEAREST_NEIGHBOUR'
        }, {
          valueRT: '选项2',
          label: 'BILINEAR_INTERPOLATION'
        }, {
          valueRT: '选项3',
          label: 'CUBIC_CONVOLUTION'
        }, {
          valueRT: '选项4',
          label: 'BISINC_5_POINT_INTERPOLATION'
        }, {
          valueRT: '选项5',
          label: 'BISINC_11_POINT_INTERPOLATION'
        }, {
          valueRT: '选项6',
          label: 'BISINC_21_POINT_INTERPOLATION'
        }, {
          valueRT: '选项7',
          label: 'BICUBIC_INTERPOLATTON'
        }],
        valueDEM: '',
        valueDEMRM: '',
        valueRT:'',
    };
  },
};
</script>

<style scoped>
.tj-car-card {
  display: flex;
  justify-content: center;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.m-2{
  width: 450px;

}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.tj-car-card {
  margin-top: 20px;
}
.title{
  display: inline-block;
  width: 450px;
  margin: 8px 0px 10px 0;
  
}

.box-card {
  width: 600px;
}

.divider {
  margin-bottom: 20px;
}
</style>