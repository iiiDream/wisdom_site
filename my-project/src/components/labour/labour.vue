<template>
  <div id="labour">
    <!-- 页面上半部分 -->
    <div class="top">
      <!-- 左边部分 -->
      <div class="left">
        <!-- 左边上部盒子 -->
        <div class="left-top">
          <div class="name">
            <h3>现场人员</h3>
            <div class="la-jindu">
              <div class="la-subjindu">
                <p>{{dh}}%</p>
              </div>
            </div>
          </div>
          <div class="left-top-data">
            <ul>
              <li style="margin-top:0">
                <div>
                  <img src="../../../static/images/l_total.png" alt>
                </div>
                <div>
                  <p>项目在场人数</p>
                  <span
                    v-for="(item,index) in KQCountData"
                    :key="index"
                  >{{item.sum}}</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="../../../static/images/l_zc.png" alt>
                </div>
                <div>
                  <p>今日考勤总人数</p>
                  <span
                    v-for="(item,index) in KQCountData"
                    :key="index"
                  >{{item.kq}}</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="../../../static/images/l_jrkq.png" alt>
                </div>
                <div>
                  <p>今日工人出勤人数</p>
                  <span
                    v-for="(item,index) in KQCountData"
                    :key="index"
                  >{{item.workerCheck}}</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="../../../static/images/l_gl.png" alt>
                </div>
                <div>
                  <p>今日管理出勤人数</p>
                  <span
                  v-for="(item,index) in KQCountData"
                    :key="index"
                    >{{item.managerCheck}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 左边下部盒子 -->
        <div class="left-bottom">
          <div class="name">
            <h3>现场工种</h3>
          </div>
          <div class="map" id="professionMap" style="width:4.14rem;height:1.8rem;"></div>
          <div class="left-bottom-data" id="leftBottom">
            <ul id="leftBottom1">
              <li v-for="(item,key,index) in WorkTypeData" :key="index">
                <div class="float-left">
                  <i :class="'color'+(index+1)"></i>
                  <span>{{key}}</span>
                </div>
                <div class="float-right">
                  <span>{{item}}</span>
                  <span>人</span>
                </div>
              </li>
            </ul>
            <ul id="leftBottom2"></ul>
          </div>
        </div>
      </div>
      <!-- 中间部分 -->
      <div class="main">
        <!-- 中间上部盒子 -->
        <div class="main-top">
          <div class="squad">
            <p class="table-title">班组动态</p>
            <table>
              <tr>
                <th>班组</th>
                <th>今日考勤</th>
                <th>在场人数</th>
              </tr>
            </table>
            <div class="table-box" id="squad">
              <table id="squad1">
                <tr v-for="(item,index) in staffData.team" :key="index">
                  <td>{{item.title}}</td>
                  <td>{{item.kq}}人</td>
                  <td>{{item.sum}}人</td>
                </tr>
              </table>
              <table id="squad2"></table>
            </div>
          </div>
          <div class="staff">
            <p class="table-title">人员动态</p>
            <table>
              <tr>
                <th>姓名</th>
                <th>进出</th>
                <th>时间</th>
              </tr>
            </table>
            <div class="table-box" id="staff">
              <table id="staff1">
                <tr v-for="(item,index) in staffData.list" :key="index">
                  <td>{{item.title}}</td>
                  <td>{{item.inOut_id=='in'?'进':'出'}}</td>
                  <td>{{item.createTime}}</td>
                </tr>
                <tr></tr>
              </table>
              <table id="staff2"></table>
            </div>
          </div>
        </div>
        <!-- 中间下部盒子 -->
        <div class="main-bottom">
          <div class="name">
            <h3>项目出勤统计</h3>
            <div class="attendance-title">
              <div class="white-box"></div>
              <div>总人数</div>
              <div class="blue-box"></div>
              <div style="margin-right:.1rem">工人出勤</div>
              <div class="brilliant-box"></div>
              <div style="margin-right:.1rem">管理人员出勤</div>
            </div>
          </div>
          <div id="attendance" style="width:8.65rem; height:3rem;"></div>
        </div>
      </div>
      <!-- 右边部分 -->
      <div class="right">
        <!-- 右边上部盒子 -->
        <div class="right-top">
          <div class="name">
            <h3>今日劳动曲线</h3>
          </div>
          <div class="map" id="labourCurve" style="width: 4.14rem; height: 2.45rem;"></div>
        </div>
        <!-- 右边下部盒子 -->
        <div class="right-bottom">
          <div class="name">
            <h3>分包单位考勤情况</h3>
          </div>
          <div class="right-bottom-data" id="rightBottom">
            <ul id="rightBottom1">
              <li v-for="(item,index) in buildcompanyData" :key="index">
                <p>{{item.name}}</p>
                <div class="register">
                  <span>进场登记人数</span>
                  <span class="progress"></span>
                  <span>{{item.zc}}</span>
                </div>
                <div class="reality" id="reality">
                  <span>现场实时人数</span>
                  <span class="progress" :data-bfb="item.bfb"></span>
                  <span>{{item.kq || 0}}</span>
                </div>
              </li>
            </ul>
            <ul id="rightBottom2"></ul>
          </div>
          <div class="location">进退场</div>
        </div>
      </div>
    </div>
    <!-- 页面下半部分 -->
    <div class="bottom">
      <!-- 进场手续签订 -->
      <div class="procedure">
        <div class="name">
          <h3>进场手续签订</h3>
        </div>
        <div class="float-left">
          <ul
            v-for="(item,index) in contractData"
            :key="index"
            style="margin-top:-.1rem"
          >
            <li>
              <span class="span-margin">共录入:</span>
              <span>{{item.entrance.total}}</span>
              <span>人</span>
            </li>
            <li>
              <span class="span-margin">共签订:</span>
              <span>{{item.entrance.ht}}</span>
              <span>人</span>
            </li>
            <li>
              <span class="span-margin">未签订:</span>
              <span>{{item.entrance.wq}}</span>
              <span>人</span>
            </li>
            <li>
              <span class="span-margin">是否合格:</span>
              <span :class="item.exit_pdf.bfb==100?'font-green':'font-red'">{{item.entrance.hg}}</span>
            </li>
          </ul>
        </div>
        <div
          class="map float-right"
          :class="item.entrance.bfb==100?'qualified':'disqualification'"
          v-for="(item,index) in contractData"
          :key="index"
        >
          <!-- qualified为合格 disqualification为不合格 -->
          <div class="border" :class="item.entrance.bfb==100?'border-green':'border-red'">
            <div class="subBorder" id="roateBox1">
              <div class="wrapper" style="right:0rem">
                <div
                  class="circleProgress"
                  :class="item.entrance.bfb==100?'rightcircle-green':'rightcircle-red'"
                ></div>
              </div>
              <div class="wrapper" style="left:0rem">
                <div
                  class="circleProgress"
                  :class="item.entrance.bfb==100?'leftcircle-green':'leftcircle-red'"
                ></div>
              </div>
            </div>
            <span id="roateBfb1">{{Math.round(item.entrance.bfb)}}</span>
            <span>%</span>
          </div>
        </div>
      </div>
      <!-- 退场手续签订 -->
      <div class="contract">
        <div class="name">
          <h3>退场手续签订</h3>
        </div>
        <div class="float-left">
          <ul v-for="(item,index) in contractData" :key="index" style="margin-top:-.1rem">
            <li>
              <span class="span-margin">共录入:</span>
              <span>{{item.exit_pdf.total}}</span>
              <span>人</span>
            </li>
            <li>
              <span class="span-margin">共签订:</span>
              <span>{{item.exit_pdf.ht}}</span>
              <span>人</span>
            </li>
            <li>
              <span class="span-margin">未签订:</span>
              <span>{{item.exit_pdf.wq}}</span>
              <span>人</span>
            </li>
            <li>
              <span class="span-margin">是否合格:</span>
              <span :class="item.exit_pdf.bfb==100?'font-green':'font-red'">{{item.exit_pdf.hg}}</span>
            </li>
          </ul>
        </div>
        <div
          class="map float-right"
          :class="item.exit_pdf.bfb==100?'qualified':'disqualification'"
          v-for="(item,index) in contractData"
          :key="index"
        >
          <div class="border" :class="item.exit_pdf.bfb==100?'border-green':'border-red'">
            <div class="subBorder" id="roateBox2">
              <div class="wrapper" style="right:0rem">
                <div
                  class="circleProgress"
                  :class="item.exit_pdf.bfb==100?'rightcircle-green':'rightcircle-red'"
                ></div>
              </div>
              <div class="wrapper" style="left:0rem">
                <div
                  class="circleProgress"
                  :class="item.exit_pdf.bfb==100?'leftcircle-green':'leftcircle-red'"
                ></div>
              </div>
            </div>
            <span id="roateBfb2">{{Math.round(item.exit_pdf.bfb)}}</span>
            <span>%</span>
          </div>
        </div>
      </div>
      <!-- 劳动合同签订 -->
      <div class="safety">
        <div class="name">
          <h3>劳动合同签订</h3>
        </div>
        <div class="float-left">
          <ul v-for="(item,index) in contractData" :key="index" style="margin-top:-.1rem">
            <li>
              <span class="span-margin">共录入:</span>
              <span>{{item.contract.total}}</span>
              <span>人</span>
            </li>
            <li>
              <span class="span-margin">共签订:</span>
              <span>{{item.contract.ht}}</span>
              <span>人</span>
            </li>
            <li>
              <span class="span-margin">未签订:</span>
              <span>{{item.contract.wq}}</span>
              <span>人</span>
            </li>
            <li>
              <span class="span-margin">是否合格:</span>
              <span :class="item.exit_pdf.bfb==100?'font-green':'font-red'">{{item.contract.hg}}</span>
            </li>
          </ul>
        </div>
        <div
          class="map float-right"
          :class="item.contract.bfb==100?'qualified':'disqualification'"
          v-for="(item,index) in contractData"
          :key="index"
        >
          <div class="border" :class="item.contract.bfb==100?'border-green':'border-red'">
            <div class="subBorder" id="roateBox3">
              <div class="wrapper" style="right:0rem">
                <div
                  class="circleProgress"
                  :class="item.contract.bfb==100?'rightcircle-green':'rightcircle-red'"
                ></div>
              </div>
              <div class="wrapper" style="left:0rem">
                <div
                  class="circleProgress"
                  :class="item.contract.bfb==100?'leftcircle-green':'leftcircle-red'"
                ></div>
              </div>
            </div>
            <span id="roateBfb3">{{Math.round(item.contract.bfb)}}</span>
            <span>%</span>
          </div>
        </div>
      </div>
      <!-- 两制确认书签订 -->
      <div class="information">
        <div class="name">
          <h3>两制确认书签订</h3>
        </div>
        <div class="float-left">
          <ul
            v-for="(item,index) in contractData"
            :key="index"
            style="margin-top:-.1rem"
          >
            <li>
              <span class="span-margin">共录入:</span>
              <span>{{item.workConfirm.total}}</span>
              <span>人</span>
            </li>
            <li>
              <span class="span-margin">共签订:</span>
              <span>{{item.workConfirm.ht}}</span>
              <span>人</span>
            </li>
            <li>
              <span class="span-margin">未签订:</span>
              <span>{{item.workConfirm.wq}}</span>
              <span>人</span>
            </li>
            <li>
              <span class="span-margin">是否合格:</span>
              <span :class="item.exit_pdf.bfb==100?'font-green':'font-red'">{{item.workConfirm.hg}}</span>
            </li>
          </ul>
        </div>
        <div
          class="map float-right"
          :class="item.workConfirm.bfb==100?'qualified':'disqualification'"
          v-for="(item,index) in contractData"
          :key="index"
        >
          <div class="border" :class="item.workConfirm.bfb==100?'border-green':'border-red'">
            <div class="subBorder" id="roateBox4">
              <div class="wrapper" style="right:0rem">
                <div
                  class="circleProgress"
                  :class="item.workConfirm.bfb==100?'rightcircle-green':'rightcircle-red'"
                ></div>
              </div>
              <div class="wrapper" style="left:0rem">
                <div
                  class="circleProgress"
                  :class="item.workConfirm.bfb==100?'leftcircle-green':'leftcircle-red'"
                ></div>
              </div>
            </div>
            <span id="roateBfb4">{{Math.round(item.workConfirm.bfb)}}</span>
            <span>%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
<<<<<<< HEAD
      attendanceData: "", // 出勤数据
      attendanceMax: 600, // 项目出勤统计最大人数
      curveMax: 120, // 今日劳动曲线最大值
      pid: 0, // 项目id
      contractData: [], // 合同签订数据
      KQCountData: [], // 现场人员考勤数据
      WorkTypeData: '', // 现场工种数据
      staffData: "", // 班组与人员数据
      buildcompanyData: "", // 分包单位考勤情况
      dh: 0, // 百分比
=======
      attendanceData: "", //出勤数据
      contractData: "", //合同签订数据
      staffData: "", //班组与人员数据
      attendanceMax: 600, //项目出勤统计最大人数
      xmid:'',
      dh: 0,
>>>>>>> dfd29f3a1e1e1fd09e72107eeee24080a3143c95
      timeId: null,
    };
  },
  created() {
    this.getPid()
    //发送请求
    this.getDataCount()
    this.getKQCountData()
    this.getWorkTypeData()
    this.getTeamCountData()
    this.getNearlyEightDaysData()
    this.getXSData()
    this.getBuildcompanyData()
  },
  methods: {
    // 现场工种模块：ECharts图渲染
    professionMap(pM) {
      let professionMap = this.$echarts.init(
        document.getElementById("professionMap")
      );
      professionMap.setOption({
        color: ["#349be6", "#fb497c", "#24e974", "#f38051","#7377f4","#ffa32d"],
        series: [
          {
            name: "现场工种",
            type: "pie",
            radius: "80%",
            // data: [
            //   { value: 300, name: "木工" },
            //   { value: 250, name: "钢筋工" },
            //   { value: 220, name: "架子工" },
            //   { value: 180, name: "其他" }
            // ],
            data: pM,
            roseType: "angle",
            label: {
              normal: {
                textStyle: {
                  color: "rgba(255, 255, 255, 0)"
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: "rgba(255, 255, 255, 0)"
                }
              }
            }
          }
        ]
      });
      // window.onresize = function(){
      //   professionMap.resize();
      //   attendance.resize();
      //   labourCurve.resize();
      // }
    },

    // 项目出勤统计模块：ECharts图渲染
    attendance(aMTotal, aMZc, aMDay, aMZcGly) {
      let attendance = this.$echarts.init(
        document.getElementById("attendance")
      );
      attendance.setOption({
        // backgroundColor: "#FBFBFB",
        grid: {
          x: 40,
          y: 20,
          x2: 30,
          y2: 80
        },
        tooltip: {
          trigger: "axis"
        },
        calculable: true,
        xAxis: [
          {
            axisLabel: {
              rotate: 0,
              interval: 0,
              color: "#fff"
            },
            axisLine: {
              lineStyle: {
                color: "#132e6d"
              }
            },
            type: "category",
            boundaryGap: false,
            // data: [
            //   "12-28",
            //   "12-29",
            //   "12-30",
            //   "01-01",
            //   "01-02",
            //   "01-03",
            //   "01-04",
            //   "01-05",
            //   "01-06",
            //   "01-07",
            //   "01-08"
            // ]
            data: aMDay
          }
        ],
        yAxis: [
          {
            type: "value",
            max: this.attendanceMax,
            min: 0,
            interval: 100,
            axisLabel: {
              textStyle: {
                color: "#fff"
              }
              //   formatter: "{value} 度"
            },
            axisLine: {
              lineStyle: {
                color: "#132e6d"
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#132e6d"],
                width: 1,
                type: "dashed"
              }
            }
          }
        ],
        series: [
          {
            name: "总人数",
            type: "line",
            symbolSize: 4,
            smooth: 0.2,
            color: ["#fff"],
            // data: [600, 500, 500, 500, 400, 500, 500, 400, 400, 500, 500]
            data: aMTotal
          },
          {
            name: "工人出勤人数",
            type: "line",
            symbolSize: 4,
            smooth: 0.2,
            color: ["#63a6d4"],
            // data: [300, 200, 100, 500, 300, 300, 400, 300, 100, 300, 500]
            data: aMZc
          },
          {
            name: "管理人员出勤人数",
            type: "line",
            symbolSize: 4,
            smooth: 0.2,
            color: ["#33577c"],
            // data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            data: aMZcGly
          }
        ]
      });
    },

    // 今日劳动曲线模块： ECharts图渲染
    labourCurve(lMZc, lMDay) {
      let labourCurve = this.$echarts.init(
        document.getElementById("labourCurve")
      );
      labourCurve.setOption({
        // backgroundColor: "#FBFBFB",
        grid: {
          x: 40,
          y: 20,
          x2: 30,
          y2: 80
        },
        tooltip: {
          trigger: "axis"
        },
        calculable: true,
        xAxis: [
          {
            axisLabel: {
              rotate: 0,
              interval: 0,
              color: "#fff"
            },
            axisLine: {
              lineStyle: {
                color: "#132e6d"
              }
            },
            type: "category",
            boundaryGap: false,
            // data: [
            //   "1",
            //   "2",
            //   "3",
            //   "4",
            //   "5",
            //   "6",
            //   "7",
            //   "8",
            //   "9",
            //   "10",
            //   "11",
            //   "12"
            // ]
            data: lMDay
          }
        ],
        yAxis: [
          {
            type: "value",
            max: this.curveMax,
            min: 0,
            interval: 30,
            axisLabel: {
              textStyle: {
                color: "#fff"
              }
              //   formatter: "{value} 度"
            },
            axisLine: {
              lineStyle: {
                color: "#132e6d"
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#132e6d"],
                width: 1,
                type: "dashed"
              }
            }
          }
        ],
        series: [
          {
            name: "今日劳动曲线",
            type: "line",
            symbol: "none",
            symbolSize: 4,
            smooth: 0.2,
            color: ["#63a6d4"],
            // data: [120,100,100,100,100,100,90,60,50,40,30,0],
            data: lMZc
          }
        ]
      });
    },

<<<<<<< HEAD
=======
            // 判断项目出勤统计表Y轴的最大值
            for (let i4 = 0; i4 < aMZc.length; i4++) {
              for (let i5 = 0; i5 < aMZc.length; i5++) {
                if (aMZc[i4]>this.attendanceMax || aMZcGly[i4]>this.attendanceMax || aMTotal[i4]>this.attendanceMax) {
                  this.attendanceMax += 100
                }
              }
            }

            // 数据成功返回并且转换成数组以后 调用ECharts的渲染函数 将Echarts图渲染到页面中
            this.professionMap(pM);
            this.attendance(aMTotal, aMZc, aMDay, aMZcGly);
            this.labourCurve(lMZc, lMDay);
            // 数据条数大于一定值时 才调用初始化滚动函数
            if (this.attendanceData.EmpPostData.length >= 4) {
              this.scrollStart('leftBottom','leftBottom1','leftBottom2');
            }
            if (this.attendanceData.KqDWData.length >= 4) {
              this.scrollStart('rightBottom','rightBottom1','rightBottom2');
            }
            // 数据渲染完成时 再调用柱状进度条渲染函数
            // setTimeout(() => {
            //   this.setLength();
            // }, 300);
            this.timeId = setInterval(() => {
              // console.log(this.attendanceData.EmpRenShuData[0].bfb)
              if (this.dh >= this.attendanceData.EmpRenShuData[0].bfb || this.dh > 100) {
                if (this.dh > 100) {
                  this.dh = 100
                }
                clearInterval(this.timeId);
              } else {
                this.dh++;
                $(".la-subjindu").css("width", this.dh + "%");
              }
            }, 30);
          }
        });
    },
    // 获取合同签订数据
    getContractData() {
      this.xmid = this.getQueryString('xmid')
      this.$axios
        .get(`/APP/XMPage/EmpData.ashx?method=GetXMEmpDetail&xmid=${this.xmid}`)
        .then(res => {
          if(res.data.success == 1){
            this.$router.push('unopen')
          }else{
            console.log(res.data)
            this.contractData = res.data;
            // 数据渲染完成时 再调用圆形进度条渲染函数
            setTimeout(() => {
              this.setRoate(1);
              this.setRoate(2);
              this.setRoate(3);
              this.setRoate(4);
            }, 300);
          }
        });
    },
    // 获取班组与人员数据
    getStaffData() {
      this.xmid = this.getQueryString('xmid')
      this.$axios
        .get(`/APP/XMPage/EmpData.ashx?method=GetXMEmpRealData&xmid=${this.xmid}`)
        .then(res => {
          if(res.data.success == 1){
            this.$router.push('unopen')
          }else{
            this.staffData = res.data;
            // 数据条数大于一定值时 才调用滚动初始化
            if (this.staffData.EmpJLData.length >= 7) {
              this.scrollStart('staff','staff1','staff2')
            }
            if (this.staffData.BZRealData.length >= 7) {
              this.scrollStart('squad','squad1','squad2')
            }
          }
        });
    },
