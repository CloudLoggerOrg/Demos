<template>
  <button @click="clickHandler">Click to send log</button>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { CloudLogger, CloudLoggerItem } from "@viovnl/cloudlogger";

export default defineComponent({
  name: 'App',
  setup() {
    onMounted(() => {
      CloudLogger.Create('your_project_secret');
    });

    const clickHandler = (): void => {
      try {
        const logs: CloudLoggerItem[] = [
          { Name: 'Date', Value: '22-10-1994' },
          { Name: 'Country', Value: 'Netherlands' },
        ];
        CloudLogger.Log(logs);
      } catch (e) {
        console.log('error', e);
      }
    };

    return {
      clickHandler,
    };
  },
});
</script>
