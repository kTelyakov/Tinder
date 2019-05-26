<template>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              {{ obj.name }}
              <span class="ui label ">{{ obj.age }}</span>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <p>{{ obj.job }}</p>
              <p>{{ obj.bio }}</p>
            </slot>
          </div>

          <div class="ui button w50p flex -middle -center red text-center" @click="close()">Не согласиться</div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name: 'Modal',
    data() {
        return {
            slider: [
                {
                    link: 'https://images-ssl.gotinder.com/5ca4c8f1e9a26316002be8be/1080x1350_e03a9f1f-6963-4fd6-88bf-5e3c05911eed.jpg'
                },
                {
                    link: 'https://images-ssl.gotinder.com/5ca4c8f1e9a26316002be8be/1080x1350_e03a9f1f-6963-4fd6-88bf-5e3c05911eed.jpg'
                },
                {
                    link: 'https://images-ssl.gotinder.com/5ca4c8f1e9a26316002be8be/1080x1350_e03a9f1f-6963-4fd6-88bf-5e3c05911eed.jpg'
                }
            ]
        }
    },
    props: {
        obj: {
          type: Object
        }
    },
    methods: {
      close() {
        this.$emit('closeModal');
      }
    }
}
</script>
<style lang="css">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
