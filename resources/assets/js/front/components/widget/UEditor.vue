<template>
    <div :id="id"></div>
</template>
<style>
    .edui-default .edui-editor-bottomContainer {
        display: none;
    }
    .edui-default .edui-editor-iframeholder{
        height: 35px;
    }
</style>
<script>
    import '../../../../library/js/ueditor1.4.3/ueditor.config.js';
    import '../../../../library/js/ueditor1.4.3/ueditor.all.js';

    export default {
        props: {
            value: {
                type: String,
                default: null
            },
            config: {
                default: null
            }
        },
        data(){
            return {
                id: Math.ceil(Math.random()*100000) + 'editor',
                conf: [[
                    'bold',  // 加粗
                    'indent',  // 首行缩进
                    'italic',  // 斜体
                    'underline',  // 下划线
                    'strikethrough',  // 删除线
                    '|',
                    'justifyleft',  // 居左对齐
                    'justifyright',  // 居右对齐
                    'justifycenter',  // 居中对齐
                    'justifyjustify',  // 两端对齐
                    '|',
                    'simpleupload',  // 单图上传
                    'spechars',  // 特殊字符
                ]]
            }
        },
        watch: {
            value: function value(val, oldVal) {
                this.editor = UE.getEditor(this.id);
                if (val !== null) {
                    this.editor.setContent(val);
                }
            },
            config: function (val) {
                window.UEDITOR_CONFIG.toolbars = val;
            }
        },
        mounted() {
            if(this.config == null) {
                window.UEDITOR_CONFIG.toolbars = this.conf;
            } else {
                window.UEDITOR_CONFIG.toolbars = this.config;
            }
            let self = this;
            this.editor = UE.getEditor(this.id);
            this.$nextTick(function f1() {
                self.editor.ready(function f2() {
                    self.$emit('ready', self.editor);
                    if(self.value != null)
                        self.editor.setContent(self.value);
                    self.editor.addListener("contentchange", function () {
                        const wordCount = self.editor.getContentLength(true);
                        const content = self.editor.getContent();
                        const plainTxt = self.editor.getPlainTxt();
                        self.$emit('input', { wordCount: wordCount, content: content, plainTxt: plainTxt });
                    }.bind(self));
                    self.editor.onkeyup = function (e) {
                        const wordCount = self.editor.getContentLength(true);
                        const content = self.editor.getContent();
                        const plainTxt = self.editor.getPlainTxt();
                        self.$emit('input', { wordCount: wordCount, content: content, plainTxt: plainTxt });
                    }
                }.bind(self));

            })
        }
    }
</script>