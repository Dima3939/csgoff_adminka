<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center" style="color: black">Редактировать кейс</h3>
            <form @submit.prevent="onUpdateForm">
                <div class="form-group">
                    <label>Название кейса</label>
                    <input type="text" class="form-control" v-model="user.title" required>
                </div>

                <div class="form-group">
                    <label>Цена</label>
                    <input type="number" class="form-control" v-model="user.price" required>
                </div>

                <div class="form-group">
                    <label>Картинка</label>
                    <input type="text" class="form-control" v-model="user.imageUrl" required>
                </div>
                <p style="font-size: 12px">В связи с техническими сложностями количество предметов в кейсах ограничено 24мя предметами</p>
                <label>Предметы :</label><hr>

                <div class="form-group">

                    <label>Название предмета 1</label>
                    <input type="text" class="form-control" v-model="user.content[0].title" required>
                    <label>Описание предмета 1</label>
                    <input type="text" class="form-control" v-model="user.content[0].description" required>
                    <label>Картинка предмета 1</label>
                    <input type="text" class="form-control" v-model="user.content[0].imageUrl" required>
                </div><hr>
                <div class="form-group">

                    <label>Название предмета 2</label>
                    <input type="text" class="form-control" v-model="user.content[1].title" required>
                    <label>Описание предмета 2</label>
                    <input type="text" class="form-control" v-model="user.content[1].description" required>
                    <label>Картинка предмета 2</label>
                    <input type="text" class="form-control" v-model="user.content[1].imageUrl" required>
                </div><hr>
                <div class="form-group">

                    <label>Название предмета 3</label>
                    <input type="text" class="form-control" v-model="user.content[2].title" required>
                    <label>Описание предмета 3</label>
                    <input type="text" class="form-control" v-model="user.content[2].description" required>
                    <label>Картинка предмета 3</label>
                    <input type="text" class="form-control" v-model="user.content[2].imageUrl" required>
                </div><hr>
                <div class="form-group">

                    <label>Название предмета 4</label>
                    <input type="text" class="form-control" v-model="user.content[3].title" required>
                    <label>Описание предмета 4</label>
                    <input type="text" class="form-control" v-model="user.content[3].description" required>
                    <label>Картинка предмета 4</label>
                    <input type="text" class="form-control" v-model="user.content[3].imageUrl" required>
                </div><hr>
                <div class="form-group">

                    <label>Название предмета 5</label>
                    <input type="text" class="form-control" v-model="user.content[4].title" required>
                    <label>Описание предмета 5</label>
                    <input type="text" class="form-control" v-model="user.content[4].description" required>
                    <label>Картинка предмета 5</label>
                    <input type="text" class="form-control" v-model="user.content[4].imageUrl" required>
                </div><hr>
                <div class="form-group">

                    <label>Название предмета 6</label>
                    <input type="text" class="form-control" v-model="user.content[5].title" required>
                    <label>Описание предмета 6</label>
                    <input type="text" class="form-control" v-model="user.content[5].description" required>
                    <label>Картинка предмета 6</label>
                    <input type="text" class="form-control" v-model="user.content[5].imageUrl" required>
                </div><hr>
                <div class="form-group">

                    <label>Название предмета 7</label>
                    <input type="text" class="form-control" v-model="user.content[6].title" required>
                    <label>Описание предмета 7</label>
                    <input type="text" class="form-control" v-model="user.content[6].description" required>
                    <label>Картинка предмета 7</label>
                    <input type="text" class="form-control" v-model="user.content[6].imageUrl" required>
                </div><hr>
                <div class="form-group">

                    <label>Название предмета 8</label>
                    <input type="text" class="form-control" v-model="user.content[7].title" required>
                    <label>Описание предмета 8</label>
                    <input type="text" class="form-control" v-model="user.content[7].description" required>
                    <label>Картинка предмета 8</label>
                    <input type="text" class="form-control" v-model="user.content[7].imageUrl" required>
                </div><hr>
                <div class="form-group">

                    <label>Название предмета 9</label>
                    <input type="text" class="form-control" v-model="user.content[8].title" required>
                    <label>Описание предмета 9</label>
                    <input type="text" class="form-control" v-model="user.content[8].description" required>
                    <label>Картинка предмета 9</label>
                    <input type="text" class="form-control" v-model="user.content[8].imageUrl" required>
                </div><hr>
                <div class="form-group">

                    <label>Название предмета 10</label>
                    <input type="text" class="form-control" v-model="user.content[9].title" required>
                    <label>Описание предмета 10</label>
                    <input type="text" class="form-control" v-model="user.content[9].description" required>
                    <label>Картинка предмета 10</label>
                    <input type="text" class="form-control" v-model="user.content[9].imageUrl" required>
                </div><hr>
                <div class="form-group">

                    <label>Название предмета 11</label>
                    <input type="text" class="form-control" v-model="user.content[10].title" required>
                    <label>Описание предмета 11</label>
                    <input type="text" class="form-control" v-model="user.content[10].description" required>
                    <label>Картинка предмета 11</label>
                    <input type="text" class="form-control" v-model="user.content[10].imageUrl" required>
                </div><hr>
                <div class="form-group">

                    <label>Название предмета 12</label>
                    <input type="text" class="form-control" v-model="user.content[11].title" required>
                    <label>Описание предмета 12</label>
                    <input type="text" class="form-control" v-model="user.content[11].description" required>
                    <label>Картинка предмета 12</label>
                    <input type="text" class="form-control" v-model="user.content[11].imageUrl" required>
                </div><hr>
                <div class="form-group">

                    <label>Название предмета 13</label>
                    <input type="text" class="form-control" v-model="user.content[12].title" required>
                    <label>Описание предмета 13</label>
                    <input type="text" class="form-control" v-model="user.content[12].description" required>
                    <label>Картинка предмета 13</label>
                    <input type="text" class="form-control" v-model="user.content[12].imageUrl" required>
                </div><hr>
                <div class="form-group">

                    <label>Название предмета 14</label>
                    <input type="text" class="form-control" v-model="user.content[13].title" required>
                    <label>Описание предмета 14</label>
                    <input type="text" class="form-control" v-model="user.content[13].description" required>
                    <label>Картинка предмета 14</label>
                    <input type="text" class="form-control" v-model="user.content[13].imageUrl" required>
                </div><hr>
                <div class="form-group">

                    <label>Название предмета 15</label>
                    <input type="text" class="form-control" v-model="user.content[14].title" required>
                    <label>Описание предмета 15</label>
                    <input type="text" class="form-control" v-model="user.content[14].description" required>
                    <label>Картинка предмета 15</label>
                    <input type="text" class="form-control" v-model="user.content[14].imageUrl" required>
                </div><hr>
                <div class="form-group">

                    <label>Название предмета 16</label>
                    <input type="text" class="form-control" v-model="user.content[15].title" required>
                    <label>Описание предмета 16</label>
                    <input type="text" class="form-control" v-model="user.content[15].description" required>
                    <label>Картинка предмета 16</label>
                    <input type="text" class="form-control" v-model="user.content[15].imageUrl" required>
                </div><hr>
                <div class="form-group">

                    <label>Название предмета 17</label>
                    <input type="text" class="form-control" v-model="user.content[16].title" required>
                    <label>Описание предмета 17</label>
                    <input type="text" class="form-control" v-model="user.content[16].description" required>
                    <label>Картинка предмета 17</label>
                    <input type="text" class="form-control" v-model="user.content[16].imageUrl" required>
                </div><hr>
                <div class="form-group">

                    <label>Название предмета 18</label>
                    <input type="text" class="form-control" v-model="user.content[17].title" required>
                    <label>Описание предмета 18</label>
                    <input type="text" class="form-control" v-model="user.content[17].description" required>
                    <label>Картинка предмета 18</label>
                    <input type="text" class="form-control" v-model="user.content[17].imageUrl" required>
                </div><hr>
                <div class="form-group">

                    <label>Название предмета 19</label>
                    <input type="text" class="form-control" v-model="user.content[18].title" required>
                    <label>Описание предмета 19</label>
                    <input type="text" class="form-control" v-model="user.content[18].description" required>
                    <label>Картинка предмета 19</label>
                    <input type="text" class="form-control" v-model="user.content[18].imageUrl" required>
                </div><hr>
                <div class="form-group">

                    <label>Название предмета 20</label>
                    <input type="text" class="form-control" v-model="user.content[19].title" required>
                    <label>Описание предмета 20</label>
                    <input type="text" class="form-control" v-model="user.content[19].description" required>
                    <label>Картинка предмета 20</label>
                    <input type="text" class="form-control" v-model="user.content[19].imageUrl" required>
                </div><hr>
                <div class="form-group">

                    <label>Название предмета 21</label>
                    <input type="text" class="form-control" v-model="user.content[20].title" required>
                    <label>Описание предмета 21</label>
                    <input type="text" class="form-control" v-model="user.content[20].description" required>
                    <label>Картинка предмета 21</label>
                    <input type="text" class="form-control" v-model="user.content[20].imageUrl" required>
                </div><hr>
                <div class="form-group">

                    <label>Название предмета 22</label>
                    <input type="text" class="form-control" v-model="user.content[21].title" required>
                    <label>Описание предмета 22</label>
                    <input type="text" class="form-control" v-model="user.content[21].description" required>
                    <label>Картинка предмета 22</label>
                    <input type="text" class="form-control" v-model="user.content[21].imageUrl" required>
                </div><hr>
                <div class="form-group">

                    <label>Название предмета 23</label>
                    <input type="text" class="form-control" v-model="user.content[22].title" required>
                    <label>Описание предмета 23</label>
                    <input type="text" class="form-control" v-model="user.content[22].description" required>
                    <label>Картинка предмета 23</label>
                    <input type="text" class="form-control" v-model="user.content[22].imageUrl" required>
                </div><hr>
                <div class="form-group">

                    <label>Название предмета 24</label>
                    <input type="text" class="form-control" v-model="user.content[23].title" required>
                    <label>Описание предмета 24</label>
                    <input type="text" class="form-control" v-model="user.content[23].description" required>
                    <label>Картинка предмета 24</label>
                    <input type="text" class="form-control" v-model="user.content[23].imageUrl" required>
                </div><hr>


                <div class="form-group">
                    <button class="btn btn-warning btn-block">Сохранить кейс</button>
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
                user: {
                    content: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
                }
            }
        },
        created() {
            let dbRef = db.collection('cases').doc(this.$route.params.id);
            dbRef.get().then((doc) => {
                this.user = doc.data();
            }).catch((error) => {
                console.log(error)
            })
        },
        methods: {
            onUpdateForm(event) {
                event.preventDefault()
                db.collection('cases').doc(this.$route.params.id)
                    .update(this.user).then(() => {
                    console.log("Case successfully updated!");
                    this.$router.push('/')
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>