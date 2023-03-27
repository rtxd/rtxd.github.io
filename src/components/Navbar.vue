<template>
    <div>
        <v-app-bar :elevation="2" color="yellow-lighten-1">
            <template v-slot:prepend>
                <v-app-bar-nav-icon>
                    <img
                        src="/src/assets/avatar.ico"
                        alt="avatar"
                        width="46"
                        height="46"
                    />
                </v-app-bar-nav-icon>
            </template>
            <v-app-bar-title>Alejandro's Portfolio</v-app-bar-title>
        </v-app-bar>
    </div>
</template>

<script>
import { VAppBarNavIcon, VAppBarTitle } from 'vuetify/components'
export default {
    components: {
        VAppBarNavIcon,
        VAppBarTitle,
    },
}
</script>

<style></style>
