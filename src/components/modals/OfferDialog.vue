<template>
    <div>
        <v-dialog
            v-model="dialogEditOffer"
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
                <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
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

                        <v-textarea
                            clearable
                            outlined
                            label="Описание товара"
                            :value="description"
                            @input="value => setDescription(value)"
                        ></v-textarea>

                        <v-row>
                            <v-col>
                                <v-text-field
                                    outlined
                                    label="Количество"
                                    @input="value => updateCount(value)"
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
                                    class="mt-0"
                                ></v-switch>
                            </v-col>
                            <v-col>
                                <v-switch
                                    label="Для мужчин"
                                    @change="changeIsMale"
                                    :value="isMale"
                                    class="mt-0"
                                ></v-switch>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-switch
                                    label="Для женщин"
                                    @change="changeIsFemale"
                                    :value="isFemale"
                                    class="mt-0"
                                ></v-switch>
                            </v-col>
                            <v-col>
                                <v-switch
                                    label="Гендерно-нейтральный"
                                    @change="changeIsUnisex"
                                    :value="isUnisex"
                                    class="mt-0"
                                ></v-switch>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="closeOfferDialog"
                    >
                        Закрыть
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="save"
                    >
                        Сохранить
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
    name: 'OfferDialog',

    props: {
        rentalId: {
            type: Number,
            required: true,
        }
    },

    data() {
        return {
            selectedCategory: null,
            editedIndex: -1,
            defaultItem: {},
        };
    },

    computed: {
        getFullObject() {
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
        isSelectProductDisable() {
            return this.selectedCategoryId === null;
        },
        formTitle() {
            return this.editedIndex === -1
                ? 'Добавление предложения'
                : 'Редактирование предложения';
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
        dialogEditOffer: {
            get: function () {
                return this.$store.state.dialogEditOffer;
            },
            set: function (value) {
                this.$store.commit('setDialogEditOffer', value);
            }
        }
    },

    methods: {
        ...mapActions('Offer', [
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
            this.dialogEditOffer = false;
            this.selectedCategory = null;
            this.clearOfferState();
        },
        selectCategory: function (value) {
            this.setSelectedCategoryId(value);
            this.fetchProductsByCategoryId(this.selectedCategoryId);
        },
        updateCount: function (value) {
            const regex = /^[0-9]+$/;
            if (value.match(regex)) {
                this.setCount(value);
            }
        },
        close() {
            this.dialogEditOffer = false;
            this.editedItem = Object.assign({}, this.defaultItem);
            this.$nextTick(() => {
                this.editedIndex = -1;
                this.resetValidation();
            });
        },
        async save() {
            this.setSelectedRentalPointId(this.rentalId);
            await this.createOffer(this.getFullObject);
            this.$store.commit('setDialogEditOffer', false);
            this.closeOfferDialog();
            location.reload();
        }
    },
    created() {
        this.setSelectedRentalPointId(this.rentalId);
    }
};
</script>