>>>>>>> dfd29f3a1e1e1fd09e72107eeee24080a3143c95
    // 根据百分比设置圆形进度条长度
    setRoate(num) {
      let bfb = $(`#roateBfb${num}`).text();
      let Ldeg = -135;
      let Rdeg = -135;
      for (let i = 0; i < bfb; i++) {
        if (Rdeg != 45) {
          Rdeg += 3.6;
        } else {
          Ldeg += 3.6;
        }
      }
      $(`#roateBox${num} .leftcircle-red`).css(
        "transform",
        `rotate(${Ldeg}deg)`
      );
      $(`#roateBox${num} .rightcircle-red`).css(
        "transform",
        `rotate(${Rdeg}deg)`
      );
    },

    // 根据百分比设置柱状进度条长度
    setLength() {
      let temp = $('.reality .progress')
      temp.each(function() {
        let bfb = $(this).data("bfb");
        let width = 0
        for (let i = 0; i < bfb; i++) {
          width += 0.014
        }
        $(this).css("width", `${width}rem`);
      })
    },

    // 滚动启动函数
    scrollStart(id,id1,id2) {
      setTimeout(() => {
        var speed = 45;
        var colee2 = document.getElementById(id2);
        var colee1 = document.getElementById(id1);
        var colee = document.getElementById(id);
        colee2.innerHTML = colee1.innerHTML; //克隆colee1为colee2
        function Marquee1() {
          // console.log(colee1.offsetHeight)
          //当滚动至colee1与colee2交界时
          if (colee2.offsetTop - colee.scrollTop <= 0) {
            colee.scrollTop -= colee1.offsetHeight; //colee跳到最顶端
          } else {
            colee.scrollTop++;
            if (colee.scrollTop == colee1.offsetHeight) {
              colee.scrollTop = 0;
            }
          }
        }
        var MyMar1 = setInterval(Marquee1, speed); //设置定时器
        //鼠标移上时清除定时器达到滚动停止的目的
        colee.onmouseover = function() {
          clearInterval(MyMar1);
        };
        //鼠标移开时重设定时器
        colee.onmouseout = function() {
          MyMar1 = setInterval(Marquee1, speed);
        };
      }, 1000);
    },

    //获取url中的项目id
    getQueryString(name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
      var r = window.location.search.substr(1).match(reg);
      if (r != null) {
        return unescape(r[2]);
      }
      return null;
    },

    // 获取合同签订数据
    getDataCount() {
      this.$axios.get(`/lz/get/getDataCount?pid=${this.pid}`)
      .then(res => {
        this.contractData[0] = res.data
        // console.log(this.contractData)
        // 数据渲染完成时 再调用圆形进度条渲染函数
          setTimeout(() => {
            this.setRoate(1);
            this.setRoate(2);
            this.setRoate(3);
            this.setRoate(4);
          }, 300)
      })
    },

    // 获取现场人员出勤数据
    getKQCountData() {
      this.$axios.get(`/lz/get/getKQCount?pid=${this.pid}`).then(
        res => {
          // console.log(res.data)
          this.KQCountData[0] = res.data
          // 数据渲染完成时 再调用柱状进度条渲染函数
          // setTimeout(() => {
          //   this.setLength();
          // }, 300);
          this.timeId = setInterval(() => {
            // console.log(this.attendanceData.EmpRenShuData[0].bfb)
            if (this.dh >= this.KQCountData[0].bfb || this.dh > 100) {
              if (this.dh > 100) {
                this.dh = 100
              }
              clearInterval(this.timeId);
            } else {
              this.dh++;
              $(".la-subjindu").css("width", this.dh + "%");
            }
          }, 30)
        }
      )
    },

    // 获取现场工种人数
    getWorkTypeData() {
      this.$axios.get(`/lz/get/getWorkType?pid=${this.pid}`).then(
        res => {
          this.WorkTypeData = res.data
          let pM = []
          // console.log(res.data)
          // 数据处理
          for (const key in res.data) {
            // console.log(key+':'+res.data[key])
            pM.push({
              value: res.data[key],
              name: key
            })
          }
          // 调用现场工种模块ECharts图渲染
          this.professionMap(pM)
          // 初始化现场工种模块滚动函数
          if (pM.length >= 4) {
            this.scrollStart('leftBottom','leftBottom1','leftBottom2')
          }
        }
      )
    },

    // 获取班组与人员考勤数据
    getTeamCountData() {
      this.$axios.get(`/lz/get/getTeamCount?pid=${this.pid}`).then(
        res => {
          // console.log(res.data)
          this.staffData = res.data

          // 数据条数大于一定值时 才调用滚动初始化
          if (this.staffData.team.length >= 7) {
            this.scrollStart('squad','squad1','squad2')
          }
          if (this.staffData.list.length >= 7) {
            this.scrollStart('staff','staff1','staff2')
          }
        }
      )
    },

    // 获取项目出勤统计数据
    getNearlyEightDaysData() {
      this.$axios.get(`/lz/get/getNearlyEightDays?pid=${this.pid}`).then(res => {
        // console.log(res.data)
        let aMTotal = []
        let aMZc = []
        let aMDay = []
        let aMZcGly = []
        for (let i = 0; i < res.data.list.length; i++) {
          aMTotal.push(res.data.list[i].sum)
          aMZc.push(res.data.list[i].workerCheck)
          aMDay.push(res.data.list[i].date)
          aMZcGly.push(res.data.list[i].managerCheck)
        }
        // 判断项目出勤统计表Y轴的最大值
        for (let i2 = 0; i2 < aMZc.length; i2++) {
          for (let i3 = 0; i3 < aMZc.length; i3++) {
            if (aMZc[i2]>this.attendanceMax || aMZcGly[i2]>this.attendanceMax || aMTotal[i2]>this.attendanceMax) {
              this.attendanceMax += 100
            }
          }
        }
        // 初始化项目出勤统计表
        this.attendance(aMTotal, aMZc, aMDay, aMZcGly)
      })
    },

    // 获取今日劳动曲线数据
    getXSData() {
      this.$axios.get(`/lz/get/getXS?pid=${this.pid}`).then(
        res => {
          // console.log(res.data)
          let lMZc = []
          let lMDay = []
          for (let i = 0; i < res.data.length; i++) {
            for (const key in res.data[res.data.length-i]) {
              lMZc.push(res.data[res.data.length-i][key])
              lMDay.push(key)
            }
            // console.log(key)
            // console.log(lMZc)
            // 判断今日劳动曲线折线图Y轴的最大值
            for (let i2 = 0; i2 < lMZc.length; i2++) {
              for (let i3 = 0; i3 < lMZc.length; i3++) {
                if (lMZc[i2]>this.curveMax) {
                  this.curveMax += 30
                }
              }
            }
          }
          // 初始化今日劳动曲线图
          this.labourCurve(lMZc, lMDay)
      })
    },

    // 获取分包单位考勤情况数据
    getBuildcompanyData() {
      this.$axios.get(`/lz/get/getBuildcompanyData?pid=${this.pid}`).then(
        res => {
          // console.log(res.data.buildcompany)
          this.buildcompanyData = res.data.buildcompany
          setTimeout(() => {
            this.setLength()
          }, 300)
          if (this.buildcompanyData.length > 3) {
            this.scrollStart('rightBottom','rightBottom1','rightBottom2')
          }
        }
      )
    },

    // 获取项目id
    getPid() {
      this.pid = localStorage.getItem('pid')
    }

  }
};
</script>

