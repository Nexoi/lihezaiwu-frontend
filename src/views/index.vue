<style scoped>
    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
    }

    .index h1 {
        height: 150px;
    }

    .index h1 img {
        height: 100%;
    }

    .index h2 {
        color: #666;
        margin-bottom: 200px;
    }

    .index h2 p {
        margin: 0 0 50px;
    }

    .line-border {
        border-top: 1px #999 solid;
        border-bottom: 1px #999 solid;
        height: 96px;
        /* padding: 24px; */
    }

    .line-btn {
        height: 100%;
        width: 100%;
        background-color: #5E32BD;
        border: none;
    }

    .line-item-top {
        font-size: 18px;
        text-align: left;
        padding: 18px;
        color: white;
    }
    .line-item-normal {
        font-size: 18px;
        text-align: left;
        padding: 18px;
        border-bottom: #999 solid 1px;
    }
</style>
<template>
    <div class="index">
        <Row type="flex" justify="center" align="top">
            <Col span="24">
                <h1>
                    <img src="https://raw.githubusercontent.com/iview/iview/master/assets/logo.png">
                </h1>
            </Col>
        </Row>
        <Row style="background-color: #5E32BD">
            <Col class="line-border" style="border-right: 1px #999 solid;"  span="8">
                <a href="/zhibo">
                    <Button class="line-btn">
                        <Icon size="48" color="white" type="ios-play" />
                    </Button>
                </a>
            </Col>
            <Col class="line-border" style="border-right: 1px #999 solid;"  span="8">
                <a href="/touzi">
                    <Button class="line-btn">
                        <Icon size="36" color="white" type="ios-pricetags" />
                    </Button>
                </a>
            </Col>
            <Col class="line-border"  span="8">
                <a href="/user">
                    <Button class="line-btn">
                        <Icon size="48" color="white" type="ios-person" />
                    </Button>
                </a>
            </Col>
            <Col span="24" class="line-item-top">
                新闻活动
            </Col>
        </Row>
        <Row>
            <Col span="24" @click="handleStart" class="line-item-normal">
                标题
            </Col>
            <Col span="24" @click="handleStart" class="line-item-normal">
                标题
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        methods: {
            handleStart() {
                this.$Message.info({
                    content: 'You clicked 标题!'
                })
            }
        }
    };
</script>