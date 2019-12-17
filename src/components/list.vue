<template>
    <div class="list">
        <div class="input-outline">
            <div class="input-left">
                <input class="input" type="text" v-model="todoContent" placeholder="Enter your todo item" />
            </div>
            <div class="input-right">
                <font-awesome-icon class="input-icon" v-if="!isChecked" @click="createList()" :icon="['fas','plus']"/>
                <font-awesome-icon class="input-icon" :icon="['fas','search']"/>
            </div>
        </div>
        <ul>
            <li v-if="todoList.length===0">No related items...</li>
            <li class="list-outline" v-for="(list, index) in todoList">
                <div class="list-left">
                    <input type="checkbox"
                        class="input-checkbox"
                        :id="'list-'+index"
                        name="list"
                        :checked="list.isChecked"
                        @change="checkit(list)"
                    />
                    <label :for="'list-'+index" :class="{'list-done':isChecked}">
                        <div class="list-check">
                            <font-awesome-icon v-if="!isChecked" :icon="['fas','square']"/>
                            <font-awesome-icon v-if="isChecked" :icon="['fas','check-square']"/>
                        </div>
                        <div class="list-text">
                            {{ list.todoContent }}
                        </div>
                    </label>
                </div>
                <div class="list-right">
                    <font-awesome-icon @click="deleteList(list.idcode)" v-if="!list.isChecked" :icon="['fas','times']"/>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import mixin from '@/assets/js/MIXIN.js'
import { log } from 'util'
export default {
    name: 'list',
    data(){
        return {
            todoContent: '',
            lists: []
        }
    },
    props: {
        isChecked: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        todoList() {
            let $this = this
            let $todoContent = $this.todoContent.trim()
            let $lists = $this.lists
            if($todoContent === '') {
                return $lists
            } else {
                return $lists.filter( list => list.todoContent.match($todoContent) )
            }
        },
    },
    watch: {
        isChecked(val) {
            this.refrash()
        }
    },
    mixins: [mixin],
    methods: {
        createList() {
            if(this.todoContent!=='') {
                let token = this.tokenRender()
                let todoContent = this.todoContent
                let obj = {id: token, isChecked: false, todoContent, idcode: token}
                const $this = this
                
                this.axios.post(`${process.env.VUE_APP_API}/lists`,obj).then( res => {
                    if (res.status === 201) {
                        $this.todoContent = ''
                        $this.refrash()
                    } else {
                        console.log(res.statusText);
                    }
                })
            }
        },
        checkit(list) {
            list.isChecked = !list.isChecked
            const id = list.id
            const $this = this
            this.axios.patch(`${process.env.VUE_APP_API}/lists/${id}`,list).then( res => {
                if (res.status === 200) {
                    $this.refrash()
                } else {
                    console.log(res.statusText);
                }
            })
        },
        deleteList(idcode) {
            const $this = this
            this.axios.delete(`${process.env.VUE_APP_API}/lists/${idcode}`).then( res => {
                if (res.status === 200) {
                    $this.refrash()
                } else {
                    console.log(res.statusText);
                }
            })
        },
        refrash() {
            let isChecked = this.isChecked
            this.axios.get(`${process.env.VUE_APP_API}/lists`,{params:{isChecked}}).then( res => {
                if (res.status === 200) {
                    this.lists = res.data
                } else {
                    console.log(res.statusText);
                }
            })
        }
    },
    mounted() {
        this.refrash()
        const $this = this
        document.onkeypress = function(e) {
            let event = e || window.event
            let key = event.which || event.keyCode || event.charCode
            if(key === 13 && $this.todoContent!=='') {
                event.preventDefault()
                $this.createList()
            }
        }
    }
}
</script>
<style lang="scss" scoped>
$red: #E2073A;
$dark-red: #6C1239;
$dark-green: #0A3D4D;
$green: #01B491;
$white: rgba(225, 225, 225, 0.4);
.heighlight {
    background-color: yellow;
}
.list {
    height: calc(100vh - 70px);
    .input-outline {
        display: flex;
        border-bottom: 1px solid #fff;
        height: 60px;
        .input-left {
            width: 80%;
            .input {
                outline: none;
                color: white;
                font-size: 20px;
                width: 100%;
                height: 60px;
                padding-left: 10px;
                background-color: rgba(225, 225, 225, 0);
                border: none;
                &::placeholder {
                    color: $white;
                }
            }
        }
        .input-right {
            line-height: 60px;
            font-size: 18px;
            width: 20%;
            .input-icon {
                color: $white;
                margin-left: 0.5em;
            }
        }
    }
    ul {
        padding: 0;
        padding-top: 10px;
        height: calc(100vh - 190px);
        overflow-y: scroll;
    }
    .list-outline {
        display: flex;
        line-height: 50px;
        .list-left {
            text-align: left;
            width: 90%;
            .input-checkbox {
                display: none;
                &:checked~label .list-check {
                    opacity: .4;
                }
            }
            label {
                display: flex;
                .list-check {
                    font-size: 30px;
                    margin: auto 10px auto 0;
                    opacity: .3;
                }
                .list-text{
                    line-height: 1em;
                    margin: auto 0;
                    width: 100%;
                }
            }
            .list-done {
                text-decoration: line-through;
            }
        }
        .list-right {
            font-size: 30px;
            width: 10%;
        }
    }
}
@media only screen and (max-width: 800px) {
    .list {
        height: calc(100vh - 190px);
        padding: 10px 10px 0 10px;
        ul {
            padding: 0;
            height: calc(100vh - 220px);
            margin-bottom: 0;
            overflow: scroll;
        }
    }
}
</style>
