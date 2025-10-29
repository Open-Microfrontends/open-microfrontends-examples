<script lang='ts' setup>
  import { onMounted, onServerPrefetch } from 'vue';
  import state from './state';
  import getCustomer from './server/getCustomer';

  const props = defineProps<{
    customerId: string;
    bffPath?: string;
  }>();

  onServerPrefetch(async () => {
    state.customer = await getCustomer(props.customerId);
  });

  const loadCustomer = async () => {
    try {
      const response = await fetch(`${props.bffPath}/customers/${props.customerId}`);
      state.customer = await response.json();
    } catch (e) {
      console.error('Loading customer failed!', e);
    }
  }

  const reloadCustomer = async () => {
    state.customer = null;
    await loadCustomer();
  }

  onMounted(async () => {
    if (props.bffPath && state.customer == null) {
      // Only if the customer data has not been prefetched on the server side
      await loadCustomer();
    }
  });
</script>

<template>
  <div class='OpenMicrofrontendsExampleSSR'>
    <h3>SSR Render Microfrontend</h3>

    <div class='Customer'>
        <h3>Customer #{{props.customerId}}</h3>
        <div v-if='!state.customer'>
          Loading...
        </div>
        <div v-if='state.customer'>
          <table>
            <tbody>
              <tr>
                <th>Last Name</th>
                <td>{{state.customer.lastName}}</td>
              </tr>
              <tr>
                <th>First Name</th>
                <td>{{state.customer.firstName}}</td>
              </tr>
            </tbody>
          </table>
          <div class='ReloadButton'>
            <button @click='reloadCustomer'>Reload Customer</button>
          </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss">
  .OpenMicrofrontendsExampleSSR {
    margin: 20px;

    .Customer th {
      text-align: left;
      padding: 2px 5px 2px 0;
    }

    .ReloadButton {
      margin-top: 10px;
    }
  }
</style>
