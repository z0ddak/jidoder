<template>
    <v-app id="inspire">
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

</script>

<style lang="stylus">
    @import '../assets/style/index'
</style>
