<template>
    <v-app id="inspire">



        <v-navigation-drawer
                :clipped="$vuetify.breakpoint.lgAndUp"
                v-model="drawer"
                fixed
                app
        >
            <v-list class="teal darken-2" dark>
                <template v-for="(item, index) in items">
                    <v-subheader v-if="item.header" :key="index" class="text--lighten-4">{{ $t("message.filter") }}</v-subheader>
                    <v-list-tile v-else-if="item.listtile" :key="item.title" @click="">
                        <v-list-tile-action>
                            <!--:label="`${item.switch.toString()}`"-->
                            <v-switch
                                    v-model="item.switch"
                                    color="warning"
                            ></v-switch>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>
        </v-navigation-drawer>



        <v-toolbar
                :clipped-left="$vuetify.breakpoint.lgAndUp"
                color="teal darken-3"
                dark
                app
                fixed
        >
            <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <span class="hidden-sm-and-down">{{ $t("message.hello") }}</span>
            </v-toolbar-title>
            <v-text-field
                    flat
                    solo-inverted
                    hide-details
                    prepend-inner-icon="search"
                    v-bind:label="$t('message.search')"
                    class="hidden-sm-and-down"
            ></v-text-field>
            <v-spacer></v-spacer>

            <!--    <v-btn icon>
                  <v-icon>apps</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>notifications</v-icon>
                </v-btn>-->

            <div class="text-xs-center">
                <v-menu offset-y>
                    <v-btn
                            outline
                            slot="activator"
                            color="warning"
                            dark
                    >
                        {{ $t("message.lang") }}
                    </v-btn>
                    <v-list>
                        <v-list-tile
                                v-for="(item, index) in menuItems"
                                :key="index"
                                :href="'/'+item.locale"
                                @click="buttonClick(item)"
                        >
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </div>

        </v-toolbar>
        <v-content>
            <v-container fluid fill-height>
                <v-layout row>


                    <masonry
                            :cols="{default: 4, 1000: 3, 700: 2, 400: 1}"
                            :gutter="{default: '20px', 700: '10px'}"
                    >

                        <v-hover
                                v-for="(item, index) in cards"
                                :key="index"
                        >
                            <v-card
                                    slot-scope="{ hover }"
                                    :class="`elevation-${hover ? 12 : 2}`"
                                    class="mx-auto"
                                    width="295"
                            >
                                <v-img
                                        src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                                        aspect-ratio="2.75"
                                ></v-img>

                                <v-card-title  v-if="item.cardtitle" :key="index" primary-title>
                                    <div>
                                        <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                                        <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                                    </div>
                                </v-card-title>

                                <v-card-actions>
                                    <v-btn outline color="teal">Outline Button</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-hover>

                    </masonry>


                </v-layout>
            </v-container>
        </v-content>
        <v-btn
                fab
                bottom
                right
                color="success"
                large
                dark
                fixed
                @click="dialog = !dialog"
        >
            <v-icon>add</v-icon>
        </v-btn>
        <v-dialog v-model="dialog" width="800px">
            <v-card>
                <v-card-title
                        class="grey lighten-4 py-4 title"
                >
                    {{ $t("message.addcontact") }}
                </v-card-title>
                <v-container grid-list-sm class="pa-4">
                    <v-layout row wrap>
                        <v-flex xs12 align-center justify-space-between>
                            <v-layout align-center>
                                <v-avatar size="40px" class="mr-3">
                                    <img
                                            src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                                            alt=""
                                    >
                                </v-avatar>
                                <v-text-field
                                        v-bind:placeholder="$t('message.name')"
                                ></v-text-field>
                            </v-layout>
                        </v-flex>
                        <v-flex xs6>
                            <v-text-field
                                    prepend-icon="business"
                                    v-bind:placeholder="$t('message.company')"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs6>
                            <v-text-field
                                    v-bind:placeholder="$t('message.jobtitle')"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field
                                    prepend-icon="mail"
                                    v-bind:placeholder="$t('message.email')"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field
                                    type="tel"
                                    prepend-icon="phone"
                                    placeholder="(000) 000 - 0000"
                                    mask="phone"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field
                                    prepend-icon="notes"
                                    v-bind:placeholder="$t('message.notes')"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
                <v-card-actions>
                    <v-btn flat color="primary">{{ $t("message.agreement") }}</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="dialog = false">{{ $t("message.cancel") }}</v-btn>
                    <v-btn flat @click="dialog = false">{{ $t("message.save") }}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-app>
</template>

<script>
    // импортируем библиотеку tiny-cookie
    import { setCookie } from 'tiny-cookie'

    // назначаем хранение в месяц
    const month = new Date
    month.setMonth(month.getMonth() + 1)

    export default {

        data: function() {
            return {

                dialog: false,
                drawer: null,
                menuItems: [
                    { locale: 'ru', title: 'Русский' },
                    { locale: 'en', title: 'English' },
                    { locale: 'ko', title: '한국어' }
                ],

                items: [
                    { header: true },
                    {
                        listtile: true,
                        switch: 'extracts',
                        title: this.$t("message.extracts")
                    },
                    {
                        listtile: true,
                        switch: 'supplements',
                        title: this.$t("message.supplements")
                    },
                    {
                        listtile: true,
                        switch: 'phytoproducts',
                        title: this.$t("message.phytoproducts")
                    },
                    {
                        listtile: true,
                        switch: 'pantoprodukts',
                        title: this.$t("message.pantoprodukts")
                    },
                    {
                        listtile: true,
                        switch: 'minerals',
                        title: this.$t("message.minerals")
                    },
                    {
                        listtile: true,
                        switch: 'oils',
                        title: this.$t("message.oils")
                    }
                ],
                cards: [
                    {
                        cardtitle: true,
                    },
                    {
                        cardtitle: true,
                    },
                    {
                        cardtitle: true,
                    },
                    {
                        cardtitle: true,
                    },
                ],
                show: true
            }
        },
        methods:{
            buttonClick(item) {
                // пишем локаль в кукисы
                const flag = true
                setCookie('flag', flag)
                setCookie('language', item.locale, { expires: month })
            }
        },
        props: {
            source: String
        }
    }

    // console.log()
</script>

<style lang="stylus">
    @import './assets/style/index'
</style>
