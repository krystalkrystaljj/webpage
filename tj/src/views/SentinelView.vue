<template>
  <!--TOPSAR-SPLIT-->
  <div class="tj-car-card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-icon color="red"><Sunrise /></el-icon>
          <el-button class="button" text>TOPSAR-SPLIT</el-button>
        </div>
      </template>
      
      
      <div>
        <!--下拉框-->
        <el-select 
          v-model="value" 
          class="m-2" 
          size="large" 
          clearable 
          placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

        <!--分割留白-->
        <div class="divider"></div>

        <!-- bursts-->
        <el-input disabled placeholder="1 to 9999 (max number of sbursts:9999)">
          <template #prepend>bursts</template>
        </el-input>
      </div>
    </el-card>
  </div>
  <el-divider />

  <!--orb-->
  <div class="tj-car-card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-icon color="blue"><MostlyCloudy /></el-icon>
          <el-button class="button" text>Apply-Orbit-File</el-button>
        </div>
      </template>
      <div>
        Orbit State Vectors:
        <!--分割留白-->
        <div class="divider"></div>
        <el-select
          v-model="valueorb"
          class="m-2"
          placeholder="Select"
          size="large"
        >
          <el-option
            v-for="item in orboptions"
            :key="item.valueorb"
            :label="item.label"
            :value="item.valueorb"
          />
        </el-select>
      </div>
    </el-card>
  </div>
  <el-divider />

  <!-- Back-Geocoding模块 -->
  <div class="tj-car-card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-icon color="orange"><Sunny /></el-icon>
          <el-button class="button" text>Back-Geocoding</el-button>
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

  <!-- interfergotam模块 -->
  <div class="tj-car-card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-icon :style="{color:'skyblue'}"><Ship /></el-icon>
          <el-button class="button" text>Interferogram</el-button>
        </div>
      </template>

      <span class="title">Degree of "Flat Earth" polynomial：</span>
      <el-select 
          v-model="valueDFEP" 
          class="m-2" 
          size="large" 
          clearable 
          placeholder="Select">
        <el-option
          v-for="item in DFEPoptions"
          :key="item.valueDFEP"
          :label="item.label"
          :value="item.valueDFEP">
        </el-option>
      </el-select>
      <br/>

      <span class="title">Number of "Flat Earth" estimation points：</span>
      <el-select 
          v-model="valueNFEEP"
          class="m-2" 
          size="large" 
          clearable 
          placeholder="Select">
        <el-option
          v-for="item in NFEEPoptions"
          :key="item.valueNFEEP"
          :label="item.label"
          :value="item.valueNFEEP">
        </el-option>
      </el-select>
      <br/>

      <span class="title">Orbit interpolation degree：</span>
      <el-select 
          v-model="valueOID"
          class="m-2" 
          size="large" 
          clearable 
          placeholder="Select">
        <el-option
          v-for="item in OIDoptions"
          :key="item.valueOID"
          :label="item.label"
          :value="item.valueOID">
        </el-option>
      </el-select>
      
    </el-card>
  </div>
  <el-divider />

  <!-- TOPSAR-Deburst模块 -->


  <!-- TopoPhaseRemoval模块 -->
  <div class="tj-car-card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-icon :style="{color:'green'}"><MostlyCloudy /></el-icon>
          <el-button class="button" text>TopoPhaseRemoval</el-button>
        </div>
      </template>
      <span class="title">Digital Elevation Model：</span>
      <el-select 
          v-model="valueDEM_TOP"
          class="m-2" 
          size="large" 
          clearable 
          placeholder="Select">
        <el-option
          v-for="item in DEM_TOPoptions"
          :key="item.valueDEM_TOP"
          :label="item.label"
          :value="item.valueDEM_TOP">
        </el-option>
      </el-select>
      <br/>

      <span class="title">Tile Extension[%]：</span>
      <el-select 
          v-model="valueTE"
          class="m-2" 
          size="large" 
          clearable 
          placeholder="Select">
        <el-option
          v-for="item in TEoptions"
          :key="item.valueTE"
          :label="item.label"
          :value="item.valueTE">
        </el-option>
      </el-select>
    </el-card>
  </div>

  <!-- Multilook模块 -->
  <div class="tj-car-card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-icon :style="{color:'palevioletred'}"><Drizzling /></el-icon>
          <el-button class="button" text>Multilook</el-button>
        </div>
      </template>
      <span class="title">Number of Range Looks:</span>
      <el-input v-model="range" size="large" class="m-2" placeholder="请输入内容"></el-input>

      <br/>
      <span class="title">Number of Azimuth Looks:</span>
      <el-input v-model="azimuth" size="large" class="m-2" placeholder="请输入内容"></el-input>

    </el-card>
  </div>

  <!-- GoldsteinPhaseFiltering模块 -->
  <div class="tj-car-card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-icon :style="{color:'purple'}"><Moon /></el-icon>
          <el-button class="button" text>GoldsteinPhaseFiltering</el-button>
        </div>
      </template>
      <span class="title">FFT Sizes：</span>
      <el-select 
          v-model="valueFFT"
          class="m-2" 
          size="large" 
          clearable 
          placeholder="Select">
        <el-option
          v-for="item in FFToptions"
          :key="item.valueFFT"
          :label="item.label"
          :value="item.valueFFT">
        </el-option>
      </el-select>
      <br/>

      <span class="title">Window Sizes：</span>
      <el-select 
          v-model="valueWIN"
          class="m-2" 
          size="large" 
          clearable 
          placeholder="Select">
        <el-option
          v-for="item in WINoptions"
          :key="item.valueWIN"
          :label="item.label"
          :value="item.valueWIN">
        </el-option>
      </el-select>
    </el-card>
  </div>
