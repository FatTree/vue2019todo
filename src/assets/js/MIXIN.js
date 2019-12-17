export default {
    /**
     * MIXIN說明:
     * 有共用的data、method、created etc vue hook放這邊
     * 文件: https://vuejs.org/v2/guide/mixins.html
     */
    data() {
        return{

        }
    },
    methods: {
        tokenRender() {
            return Math.random().toString(36).substr(2)
        },
        goThere(url) {
            window.location.href=`${url}`;
        }
    }
}