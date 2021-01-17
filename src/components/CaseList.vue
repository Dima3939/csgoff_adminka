<template>
    <div class="row">
        <div class="col-lg-12">
            <table class="table table-striped">
                <thead>
                <tr style="color: black;">
                    <th>Название кейса</th>
                    <th>Цена</th>
                    <th>Картинка</th>
                    <th>Редактировать/Удалить</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="kase in Cases" :key="kase.key">
                    <td style="color: white;">{{ kase.title }}</td>
                    <td style="color: white;">{{ kase.price }} RUB</td>
                    <td style="color: white;font-size: 10px">{{ kase.imageUrl }}</td>
                    <td>
                        <router-link :to="{name: 'edit', params: { id: kase.key }}" class="btn btn-primary">Редактировать
                        </router-link>
                        <button @click.prevent="deleteCase(kase.key)" class="btn btn-danger">Удалить</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import { db } from '../firebaseDb';

    export default {
        data() {
            return {
                Cases: []
            }
        },
        created() {
            db.collection('cases').onSnapshot((snapshotChange) => {
                this.Cases = [];
                snapshotChange.forEach((doc) => {
                    this.Cases.push({
                        key: doc.id,
                        title: doc.data().title,
                        price: doc.data().price,
                        imageUrl: doc.data().imageUrl
                    })
                });
            })
        },
        methods: {
            deleteCase(id){
                if (window.confirm("Do you really want to delete?")) {
                    db.collection("cases").doc(id).delete().then(() => {
                        console.log("Document deleted!");
                    })
                        .catch((error) => {
                            console.error(error);
                        })
                }
            }
        }
    }
</script>

<style>
    .row{
        min-height: calc(100vh - 80px);
    }
    .btn-primary {
        margin-right: 12px;
    }
</style>