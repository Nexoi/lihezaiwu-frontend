<style scoped>
    .index {
        width: 100%;
        height: 800px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
    }
    .title {
        height: 42px;
        padding: 10px 24px;
        font-size: 14px;
        color: white;
        background-color: #5E32BD;
    }
</style>
<template>
    <Scroll :on-reach-bottom="handleReachBottom" height="670px">
        <Row span="24">
            <div class="title">正在直播</div>
        </Row>
        <Card dis-hover v-for="(item, index) in current" :key="index" style="padding: 4px 12px">
            标题 {{ item }}
        </Card>
        <Row span="24">
            <div class="title">直播回放</div>
        </Row>
        <Card dis-hover v-for="(item, index) in history" :key="index" style="padding: 4px 12px">
            回放 {{ item }}
        </Card>
    </Scroll>
</template>
<script>
    export default {
        data () {
            return {
                current: [1, 2, 3, 4, 5, 6, 7],
                history: [11, 12, 13]
            }
        },
        methods: {
            handleReachBottom () {
                return new Promise(resolve => {
                    setTimeout(() => {
                        const last = this.list3[this.list3.length - 1];
                        for (let i = 1; i < 11; i++) {
                            this.current.push(last + i);
                        }
                        resolve();
                    }, 2000);
                });
            }
        }
    }
</script>