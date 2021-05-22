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
            >
                {{ openButtonText }}
            </v-btn>
        </template>
        <v-card>
            <v-card-title class="headline grey lighten-2">
                {{ title }}
            </v-card-title>

            <slot></slot>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="green darken-1"
                    text
                    @click="accept"
                >
                    {{ declineButtonName }}
                </v-btn>
                <v-btn
                    color="green darken-1"
                    text
                    @click="close"
                >
                    {{ acceptButtonName }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'BaseModal',
    props: {
        title: {
            default: null
        },
        text: {
            default: null
        },
        openButtonText: {
            default: null
        },
        acceptButtonName: {
            default: 'Accept'
        },
        declineButtonName: {
            default: 'Decline'
        }
    },
    data: function () {
        return {
            isOpen: false
        };
    },
    methods: {
        close() {
            this.isOpen = false;
            return false;
        },
        accept() {
            this.isOpen = false;
            return true;
        }
    }
};
</script>
