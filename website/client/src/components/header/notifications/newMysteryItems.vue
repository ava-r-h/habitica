<template>
  <base-notification
    :can-remove="canRemove"
    :has-icon="true"
    :notification="notification"
    :read-after-click="true"
    @click="action"
  >
    <div
      slot="content"
      v-html="$t('newSubscriberItem')"
    ></div>
    <div
      slot="icon"
      :class="mysteryClass"
    ></div>
  </base-notification>
</template>

<script>
import dayjs from 'dayjs';
import BaseNotification from './base';

export default {
  components: {
    BaseNotification,
  },
  props: ['notification', 'canRemove'],
  computed: {
    mysteryClass () {
      return `notif_inventory_present_${dayjs().format('MM')}`;
    },
  },
  methods: {
    action () {
      this.$router.push({ name: 'items' });
    },
  },
};
</script>
