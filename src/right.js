/**
 * right.js
 *
 * Created by sinrin on 2018/4/1.
 */
define(['./editableInput','css!./common'],function (EditableInput) {

    return {
        template: `<div>
        <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
        <template slot-scope="scope">
        <editable-input v-model="scope.row.name"></editable-input>
      </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <editable-input></editable-input>
    </div>
        `,
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods: {
            async getMessage() {
                const msg1 = await "fuck";
                const msg2 = await "you";
                return `${msg1} --- ${msg2}`;
            }
        },
        created() {
            this.getMessage().then(message => this.msg = message);
        },
        components:{
            EditableInput
        }
    };
});