<template>
    <v-dialog
        v-model="isOpen"
        persistent
        max-width="600px"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="red"
                active-class="text-accent"
                text
                v-bind="attrs"
                v-on="on"
                @click="fetchCategoryList"
            >
                Создать предложение
            </v-btn>
        </template>
        <v-card>
            <v-card-title class="headline grey lighten-2">
                Создание предложения
            </v-card-title>

            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-switch
                                @change="changeIsActive"
                                :value="isActive"
                                label="Активное"
                            ></v-switch>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-container fluid>
                                <v-textarea
                                    counter
                                    clearable
                                    label="Описание товара"
                                    :value="description"
                                    @input="value => setDescription(value)"
                                ></v-textarea>
                            </v-container>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field
                                label="Количество"
                                @input="value => setCount(value)"
                                :value="count"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-switch
                                label="Для детей"
                                @change="changeIsForChild"
                                :value="isForChild"
                            ></v-switch>
                        </v-col>
                        <v-col>
                            <v-switch
                                label="Для мужчин"
                                @change="changeIsMale"
                                :value="isMale"
                            ></v-switch>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-switch
                                label="Для женщин"
                                @change="changeIsFemale"
                                :value="isFemale"
                            ></v-switch>
                        </v-col>
                        <v-col>
                            <v-switch
                                label="Гендерно-нейтральный"
                                @change="changeIsUnisex"
                                :value="isUnisex"
                            ></v-switch>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-combobox
                                clearable
                                outlined
                                label="Выберите категорию"
                                :value="selectedCategory"
                                @change="value => selectCategory(value)"
                                :items="categoryNames"
                            ></v-combobox>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-combobox
                                clearable
                                outlined
                                label="Выберите товар"
                                @change="value => setSelectedProductId(value)"
                                :disabled="isSelectProductDisable"
                                :items="productNames"
                            ></v-combobox>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-combobox
                                clearable
                                outlined
                                label="Выберите точку аренды"
                                @change="value => setSelectedRentalPointId(value)"
                                :items="rentalPointNames"
                            ></v-combobox>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="green darken-1"
                    text
                    @click="() => createOffer(getFullObject)"
                >
                    Сохранить
                </v-btn>
                <v-btn
                    color="green darken-1"
                    text
                    @click="closeOfferDialog"
                >
                    Закрыть
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
    name: 'OfferDialog',
    data() {
        return {
            isOpen: false,
            selectedCategory: null,
        };
    },
    computed: {
        getFullObject () {
            return {
                id: this.id,
                isActive: this.isActive,
                description: this.description,
                count: this.count,
                isForChild: this.isForChild,
                isMale: this.isMale,
                isFemale: this.isFemale,
                isUnisex: this.isUnisex,
                product: this.product,
                selectedProductId: this.selectedProductId,
                selectedRentalPointId: this.selectedRentalPointId
            };
        },
        categoryNames() {
            return this.categoryList.map(item => item.name);
        },
        productNames() {
            return this.productList.map(item => item.name);
        },
        rentalPointNames() {
            return this.rentalPointList.map(item => item.address);
        },
        isSelectProductDisable() {
            return this.selectedCategoryId === null;
        },
        ...mapState('Offer', [
            'id',
            'isActive',
            'description',
            'count',
            'isForChild',
            'isMale',
            'isFemale',
            'isUnisex',
            'product',
            'selectedRentalPointId',
            'productList',
            'selectedProductId',
            'categoryList',
            'selectedCategoryId'
        ]),
        ...mapState({
            rentalPointList: state => state.user.company.rentalPoints,
        })
    },

    methods: {
        ...mapActions('Offer', [
            'changeIsActive',
            'createOffer',
            'clearOfferState',
            'setDescription',
            'setCount',
            'changeIsForChild',
            'changeIsMale',
            'changeIsFemale',
            'changeIsUnisex',
            'fetchProductsByCategoryId',
            'fetchCategoryList',
            'setSelectedCategoryId',
            'setSelectedProductId',
            'setSelectedRentalPointId'
        ]),
        closeOfferDialog: function () {
            this.$data.isOpen = false;
            this.$data.selectedCategory = null;
            this.clearOfferState();
        },
        selectCategory: function (value) {
            this.setSelectedCategoryId(value);
            this.fetchProductsByCategoryId(this.selectedCategoryId);
        },
        test: function (q) {
            console.log(q);
        }
    }
};
</script>