</template>

<script>


export default {
  name: "SentinelView",
  //import引入的组件需要注入到对象中才能使用
  components: {},

  data() {
    //这里存放数据
    return {
      // TOPSAR-SPLIT
      options: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
      value:'',

      // orb
      orboptions: [
        {
          valueorb: "Sentinel Precise (Auto Download)",
          label: "Sentinel Precise (Auto Download)",
        },
        {
          valueorb: "Sentinel Restituted (Auto Download)",
          label: "Sentinel Restituted (Auto Download)",
        },
        {
          valueorb: "DORIS Preliminary POR (ENVISAT)",
          label: "DORIS Preliminary POR (ENVISAT)",
        },
        {
          valueorb: "DORIS Precise VOR (ENVISAT) (Auto Download)",
          label: "DORIS Precise VOR (ENVISAT) (Auto Download)",
        },
        {
          valueorb: "DELFT Precise (ENVISAT, ERS1&2) (Auto Download)",
          label: "DELFT Precise (ENVISAT, ERS1&2) (Auto Download)",
        },
      ],
      valueorb:'',
      // Back-Geocoding模块
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
      
      //interfergotam模块
      DFEPoptions:[
       {
          valueDFEP: '选项1',
          label: '1'
        }, {
          valueDFEP: '选项2',
          label: '2'
        }, {
          valueDFEP: '选项3',
          label: '3'
        }, {
          valueDFEP: '选项4',
          label: '4'
        }, {
          valueDFEP: '选项5',
          label: '5'
        },{
          valueDFEP: '选项6',
          label: '6'
        },{
          valueDFEP: '选项7',
          label: '7'
        },{
          valueDFEP: '选项8',
          label: '8'
        },
      ],
      NFEEPoptions: [
        {
          valueNFEEP: '选项1',
          label: '301'
        }, {
          valueNFEEP: '选项2',
          label: '401'
        }, {
          valueNFEEP: '选项3',
          label: '501'
        }, {
          valueNFEEP: '选项4',
          label: '601'
        }, {
          valueNFEEP: '选项5',
          label: '701'
        }, {
          valueNFEEP: '选项6',
          label: '801'
        }, {
          valueNFEEP: '选项7',
          label: '901'
        }, {
          valueNFEEP: '选项7',
          label: '1001'
        }],
      OIDoptions: [
        {
          valueOID: '选项1',
          label: '1'
        }, {
          valueOID: '选项2',
          label: '2'
        }, {
          valueOID: '选项3',
          label: '3'
        }, {
          valueOID: '选项4',
          label: '4'
        }, {
          valueOID: '选项5',
          label: '5'
        }],
      valueDFEP: '',
      valueNFEEP: '',
      valueOID:'',

      //TopoPhaseRemoval模块
      DEM_TOPoptions:[
       {
          valueDEM_TOP: '选项1',
          label: 'CDEM (Auto Download)'
        }, {
          valueDEM_TOP: '选项2',
          label: 'Copernicus 30m Global DEM (Auto Download)'
        }, {
          valueDEM_TOP: '选项3',
          label: 'Copernicus 90m Global DEM (Auto Download)'
        }, {
          valueDEM_TOP: '选项4',
          label: 'GETASSE30 (Auto Download)'
        }, {
          valueDEM_TOP: '选项5',
          label: 'SRTM 1Sec Grid'
        },{
          valueDEM_TOP: '选项6',
          label: 'SRTM 1Sec HGT (Auto Download)'
        },{
          valueDEM_TOP: '选项7',
          label: 'SRTM 3Sec (Auto Download)'
        },{
          valueDEM_TOP: '选项8',
          label: 'External DEM'
        },
      ],
      TEoptions: [
        {
          valueTE: '选项1',
          label: '20'
        }, {
          valueTE: '选项2',
          label: '40'
        }, {
          valueTE: '选项3',
          label: '60'
        }, {
          valueTE: '选项4',
          label: '80'
        }, {
          valueTE: '选项5',
          label: '100'
        }, {
          valueTE: '选项6',
          label: '150'
        }, {
          valueTE: '选项7',
          label: '200'
        }],
        valueDEM_TOP:'',
        valueTE:'',


      //Multilook模块
      range:'null',
      azimuth:'null',

      //GoldsteinPhaseFiltering模块
      FFToptions: [
        {
          valueFFT: '选项1',
          label: '32'
        }, {
          valueFFT: '选项2',
          label: '64'
        }, {
          valueFFT: '选项3',
          label: '128'
        }, {
          valueFFT: '选项4',
          label: '256'
        }],
      WINoptions: [
        {
          valueOID: '选项1',
          label: '3'
        },{
          valueOID: '选项2',
          label: '5'
        }, {
          valueOID: '选项3',
          label: '7'
        }],
      valueFFT: '',
      valueWIN: '',
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>

<style>
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
