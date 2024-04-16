<template>
  <button @click="clickHandler">Click to send log</button>
</template>

<script>
import { onMounted } from 'vue';
import { CloudLogger } from '@viovnl/cloudlogger';

export default {
  name: 'App',
  setup() {
    const clickHandler = () => {
      try {
        CloudLogger.Log([
          { Name: 'Date', Value: '22-10-1994' },
          { Name: 'Country', Value: 'Netherlands' },
        ]);
      } catch (e) {
        console.log('error', e);
      }
    };

    onMounted(() => {
      CloudLogger.Create('your_project_secret');
    });

    return {
      clickHandler,
    };
  },
};
</script>
