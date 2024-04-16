<script>
    import { onMount } from 'svelte';
    import { CloudLogger } from '@viovnl/cloudlogger';

    let clickHandler = () => {
        try {
            const logs = [
                { Name: 'Date', Value: '22-10-1994' },
                { Name: 'Country', Value: 'Netherlands' },
            ];
            CloudLogger.Log(logs);
        } catch (e) {
            console.log('error', e);
        }
    };
  onMount(() => {
      CloudLogger.Create('your_project_secret');
    });
</script>

<main>
    <button on:click={clickHandler}>Click to send log</button>
</main>
