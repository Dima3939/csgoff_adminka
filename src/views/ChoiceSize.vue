<template>
    <div class="row" style="min-height: calc(100vh - 80px);">
        <div class="col-lg-12">
            <h1 style="text-align: center; color: white;margin-top: 100px;margin-bottom: 200px;">Выберите размер кейса</h1>
            <div class="col-lg-auto" style="text-align: center;">
                <router-link class="btn btn-outline-warning" to="/add24" style="padding: 50px 100px;border-radius: 30%;margin: 30px">24</router-link>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .btn{
        color: white;
        border:solid 5px;
        border-color: black;
    }
    .btn:hover{
        color: black;
        border: none;
    }
</style>