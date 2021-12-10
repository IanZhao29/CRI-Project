<template>
  <div class="text-center">
    <v-dialog
        v-model="dialog"
        width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="grey"
            dark
            v-bind="attrs"
            v-on="on"
        >
          Register
        </v-btn>
      </template>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step
              :complete="e1 > 1"
              step="1"
          >
            User Name
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step
              :complete="e1 > 2"
              step="2"
          >
            Password
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3">
            Good Job!
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
              <div style="height: 100px">
                <span>UserName:</span>
                <v-text-field
                    v-model="registerForm.username"
                    label="UserName"
                    placeholder="Placeholder"
                    :rules="[rules.required, rules.min]"
                    name="input-10-1"
                    hint="At least 6 characters"
                    counter
                ></v-text-field>
              </div>
            <v-btn
                color="primary"
                @click="e1 = 2"
            >
              Continue
            </v-btn>

            <v-btn text @click="dialog = false">
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <div style="height: 100px">
              <span>Password:</span>
              <v-text-field
                  v-model="registerForm.password"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show ? 'text' : 'password'"
                  name="input-10-1"
                  label="Please input your password!"
                  hint="At least 6 characters"
                  counter
                  @click:append="show = !show"
              ></v-text-field>
            </div>
            <v-btn
                color="primary"
                @click="e1 = 3"
            >
              Continue
            </v-btn>

            <v-btn text @click="e1 = 1">
              Last Step
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <span>Please Recheck your UserName and Password</span>
            <v-text-field
                :value="registerForm.username"
                label="UserName"
                readonly
                counter
            ></v-text-field>
            <v-text-field
                :value="registerForm.password"
                label="Password"
                readonly
                counter
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show2 ? 'text' : 'password'"
                @click:append="show2 = !show2"
            ></v-text-field>
            <v-btn
                color="primary"
                @click="handleSubmit"
            >
              Submit!
            </v-btn>

            <v-btn text @click="e1 = 2">
              Last Step
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-dialog>
  </div>
</template>

<script>
import {registerAPI} from "../api/loginAPI";

export default {
  name: "Register",
  data() {
    return {
      dialog: false,
      e1: 1,
      show: false,
      show2: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 6 || 'Min 6 characters',
      },
      registerForm: {
        username: "",
        password: "",
      },
    }
  },
  methods: {
    handleSubmit() {

      registerAPI(this.registerForm).then(res => {
        this.dialog = false;
        this.e1 = 1;
        console.log(res);
        this.$store.dispatch("message/openSnackbar", {
          msg: "Register Success!",
          color: "success"
        })
      }).catch(err => {
        console.log(err);
        this.$store.dispatch("message/openSnackbar", {
          msg: err,
          color: "error"
        })
      })
    }
  }
}
</script>

<style scoped>

</style>