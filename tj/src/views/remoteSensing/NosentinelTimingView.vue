<template>
  <div>
    <!-- DEM-Assisted-Coregistration -->
    <div class="tj-car-card">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <el-icon color="orange"><Sunny /></el-icon>
            <el-button class="button" text
              >DEM-Assisted-Coregistration</el-button
            >
          </div>
        </template>

        <span class="title">Digital Elevation Model：</span>
        <el-select
          v-model="valueDEM"
          class="m-2"
          size="large"
          clearable
          placeholder="Select"
        >
          <el-option
            v-for="item in DEMoptions"
            :key="item.valueDEM"
            :label="item.label"
            :value="item.valueDEM"
          >
          </el-option>
        </el-select>
        <br />

        <span class="title">DEM Resampling Method：</span>
        <el-select
          v-model="valueDEMRM"
          class="m-2"
          size="large"
          clearable
          placeholder="Select"
        >
          <el-option
            v-for="item in DEMRMoptions"
            :key="item.valueDEMRM"
            :label="item.label"
            :value="item.valueDEMRM"
          >
          </el-option>
        </el-select>
        <br />

        <span class="title">Resampling Type：</span>
        <el-select
          v-model="valueRT"
          class="m-2"
          size="large"
          clearable
          placeholder="Select"
        >
          <el-option
            v-for="item in RToptions"
            :key="item.valueRT"
            :label="item.label"
            :value="item.valueRT"
          >
          </el-option>
        </el-select>
      </el-card>
    </div>
    <el-divider />
  </div>

  <!-- interfergotam模块 -->
  <div class="tj-car-card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-icon :style="{ color: 'skyblue' }"><Ship /></el-icon>
          <el-button class="button" text>Interferogram</el-button>
        </div>
      </template>

      <span class="title">Degree of "Flat Earth" polynomial：</span>
      <el-select
        v-model="valueDFEP"
        class="m-2"
        size="large"
        clearable
        placeholder="Select"
      >
        <el-option
          v-for="item in DFEPoptions"
          :key="item.valueDFEP"
          :label="item.label"
          :value="item.valueDFEP"
        >
        </el-option>
      </el-select>
      <br />

      <span class="title">Number of "Flat Earth" estimation points：</span>
      <el-select
        v-model="valueNFEEP"
        class="m-2"
        size="large"
        clearable
        placeholder="Select"
      >
        <el-option
          v-for="item in NFEEPoptions"
          :key="item.valueNFEEP"
          :label="item.label"
          :value="item.valueNFEEP"
        >
        </el-option>
      </el-select>
      <br />

      <span class="title">Orbit interpolation degree：</span>
      <el-select
        v-model="valueOID"
        class="m-2"
        size="large"
        clearable
        placeholder="Select"
      >
        <el-option
          v-for="item in OIDoptions"
          :key="item.valueOID"
          :label="item.label"
          :value="item.valueOID"
        >
        </el-option>
      </el-select>
    </el-card>
  </div>
  <el-divider />

  <!-- TopoPhaseRemoval模块 -->
  <div class="tj-car-card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-icon :style="{ color: 'green' }"><MostlyCloudy /></el-icon>
          <el-button class="button" text>TopoPhaseRemoval</el-button>
        </div>
      </template>
      <span class="title">Digital Elevation Model：</span>
      <el-select
        v-model="valueDEM_TOP"
        class="m-2"
        size="large"
        clearable
        placeholder="Select"
      >
        <el-option
          v-for="item in DEM_TOPoptions"
          :key="item.valueDEM_TOP"
          :label="item.label"
          :value="item.valueDEM_TOP"
        >
        </el-option>
      </el-select>
      <br />

      <span class="title">Tile Extension[%]：</span>
      <el-select
        v-model="valueTE"
        class="m-2"
        size="large"
        clearable
        placeholder="Select"
      >
        <el-option
          v-for="item in TEoptions"
          :key="item.valueTE"
          :label="item.label"
          :value="item.valueTE"
        >
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

  <el-row>
    <el-button class="btn" @click="submit">提交</el-button>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      //DEM-Assisted-Coregistration
      DEMoptions: [
        {
          valueDEM: "CDEM (Auto Download)",
          label: "CDEM (Auto Download)",
        },
        {
          valueDEM: "Copernicus 30m Global dem (Auto Download)",
          label: "Copernicus 30m Global dem (Auto Download)",
        },
        {
          valueDEM: "Copernicus 90m Global dem (Auto Download)",
          label: "Copernicus 90m Global dem (Auto Download)",
        },
        {
          valueDEM: "GETASSE30 (Auto Download)",
          label: "GETASSE30 (Auto Download)",
        },
        {
          valueDEM: "SRTM 1Sec Grid",
          label: "SRTM 1Sec Grid",
        },
        {
          valueDEM: "SRTM 1Sec HGT (Auto Download)",
          label: "SRTM 1Sec HGT (Auto Download)",
        },
        {
          valueDEM: "SRTM 3Sec (Auto Download)",
          label: "SRTM 3Sec (Auto Download)",
        },
        {
          valueDEM: "External DEM",
          label: "External DEM",
        },
      ],
      DEMRMoptions: [
        {
          valueDEMRM: "NEAREST_NEIGHBOUR",
          label: "NEAREST_NEIGHBOUR",
        },
        {
          valueDEMRM: "BILINEAR_INTERPOLATION",
          label: "BILINEAR_INTERPOLATION",
        },
        {
          valueDEMRM: "CUBIC_CONVOLUTION",
          label: "CUBIC_CONVOLUTION",
        },
        {
          valueDEMRM: "BISINC_5_POINT_INTERPOLATION",
          label: "BISINC_5_POINT_INTERPOLATION",
        },
        {
          valueDEMRM: "BISINC_11_POINT_INTERPOLATION",
          label: "BISINC_11_POINT_INTERPOLATION",
        },
        {
          valueDEMRM: "BISINC_21_POINT_INTERPOLATION",
          label: "BISINC_21_POINT_INTERPOLATION",
        },
        {
          valueDEMRM: "BICUBIC_INTERPOLATTON",
          label: "BICUBIC_INTERPOLATTON",
        },
      ],
      RToptions: [
        {
          valueRT: "NEAREST_NEIGHBOUR",
          label: "NEAREST_NEIGHBOUR",
        },
        {
          valueRT: "BILINEAR_INTERPOLATION",
          label: "BILINEAR_INTERPOLATION",
        },
        {
          valueRT: "CUBIC_CONVOLUTION",
          label: "CUBIC_CONVOLUTION",
        },
        {
          valueRT: "BISINC_5_POINT_INTERPOLATION",
          label: "BISINC_5_POINT_INTERPOLATION",
        },
        {
          valueRT: "BISINC_11_POINT_INTERPOLATION",
          label: "BISINC_11_POINT_INTERPOLATION",
        },
        {
          valueRT: "BISINC_21_POINT_INTERPOLATION",
          label: "BISINC_21_POINT_INTERPOLATION",
        },
        {
          valueRT: "BICUBIC_INTERPOLATTON",
          label: "BICUBIC_INTERPOLATTON",
        },
      ],
      valueDEM: "",
      valueDEMRM: "",
      valueRT: "",


      //interfergotam模块
      DFEPoptions: [
        {
          valueDFEP: "1",
          label: "1",
        },
        {
          valueDFEP: "2",
          label: "2",
        },
        {
          valueDFEP: "3",
          label: "3",
        },
        {
          valueDFEP: "4",
          label: "4",
        },
        {
          valueDFEP: "5",
          label: "5",
        },
        {
          valueDFEP: "6",
          label: "6",
        },
        {
          valueDFEP: "7",
          label: "7",
        },
        {
          valueDFEP: "8",
          label: "8",
        },
      ],
      NFEEPoptions: [
        {
          valueNFEEP: "301",
          label: "301",
        },
        {
          valueNFEEP: "401",
          label: "401",
        },
        {
          valueNFEEP: "501",
          label: "501",
        },
        {
          valueNFEEP: "601",
          label: "601",
        },
        {
          valueNFEEP: "701",
          label: "701",
        },
        {
          valueNFEEP: "801",
          label: "801",
        },
        {
          valueNFEEP: "901",
          label: "901",
        },
        {
          valueNFEEP: "1001",
          label: "1001",
        },
      ],
      OIDoptions: [
        {
          valueOID: "1",
          label: "1",
        },
        {
          valueOID: "2",
          label: "2",
        },
        {
          valueOID: "3",
          label: "3",
        },
        {
          valueOID: "4",
          label: "4",
        },
        {
          valueOID: "5",
          label: "5",
        },
      ],
      valueDFEP: "",
      valueNFEEP: "",
      valueOID: "",

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

  methods:{
    submit() {
      const num = this.DEMoptions[0].valueDEM
      console.log(num);
    }
  }
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
.m-2 {
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
.title {
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

.btn{
  margin: auto;
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>