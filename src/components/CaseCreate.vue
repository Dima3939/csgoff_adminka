<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center" style="color: black">Добавить кейс</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Название кейса</label>
                    <input type="text" class="form-control" v-model="kase.title" required>
                </div>

                <div class="form-group">
                    <label>Цена</label>
                    <input type="number" class="form-control" v-model="kase.price" required>
                </div>

                <div class="form-group">
                    <label>Картинка</label>
                    <input type="text" class="form-control" v-model="kase.imageUrl" required>
                </div>
                <p style="font-size: 12px">В связи с техническими сложностями количество предметов в кейсах ограничено 24мя предметами</p>
                <label>Предметы :</label><hr>

                <div class="form-group">
                    <label>ID предмета 1</label>
                    <input type="text" class="form-control" v-model="kase.content[0].id" required>
                    <label>Название предмета 1</label>
                    <input type="text" class="form-control" v-model="kase.content[0].title" required>
                    <label>Описание предмета 1</label>
                    <input type="text" class="form-control" v-model="kase.content[0].description" required>
                    <label>Картинка предмета 1</label>
                    <input type="text" class="form-control" v-model="kase.content[0].imageUrl" required>
                </div><hr>
                <div class="form-group">
                    <label>ID предмета 2</label>
                    <input type="text" class="form-control" v-model="kase.content[1].id" required>
                    <label>Название предмета 2</label>
                    <input type="text" class="form-control" v-model="kase.content[1].title" required>
                    <label>Описание предмета 2</label>
                    <input type="text" class="form-control" v-model="kase.content[1].description" required>
                    <label>Картинка предмета 2</label>
                    <input type="text" class="form-control" v-model="kase.content[1].imageUrl" required>
                </div><hr>
                <div class="form-group">
                    <label>ID предмета 3</label>
                    <input type="text" class="form-control" v-model="kase.content[2].id" required>
                    <label>Название предмета 3</label>
                    <input type="text" class="form-control" v-model="kase.content[2].title" required>
                    <label>Описание предмета 3</label>
                    <input type="text" class="form-control" v-model="kase.content[2].description" required>
                    <label>Картинка предмета 3</label>
                    <input type="text" class="form-control" v-model="kase.content[2].imageUrl" required>
                </div><hr>
                <div class="form-group">
                    <label>ID предмета 4</label>
                    <input type="text" class="form-control" v-model="kase.content[3].id" required>
                    <label>Название предмета 4</label>
                    <input type="text" class="form-control" v-model="kase.content[3].title" required>
                    <label>Описание предмета 4</label>
                    <input type="text" class="form-control" v-model="kase.content[3].description" required>
                    <label>Картинка предмета 4</label>
                    <input type="text" class="form-control" v-model="kase.content[3].imageUrl" required>
                </div><hr>
                <div class="form-group">
                    <label>ID предмета 5</label>
                    <input type="text" class="form-control" v-model="kase.content[4].id" required>
                    <label>Название предмета 5</label>
                    <input type="text" class="form-control" v-model="kase.content[4].title" required>
                    <label>Описание предмета 5</label>
                    <input type="text" class="form-control" v-model="kase.content[4].description" required>
                    <label>Картинка предмета 5</label>
                    <input type="text" class="form-control" v-model="kase.content[4].imageUrl" required>
                </div><hr>
                <div class="form-group">
                    <label>ID предмета 6</label>
                    <input type="text" class="form-control" v-model="kase.content[5].id" required>
                    <label>Название предмета 6</label>
                    <input type="text" class="form-control" v-model="kase.content[5].title" required>
                    <label>Описание предмета 6</label>
                    <input type="text" class="form-control" v-model="kase.content[5].description" required>
                    <label>Картинка предмета 6</label>
                    <input type="text" class="form-control" v-model="kase.content[5].imageUrl" required>
                </div><hr>
                <div class="form-group">
                    <label>ID предмета 7</label>
                    <input type="text" class="form-control" v-model="kase.content[6].id" required>
                    <label>Название предмета 7</label>
                    <input type="text" class="form-control" v-model="kase.content[6].title" required>
                    <label>Описание предмета 7</label>
                    <input type="text" class="form-control" v-model="kase.content[6].description" required>
                    <label>Картинка предмета 7</label>
                    <input type="text" class="form-control" v-model="kase.content[6].imageUrl" required>
                </div><hr>
                <div class="form-group">
                    <label>ID предмета 8</label>
                    <input type="text" class="form-control" v-model="kase.content[7].id" required>
                    <label>Название предмета 8</label>
                    <input type="text" class="form-control" v-model="kase.content[7].title" required>
                    <label>Описание предмета 8</label>
                    <input type="text" class="form-control" v-model="kase.content[7].description" required>
                    <label>Картинка предмета 8</label>
                    <input type="text" class="form-control" v-model="kase.content[7].imageUrl" required>
                </div><hr>
                <div class="form-group">
                    <label>ID предмета 9</label>
                    <input type="text" class="form-control" v-model="kase.content[8].id" required>
                    <label>Название предмета 9</label>
                    <input type="text" class="form-control" v-model="kase.content[8].title" required>
                    <label>Описание предмета 9</label>
                    <input type="text" class="form-control" v-model="kase.content[8].description" required>
                    <label>Картинка предмета 9</label>
                    <input type="text" class="form-control" v-model="kase.content[8].imageUrl" required>
                </div><hr>
                <div class="form-group">
                    <label>ID предмета 10</label>
                    <input type="text" class="form-control" v-model="kase.content[9].id" required>
                    <label>Название предмета 10</label>
                    <input type="text" class="form-control" v-model="kase.content[9].title" required>
                    <label>Описание предмета 10</label>
                    <input type="text" class="form-control" v-model="kase.content[9].description" required>
                    <label>Картинка предмета 10</label>
                    <input type="text" class="form-control" v-model="kase.content[9].imageUrl" required>
                </div><hr>
                <div class="form-group">
                    <label>ID предмета 11</label>
                    <input type="text" class="form-control" v-model="kase.content[10].id" required>
                    <label>Название предмета 11</label>
                    <input type="text" class="form-control" v-model="kase.content[10].title" required>
                    <label>Описание предмета 11</label>
                    <input type="text" class="form-control" v-model="kase.content[10].description" required>
                    <label>Картинка предмета 11</label>
                    <input type="text" class="form-control" v-model="kase.content[10].imageUrl" required>
                </div><hr>
                <div class="form-group">
                    <label>ID предмета 12</label>
                    <input type="text" class="form-control" v-model="kase.content[11].id" required>
                    <label>Название предмета 12</label>
                    <input type="text" class="form-control" v-model="kase.content[11].title" required>
                    <label>Описание предмета 12</label>
                    <input type="text" class="form-control" v-model="kase.content[11].description" required>
                    <label>Картинка предмета 12</label>
                    <input type="text" class="form-control" v-model="kase.content[11].imageUrl" required>
                </div><hr>
                <div class="form-group">
                    <label>ID предмета 13</label>
                    <input type="text" class="form-control" v-model="kase.content[12].id" required>
                    <label>Название предмета 13</label>
                    <input type="text" class="form-control" v-model="kase.content[12].title" required>
                    <label>Описание предмета 13</label>
                    <input type="text" class="form-control" v-model="kase.content[12].description" required>
                    <label>Картинка предмета 13</label>
                    <input type="text" class="form-control" v-model="kase.content[12].imageUrl" required>
                </div><hr>
                <div class="form-group">
                    <label>ID предмета 14</label>
                    <input type="text" class="form-control" v-model="kase.content[13].id" required>
                    <label>Название предмета 14</label>
                    <input type="text" class="form-control" v-model="kase.content[13].title" required>
                    <label>Описание предмета 14</label>
                    <input type="text" class="form-control" v-model="kase.content[13].description" required>
                    <label>Картинка предмета 14</label>
                    <input type="text" class="form-control" v-model="kase.content[13].imageUrl" required>
                </div><hr>
                <div class="form-group">
                    <label>ID предмета 15</label>
                    <input type="text" class="form-control" v-model="kase.content[14].id" required>
                    <label>Название предмета 15</label>
                    <input type="text" class="form-control" v-model="kase.content[14].title" required>
                    <label>Описание предмета 15</label>
                    <input type="text" class="form-control" v-model="kase.content[14].description" required>
                    <label>Картинка предмета 15</label>
                    <input type="text" class="form-control" v-model="kase.content[14].imageUrl" required>
                </div><hr>
                <div class="form-group">
                    <label>ID предмета 16</label>
                    <input type="text" class="form-control" v-model="kase.content[15].id" required>
                    <label>Название предмета 16</label>
                    <input type="text" class="form-control" v-model="kase.content[15].title" required>
                    <label>Описание предмета 16</label>
                    <input type="text" class="form-control" v-model="kase.content[15].description" required>
                    <label>Картинка предмета 16</label>
                    <input type="text" class="form-control" v-model="kase.content[15].imageUrl" required>
                </div><hr>
                <div class="form-group">
                    <label>ID предмета 17</label>
                    <input type="text" class="form-control" v-model="kase.content[16].id" required>
                    <label>Название предмета 17</label>
                    <input type="text" class="form-control" v-model="kase.content[16].title" required>
                    <label>Описание предмета 17</label>
                    <input type="text" class="form-control" v-model="kase.content[16].description" required>
                    <label>Картинка предмета 17</label>
                    <input type="text" class="form-control" v-model="kase.content[16].imageUrl" required>
                </div><hr>
                <div class="form-group">
                    <label>ID предмета 18</label>
                    <input type="text" class="form-control" v-model="kase.content[17].id" required>
                    <label>Название предмета 18</label>
                    <input type="text" class="form-control" v-model="kase.content[17].title" required>
                    <label>Описание предмета 18</label>
                    <input type="text" class="form-control" v-model="kase.content[17].description" required>
                    <label>Картинка предмета 18</label>
                    <input type="text" class="form-control" v-model="kase.content[17].imageUrl" required>
                </div><hr>
                <div class="form-group">
                    <label>ID предмета 19</label>
                    <input type="text" class="form-control" v-model="kase.content[18].id" required>
                    <label>Название предмета 19</label>
                    <input type="text" class="form-control" v-model="kase.content[18].title" required>
                    <label>Описание предмета 19</label>
                    <input type="text" class="form-control" v-model="kase.content[18].description" required>
                    <label>Картинка предмета 19</label>
                    <input type="text" class="form-control" v-model="kase.content[18].imageUrl" required>
                </div><hr>
                <div class="form-group">
                    <label>ID предмета 20</label>
                    <input type="text" class="form-control" v-model="kase.content[19].id" required>
                    <label>Название предмета 20</label>
                    <input type="text" class="form-control" v-model="kase.content[19].title" required>
                    <label>Описание предмета 20</label>
                    <input type="text" class="form-control" v-model="kase.content[19].description" required>
                    <label>Картинка предмета 20</label>
                    <input type="text" class="form-control" v-model="kase.content[19].imageUrl" required>
                </div><hr>
                <div class="form-group">
                    <label>ID предмета 21</label>
                    <input type="text" class="form-control" v-model="kase.content[20].id" required>
                    <label>Название предмета 21</label>
                    <input type="text" class="form-control" v-model="kase.content[20].title" required>
                    <label>Описание предмета 21</label>
                    <input type="text" class="form-control" v-model="kase.content[20].description" required>
                    <label>Картинка предмета 21</label>
                    <input type="text" class="form-control" v-model="kase.content[20].imageUrl" required>
                </div><hr>
                <div class="form-group">
                    <label>ID предмета 22</label>
                    <input type="text" class="form-control" v-model="kase.content[21].id" required>
                    <label>Название предмета 22</label>
                    <input type="text" class="form-control" v-model="kase.content[21].title" required>
                    <label>Описание предмета 22</label>
                    <input type="text" class="form-control" v-model="kase.content[21].description" required>
                    <label>Картинка предмета 22</label>
                    <input type="text" class="form-control" v-model="kase.content[21].imageUrl" required>
                </div><hr>
                <div class="form-group">
                    <label>ID предмета 23</label>
                    <input type="text" class="form-control" v-model="kase.content[22].id" required>
                    <label>Название предмета 23</label>
                    <input type="text" class="form-control" v-model="kase.content[22].title" required>
                    <label>Описание предмета 23</label>
                    <input type="text" class="form-control" v-model="kase.content[22].description" required>
                    <label>Картинка предмета 23</label>
                    <input type="text" class="form-control" v-model="kase.content[22].imageUrl" required>
                </div><hr>
                <div class="form-group">
                    <label>ID предмета 24</label>
                    <input type="text" class="form-control" v-model="kase.content[23].id" required>
                    <label>Название предмета 24</label>
                    <input type="text" class="form-control" v-model="kase.content[23].title" required>
                    <label>Описание предмета 24</label>
                    <input type="text" class="form-control" v-model="kase.content[23].description" required>
                    <label>Картинка предмета 24</label>
                    <input type="text" class="form-control" v-model="kase.content[23].imageUrl" required>
                </div><hr>


                <div class="form-group">
                    <button class="btn btn-warning btn-block" to="/">Добавить кейс</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { db } from '../firebaseDb';

    export default {
        data() {
            return {
                kase: {
                    content: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
                },
            }
        },
        methods: {
            onFormSubmit(event) {
                console.log(this.kase);
                event.preventDefault();
                db.collection('cases').add(this.kase).then(() => {
                    console.log(this.kase);
                    alert("case successfully created!");
                    this.kase.title = '';
                    this.kase.price = '';
                    this.kase.imageUrl = '';
                    this.kase.content.id = '';
                    this.kase.content.title = '';
                    this.kase.content.description = '';
                    this.kase.content.imageUrl = '';
                }).catch((error) => {
                    console.log(error);
                });
            },
        }
    }

</script>

<style>
    label{
        color: white;
    }
</style>