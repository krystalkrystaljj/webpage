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
          placeholder="Select"
          size="large"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>

        <!--分割留白-->
        <div class="divider"></div>

        <!-- bursts-->
        <el-input  disabled placeholder="1 to 9999 (max number of sbursts:9999)">
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
          v-model="value"
          class="m-2"
          placeholder="Select"
          size="large"
        >
          <el-option
            v-for="item in orboptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </el-card>
  </div>
  <el-divider />

  <div class="tj-car-card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-icon color="orange"><Sunny /></el-icon>
          <el-button class="button" text>Back-Geocoding</el-button>
        </div>
      </template>
      
      <template>
  <div class="m-4">
    <p>default</p>
    <el-select
      v-model="value1"
      multiple
      placeholder="Select"
      style="width: 240px"
    >
      <el-option
        v-for="item in optionl"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
  <div class="m-4">
    <p>use collapse-tags</p>
    <el-select
      v-model="value2"
      multiple
      collapse-tags
      placeholder="Select"
      style="width: 240px"
    >
      <el-option
        v-for="item in optionl"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
  <div class="m-4">
    <p>use collapse-tags-tooltip</p>
    <el-select
      v-model="value3"
      multiple
      collapse-tags
      collapse-tags-tooltip
      placeholder="Select"
      style="width: 240px"
    >
      <el-option
        v-for="item in optionl"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
  <div class="m-4">
    <p>use max-collapse-tags</p>
    <el-select
      v-model="value4"
      multiple
      collapse-tags
      collapse-tags-tooltip
      :max-collapse-tags="3"
      placeholder="Select"
      style="width: 240px"
    >
      <el-option
        v-for="item in optionl"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>
    </el-card>
  </div>
  <el-divider />

  <div class="tj-car-card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" text>Interferogram</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </el-card>
  </div>
  <el-divider />

  <div class="tj-car-card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" text>TOPSAR-Deburst</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </el-card>
  </div>

  <div class="tj-car-card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" text>TopoPhaseRemoval</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </el-card>
  </div>

  <div class="tj-car-card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" text>Multilook</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </el-card>
  </div>
  <div class="tj-car-card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" text>GoldsteinPhaseFiltering</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
import { ref } from 'vue'
// const value1 = ref([])
// const value2 = ref([])
// const value3 = ref([])
// const value4 = ref([])

// const optionl= [
//   {
//     value: 'Option1',
//     label: 'Option1',
//   },
//   {
//     value: 'Option2',
//     label: 'Option2',
//   },
//   {
//     value: 'Option3',
//     label: 'Option3',
//   },
//   {
//     value: 'Option4',
//     label: 'Option4',
//   },
//   {
//     value: 'Option5',
//     label: 'Option5',
//   },
// ]

export default {
  
  
  name: "SentinelView",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  
  data() {
    //这里存放数据
    return {
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
      orboptions: [
        {
          value: "Sentinel Precise (Auto Download)",
          label: "Sentinel Precise (Auto Download)",
        },
        {
          value: "Sentinel Restituted (Auto Download)",
          label: "Sentinel Restituted (Auto Download)",
        },
        {
          value: "DORIS Preliminary POR (ENVISAT)",
          label: "DORIS Preliminary POR (ENVISAT)",
        },
        {
          value: "DORIS Precise VOR (ENVISAT) (Auto Download)",
          label: "DORIS Precise VOR (ENVISAT) (Auto Download)",
        },
        {
          value: "DELFT Precise (ENVISAT, ERS1&2) (Auto Download)",
          label: "DELFT Precise (ENVISAT, ERS1&2) (Auto Download)",
        },
      ], 
      option: [
  {
    value: 'jj',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
  }

      
 
      
     
    
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

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.tj-car-card {
  margin-top: 20px;
}

.box-card {
  width: 600px;
}

.divider {
  margin-bottom: 20px;
}
</style>
