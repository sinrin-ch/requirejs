/**
 * editableInput.js
 *
 * Created by sinrin on 2018/5/4.
 */
define(function () {
    const template = `<div class="editable-input">
    <span v-if="!editable" @click="handleClick">{{inputData}}</span>
    <input ref="inputEdit" type="text" v-else v-model="inputData" @blur="editable=false" @keydown.enter="editable=false" /></div>
    `;
    return {
        template,
        data() {
            return {
                editable: false
            }
        },
        props: {
            value: {
                type: String,
                default: () => ''
            }
        },
        methods: {
            handleClick() {
                this.editable = true;
                this.$nextTick(() => {
                    this.$refs['inputEdit'].focus()
                })
            }
        },
        computed: {
            inputData: {
                get() {
                    return this.value;
                },
                set(value) {
                    this.$emit('input', value);
                }
            }
        }
    };
});