<style scoped>
.table-box {
  width: 100%;
  height: 2.64rem;
  overflow: hidden;
}
span {
  color: #fff;
}
#labour {
  height: 10.32rem;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
#labour .top {
  box-sizing: border-box;
  margin-top: 0.51rem;
  height: 7.27rem;
  width: 100%;
}
#labour .bottom {
  box-sizing: border-box;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  height: 1.94rem;
  width: 100%;
}
#labour .top > div {
  float: left;
  margin-left: 0.26rem;
}
#labour .bottom > div {
  float: left;
  margin-left: 0.26rem;
}
#labour .top .left {
  height: 100%;
  width: 4.14rem;
  background-image: url("../../../static/images/l_1.png");
  background-size: contain;
}
#labour .top .left .left-top {
  height: 3.82rem;
  width: 100%;
}
#labour .top .left .left-top .name {
  position: relative;
}
#labour .top .left .left-top .la-jindu {
    position: absolute;
    /*background-color: #fff; */
    width: 2.16rem;
    height: 0.24rem;
    left: 1.8rem;
    top: .01rem;
}
#labour .top .left .left-top .la-subjindu {
      position: absolute;
      left: 0;
      top: 0;
      height: 0.24rem;
      width: 0%;
      background: linear-gradient(to right, #0163ff, #00adfe);
      transform: skew(13deg);
}
#labour .top .left .left-top .la-subjindu p {
      margin-left: 105%;
      color: #ffffff;
      font-size: 0.12rem;
      transform: skew(-13deg);
}
#labour .top .left-bottom {
  height: 3.39rem;
  width: 100%;
}
#labour .top .main {
  height: 100%;
  width: 9.73rem;
  background-image: url("../../../static/images/l_2.png");
  background-size: contain;
  padding: 0.5rem;
}
#labour .top .right {
  height: 100%;
  width: 4.14rem;
}
#labour .top .right .right-top {
  height: 2.45rem;
  width: 100%;
  background-image: url("../../../static/images/l_3.png");
  background-size: contain;
}
#labour .top .right .right-bottom {
  margin-top: 0.3rem;
  height: 4.52rem;
  width: 100%;
  background-image: url("../../../static/images/l_4.png");
  background-size: contain;
  position: relative;
  padding: 0.02rem;
}
#labour .bottom .procedure,
#labour .bottom .information {
  height: 100%;
  width: 4.14rem;
  background-image: url("../../../static/images/l_5.png");
  background-size: contain;
}
#labour .bottom .contract,
#labour .bottom .safety {
  height: 100%;
  width: 4.75rem;
  background-image: url("../../../static/images/l_6.png");
  background-size: contain;
}
#labour .left-top-data div {
  float: left;
}
#labour .left-top-data img {
  height: 0.63rem;
  width: 0.63rem;
  display: block;
  margin-left: 0.18rem;
}
#labour .left-top-data li {
  margin-top: 0.2rem;
  height: 0.63rem;
}
#labour .left-top-data li div:nth-child(2) {
  margin-left: 0.26rem;
}
#labour .left-top-data p {
  font-size: 0.18rem;
  color: #fff;
  line-height: 0.315rem;
}
#labour .left-top-data span {
  font-size: 0.2rem;
  font-weight: bolder;
  color: #fff;
  line-height: 0.315rem;
}
#labour .top .left-bottom .map {
  width: 100%;
  height: 1.8rem;
}
#labour .left-bottom-data i {
  display: inline-block;
  width: 0.08rem;
  height: 0.08rem;
  border-radius: 0.1rem;
  margin-right: 0.05rem;
}
#labour .left-bottom-data {
  height: 1.1rem;
  overflow: hidden;
}
.color1 {
  background-color: #349be6;
}
.color2 {
  background-color: #fb497c;
}
.color3 {
  background-color: #24e974;
}
.color4 {
  background-color: #f38051;
}
.color5 {
  background-color: #7377f4;
}
.color6 {
  background-color: #ffa32d;
}
.red {
  background-color: #fb497c;
  color: #fb497c;
}
.font-green {
  color: #24e974;
}
.font-red {
  color: #fb497c;
}
.float-left {
  float: left;
}
.float-right {
  float: right;
}
#labour .left-bottom-data li {
  height: 0.34rem;
  padding: 0 0.3rem;
  line-height: 0.34rem;
}
#labour .left-bottom-data span {
  color: #fff;
  font-size: 0.14rem;
}
#labour .right-bottom-data li {
  height: 1.08rem;
  border-bottom: 0.02rem solid #0f1f53;
}
#labour .right-bottom-data {
  height: 3.7rem;
  overflow: hidden;
}
#labour .right-bottom-data li p {
  font-size: 0.18rem;
  font-weight: bolder;
  color: #fff;
  margin-top: 0.28rem;
  margin-left: 0.2rem;
}
#labour .right-bottom-data li > div {
  margin-left: 0.82rem;
}
#labour .right-bottom-data span {
  font-size: 0.16rem;
  color: #fff;
  margin-top: 0.16rem;
}
#labour .right-bottom-data .register .progress {
  display: inline-block;
  width: 1.4rem;
  height: 0.15rem;
  background-color: #3375fe;
  border-radius: 0.15rem;
  margin-left: 0.12rem;
  margin-right: 0.06rem;
}
#labour .right-bottom-data .reality .progress {
  display: inline-block;
  width: 0rem;
  height: 0.15rem;
  border-radius: 0.15rem;
  background-color: #24e974;
  margin-left: 0.12rem;
  margin-right: 0.06rem;
}
#labour .top .location {
  position: absolute;
  bottom: -0.16rem;
  left: 50%;
  font-size: 0.2rem;
  font-weight: bolder;
  color: #fff;
  transform: translateX(-50%);
  display: none;
}
#labour .bottom div ul li {
  height: auto;
  margin-top: 0.1rem;
  margin-left: 0.3rem;
}
#labour .bottom div ul span {
  font-size: 0.16rem;
}
#labour .right-top .map {
  width: 100%;
  height: 100%;
}
#labour .main .main-top {
  width: 8.65rem;
  height: 3.51rem;
  background-color: #020521;
  background-image: url("../../../static/images/l_m.png");
  background-size: 8.61rem 3.47rem;
}
#labour .main .main-bottom {
  width: 100%;
  height: 100%;
  position: relative;
}
.attendance-title {
  position: absolute;
  right: 0;
  top: 0;
  line-height: 0.48rem;
}
.attendance-title div {
  float: left;
  color: #fff;
  font-size: 0.12rem;
}
.white-box {
  width: 0.2rem;
  height: 0.03rem;
  background-color: #fff;
  margin-top: 0.225rem;
  margin-right: 0.05rem;
}
.blue-box {
  width: 0.2rem;
  height: 0.03rem;
  background-color: #349be6;
  margin-top: 0.225rem;
  margin-left: 0.18rem;
  margin-right: 0.05rem;
}
.brilliant-box {
  width: 0.2rem;
  height: 0.03rem;
  background-color: #33577c;
  margin-top: 0.225rem;
  margin-left: 0.18rem;
  margin-right: 0.05rem;
}
#attendance {
  width: 8.65rem;
  height: 3rem;
}
#labour .procedure .map,
#labour .contract .map,
#labour .safety .map,
#labour .information .map {
  height: 1.28rem;
  width: 1.28rem;
  padding: 0.14rem;
}
#labour .procedure .map,
#labour .information .map {
  margin-right: 0.44rem;
  margin-top: -0.1rem;
}
#labour .safety .map,
#labour .contract .map {
  margin-right: 0.88rem;
  margin-top: -0.1rem;
}
.qualified {
  background-image: url("../../../static/images/l_green.png");
  background-size: contain;
}
.qualified:hover {
  background-image: url("../../../static/images/l_green.gif");
  background-position: center center;
  background-size: 1.28rem 1.28rem;
}
.disqualification {
  background-image: url("../../../static/images/l_red.png");
  background-size: contain;
}
.disqualification:hover {
  background-image: url("../../../static/images/l_red.gif");
  background-position: center center;
  background-size: 1.28rem 1.28rem;
}
.border {
  width: 1rem;
  height: 1rem;
  border: 0.03rem solid #fff;
  border-radius: 1rem;
  line-height: 0.92rem;
  text-align: center;
  position: relative;
}
.border-green {
  border-color: #24e974;
}
.border-red {
  border-color: #fb497c;
  color: #fb497c;
}
.border-green span {
  color: #24e974;
  font-size: 0.3rem;
  font-weight: bolder;
}
.border-red span {
  color: #fb497c;
  font-size: 0.3rem;
  font-weight: bolder;
}
#labourCurve {
  height: 3rem;
}
.squad {
  display: inline-block;
  height: 100%;
  width: 50%;
  padding: 0.15rem;
  overflow: hidden;
}
.staff {
  display: inline-block;
  height: 100%;
  width: 50%;
  padding: 0.15rem;
  overflow: hidden;
}
.table-title {
  font-size: 0.26rem;
  font-weight: bolder;
  color: #fff;
  text-align: center;
  margin-bottom: 0.15rem;
}
table th {
  width: 1.335rem;
  color: #fff;
  font-size: 0.2rem;
  font-weight: normal;
}
table td {
  text-align: center;
  width: 1.335rem;
  color: #fff;
  font-size: 0.14rem;
  line-height: 0.44rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.subBorder {
  width: 1.04rem;
  height: 1.04rem;
  position: absolute;
  left: -0.04rem;
  top: -0.04rem;
}
.wrapper {
  width: 0.52rem;
  height: 1.04rem;
  position: absolute;
  top: 0;
  overflow: hidden;
}
.circleProgress {
  width: 1.04rem;
  height: 1.04rem;
  border: 0.07rem solid transparent;
  border-radius: 50%;
  position: absolute;
  top: 0;
}
.rightcircle-green {
  border-top: 0.07rem solid #24e974;
  border-right: 0.07rem solid #24e974;
  right: 0;
  transform: rotate(45deg);
}
.leftcircle-green {
  border-bottom: 0.07rem solid #24e974;
  border-left: 0.07rem solid #24e974;
  left: 0;
  transform: rotate(45deg);
}
.rightcircle-red {
  border-top: 0.07rem solid #fb497c;
  border-right: 0.07rem solid #fb497c;
  right: 0;
  transform: rotate(-135deg);
}
.leftcircle-red {
  border-bottom: 0.07rem solid #fb497c;
  border-left: 0.07rem solid #fb497c;
  left: 0;
  transform: rotate(-135deg);
}
.span-margin {
  margin-right: 0.15rem;
}
</style>
